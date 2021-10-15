import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/normalize.css"
import App from './App';


ReactDOM.render(
  // permet d'avoir accès à l'historique du navigateur
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

