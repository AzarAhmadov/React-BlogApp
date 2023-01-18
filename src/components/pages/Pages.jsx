import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../home/Header';
import Home from '../home/Home';
import BlogDetail from './BlogDetail';
const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts/:id' element={<BlogDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Pages;
