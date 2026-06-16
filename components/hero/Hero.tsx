import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#2B1A10]">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/video3.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[#2B1A10]/55" />

      {/* Capas cálidas
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B1A10]/90 via-[#2B1A10]/55 to-[#2B1A10]/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#2B1A10]/75 to-transparent" /> */}

      {/* Sello */}
      <Image
        src="/images/hero/Recurso 29.png"
        alt="Sello Anfitrión Café"
        width={220}
        height={220}
        priority
        className="pointer-events-none absolute right-10 bottom-16 z-10 hidden h-auto w-36 rotate-[8deg] drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:block lg:right-18 lg:bottom-18 lg:w-35"
      />

      {/* Contenido */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-5 pt-24 pb-20 md:px-10 lg:px-16">
        <div className="max-w-5xl">
          <h1 className=" my-10 mx-5 font-title max-w-3xl text-[3.8rem] leading-[0.75] text-[#FFF7EC] md:text-[4.8rem] lg:text-[5.2rem]">
            Hacemos de tu evento <br /> una experiencia
          </h1>

          <p className="font-subtitle mx-5 mt-7 max-w-2xl text-2xl leading-tight text-[#E8DFD2] md:text-3xl">
            Café de especialidad para recibir, <br /> acompañar y crear momentos
            memorables.
          </p>

          {/* <p className="text-body mx-5 mt-5 max-w-2xl text-[#FFF7EC]/85 md:text-lg">
            Llevamos baristas profesionales y <br /> una barra completamente
            equipada a eventos, <br />
            oficinas y celebraciones.
          </p> */}

          <div className="  md:block mt-9 flex mx-5 flex-col gap-4 sm:flex-row">
            <Link
              href="#contacto"
              className="  mx-1 font-button inline-flex items-center justify-center rounded-full bg-[#8D1E29] px-8 py-4 text-center text-xs uppercase tracking-[0.22em] text-[#FFF7EC] shadow-[0_14px_35px_rgba(141,30,41,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#701521]"
            >
              Solicitar presupuesto
            </Link>

            <Link
              href="#servicios"
              className=" mx-1 font-button inline-flex items-center justify-center rounded-full border border-[#FFF7EC]/45 bg-[#FFF7EC]/10 px-8 py-4 text-center text-xs uppercase tracking-[0.22em] text-[#FFF7EC] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#FFF7EC] hover:text-[#8D1E29]"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
