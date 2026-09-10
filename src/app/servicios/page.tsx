import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce los 8 servicios que ofrece Grupo Mist: obra civil, mantenimiento, limpieza institucional, infraestructura hidráulica, climatización y energía limpia.",
};

const iconMap: Record<string, React.ReactNode> = {
  building: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  leaf: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  broom: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  water: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  snowflake: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
    </svg>
  ),
  hospital: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m4-14v4m-2-2h4" />
    </svg>
  ),
  road: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  sun: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark to-primary-dark py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Soluciones integrales adaptadas a las necesidades de cada cliente
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="8 Áreas de Especialización"
            subtitle="Cada servicio respaldado por experiencia comprobada y un equipo profesional"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio) => (
              <Link
                key={servicio.slug}
                href={`/servicios/${servicio.slug}`}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {iconMap[servicio.icono] || iconMap.building}
                </div>
                <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-primary transition-colors">
                  {servicio.nombre}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {servicio.descripcionCorta}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  Ver más
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary to-secondary-light text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas un servicio especializado?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Platícanos tu proyecto y te armamos una solución a tu medida
          </p>
          <a
            href="https://wa.me/5215552067776?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20Grupo%20Mist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-secondary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.252-.156-2.905.863.863-2.905-.156-.252A8 8 0 1112 20z" />
            </svg>
            Cotizar por WhatsApp
          </a>
        </Container>
      </section>
    </>
  );
}
