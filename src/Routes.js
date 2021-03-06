import React, { useState } from 'react'
import LoginPage from 'pages/login-page/LoginPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import Navbar from 'components/navbars/Navbar';
import Sidebar from 'components/sidebars/Sidebar';
import ListProductPage from 'pages/product-page/ListProductPage';
import CreateProductPage from 'pages/product-page/CreateProductPage';
import UpdateProductPage from 'pages/product-page/UpdateProductPage';
import ListDeliveryOrderPage from 'pages/delivery-order-page/ListDeliveryOrderPage';
import DetailDeliveryOrderPage from 'pages/delivery-order-page/DetailDeliveryOrderPage';
import ClientPath from 'paths/client_paths';
import ListPurchaseOrderPage from 'pages/purchase-order-page/ListPurchaseOrderPage';
import CreatePurchaseOrderPage from 'pages/purchase-order-page/CreatePurchaseOrderPage';

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
                    <Route path={ClientPath.ListPurchaseOrder} element={<ListPurchaseOrderPage />}/>
                    <Route path={ClientPath.CreatePurchaseOrder} element={<CreatePurchaseOrderPage /> } />
                    {/* 
                        Product
                    */}
                    <Route path={ClientPath.ListProduct} element={<ListProductPage />} />
                    <Route path={ClientPath.CreateProduct} element={<CreateProductPage />} />
                    <Route path={ClientPath.UpdateProduct} element={<UpdateProductPage />} />
                    {/* 
                        Delivery Order
                    */}
                    <Route path={ClientPath.ListDeliveryOrder} element={<ListDeliveryOrderPage />} />
                    <Route path={ClientPath.DetailDeliveryOrder} element={<DetailDeliveryOrderPage />} />
                    {/* 
                        Product
                    */}
                    <Route path={ClientPath.ListProduct} element={<ListProductPage />}/>
                    <Route path={ClientPath.CreateProduct} element={<CreateProductPage />}/>
                    <Route path={ClientPath.UpdateProduct} element={<UpdateProductPage />}/>
                </Route>

                {/* 
                    Login Page
                */}
                <Route path={ClientPath.Login} element={<LoginPage />} />
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