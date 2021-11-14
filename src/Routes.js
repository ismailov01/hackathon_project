import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar'
import AuthContextProvider from './contexts/AuthContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

const MyRoutes = () => {
    return (
        <AuthContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element = {<AdminPage/> }/>
                <Route path="/add" element = {<AddPage/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </AuthContextProvider>
    ); 
};

export default MyRoutes;