import React,{ children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    //if no user loged in
    if(!user){
        return <Navigate to= "/login" />;
    }
    return children;
};

export default ProtectedRoute;