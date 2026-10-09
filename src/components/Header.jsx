import React, { useState, useEffect, useRef } from 'react';
import iithLogo from '../assets/iith-logo.png';

export default function Header({ currentPath, setPath, currentLang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { key: 'home', path: '#home' },
    { key: 'research', path: '#research' },
    { key: 'publications', path: '#publications' },
    { key: 'join', path: '#join' }
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'te', label: 'తెలుగు' }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path) => {
    setPath(path);
    window.location.hash = path;
    setMobileMenuOpen(false);
  };

  const handleLangSelect = (code) => {
    setLang(code);
    setLangDropdownOpen(false);
  };

  const currentLangLabel = languages.find(l => l.code === currentLang)?.label || 'English';

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-slate-800 shadow-sm transition-all duration-300 border-t-4 border-[#f97316]">
      <div className="w-full flex items-center justify-between px-6 lg:px-12 py-4">
        
        {/* Left: Official IITH Logo */}
        <div className="flex lg:flex-1 items-center">
          <a href="https://iith.ac.in" target="_blank" rel="noreferrer" className="shrink-0 flex items-center justify-center">
            <img
              src={iithLogo}
              alt="IIT Hyderabad Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center: Navigation Menu Tabs */}
        <nav className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.key}
                href={item.path}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                className={`group relative px-4 py-2 text-base font-semibold tracking-wide transition-all duration-300 select-none ${
                  isActive
                    ? 'text-[#f97316]'
                    : 'text-slate-600 hover:text-[#f97316]'
                }`}
              >
                {t.nav[item.key]}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-2 -left-2 -right-2 h-1 rounded-full bg-[#f97316]" />
                )}
                {/* Hover underline */}
                {!isActive && (
                  <span className="absolute -bottom-2 left-1/2 right-1/2 h-1 rounded-full bg-[#f97316] opacity-0 group-hover:opacity-100 group-hover:-left-2 group-hover:-right-2 transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Lab Logo & Language Dropdown */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          
          {/* Simple Lab Logo Restored on Right Side */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="group flex items-center gap-3 select-none">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f97316] text-white text-xl font-extrabold shadow-md group-hover:scale-105 transition-all">
              Σλ
            </span>
            <div className="flex flex-col justify-center text-left">
              <span className="text-slate-900 font-extrabold leading-none tracking-tight text-lg group-hover:text-[#f97316] transition-colors">
                SIMPLE
              </span>
              <span className="text-[10px] font-bold text-[#f97316] uppercase tracking-[0.2em] mt-0.5">
                Lab
              </span>
            </div>
          </a>

          <div className="w-px h-8 bg-slate-300"></div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded bg-white px-3 py-2 text-sm font-medium border border-slate-300 text-slate-700 hover:text-[#f97316] hover:border-[#f97316] hover:bg-orange-50 transition-all duration-200"
            >
              <span>{currentLangLabel}</span>
              <svg className={`h-4 w-4 fill-none stroke-current stroke-2 transition-transform duration-200 ${
                langDropdownOpen ? 'rotate-180 text-[#f97316]' : 'text-slate-500'
              }`} viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded bg-white border border-slate-200 shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang.code)}
                    className={`block w-full px-4 py-2 text-left text-sm font-medium transition-all ${
                      currentLang === lang.code
                        ? 'bg-orange-50 text-[#f97316] border-l-2 border-[#f97316]'
                        : 'text-slate-600 hover:text-[#f97316] hover:bg-orange-50 border-l-2 border-transparent'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-2 text-slate-600 hover:bg-slate-100 hover:text-iith-blue transition-colors"
            aria-label="Toggle main menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 py-4 border-t border-slate-200 bg-white space-y-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.path}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                className={`block rounded px-3 py-2 text-base font-medium ${
                  currentPath === item.path
                    ? 'bg-slate-50 text-iith-blue border-l-4 border-iith-orange'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-iith-blue'
                }`}
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>

          <hr className="border-slate-200" />

          {/* Language mobile switch */}
          <div className="flex items-center justify-between px-3 py-2 gap-4">
            <span className="text-sm font-medium text-slate-500">Language</span>
            <div className="flex items-center rounded border border-slate-300 bg-slate-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`px-3 py-2 text-sm font-medium ${
                    currentLang === lang.code
                      ? 'bg-iith-blue text-white'
                      : 'text-slate-600 hover:text-iith-blue'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
