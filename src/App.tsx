import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ThemeProvider } from './contexts/ThemeContext';
import { Home, PrivacyPolicy, DeveloperTools, License } from './routes';
import { updateMetaTags } from './utils/seo';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Update meta tags based on current route
    const routeMetaTags = {
      '/': {
        title: 'Lantech Games - Safe Gaming for All Ages',
        description: 'Discover age-appropriate games on Lantech Games. A safe gaming platform with strict content guidelines and age-specific categories for children and teens.'
      },
      '/privacy-policy': {
        title: 'Privacy Policy - Lantech Games',
        description: 'Learn about how Lantech Games protects your privacy and ensures a safe gaming environment for all age groups.'
      },
      '/developer-tools': {
        title: 'Developer Tools - Lantech Games',
        description: 'Resources and guidelines for game developers to publish their games on Lantech Games platform.'
      },
      '/license': {
        title: 'License Information - Lantech Games',
        description: 'View the licensing terms and conditions for games and content on Lantech Games.'
      }
    };

    const currentRoute = routeMetaTags[location.pathname as keyof typeof routeMetaTags];
    if (currentRoute) {
      updateMetaTags(currentRoute);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/developer-tools" element={<DeveloperTools />} />
      <Route path="/license" element={<License />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <AppRoutes />
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}