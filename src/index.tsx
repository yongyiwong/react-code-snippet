import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyles } from 'twin.macro';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
