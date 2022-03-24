import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontStyles} from './assets/fonts/fonts';

ReactDOM.render(
  <React.StrictMode>
    <FontStyles/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

