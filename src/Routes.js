import React from 'react'
import LoginPage from 'pages/login-page/LoginPage';
import {
    BrowserRouter as Router,
    Routes,
    Route
    // Outlet
} from "react-router-dom";

export default function SetupRoutes() {
    return (
        <Router>
            <Routes>
                {/* 
                    Login Page
                */}
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>        
    )
}

// function WithNavbar() {
//     return (
//         <>
//             <Navbar />
//             <Outlet />
//         </>
//     )
// }