import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar'
import AuthContextProvider from './contexts/AuthContext';
import AdminContextProvider from './contexts/AdminContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const MyRoutes = () => {
    return (
        <AdminContextProvider>
        <AuthContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element = {<AdminPage/> }/>
                <Route path="/add" element = {<AddPage/>} />
                <Route path="/admin/edit/:id" element = {<EditPage />} />
                
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
        </AuthContextProvider>
        </AdminContextProvider>
    ); 
};

export default MyRoutes;