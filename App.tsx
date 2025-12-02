import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import EducationPage from './components/EducationPage';
import LessonView from './components/LessonView';
import LevelDetail from './components/LevelDetail';
import NewsletterAdmin from './components/NewsletterAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import ChatWidget from './components/ChatWidget';
import { BEGINNER_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL } from './data/courseData';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/education"
          element={
            <ProtectedRoute>
              <EducationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education/beginner"
          element={
            <ProtectedRoute>
              <LevelDetail levelData={BEGINNER_LEVEL} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education/intermediate"
          element={
            <ProtectedRoute>
              <LevelDetail levelData={INTERMEDIATE_LEVEL} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education/advanced"
          element={
            <ProtectedRoute>
              <LevelDetail levelData={ADVANCED_LEVEL} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/education/lesson/:lessonId"
          element={
            <ProtectedRoute>
              <LessonView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/newsletter"
          element={
            <ProtectedRoute>
              <NewsletterAdmin />
            </ProtectedRoute>
          }
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
        <ProgressProvider>
          <Router>
            <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
              <AnimatedRoutes />
              <ChatWidget />
            </div>
          </Router>
        </ProgressProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
