'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const focusableElements = mobileMenuRef.current?.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/family-law', label: 'Family Law' },
    { href: '/criminal-defense', label: 'Criminal Defense' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
  ];

  const isHomepage = pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-midnight backdrop-blur-md shadow-xl'
            : isHomepage
              ? 'bg-transparent'
              : 'bg-midnight/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <svg
                className="h-10 w-auto fill-bone transition-all duration-300 group-hover:scale-105"
                viewBox="0 0 225 127"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fillRule="nonzero" transform="translate(-3, -21)">
                  <path d="M3.695625,45.04 C5.904375,45.12 8.7965625,45.2 12.3721875,45.28 C15.9478125,45.36 19.535625,45.4 23.135625,45.4 C27.095625,45.4 30.8865625,45.36 34.5084375,45.28 C38.1303125,45.2 40.699375,45.16 42.215625,45.16 C52.664375,45.16 60.4565625,46.92 65.5921875,50.44 C70.7278125,53.96 73.295625,58.48 73.295625,64 C73.295625,66.8 72.3796875,69.668125 70.5478125,72.604375 C68.7159375,75.540625 65.9,78.140625 62.1,80.404375 C58.3,82.668125 53.42375,84.25625 47.47125,85.16875 L47.47125,85.40875 C55.3275,85.88875 61.595625,87.2125 66.275625,89.38 C70.955625,91.5475 74.335625,94.159375 76.415625,97.215625 C78.495625,100.271875 79.535625,103.44 79.535625,106.72 C79.535625,111.92 78.155625,116.244062 75.395625,119.692188 C72.635625,123.140313 68.670625,125.720313 63.500625,127.432187 C58.330625,129.144062 52.155625,130 44.975625,130 C43.088125,130 40.3090625,129.94 36.6384375,129.82 C32.9678125,129.7 28.546875,129.64 23.375625,129.64 C19.615625,129.64 15.9478125,129.66 12.3721875,129.7 C8.7965625,129.74 5.904375,129.84 3.695625,130 L3.695625,127.6 C6.224375,127.44 8.1053125,127.12 9.3384375,126.64 C10.5715625,126.16 11.399375,125.2 11.821875,123.76 C12.244375,122.32 12.455625,120.16 12.455625,117.28 L12.455625,57.76 C12.455625,54.8 12.2403125,52.62 11.8096875,51.22 C11.3790625,49.82 10.535,48.86 9.2775,48.34 C8.02,47.82 6.159375,47.52 3.695625,47.44 L3.695625,45.04 Z M41.135625,47.44 C38.251875,47.44 36.3709375,48.12 35.4928125,49.48 C34.6146875,50.84 34.175625,53.6 34.175625,57.76 L34.175625,117.28 C34.175625,120.08 34.39,122.2 34.81875,123.64 C35.2475,125.08 36.03375,126.04 37.1775,126.52 C38.32125,127 40.000625,127.24 42.215625,127.24 C47.373125,127.24 51.1225,125.42 53.46375,121.78 C55.805,118.14 56.975625,112.96 56.975625,106.24 C56.975625,100.08 55.475625,95.32 52.475625,91.96 C49.475625,88.6 44.495625,86.92 37.535625,86.92 L28.055625,86.92 C28.055625,86.92 28.055625,86.58 28.055625,85.9 C28.055625,85.22 28.055625,84.88 28.055625,84.88 L38.375625,84.88 C41.811875,84.88 44.4615625,83.98 46.3246875,82.18 C48.1878125,80.38 49.46875,77.98 50.1675,74.98 C50.86625,71.98 51.215625,68.76 51.215625,65.32 C51.215625,59.4 50.435625,54.94 48.875625,51.94 C47.315625,48.94 44.735625,47.44 41.135625,47.44 Z"/>
                  <polygon points="119 24 119 150.36 112 143.887932 112 24"/>
                  <path d="M153.86343,45.04 C156.05593,45.12 158.944055,45.2 162.527805,45.28 C166.111555,45.36 169.70343,45.4 173.30343,45.4 C177.25593,45.4 181.048118,45.36 184.679993,45.28 C188.311868,45.2 190.87968,45.16 192.38343,45.16 C204.04718,45.16 212.743118,47.36 218.471243,51.76 C224.199368,56.16 227.06343,61.84 227.06343,68.8 C227.06343,71.68 226.487493,74.7 225.335618,77.86 C224.183743,81.02 222.21968,83.94 219.44343,86.62 C216.66718,89.3 212.871243,91.48 208.055618,93.16 C203.239993,94.84 197.13593,95.68 189.74343,95.68 L177.26343,95.68 L177.26343,93.28 L188.54343,93.28 C192.94343,93.28 196.291555,92.2 198.587805,90.04 C200.884055,87.88 202.444055,85.04 203.267805,81.52 C204.091555,78 204.50343,74.2 204.50343,70.12 C204.50343,62.52 203.515618,56.84 201.539993,53.08 C199.564368,49.32 196.15218,47.44 191.30343,47.44 C188.39218,47.44 186.504368,48.12 185.639993,49.48 C184.775618,50.84 184.34343,53.6 184.34343,57.76 L184.34343,116.32 C184.34343,119.52 184.675618,121.904062 185.339993,123.472188 C186.004368,125.040312 187.280305,126.064375 189.167805,126.544375 C191.055305,127.024375 193.80718,127.28 197.42343,127.31125 L197.42343,130 C194.83218,129.90375 191.456555,129.819688 187.296555,129.747813 C183.136555,129.675938 178.744055,129.64 174.119055,129.64 C170.551555,129.64 167.023743,129.675938 163.535618,129.747813 C160.047493,129.819688 156.82343,129.90375 153.86343,130 L153.86343,127.6 C156.39218,127.44 158.276555,127.12 159.516555,126.64 C160.756555,126.16 161.584368,125.2 161.999993,123.76 C162.415618,122.32 162.62343,120.16 162.62343,117.28 L162.62343,57.76 C162.62343,54.8 162.415618,52.62 161.999993,51.22 C161.584368,49.82 160.740305,48.86 159.467805,48.34 C158.195305,47.82 156.32718,47.52 153.86343,47.44 L153.86343,45.04 Z"/>
                </g>
              </svg>
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
                className="btn-primary py-3 px-8 text-xs"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-bone p-2 transition-transform duration-300 ease-out hover:scale-110"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
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
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-midnight/95 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        ></div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center space-y-8 p-8">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-bone p-2 hover:text-crimson transition-colors duration-200 ease-out"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
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
