import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { Home, PrivacyPolicy, DeveloperTools, License } from './routes';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/developer-tools" element={<DeveloperTools />} />
            <Route path="/license" element={<License />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}