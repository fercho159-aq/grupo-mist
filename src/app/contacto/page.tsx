import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos por WhatsApp, teléfono o email. Grupo Mist de México — Av. Toluca 506-7, Álvaro Obregón, CDMX.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-dark to-accent py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contacto
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Estamos listos para atenderte y llevar tu proyecto al siguiente
            nivel
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Dirección</h3>
                    <p className="text-gray-500 mt-1">
                      Av. Toluca 506, Int. 7<br />
                      Col. Olivar de los Padres<br />
                      Álvaro Obregón, CDMX<br />
                      C.P. 01780
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Teléfono</h3>
                    <p className="text-gray-500 mt-1">55 5206 7776</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Email</h3>
                    <p className="text-gray-500 mt-1">contacto@grupomist.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-whatsapp/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.252-.156-2.905.863.863-2.905-.156-.252A8 8 0 1112 20z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">WhatsApp</h3>
                    <p className="text-gray-500 mt-1">55 5206 7776</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Horario</h3>
                    <p className="text-gray-500 mt-1">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábado: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/5215552067776?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Grupo%20Mist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-whatsapp hover:brightness-110 text-white font-semibold px-8 py-4 rounded-lg transition-all text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.252-.156-2.905.863.863-2.905-.156-.252A8 8 0 1112 20z" />
                  </svg>
                  Enviar WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="bg-light rounded-xl overflow-hidden border border-gray-100 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.641!2d-99.2134!3d19.3615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff572f11111%3A0x1111111111111111!2sAv.%20Toluca%20506%2C%20Olivar%20de%20los%20Padres%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001780%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Grupo Mist de México"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
