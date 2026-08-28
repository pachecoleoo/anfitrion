"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const brands = [
  {
    name: "Vista Oil & Gas",
    logo: "/images/marcas/vista.png",
  },
  {
    name: "BA",
    logo: "/images/marcas/BA.png",
  },
  {
    name: "Sion",
    logo: "/images/marcas/sion.png",
  },
  {
    name: "Leos Fiers",
    logo: "/images/marcas/leosfier2.png",
  },
  {
    name: "Terraza",
    logo: "/images/marcas/terraza4.png",
  },
  {
    name: "Malma",
    logo: "/images/marcas/malma.png",
  },
  {
    name: "Amor",
    logo: "/images/marcas/amor1.png",
  },
  {
    name: "Royal",
    logo: "/images/marcas/royal2.png",
  },
  {
    name: "Wow",
    logo: "/images/marcas/wow.png",
  },
];

export default function TrustedBrands() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      const track = trackRef.current;

      if (track) {
        const loopWidth = track.scrollWidth / 2;

        if (!draggingRef.current) {
          positionRef.current -= 0.45;
        }

        if (loopWidth > 0) {
          if (positionRef.current <= -loopWidth) {
            positionRef.current += loopWidth;
          }

          if (positionRef.current > 0) {
            positionRef.current -= loopWidth;
          }
        }

        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    lastPointerXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const movement = event.clientX - lastPointerXRef.current;

    positionRef.current += movement;
    lastPointerXRef.current = event.clientX;
  }

  function handlePointerEnd(event: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section
      id="marcas"
      className="relative overflow-hidden bg-[#353535] pb-24 pt-20 md:py-20"
    >
      {/* Fondo */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Luz central */}

        <div className="absolute left-1/2 top-1/2 h-80 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#791E25]/10 blur-[140px]" />

        {/* Destello izquierdo */}

        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#A41F25]/10 blur-[110px]" />

        {/* Destello derecho */}

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#791E25]/12 blur-[120px]" />

        {/* Línea de luz */}

        <div className="absolute left-1/2 top-0 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#A41F25]/35 to-transparent" />

        {/* Textura mínima */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(232,219,202,0.7) 0.6px, transparent 0.8px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative">
        {/* Encabezado */}

        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-[#E8DBCA]/60">
            Experiencias compartidas
          </span>

          <h2 className="mt-5 font-title text-[3.2rem] leading-[0.88] tracking-[-0.02em] text-[#E8DBCA] md:text-[4.8rem]">
            Marcas que confiaron
            <span className="text-[#A41F25]"> en nosotros</span>
          </h2>
        </div>

        {/* Carrusel infinito */}

        <div
          className="brands-marquee relative mt-14 overflow-hidden py-8 md:mt-16 md:py-10"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {/* Desvanecimientos laterales */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#353535] to-transparent md:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#353535] to-transparent md:w-40" />

          {/* Track duplicado para crear el bucle infinito */}

          <div
            ref={trackRef}
            className="flex w-max select-none items-center will-change-transform"
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                aria-hidden={index >= brands.length}
                className="group relative flex h-24 w-[46vw] flex-none items-center justify-center px-5 sm:w-[34vw] md:h-28 md:w-[24vw] md:px-8 lg:w-[18vw]"
              >
                <span className="pointer-events-none absolute inset-5 rounded-full bg-[#A41F25]/0 blur-2xl transition-colors duration-500 md:group-hover:bg-[#A41F25]/15" />

                <Image
                  src={brand.logo}
                  alt={index >= brands.length ? "" : `Logo de ${brand.name}`}
                  width={220}
                  height={110}
                  draggable={false}
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 210px"
                  className="pointer-events-none relative z-10 max-h-[78px] w-full select-none object-contain opacity-100 grayscale-0 transition-all duration-500 md:max-h-[96px] md:opacity-70 md:grayscale md:group-hover:scale-105 md:group-hover:opacity-100 md:group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enlace */}

        <div className="mt-8 flex justify-center px-6 md:mt-10">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-4 font-button text-[10px] uppercase tracking-[0.22em] text-[#E8DBCA]/65 transition-colors duration-300 hover:text-[#E8DBCA]"
          >
            <span>Sumá tu marca a esta experiencia</span>

            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#E8DBCA]/20 bg-[#E8DBCA]/5 text-[#E8DBCA] transition-all duration-300 group-hover:border-[#A41F25] group-hover:bg-[#A41F25]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />

                <path
                  d="M14 7L19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
