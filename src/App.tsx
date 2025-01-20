import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home, PrivacyPolicy, DeveloperTools, License, Documentation, SlepStudios } from './routes';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/developer-tools" element={<DeveloperTools />} />
                  <Route path="/license" element={<License />} />
                  <Route path="/docs" element={<Documentation />} />
                  <Route path="/slepstudios" element={<SlepStudios />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <ScrollToTop />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}