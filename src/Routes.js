import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element = {<AdminPage/> }/>
                <Route path="/add" element = {<AddPage/>} />
            </Routes>
        </BrowserRouter>
    ); 
};

export default MyRoutes;