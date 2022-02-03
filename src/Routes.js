import React from 'react'
import LoginPage from 'pages/login-page/LoginPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import PurchaseOrderPage from 'pages/purchase-order-page/PurchaseOrderPage';
import Navbar from 'components/navbars/Navbar';
import Sidebar from 'components/sidebars/Sidebar';

export default function SetupRoutes() {
    return (
        <Router>
            <Routes>
                {/*
                    With Navbar and Sidebar
                */}
                <Route path="/" element={<WithNavbar />}>
                    <Route path="/purchase-order" element={<PurchaseOrderPage />}/>
                </Route>

                {/* 
                    Login Page
                */}
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>        
    )
}

function WithNavbar() {
    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}