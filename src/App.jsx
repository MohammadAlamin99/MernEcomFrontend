import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import DetailsPage from './pages/details-page.jsx';
import LoginPage from './pages/loginPage.jsx';
import VerifyPage from './pages/VerifyPage.jsx';
import WishlistPage from './pages/WishlistPage.jsx';
import CartListPage from './pages/CartListPage.jsx';
import SearchKeyword from './pages/SearchKeyword.jsx';
import ProductListBYCategory from './pages/ProductListBYCategory.jsx';
import { getToken } from './Helper/SessionHelper.js';

const App = () => {
   if(getToken()){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path="/verify/:email" element={<VerifyPage/>}/>
                    <Route path="/wishlist" element={<WishlistPage/>}/>
                    <Route path="/cartlist" element={<CartListPage/>}/>
                    <Route path="/searchKeyword/:keyword" element={<SearchKeyword/>}/>
                    <Route path="/categoryListID/:categoryId" element={<ProductListBYCategory/>}/>
                </Routes>
        </BrowserRouter>
    );
   }
   else{
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path="/details/:id" element={<Navigate to="/login" replace/>}/>
                    <Route path="/verify/:email" element={<VerifyPage/>}/>
                    <Route path="/wishlist" element={<Navigate to="/login" replace/>}/>
                    <Route path="/cartlist"element={<Navigate to="/login" replace/>}/>
                    <Route path="/searchKeyword/:keyword" element={<SearchKeyword/>}/>
                    <Route path="/categoryListID/:categoryId" element={<ProductListBYCategory/>}/>
                </Routes>
        </BrowserRouter>
    );
   }
};

export default App;