import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { servicios } from "@/data/servicios";
import { proyectos } from "@/data/proyectos";

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) return {};
  return {
    title: servicio.nombre,
    description: servicio.descripcionCorta,
  };
}

export default async function ServicioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) notFound();

  const proyectosRelacionados = proyectos.filter(
    (p) => p.servicioRelacionado === servicio.slug
  );

  const currentIndex = servicios.findIndex((s) => s.slug === servicio.slug);
  const prevServicio = servicios[currentIndex - 1];
  const nextServicio = servicios[currentIndex + 1];

  return (
    <>
      <section className="relative bg-gradient-to-br from-dark to-accent py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <Container className="relative z-10">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Todos los servicios
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {servicio.nombre}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            {servicio.descripcionCorta}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-primary/40 text-sm">Imagen del servicio</span>
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Descripción</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {servicio.descripcion}
              </p>

              <h3 className="text-xl font-bold text-dark mb-4">
                Características del servicio
              </h3>
              <ul className="space-y-3 mb-8">
                {servicio.caracteristicas.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{c}</span>
                  </li>
                ))}
              </ul>

              {proyectosRelacionados.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-dark mb-4">
                    Proyectos realizados
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {proyectosRelacionados.map((p) => (
                      <div
                        key={p.slug}
                        className="bg-light rounded-lg p-5 border border-gray-100"
                      >
                        <h4 className="font-semibold text-dark mb-1">
                          {p.titulo}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {p.cliente}
                        </p>
                        <p className="text-sm font-semibold text-secondary">
                          {p.monto}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-4">
                  ¿Te interesa este servicio?
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Contáctanos por WhatsApp y te daremos una cotización sin
                  compromiso.
                </p>
                <a
                  href={`https://wa.me/5215552067776?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(servicio.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.252-.156-2.905.863.863-2.905-.156-.252A8 8 0 1112 20z" />
                  </svg>
                  Solicitar cotización
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-4">Otros servicios</h3>
                <ul className="space-y-2">
                  {servicios
                    .filter((s) => s.slug !== servicio.slug)
                    .slice(0, 5)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/servicios/${s.slug}`}
                          className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {s.nombre}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex gap-2">
                {prevServicio && (
                  <Link
                    href={`/servicios/${prevServicio.slug}`}
                    className="flex-1 text-center bg-light hover:bg-gray-200 text-dark text-sm font-medium py-3 rounded-lg transition-colors"
                  >
                    ← Anterior
                  </Link>
                )}
                {nextServicio && (
                  <Link
                    href={`/servicios/${nextServicio.slug}`}
                    className="flex-1 text-center bg-light hover:bg-gray-200 text-dark text-sm font-medium py-3 rounded-lg transition-colors"
                  >
                    Siguiente →
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
