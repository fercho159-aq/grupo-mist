import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { proyectos } from '@/data/proyectos';

const projectImages: Record<string, string> = {
  'pavimentacion-alcaldia-cuauhtemoc': '/images/proyectos/pavimentacion.jpg',
  'mantenimiento-chapultepec': '/images/proyectos/areas-verdes.jpg',
  'remodelacion-hospital-general': '/images/proyectos/hospital.jpg',
  'pozos-agua-iztapalapa': '/images/proyectos/pozos-agua.jpg',
  'calentadores-solares-tlahuac': '/images/proyectos/energia-solar.jpg',
  'nave-industrial-vallejo': '/images/proyectos/nave-industrial.jpg',
};

export default function FeaturedProjects() {
  const featured = proyectos.filter((p) => p.destacado);

  return (
    <section className="bg-[#F8F7F4] py-16 md:py-24">
      <Container>
        <AnimateOnScroll>
          <SectionTitle
            title="Proyectos Destacados"
            subtitle="Obras que hablan por nosotros"
          />
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((proyecto, index) => (
            <AnimateOnScroll key={proyecto.slug} delay={index * 100}>
            <div
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Image area */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={projectImages[proyecto.slug] || '/images/proyectos/pavimentacion.jpg'}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 rounded-full bg-[#E8792B] px-3 py-1 text-xs font-medium text-white">
                  {proyecto.categoria}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-1 font-semibold text-[#1A1A1A] group-hover:text-[#8B7D3C] transition-colors">
                  {proyecto.titulo}
                </h3>

                <p className="mb-2 text-sm text-gray-500">
                  {proyecto.cliente}
                </p>

                <p className="mb-2 text-lg font-bold text-[#8B7D3C]">
                  {proyecto.monto}
                </p>

                <p className="text-xs text-gray-400">
                  {proyecto.fechaInicio} — {proyecto.fechaFin}
                </p>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 font-semibold text-[#8B7D3C] transition-colors hover:text-[#6A5E2D]"
          >
            Ver todos los proyectos
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
