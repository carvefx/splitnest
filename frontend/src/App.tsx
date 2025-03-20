import {useState} from 'react';
// import logo from './assets/images/logo-universal.png';
import {Greet} from "../wailsjs/go/main/App";
import { Button, TextField, Box, Typography } from '@mui/material';
import ResponsiveAppBar from './modules/layout/MenuBar';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <Box>
            <ResponsiveAppBar />
            
            <Box margin="24px">
                <Typography component="h2" variant="h2">Hello from React!</Typography>
                <div id="result" className="result">{resultText}</div>
                <div id="input" className="input-box">
                    <TextField id="standard-basic" label="Standard" variant="standard" onChange={updateName} autoComplete="off"/>
                    <Button id="greet" variant="contained" onClick={greet}>Greet</Button>
                </div>
            </Box>
        </Box>
    )
}

export default App
