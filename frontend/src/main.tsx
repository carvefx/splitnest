import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300';
import '@fontsource/roboto/400';
import '@fontsource/roboto/500';
import '@fontsource/roboto/700';

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <CssBaseline enableColorScheme />
        <App/>
    </React.StrictMode>
)
