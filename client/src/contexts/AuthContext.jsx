import React,{ createContext,useState,useEffect, children } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) =>{
    const [user,setUser] = useState(null);
    //on initial loading
    useEffect(() =>{
        const storedUser = localStorage.getItem('userInfo');
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);

    const login = (useData)=> {
        localStorage.setItem('userInfo',JSON.stringify(userData));
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    const value = { user,login,logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}