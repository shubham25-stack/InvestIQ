import React, { createContext, useState, useEffect, useContext } from 'react'; // Add useContext here
import axios from 'axios';

// *** THIS IS THE FIX ***
// Add 'export' to make this available for import in other files.
export const AuthContext = createContext(null);

// You can still have a custom hook for convenience
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post('http://localhost:5000/api/users/login', {
      email,
      password,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  const signup = async (name, email, password) => {
    await axios.post('http://localhost:5000/api/users/register', {
      name,
      email,
      password,
    });
  };

  const value = { user, login, logout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//you have to fix the signup 