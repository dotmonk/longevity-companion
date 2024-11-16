import React from 'react';
import {createRoot} from "react-dom/client"
import App from './App';
import "bootswatch/dist/slate/bootstrap.min.css";
import "./index.css";

createRoot(
    document.getElementById('root')!
).render(
    <App />
);
