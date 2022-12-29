import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BooksContextProvider } from './context/BookContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);