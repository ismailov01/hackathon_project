import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import AdminContextProvider from './contexts/AdminContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const MyRoutes = () => {
    return (
        <AdminContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element = {<AdminPage/> }/>
                <Route path="/add" element = {<AddPage/>} />
                <Route path="/admin/edit/:id" element = {<EditPage />} />
                
            </Routes>
        </BrowserRouter>
        </AdminContextProvider>
    ); 
};

export default MyRoutes;