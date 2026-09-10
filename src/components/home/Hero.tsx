import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const WHATSAPP_URL =
  'https://wa.me/5215552067776?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n';

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center md:min-h-screen">
      {/* Background */}
      <Image
        src="/images/hero/hero-home.jpg"
        alt="Construcción e infraestructura"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      {/* Content */}
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="animate-fade-in-up mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Grupo Mist de Mexico, S.A. de C.V.
          </span>

          {/* Heading */}
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            Adaptamos nuestras soluciones a tus requerimientos
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up mb-8 max-w-2xl text-lg text-white/80 md:text-xl" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            Construccion, infraestructura y servicios integrales para el sector
            publico y privado
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Button variant="secondary" size="lg" href="/servicios">
              Conoce nuestros servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={WHATSAPP_URL}
              className="border-white text-white hover:bg-white hover:text-[#1A1A1A]"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-white/60 uppercase">
            Scroll
          </span>
          <svg
            className="h-6 w-6 animate-bounce text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
