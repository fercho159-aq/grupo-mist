import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { clientes } from '@/data/clientes';

export default function ClientLogos() {
  const publico = clientes.filter((c) => c.sector === 'publico');
  const privado = clientes.filter((c) => c.sector === 'privado');

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <AnimateOnScroll>
          <SectionTitle title="Clientes que confian en nosotros" />
        </AnimateOnScroll>

        {/* Sector Publico */}
        <AnimateOnScroll delay={100}>
        <div className="mt-12">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Sector Publico
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {publico.map((cliente) => (
              <span
                key={cliente.nombre}
                className="rounded-full border border-gray-200 bg-[#F8F7F4] px-5 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#8B7D3C]/40 hover:bg-[#8B7D3C]/5"
              >
                {cliente.nombre}
              </span>
            ))}
          </div>
        </div>
        </AnimateOnScroll>

        {/* Sector Privado */}
        <AnimateOnScroll delay={200}>
        <div className="mt-8">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Sector Privado
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {privado.map((cliente) => (
              <span
                key={cliente.nombre}
                className="rounded-full border border-gray-200 bg-[#F8F7F4] px-5 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#3D6B8E]/40 hover:bg-[#3D6B8E]/5"
              >
                {cliente.nombre}
              </span>
            ))}
          </div>
        </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
