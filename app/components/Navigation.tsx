'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/family-law', label: 'Family Law' },
    { href: '/criminal-defense', label: 'Criminal Defense' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-sm shadow-lg transition-all duration-300"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="font-display text-2xl font-black tracking-[0.15em] text-bone transition-all duration-300 group-hover:tracking-[0.2em]">
                B<span className="inline-block w-px h-8 bg-bone mx-2 align-middle"></span>P
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm uppercase tracking-wider text-bone/80 hover:text-bone transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-crimson transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <a
                href="tel:3053715060"
                className="btn-primary !py-3 !px-8 text-xs"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-bone p-2 transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-bone transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-bone transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-bone transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-midnight/95 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center space-y-8 p-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-3xl font-bold text-bone hover:text-crimson transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:3053715060"
            className="btn-primary !py-4 !px-12 text-base animate-fade-in"
            style={{ animationDelay: `${navLinks.length * 100}ms` }}
          >
            (305) 371-5060
          </a>
        </div>
      </div>
    </>
  );
}
