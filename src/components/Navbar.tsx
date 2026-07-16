import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Partners', path: '/partners' },
    { name: 'Management', path: '/management' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <nav className="max-w-[1280px] mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        {/* Brand Logo */}
        <NavLink 
          to="/" 
          className="font-display-lg text-2xl font-extrabold tracking-tight text-primary hover:opacity-90 transition-opacity"
        >
          Serandib Technologies
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-primary border-primary'
                    : 'text-on-surface-variant border-transparent hover:text-secondary hover:border-secondary/30'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-4 px-6 py-2 bg-primary text-on-primary text-sm rounded-lg font-bold hover:bg-secondary transition-all shadow-md active:scale-95"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Links Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/30 shadow-lg px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-fixed/20 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-3 bg-primary text-on-primary font-bold rounded-lg shadow-md"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
