import React from 'react';
import { createRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { DataProvider } from './contexts/DataContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialise Vercel Analytics (no-op in non-Vercel environments)
inject();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
