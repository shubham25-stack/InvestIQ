// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext.jsx';
import { PortofolioProvider } from './contexts/PortofolioContext.jsx';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import PortofolioPage from './components/portofolio/PortofolioPage.jsx';

// This component contains all your strict routing rules.
const AppRoutes = () => {
  const { currentUser, loading } = useContext(AuthContext);

  // Show a loading screen while we check for a user session
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={currentUser ? <PortofolioPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!currentUser ? <Login /> : <Navigate to="/" />}
      />

      <Route
        path="/register"
        element={!currentUser ? <Signup /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <PortofolioProvider>
          <AppRoutes />
        </PortofolioProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;