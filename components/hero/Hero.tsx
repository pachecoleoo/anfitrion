import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2B1A10] pt-24">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/video3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Capas oscuras */}
      {/* <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 to-transparent" /> */}

      {/* Sello sutil */}
      {/* <Image
        src="/images/branding/Recurso 28.png"
        alt="Sello Anfitrión Café"
        width={380}
        height={380}
        className="pointer-events-none absolute right-8 top-32 hidden rotate-12 opacity-15 md:block lg:right-20"
        priority
      /> */}

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-8">
        <div className="max-w-5xl">
          <p className="text-label mb-6 text-[#E8DFD2]">Barra móvil de café</p>

          <h1 className="font-title text-8xl text-white">
            Hacemos de tu evento <br /> una experiencia
          </h1>

          <p className="text-body mt-8 max-w-2xl text-white/85 md:text-xl">
            Llevamos café de especialidad, baristas profesionales y una barra
            completamente equipada a eventos, oficinas y celebraciones.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contacto"
              className="font-button bg-[#8D1E29] px-8 py-4 text-center text-sm uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-[#701521]"
            >
              Solicitar presupuesto
            </Link>

            <Link
              href="#servicios"
              className="font-button border border-white/45 px-8 py-4 text-center text-sm uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#8D1E29]"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/70 md:flex">
        <span className="text-label text-[0.65rem] tracking-[0.35em]">
          Scroll
        </span>
        <span className="h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}
