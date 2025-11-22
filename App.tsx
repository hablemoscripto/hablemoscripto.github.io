
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import EducationPage from './components/EducationPage';
import ChatWidget from './components/ChatWidget';
import { AuthProvider } from './contexts/AuthContext';

export type ViewState = 'landing' | 'education';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  // Simple hash-based routing handler
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#education') {
        setCurrentView('education');
      } else {
        setCurrentView('landing');
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: ViewState) => {
    if (view === 'education') {
      window.location.hash = 'education';
    } else {
      window.location.hash = ''; // or home
    }
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
        {currentView === 'landing' ? (
          <LandingPage onNavigate={() => navigateTo('education')} />
        ) : (
          <EducationPage onNavigateHome={() => navigateTo('landing')} />
        )}

        <ChatWidget />
      </div>
    </AuthProvider>
  );
}

export default App;
