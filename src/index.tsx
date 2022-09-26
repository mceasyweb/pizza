import { MuiThemeProvaider } from 'mui-theme-provaider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MuiThemeProvaider darkTheme={darkTheme} lightTheme={lightTheme}>
      <App />
    </MuiThemeProvaider>
  </React.StrictMode>
);
