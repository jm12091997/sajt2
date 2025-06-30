import React, { Suspense, lazy } from 'react';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </Suspense>
    </div>
  );
}

export default App;