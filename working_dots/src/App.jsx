import React, { useState, useEffect, useCallback } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './page/HomePage';
import ServicesPage from './page/ServicesPage';
import ProjectsPage from './page/ProjectsPage';
import { smoothScrollTo } from './lib/utils';

export default function App() {
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return 'home';

    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('service') || hash.includes('service-page') || hash === '#/services') {
      return 'services';
    }
    if (path.includes('project') || path.includes('work') || hash.includes('project-page') || hash === '#/projects') {
      return 'projects';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const navigate = useCallback((route, sectionId = null) => {
    setCurrentRoute(route);

    let targetPath = '/';
    if (route === 'services') targetPath = '/services';
    if (route === 'projects') targetPath = '/projects';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ route, sectionId }, '', targetPath);
    }

    if (sectionId) {
      setTimeout(() => {
        smoothScrollTo(sectionId, 80);
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Handle browser back and forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('service') || hash.includes('service-page') || hash === '#/services') {
        setCurrentRoute('services');
      } else if (path.includes('project') || path.includes('work') || hash.includes('project-page') || hash === '#/projects') {
        setCurrentRoute('projects');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Handle initial hash scroll if arriving with a section link
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const target = window.location.hash.replace('#', '');
      if (['process', 'why-us', 'about', 'contact'].includes(target)) {
        setTimeout(() => {
          smoothScrollTo(target, 80);
        }, 150);
      }
    }
  }, []);

  // Render appropriate view based on route
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'services':
        return <ServicesPage navigate={navigate} />;
      case 'projects':
        return <ProjectsPage navigate={navigate} />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <MainLayout currentRoute={currentRoute} navigate={navigate}>
      {renderCurrentPage()}
    </MainLayout>
  );
}
