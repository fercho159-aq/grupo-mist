import Link from 'next/link';
import { servicios } from '@/data/servicios';

const empresaLinks = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <svg
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                aria-label="Grupo Mist logo"
              >
                <circle cx="40" cy="40" r="38" stroke="#8B7D3C" strokeWidth="2.5" fill="none" />
                <circle cx="40" cy="40" r="33" stroke="#8B7D3C" strokeWidth="1" fill="none" />
                <text
                  x="40"
                  y="44"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Georgia, serif"
                  fontWeight="bold"
                  fontSize="18"
                  fill="#8B7D3C"
                  letterSpacing="3"
                >
                  MIST
                </text>
                <path d="M 15 26 A 30 30 0 0 1 65 26" fill="none" stroke="#8B7D3C" strokeWidth="0.8" />
                <path d="M 15 54 A 30 30 0 0 0 65 54" fill="none" stroke="#8B7D3C" strokeWidth="0.8" />
                <text x="40" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.5" fill="#8B7D3C" letterSpacing="3.5">
                  GRUPO
                </text>
                <text x="40" y="63" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="4.5" fill="#8B7D3C" letterSpacing="1.8">
                  DE MEXICO
                </text>
              </svg>
              <span className="text-lg font-bold text-primary">Grupo Mist</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Grupo Mist de Mexico, S.A. de C.V. es una empresa comprometida con la excelencia en servicios
              de construccion, mantenimiento e infraestructura para el sector publico y privado.
            </p>
            <p className="mt-3 text-xs italic text-primary">
              Construyendo soluciones, transformando entornos.
            </p>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5">
              {servicios.map((servicio) => (
                <li key={servicio.slug}>
                  <Link
                    href={`/servicios/${servicio.slug}`}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {servicio.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2.5">
              {empresaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
                <span className="text-sm text-gray-400">
                  Ciudad de Mexico, Mexico
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+525552067776" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  (55) 5206-7776
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contacto@grupomist.com.mx" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  contacto@grupomist.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; 2024 Grupo Mist de Mexico, S.A. de C.V. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-500">
              RFC: GMM170407MM2
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
