import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS file
import App from './App'
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Store} from './store/Store';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={Store}>
    <App />
  </Provider>
  </BrowserRouter>
  
  
)

  

