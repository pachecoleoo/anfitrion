import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100lvh] min-h-[100lvh] w-full overflow-hidden bg-[#24140D] md:h-screen md:min-h-screen"
    >
      {/* Video responsive */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Mobile */}
        <source
          src="/videos/videomobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />

        {/* Tablet y desktop */}
        <source
          src="/videos/video3.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
      </video>

      {/* Oscurecimiento general */}
      <div className="absolute inset-0 bg-[#24140D]/25 md:bg-[#24140D]/5" />

      {/* Gradiente mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B0E08]/10 via-transparent to-[#160B06]/95 md:hidden" />

      {/* Gradiente desktop */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#24140D]/80 via-[#24140D]/35 to-transparent md:block" />

      {/* Sello desktop */}
      <Image
        src="/images/hero/Recurso 29.png"
        alt="Sello Anfitrión Café"
        width={220}
        height={220}
        priority
        className="pointer-events-none absolute bottom-16 right-10 z-10 hidden h-auto w-36 rotate-[8deg] drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:block lg:bottom-20 lg:right-16 lg:w-40"
      />

      {/* MOBILE */}
      <div className="relative z-20 flex h-full min-h-0 items-end px-6 pb-[calc(3rem+env(safe-area-inset-bottom))] pt-32 md:hidden">
        <div className="w-full pb-2">
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-[#F3D7BA]">
            Barra móvil de café
          </span>

          <h1 className="mt-4 max-w-[330px] font-title text-[clamp(2.75rem,13vw,3.45rem)] leading-[0.84] tracking-[-0.02em] text-[#FFF7EC]">
            Tu evento, al mejor servicio.
          </h1>

          <div className="mt-10">
            <Link
              href="#contacto"
              className="group inline-flex flex-col items-start gap-3"
            >
              <span className="font-button inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#FFF7EC] transition-colors duration-300 sm:gap-4 sm:text-[11px] sm:tracking-[0.26em]">
                Consultar disponibilidad
                <ArrowIcon />
              </span>

              <span className="relative h-[2px] w-full overflow-hidden bg-[#FFF7EC]/25">
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#8D1E29] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* TABLET Y DESKTOP */}
      <div className="relative z-20 mx-auto hidden h-full max-w-7xl items-center px-10 pt-24 md:flex lg:px-16">
        <div className="max-w-4xl">
          <span className="font-button text-xs uppercase tracking-[0.3em] text-[#F3D7BA]">
            Barra móvil de café
          </span>

          <h1 className="mt-5 max-w-3xl font-title text-[4.8rem] leading-[0.78] text-[#FFF7EC] lg:text-[5.4rem]">
            Hacemos de tu evento una experiencia
          </h1>

          <div className="mt-10">
            <Link
              href="#contacto"
              className="group inline-flex flex-col items-start gap-3"
            >
              <span className="font-button inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.26em] text-[#FFF7EC] transition-colors duration-300">
                Consultar disponibilidad
                <ArrowIcon />
              </span>

              <span className="relative h-[2px] w-full overflow-hidden bg-[#FFF7EC]/25">
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#8D1E29] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 flex-none transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8D1E29]"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
