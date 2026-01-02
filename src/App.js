import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components for better performance
const Hero = React.lazy(() => import('./components/Hero'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Awards = React.lazy(() => import('./components/Awards'));
const Contact = React.lazy(() => import('./components/Contact'));
const ProjectDetails = React.lazy(() => import('./components/ProjectDetailsNew'));
const CV = React.lazy(() => import('./components/CV'));
const Experience = React.lazy(() => import('./components/Experience'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary-200 border-solid rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-500 border-solid rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ScrollToTop />
            <SEO />
            <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/cv" element={<CV />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;