import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Research from './components/pages/Research';
import Publications from './components/pages/Publications';

import Join from './components/pages/Join';
import { i18n } from './data/i18n';

export default function App() {
  // Language state: English as default
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) return savedLang;
    return 'en';
  });

  // Hash-based custom router state
  const [path, setPath] = useState(() => {
    const hash = window.location.hash;
    return hash || '#home';
  });

  // Synced hash routing listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setPath(hash || '#home');
      window.scrollTo(0, 0); // Scroll to top on navigation
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Get active localization dictionary
  const t = i18n[lang] || i18n.en;

  // Page Routing logic
  const renderPage = () => {
    switch (path) {
      case '#home':
        return <Home t={t} setPath={setPath} />;
      case '#research':
        return <Research t={t} />;
      case '#publications':
        return <Publications t={t} />;

      case '#join':
        return <Join t={t} />;
      default:
        return <Home t={t} setPath={setPath} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-800">
      {/* Header / Navbar Navigation */}
      <Header
        currentPath={path}
        setPath={setPath}
        currentLang={lang}
        setLang={setLang}
        t={t}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full px-6 lg:px-12 py-8 animate-fadeIn">
        {renderPage()}
      </main>

      {/* Footer Area */}
      <Footer currentLang={lang} />
    </div>
  );
}
