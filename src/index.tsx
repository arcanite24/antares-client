/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { antaresConfig } from './antares.config';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase setup
// TODO: Consider moving this to a separate file
export const firebaseApp = initializeApp(antaresConfig.firebaseConfig as any); // TODO: Fix type
export const firebaseAuth = getAuth(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
