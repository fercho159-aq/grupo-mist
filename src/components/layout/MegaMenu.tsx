'use client';

import Link from 'next/link';
import { servicios } from '@/data/servicios';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  leaf: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V10m0 0c-2-2-4-3-6-3m6 3c2-2 4-3 6-3" />
    </svg>
  ),
  broom: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  water: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2 4-6 7-6 11a6 6 0 1012 0c0-4-4-7-6-11z" />
    </svg>
  ),
  snowflake: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
    </svg>
  ),
  hospital: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  road: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l-6 15h6m0-15v15m0-15h6m-6 15h6m0-15l6 15h-6" />
    </svg>
  ),
  sun: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
};

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-mega-menu">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-4 gap-4">
          {servicios.map((servicio) => (
            <Link
              key={servicio.slug}
              href={`/servicios/${servicio.slug}`}
              onClick={onClose}
              className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-light"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-light text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                {iconMap[servicio.icono] ?? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18.928-5.97L2.25 7.91l5.96-.86L10.84 2l2.63 5.05 5.96.86-4.714 4.47.928 5.97z" />
                  </svg>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-dark group-hover:text-primary transition-colors duration-200">
                  {servicio.nombre}
                </p>
                <p className="mt-0.5 text-xs text-gray-medium line-clamp-1">
                  {servicio.descripcionCorta}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4">
          <Link
            href="/servicios"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-200"
          >
            Ver todos los servicios
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
