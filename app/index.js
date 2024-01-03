import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

//wrapping app in react router
const root = createRoot(document.getElementById('app'));
root.render(
  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>
  <App />
);
