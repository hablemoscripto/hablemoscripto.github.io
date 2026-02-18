import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { GamificationProvider } from './contexts/GamificationContext';
import ChatWidget from './components/ChatWidget';
import AchievementToast from './components/ui/AchievementToast';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from './data/courseData';
import PageTransition from './components/ui/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';
import { Loader2 } from 'lucide-react';

// Lazy-loaded route components
const EducationPage = lazy(() => import('./components/EducationPage'));
const LessonView = lazy(() => import('./components/LessonView'));
const LevelDetail = lazy(() => import('./components/LevelDetail'));
const NewsletterAdmin = lazy(() => import('./components/NewsletterAdmin'));
const UnsubscribePage = lazy(() => import('./components/UnsubscribePage'));
const PaymentSuccess = lazy(() => import('./components/PaymentSuccess'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const LegalPage = lazy(() => import('./components/LegalPage'));

function RouteLoader() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <Loader2 size={32} className="animate-spin text-brand-500" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

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

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <GamificationProvider>
            <ProgressProvider>
              <Router>
                <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
                  <AnimatedRoutes />
                  <ChatWidget />
                  <AchievementToast />
                </div>
              </Router>
            </ProgressProvider>
          </GamificationProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
