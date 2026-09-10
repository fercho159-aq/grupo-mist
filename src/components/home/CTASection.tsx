import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const WHATSAPP_URL =
  'https://wa.me/5215552067776?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1A1A1A 0%, #2A4A5E 50%, #3D6B8E 100%)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Listo para comenzar tu proximo proyecto?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mt-6 text-lg text-white/80">
              Contactanos hoy y recibe una cotizacion personalizada
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="secondary" size="lg" href={WHATSAPP_URL}>
              Solicitar cotizacion
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/nosotros"
              className="border-white text-white hover:bg-white hover:text-[#1A1A1A]"
            >
              Conoce mas sobre nosotros
            </Button>
          </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
