import React, { useState } from 'react'
import LoginPage from 'pages/login-page/LoginPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import ListPurchaseOrderPage from 'pages/purchase-order-page/ListPurchaseOrderPage';
import CreatePurchaseOrderPage from 'pages/purchase-order-page/CreatePurchaseOrderPage';
import Navbar from 'components/navbars/Navbar';
import Sidebar from 'components/sidebars/Sidebar';
import ListProductPage from 'pages/product-page/ListProductPage';
import CreateProductPage from 'pages/product-page/CreateProductPage';
import UpdateProductPage from 'pages/product-page/UpdateProductPage';
import ListTravelDocumentPage from 'pages/travel-document-page/ListTravelDocumentPage';
import DetailTravelDocumentPage from 'pages/travel-document-page/DetailTravelDocumentPage';

export default function SetupRoutes() {
    return (
        <Router>
            <Routes>
                {/*
                    With Navbar and Sidebar
                */}
                <Route path="/" element={<WithNavbar />}>
                    {/* 
                        Purchase Order
                    */}
                    <Route path="/purchase-order" element={<ListPurchaseOrderPage />} />
                    <Route path="/purchase-order/create" element={<CreatePurchaseOrderPage /> } />
                    {/* 
                        Product
                    */}
                    <Route path="/product" element={<ListProductPage />} />
                    <Route path="/product/create" element={<CreateProductPage />} />
                    <Route path="/product/update" element={<UpdateProductPage />} />
                    {/* 
                        Travel Document
                    */}
                    <Route path="/travel-document" element={<ListTravelDocumentPage />} />
                    <Route path="/travel-document/detail" element={<DetailTravelDocumentPage />} />
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <>
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />
            <div className='d-flex'>
                <Sidebar isOpen={isSidebarOpen} />
                <div className='p-6 w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}