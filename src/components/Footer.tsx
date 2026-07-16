import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-outline-variant/30 mt-auto">
      <div className="w-full py-16 px-6 md:px-8 flex flex-col md:flex-row justify-between items-start max-w-[1280px] mx-auto gap-12">
        <div className="space-y-6 max-w-sm">
          <span className="font-display-lg text-[24px] text-primary font-bold">Serandib Technologies</span>
          <p className="text-on-surface-variant font-body-md">
            Leading the wave of technology across Asia with robust solutions, advanced distribution networks, and institutional trust.
          </p>
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="text-on-surface-variant hover:text-primary transition-all font-medium text-sm" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h4 className="text-on-surface font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-all text-sm" to="/">Home</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-all text-sm" to="/about">About Us</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-all text-sm" to="/partners">Partners</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-all text-sm" to="/management">Management</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-on-surface font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-all text-sm" to="/contact">Contact</Link></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Privacy Policy</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-body-md text-sm">
          © {new Date().getFullYear()} Serandib Technologies Asia (Pvt) Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-on-surface-variant text-label-sm uppercase tracking-widest font-bold text-[11px]">
            Designed for performance
          </span>
        </div>
      </div>
    </footer>
  );
};
