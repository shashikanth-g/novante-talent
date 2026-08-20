import React, { useState, useEffect } from 'react';
import IntroSequence from './components/IntroSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import TalentShowcase from './components/TalentShowcase';
import TalentManagement from './components/TalentManagement';
import ModelDevelopment from './components/ModelDevelopment';
import CastingSection from './components/CastingSection';
import TalentJourney from './components/TalentJourney';
import ForBrands from './components/ForBrands';
import JoinAgency from './components/JoinAgency';
import Footer from './components/Footer';

import TalentDirectory from './components/TalentDirectory';
import TalentProfile from './components/TalentProfile';
import ServicesPage from './components/ServicesPage';
import CastingPage from './components/CastingPage';
import JoinPage from './components/JoinPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    return window.location.pathname !== '/';
  });

  const parseRoute = (pathWithSearch) => {
    const [path, search] = pathWithSearch.split('?');
    const params = new URLSearchParams(search || '');

    if (path === '/') return { view: 'home' };
    if (path === '/about') return { view: 'about' };
    if (path === '/talent') return { view: 'talent' };
    if (path.startsWith('/talent/')) {
      const id = path.replace('/talent/', '');
      return { view: 'profile', id };
    }
    if (path === '/services') return { view: 'services' };
    if (path === '/casting') return { view: 'casting', talentId: params.get('talent') };
    if (path === '/join') return { view: 'join' };
    
    return { view: '404' };
  };

  const [currentRoute, setCurrentRoute] = useState(() => {
    return parseRoute(window.location.pathname + window.location.search);
  });

  // Dynamic SEO Page Titles
  useEffect(() => {
    switch (currentRoute.view) {
      case 'home':
        document.title = 'NOVANTE TALENT — High-End Talent Representation & Management';
        break;
      case 'about':
        document.title = 'NOVANTE TALENT — About Novante';
        break;
      case 'talent':
        document.title = 'NOVANTE TALENT — Talent Directory';
        break;
      case 'profile':
        document.title = 'NOVANTE TALENT — Talent Profile';
        break;
      case 'services':
        document.title = 'NOVANTE TALENT — Services';
        break;
      case 'casting':
        document.title = 'NOVANTE TALENT — Private Casting Desk';
        break;
      case 'join':
        document.title = 'NOVANTE TALENT — Join the Agency';
        break;
      default:
        document.title = 'NOVANTE TALENT — Page Not Found';
        break;
    }
  }, [currentRoute]);

  const navigateTo = (targetRoute) => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (targetRoute === '/' || targetRoute.startsWith('/#')) {
      window.history.pushState({}, '', targetRoute);
      setCurrentRoute({ view: 'home' });

      if (targetRoute.includes('#')) {
        const hash = targetRoute.split('#')[1];
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }

    if (targetRoute === '/about' || targetRoute.startsWith('/about')) {
      window.history.pushState({}, '', targetRoute);
      setCurrentRoute({ view: 'about' });
      return;
    }

    if (targetRoute === '/talent') {
      window.history.pushState({}, '', '/talent');
      setCurrentRoute({ view: 'talent' });
      return;
    }

    if (targetRoute.startsWith('/talent/')) {
      const id = targetRoute.replace('/talent/', '');
      window.history.pushState({}, '', targetRoute);
      setCurrentRoute({ view: 'profile', id });
      return;
    }

    if (targetRoute === '/services' || targetRoute.startsWith('/services#')) {
      window.history.pushState({}, '', targetRoute);
      setCurrentRoute({ view: 'services' });
      if (targetRoute.includes('#')) {
        const hash = targetRoute.split('#')[1];
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }

    if (targetRoute === '/casting' || targetRoute.startsWith('/casting')) {
      window.history.pushState({}, '', targetRoute);
      const params = new URLSearchParams(targetRoute.split('?')[1] || '');
      setCurrentRoute({ view: 'casting', talentId: params.get('talent') });
      return;
    }

    if (targetRoute === '/join' || targetRoute.startsWith('/#join')) {
      window.history.pushState({}, '', '/join');
      setCurrentRoute({ view: 'join' });
      return;
    }

    // Default Fallback
    window.history.pushState({}, '', targetRoute);
    setCurrentRoute({ view: '404' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const routeObj = parseRoute(window.location.pathname + window.location.search);
      setCurrentRoute(routeObj);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="novante-app" style={{ minHeight: '100vh', backgroundColor: '#0B0B0C' }}>
      {/* Visual Film Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* 2-Second Opening Experience */}
      {!introFinished && currentRoute.view === 'home' && (
        <IntroSequence onComplete={() => setIntroFinished(true)} />
      )}

      {/* Navigation Header */}
      <Navbar
        isIntroFinished={introFinished || currentRoute.view !== 'home'}
        currentRoute={
          currentRoute.view === 'about' ? '/about' :
          currentRoute.view === 'talent' ? '/talent' :
          currentRoute.view === 'services' ? '/services' :
          currentRoute.view === 'casting' ? '/casting' :
          currentRoute.view === 'join' ? '/join' : '/'
        }
        onNavigate={navigateTo}
      />

      {/* Main View Router */}
      <main>
        {currentRoute.view === 'home' && (
          <>
            <Hero isIntroFinished={introFinished} />
            <EditorialIntro />
            <TalentShowcase />
            <TalentManagement />
            <ModelDevelopment />
            <CastingSection />
            <TalentJourney />
            <ForBrands />
            <JoinAgency />
          </>
        )}

        {currentRoute.view === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentRoute.view === 'talent' && (
          <TalentDirectory
            onSelectTalent={(id) => navigateTo(`/talent/${id}`)}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute.view === 'profile' && (
          <TalentProfile
            talentId={currentRoute.id}
            onNavigate={navigateTo}
            onSelectTalent={(id) => navigateTo(`/talent/${id}`)}
          />
        )}

        {currentRoute.view === 'services' && (
          <ServicesPage onNavigate={navigateTo} />
        )}

        {currentRoute.view === 'casting' && (
          <CastingPage initialTalentId={currentRoute.talentId} onNavigate={navigateTo} />
        )}

        {currentRoute.view === 'join' && (
          <JoinPage onNavigate={navigateTo} />
        )}

        {currentRoute.view === '404' && (
          <NotFoundPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
