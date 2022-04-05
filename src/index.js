import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/mdbreact/dist/css/mdb.css"
import "../node_modules/bootstrap-css-only/css/bootstrap.min.css";
import bootstrap from "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
