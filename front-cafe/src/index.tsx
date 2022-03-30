import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontStyles} from './assets/fonts/fonts';
import GlobalCSS from './assets/styles/Global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS/>
    <FontStyles/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

