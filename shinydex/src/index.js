import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import background from './components/styles/pokebackground.png';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    font-family: 'Aldrich', sans-serif;
    font-family: 'Jura', sans-serif;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
