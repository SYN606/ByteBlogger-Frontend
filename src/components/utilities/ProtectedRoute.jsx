import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("authToken");
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/sign_in" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
