import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../pages/home"
import ContactUs from "../pages/contact-us"
import Login from "../pages/login"
import Store from "../pages/store"
import Navigation from "../components/navigation";
import Cart from '../pages/cart';
import Account from "../pages/account";

export default function NavRoutes () {
    return (
        <Router>
            <div>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<Store/>} />
                    <Route path="/account" element={<Account/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/login" element={<Login />} />
                    <Route element={() => 404} />
                </Routes>
            </div>
        </Router>
    )
}