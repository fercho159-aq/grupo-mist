import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Próximamente: noticias, artículos y novedades de Grupo Mist de México.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark to-primary-dark py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Noticias, artículos y novedades del sector
          </p>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark mb-3">
              Próximamente
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Estamos preparando contenido de valor sobre construcción,
              infraestructura y tendencias del sector. Mientras tanto,
              contáctanos por WhatsApp para cualquier consulta.
            </p>
            <a
              href="https://wa.me/5215552067776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-secondary hover:bg-secondary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
