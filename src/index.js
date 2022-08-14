import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';
import { ContextProvider } from './Components/Context/GlobalContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter>
      <ContextProvider>
    <App />
    </ContextProvider>
    </HashRouter>
  </React.StrictMode>
);

