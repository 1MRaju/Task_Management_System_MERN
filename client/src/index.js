import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IdProvider } from './contexts/IdContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IdProvider>
     <App />
    </IdProvider>
  </React.StrictMode>
);

