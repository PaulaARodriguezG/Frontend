import React from 'react';
import ReactDOM from 'react-dom/client';  // Asegúrate de importar 'react-dom/client'
import App from './App';
import './assets/css/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crear la raíz de la aplicación

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);