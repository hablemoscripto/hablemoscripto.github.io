import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  useEffect(() => {
    // If not loading and no user, show auth prompt after a brief delay
    if (!loading && !user) {
      const timer = setTimeout(() => {
        setShowAuthPrompt(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, user]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
          <p className="mt-4 text-slate-400">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to home and trigger auth modal
  if (!user) {
    // Store the attempted URL to redirect back after login
    sessionStorage.setItem('redirectAfterLogin', location.pathname);

    if (showAuthPrompt) {
      return <Navigate to="/?showAuth=true" replace />;
    }

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
        </div>
      </div>
    );
  }

  // User is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
