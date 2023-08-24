import React from 'react';
import logo from './logo.svg';
import './App.css';

// Routes
import Main from './pages/Main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <main>
        <Routes>

          <Route path='/' element={<Main />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
