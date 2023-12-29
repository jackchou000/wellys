import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ConditionalRendering from './login';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>4. if isLoggedIn = true</h1>
    <ConditionalRendering isLoggedIn={true} />
    <h1>4. if isLoggedIn = false</h1>
    <ConditionalRendering isLoggedIn={false} />
    <h1>5.計數器組件</h1>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
