import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import config from './config';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '@fontsource/roboto/300';
import '@fontsource/roboto/400';
import '@fontsource/roboto/500';
import '@fontsource/roboto/700';


const container = document.getElementById('root')

const root = createRoot(container!)

console.log(config);
console.log(import.meta.env);

root.render(
    <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
    <React.StrictMode>
        <CssBaseline enableColorScheme />
        <App/>
    </React.StrictMode>
    </GoogleOAuthProvider>
)
