import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Mist | Construcción, Infraestructura y Servicios Integrales",
    template: "%s | Grupo Mist",
  },
  description:
    "Grupo Mist de México, S.A. de C.V. — Empresa constructora con más de 9 años de experiencia en obra civil, infraestructura hidráulica, energía limpia y servicios integrales para el sector público y privado.",
  keywords: [
    "construcción",
    "obra civil",
    "infraestructura",
    "Grupo Mist",
    "CDMX",
    "licitaciones",
    "mantenimiento",
    "energía limpia",
    "calentadores solares",
  ],
  authors: [{ name: "Grupo Mist de México, S.A. de C.V." }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://grupomist.com",
    siteName: "Grupo Mist",
    title: "Grupo Mist | Construcción, Infraestructura y Servicios Integrales",
    description:
      "Empresa constructora con más de 9 años de experiencia en obra civil, infraestructura hidráulica y servicios integrales.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
