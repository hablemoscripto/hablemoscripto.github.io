import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { EntitlementsProvider } from './contexts/EntitlementsContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { GamificationProvider } from './contexts/GamificationContext';
import { useAuth } from './contexts/AuthContext';
import AchievementToast from './components/ui/AchievementToast';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from './data/levels';
import PageTransition from './components/ui/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';
import { Loader2 } from 'lucide-react';
import { initAnalytics, trackPageView } from './utils/analytics';
import { initErrorReporting } from './utils/errorReporting';

// Lazy-loaded route components
const LandingPage = lazy(() => import('./components/LandingPage'));
const EducationPage = lazy(() => import('./components/EducationPage'));
const LessonView = lazy(() => import('./components/LessonView'));
const LevelDetail = lazy(() => import('./components/LevelDetail'));
const NewsletterAdmin = lazy(() => import('./components/NewsletterAdmin'));
const UnsubscribePage = lazy(() => import('./components/UnsubscribePage'));
const PaymentSuccess = lazy(() => import('./components/PaymentSuccess'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const LegalPage = lazy(() => import('./components/LegalPage'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));

function RouteLoader() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center">
      <Loader2 size={32} className="animate-spin text-brand-500" />
    </div>
  );
}

// Keyboard/screen-reader users can jump past the navbar to the page body.
// Targets the <main id="contenido"> rendered by the primary routes.
function SkipLink() {
  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-500 focus:text-navy-950 focus:font-bold focus:shadow-lg"
    >
      Saltar al contenido
    </a>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
          <Route
            path="/education"
            element={
              <ProtectedRoute>
                <PageTransition><EducationPage /></PageTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/education/beginner"
            element={
              <ProtectedRoute>
                <PageTransition><LevelDetail levelData={BEGINNER_LEVEL} /></PageTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/education/intermediate"
            element={
              <ProtectedRoute>
                <PageTransition><LevelDetail levelData={INTERMEDIATE_LEVEL} /></PageTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/education/advanced"
            element={
              <ProtectedRoute>
                <PageTransition><LevelDetail levelData={ADVANCED_LEVEL} /></PageTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/education/lesson/:lessonId"
            element={
              <ProtectedRoute>
                <PageTransition><LessonView /></PageTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/newsletter"
            element={
              <ProtectedRoute>
                <PageTransition><NewsletterAdmin /></PageTransition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/privacidad"
            element={<PageTransition><LegalPage type="privacy" /></PageTransition>}
          />
          <Route
            path="/terminos"
            element={<PageTransition><LegalPage type="terms" /></PageTransition>}
          />
          <Route
            path="/unsubscribe"
            element={<PageTransition><UnsubscribePage /></PageTransition>}
          />
          <Route
            path="/pago-completado"
            element={<PageTransition><PaymentSuccess /></PageTransition>}
          />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

// The AI tutor (CBas) is a learning tool for enrolled users. Gate it on auth so
// it never appears on the public landing page and its heavy markdown/SSE stack
// is lazy-loaded only once a logged-in user is present.
function AuthedChatWidget() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <Suspense fallback={null}>
      <ChatWidget />
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    initAnalytics();
    initErrorReporting();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <EntitlementsProvider>
            <GamificationProvider>
              <ProgressProvider>
                <Router>
                  <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden font-sans">
                    <SkipLink />
                    <AnimatedRoutes />
                    <AuthedChatWidget />
                    <AchievementToast />
                  </div>
                </Router>
              </ProgressProvider>
            </GamificationProvider>
          </EntitlementsProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
