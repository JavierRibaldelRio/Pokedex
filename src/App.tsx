// React 
import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Css style sheets
import './style/App.css';

// Routes
import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

// Mui Theme
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/mainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>

        <main>
          <Routes>

            <Route path='/' element={<Main />} />

            {/* Pokemon Routes */}

            <Route path='/pokemon/:id' element={<Pokemon />} />

          </Routes>
        </main>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;
