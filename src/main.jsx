import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// For performance measuring, you can pass a function to reportWebVitals
// For example: reportWebVitals(console.log)
// reportWebVitals();
