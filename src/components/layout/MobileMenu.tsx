'use client';

import Link from 'next/link';
import { useState } from 'react';
import { servicios } from '@/data/servicios';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-end p-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-gray-medium hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Cerrar menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 pb-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-dark transition-colors duration-200 hover:bg-light hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Servicios Accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-dark transition-colors duration-200 hover:bg-light hover:text-primary"
                >
                  Servicios
                  <svg
                    className={`h-5 w-5 text-gray-medium transition-transform duration-200 ${
                      isServiciosOpen ? 'rotate-180' : ''
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
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isServiciosOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="ml-4 space-y-0.5 border-l-2 border-light pl-3 pt-1 pb-2">
                    {servicios.map((servicio) => (
                      <li key={servicio.slug}>
                        <Link
                          href={`/servicios/${servicio.slug}`}
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-sm text-gray-medium transition-colors duration-200 hover:bg-light hover:text-primary"
                        >
                          {servicio.nombre}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/servicios"
                        onClick={onClose}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-primary transition-colors duration-200 hover:bg-light"
                      >
                        Ver todos los servicios
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-gray-100 p-4 space-y-4">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5215552067776?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20Mist"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar mensaje por WhatsApp
            </a>

            {/* Contact Info */}
            <div className="space-y-2 text-center">
              <a
                href="tel:+525552067776"
                className="block text-sm text-gray-medium hover:text-primary transition-colors duration-200"
              >
                Tel: (55) 5206-7776
              </a>
              <a
                href="mailto:contacto@grupomist.com.mx"
                className="block text-sm text-gray-medium hover:text-primary transition-colors duration-200"
              >
                contacto@grupomist.com.mx
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
