import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { equipo } from "@/data/equipo";
import { valores } from "@/data/valores";
import { clientes } from "@/data/clientes";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia, misión, visión y equipo de Grupo Mist de México. Más de 9 años construyendo soluciones para el sector público y privado.",
};

export default function NosotrosPage() {
  const clientesPublicos = clientes.filter((c) => c.sector === "publico");
  const clientesPrivados = clientes.filter((c) => c.sector === "privado");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark to-accent py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nosotros
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Más de 9 años construyendo soluciones integrales con calidad,
            compromiso y responsabilidad
          </p>
        </Container>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Nuestra Historia"
              subtitle="Desde 2017, transformando ideas en obras"
            />
            <div className="mt-10 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Grupo Mist de México S.A. de C.V. fue fundada en el año 2017 por
                personas comprometidas con la calidad y el servicio a
                instituciones públicas y privadas. Desde sus inicios, la empresa
                nació con una visión clara: ofrecer soluciones eficientes,
                responsables y de alto valor agregado en cada proyecto.
              </p>
              <p>
                Gracias a una filosofía basada en la honestidad, la excelencia
                operativa y el compromiso con el cliente, Grupo Mist de México ha
                logrado posicionarse como un proveedor confiable en distintos
                sectores.
              </p>
              <p>
                Nuestro enfoque va más allá de solo cumplir con los
                requerimientos técnicos: buscamos generar relaciones a largo
                plazo construidas sobre la confianza y los resultados.
              </p>
              <p>
                Hoy, con más de 9 años de experiencia, seguimos apostando por la
                innovación, el desarrollo sustentable y la mejora continua,
                reafirmando día con día nuestro compromiso con nuestros clientes
                y con México.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Misión, Visión, Objetivos */}
      <section className="py-16 md:py-24 bg-light">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecer una amplia gama de productos y servicios orientados a los
                sectores público y privado, con el objetivo de satisfacer sus
                necesidades y cumplir con las políticas y lineamientos específicos
                de cada entidad.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser una empresa proveedora de productos y servicios para los
                sectores público y privado, capaz de satisfacer plenamente los
                requerimientos y necesidades de cada cliente, ofreciendo un
                servicio de excelencia y materiales de la más alta calidad.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Objetivos</h3>
              <p className="text-gray-600 leading-relaxed">
                Ampliar nuestra gama de servicios y ofrecerlos a un mayor número
                de instituciones y empresas, de manera que nuestro desempeño nos
                posicione como una compañía seria y responsable.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Nuestros Valores"
            subtitle="Los principios que guían cada proyecto"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valores.map((valor) => (
              <div
                key={valor.nombre}
                className="text-center p-6 rounded-xl hover:bg-light transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-sm">
                    {valor.nombre.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-dark mb-2">{valor.nombre}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Equipo */}
      <section className="py-16 md:py-24 bg-light">
        <Container>
          <SectionTitle
            title="Estructura del Grupo"
            subtitle="Profesionales comprometidos con la excelencia"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipo.map((miembro) => (
              <div
                key={miembro.nombre}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {miembro.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <h4 className="font-semibold text-dark">{miembro.nombre}</h4>
                <p className="text-sm text-secondary font-medium mt-1">
                  {miembro.cargo}
                </p>
                <p className="text-xs text-gray-400 mt-1">{miembro.area}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Clientes */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Principales Clientes"
            subtitle="Instituciones que confían en nosotros"
          />
          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Sector Público
              </h3>
              <div className="flex flex-wrap gap-3">
                {clientesPublicos.map((cliente) => (
                  <span
                    key={cliente.nombre}
                    className="px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-sm text-accent font-medium"
                  >
                    {cliente.nombre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Sector Privado
              </h3>
              <div className="flex flex-wrap gap-3">
                {clientesPrivados.map((cliente) => (
                  <span
                    key={cliente.nombre}
                    className="px-4 py-2 bg-secondary/5 border border-secondary/20 rounded-full text-sm text-secondary font-medium"
                  >
                    {cliente.nombre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-dark to-primary text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te podemos apoyar en algo?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto
          </p>
          <a
            href="https://wa.me/5215552067776?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Grupo%20Mist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Solicitar cotización
          </a>
        </Container>
      </section>
    </>
  );
}
