import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';

const ProtectedAdminRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-solid rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-500 border-solid rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  // Show admin page if authenticated, login page if not
  return isAuthenticated ? <AdminPage /> : <AdminLogin />;
};

export default ProtectedAdminRoute;
