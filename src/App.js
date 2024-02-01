import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material/';
import theme from './theme';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Box sx={{ margin: '0 4rem' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
