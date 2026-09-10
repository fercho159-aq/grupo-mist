import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { proyectos } from "@/data/proyectos";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Conoce los proyectos más destacados de Grupo Mist de México en obra civil, infraestructura, energía limpia y más.",
};

const projectImages: Record<string, string> = {
  'pavimentacion-alcaldia-cuauhtemoc': '/images/proyectos/pavimentacion.jpg',
  'mantenimiento-chapultepec': '/images/proyectos/areas-verdes.jpg',
  'remodelacion-hospital-general': '/images/proyectos/hospital.jpg',
  'pozos-agua-iztapalapa': '/images/proyectos/pozos-agua.jpg',
  'limpieza-conade': '/images/proyectos/limpieza.jpg',
  'calentadores-solares-tlahuac': '/images/proyectos/energia-solar.jpg',
  'aires-acondicionados-sat': '/images/proyectos/aires-acondicionados.jpg',
  'nave-industrial-vallejo': '/images/proyectos/nave-industrial.jpg',
};

function ProjectCard({ proyecto }: { proyecto: (typeof proyectos)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={projectImages[proyecto.slug] || '/images/proyectos/pavimentacion.jpg'}
          alt={proyecto.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {proyecto.categoria}
          </span>
        </div>
        {proyecto.destacado && (
          <div className="absolute top-3 right-3">
            <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              Destacado
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-dark text-lg mb-1 group-hover:text-primary transition-colors">
          {proyecto.titulo}
        </h3>
        <p className="text-sm text-accent font-medium mb-2">
          {proyecto.cliente}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {proyecto.descripcion}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-secondary font-bold text-sm">
            {proyecto.monto}
          </span>
          <span className="text-xs text-gray-400">
            {proyecto.fechaInicio} — {proyecto.fechaFin}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProyectosPage() {
  const categorias = [...new Set(proyectos.map((p) => p.categoria))];

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src="/images/hero/hero-proyectos.jpg" alt="Proyectos de infraestructura" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Proyectos
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Portafolio de obras y servicios ejecutados con excelencia
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Nuestro Portafolio"
            subtitle="Proyectos que demuestran nuestra capacidad y compromiso"
          />

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full cursor-pointer">
              Todos
            </span>
            {categorias.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-light text-gray-600 text-sm font-medium rounded-full cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto) => (
              <ProjectCard key={proyecto.slug} proyecto={proyecto} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-accent to-primary text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Trabajemos juntos. Contáctanos y hagamos realidad tu proyecto.
          </p>
          <a
            href="https://wa.me/5215552067776?text=Hola%2C%20tengo%20un%20proyecto%20y%20me%20gustar%C3%ADa%20cotizar%20con%20Grupo%20Mist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-accent font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Contáctanos ahora
          </a>
        </Container>
      </section>
    </>
  );
}
