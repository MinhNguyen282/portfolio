import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Default admin credentials (in production, these should be environment variables)
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portfolio2024';

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('portfolio_admin_auth');
    const authTimestamp = localStorage.getItem('portfolio_admin_timestamp');
    
    if (authStatus === 'true' && authTimestamp) {
      // Check if authentication is still valid (expires after 24 hours)
      const now = new Date().getTime();
      const authTime = parseInt(authTimestamp);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (now - authTime < twentyFourHours) {
        setIsAuthenticated(true);
      } else {
        // Authentication expired, clear it
        localStorage.removeItem('portfolio_admin_auth');
        localStorage.removeItem('portfolio_admin_timestamp');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('portfolio_admin_auth', 'true');
      localStorage.setItem('portfolio_admin_timestamp', new Date().getTime().toString());
      return { success: true };
    } else {
      return { success: false, error: 'Invalid username or password' };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('portfolio_admin_auth');
    localStorage.removeItem('portfolio_admin_timestamp');
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
