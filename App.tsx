import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import EducationPage from './components/EducationPage';
import LessonView from './components/LessonView';
import LevelDetail from './components/LevelDetail';
import NewsletterAdmin from './components/NewsletterAdmin';
import UnsubscribePage from './components/UnsubscribePage';
import PaymentSuccess from './components/PaymentSuccess';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { GamificationProvider } from './contexts/GamificationContext';
import ChatWidget from './components/ChatWidget';
import AchievementToast from './components/ui/AchievementToast';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from './data/courseData';
import PageTransition from './components/ui/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
          path="/unsubscribe"
          element={<PageTransition><UnsubscribePage /></PageTransition>}
        />
        <Route
          path="/pago-completado"
          element={<PageTransition><PaymentSuccess /></PageTransition>}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <GamificationProvider>
          <ProgressProvider>
            <Router>
              <div className="min-h-screen bg-surface-base text-white overflow-x-hidden font-sans">
                <AnimatedRoutes />
                <ChatWidget />
                <AchievementToast />
              </div>
            </Router>
          </ProgressProvider>
        </GamificationProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
