import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { servicios } from '@/data/servicios';

const iconPaths: Record<string, string> = {
  building:
    'M3 21h18M3 21V7l9-4 9 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01',
  leaf: 'M17 8C8 10 5.9 16.17 3.82 21.34M17 8A5 5 0 1 0 7.5 9.5M17 8l4-4M12 12c-1.5 1.5-3 3-3 5s1 3 3 3 3.5-1.5 3-3c-.5-1.5-1-2.5-3-5z',
  broom:
    'M12 3v9m-4 4l4-4 4 4M5 21h14M8 16v5m8-5v5M12 12l-5 5m10-5l-5 5',
  water:
    'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z',
  snowflake:
    'M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M12 6l-2 2 2 2 2-2-2-2zM6 12l2-2-2-2-2 2 2 2zM18 12l-2 2 2 2 2-2-2-2zM12 18l2-2-2-2-2 2 2 2z',
  hospital:
    'M3 21h18M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16M9 21v-4h6v4M10 9h4M12 7v4',
  road: 'M4 19L8 5M16 19l4-15M12 19v-2m0-4v-2m0-4V5',
  sun: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 0l-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones integrales para cada necesidad"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicios.map((servicio) => (
            <Link
              key={servicio.slug}
              href={`/servicios/${servicio.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#8B7D3C]/40 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8B7D3C]">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconPaths[servicio.icono] || iconPaths.building} />
                </svg>
              </div>

              {/* Name */}
              <h3 className="mb-2 font-semibold text-[#1A1A1A] group-hover:text-[#8B7D3C] transition-colors">
                {servicio.nombre}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                {servicio.descripcionCorta}
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-[#8B7D3C] transition-transform group-hover:translate-x-1">
                Ver mas
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
