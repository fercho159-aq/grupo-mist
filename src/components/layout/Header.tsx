'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

function MistLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grupo Mist logo"
    >
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="40" r="33" stroke="currentColor" strokeWidth="1" fill="none" />
      <text
        x="40"
        y="44"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="18"
        fill="currentColor"
        letterSpacing="3"
      >
        MIST
      </text>
      <path
        d="M 15 26 A 30 30 0 0 1 65 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M 15 54 A 30 30 0 0 0 65 54"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <text
        x="40"
        y="22"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="5.5"
        fill="currentColor"
        letterSpacing="3.5"
      >
        GRUPO
      </text>
      <text
        x="40"
        y="63"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="4.5"
        fill="currentColor"
        letterSpacing="1.8"
      >
        DE MEXICO
      </text>
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  function isActive(href: string): boolean {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          hasScrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 text-primary">
              <MistLogo className="h-14 w-14" />
              <div className="hidden sm:block">
                <span className="block text-lg font-bold leading-tight">
                  Grupo Mist
                </span>
                <span className="block text-xs text-gray-medium leading-tight">
                  de Mexico
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={
                    link.label === 'Servicios'
                      ? () => setIsMegaMenuOpen(true)
                      : undefined
                  }
                  onMouseLeave={
                    link.label === 'Servicios'
                      ? () => setIsMegaMenuOpen(false)
                      : undefined
                  }
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-dark hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {link.label === 'Servicios' && (
                      <svg
                        className={`inline-block ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                          isMegaMenuOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/5215552067776?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary-light shadow-sm"
              >
                Cotizar
              </a>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu de navegacion"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MegaMenu Dropdown */}
        <div
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
