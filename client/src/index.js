import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios"

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.interceptors.request.use(request => {

  // Modify the request config
  const modifiedRequest = {
    ...request,
    headers: {
      ...request.headers,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    url: 'http://localhost:7000' + request.url,
  };

  return modifiedRequest;
}, error => {
  // Handle request errors
  return Promise.reject(error);
});
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ocrw vhif bixj xdqt ggggggggggpin
