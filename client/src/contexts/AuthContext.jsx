import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL;


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
      } catch (err) {
        console.error("Error parsing stored user:", err);
        localStorage.removeItem("userInfo");
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API}/api/users/login`, {
      email,
      password,
    });


      const user = res.data;
      localStorage.setItem("userInfo", JSON.stringify(user));
      setCurrentUser(user);

      return { success: true };
    } catch (err) {
      console.error("Login failed:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const res = await axios.post(`${API}/api/users/register`, {
      name,
      email,
      password,
    });

      const user = res.data;
      localStorage.setItem("userInfo", JSON.stringify(user));
      setCurrentUser(user);

      return { success: true };
    } catch (err) {
      console.error("Signup failed:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Signup failed",
      };
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("userInfo");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
