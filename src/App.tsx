import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import  Navbar from './components/Navbar';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Home, PrivacyPolicy, DeveloperTools, License, Documentation } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/developer-tools" element={<DeveloperTools />} />
              <Route path="/license" element={<License />} />
              <Route path="/docs" element={<Documentation />} />
            </Routes>
          </Suspense>
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}
