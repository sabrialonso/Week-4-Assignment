require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  
  <React.StrictMode>
   <BrowserRouter> <Provider store={store}><App /></Provider></BrowserRouter>
  </React.StrictMode>
);
