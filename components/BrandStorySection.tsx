"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BrandButton from "@/components/BrandButton";

export default function BrandStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative overflow-hidden bg-[#E8DFD2] px-5 py-20 text-[#3A2116] md:px-10 md:py-24 lg:px-16"
    >
      {/* Fondo patrón */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42] md:opacity-[0.55]"
        style={{
          backgroundImage: "url('/images/services/Recurso 34.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Luces suaves */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#8D1E29]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F3D7BA]/45 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* MOBILE */}
        <div className="lg:hidden">
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-label mb-6 inline-flex rounded-full border border-[#8D1E29]/15 bg-[#FFF7EC]/95 px-5 py-2 uppercase tracking-[0.28em] text-[#8D1E29] shadow-[0_10px_25px_rgba(47,31,20,0.08)]">
              Nuestra esencia
            </span>

            <h2 className="title-section max-w-3xl !leading-[0.86] text-[#8D1E29]">
              El café como excusa para encontrarnos
            </h2>

            <p className="font-subtitle mt-6 max-w-2xl text-3xl leading-tight text-[#7A4A26]">
              Una barra móvil pensada para recibir, acompañar y transformar cada
              evento en una experiencia.
            </p>
          </div>

          {/* Imagen mobile */}
          <div
            className={`relative mt-10 transition-all delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#8D1E29]/10 bg-[#FFF7EC]/35" />

              <div className="group relative overflow-hidden rounded-[1.7rem] border-[4px] border-[#FFF7EC] bg-[#14100D] shadow-[0_20px_55px_rgba(47,31,20,0.22)]">
                <Image
                  src="/images/historia/historia1.JPG"
                  alt="Barra móvil de café Anfitrión"
                  width={900}
                  height={1100}
                  className="h-[390px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/55 via-[#14100D]/8 to-transparent" />
              </div>

              <img
                src="/images/stickers/Recurso21.svg"
                alt=""
                className={`pointer-events-none absolute -right-3 -top-7 w-28 drop-shadow-[0_14px_24px_rgba(47,31,20,0.28)] transition-all delay-500 duration-700 ease-out ${
                  isVisible
                    ? "rotate-12 scale-100 opacity-100"
                    : "-rotate-6 scale-75 opacity-0"
                }`}
              />
            </div>

            {/* Slogan debajo de la imagen */}
            <div className="relative z-10 mx-auto -mt-7 w-[88%] rounded-[1.4rem] border border-[#FFF7EC]/18 bg-[#14100D]/92 px-5 py-4 shadow-[0_16px_35px_rgba(0,0,0,0.22)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <span className="font-button text-[11px] uppercase tracking-[0.22em] text-[#F3D7BA]">
                  Anfitrión Café
                </span>

                <span className="text-body text-right text-sm leading-snug text-[#FFF7EC]/75">
                  Experiencias para eventos
                </span>
              </div>
            </div>
          </div>

          {/* Texto mobile */}
          <div
            className={`mt-9 rounded-[1.6rem] border border-[#8D1E29]/10 bg-[#FFF7EC]/32 p-6 backdrop-blur-sm transition-all delay-300 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="space-y-5">
              <p className="text-body text-[#3A2116]/90">
                Creemos que Anfitrión Café no es solo una bebida: es una pausa,
                una conversación y una forma de recibir mejor.
              </p>

              <p className="text-body text-[#3A2116]/90">
                Llevamos una barra móvil de café a eventos, oficinas y
                celebraciones para crear momentos cálidos, cuidados y
                memorables.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <BrandButton href="#contacto">Consultar evento</BrandButton>

              <a
                href="#servicios"
                className="font-button inline-flex items-center justify-center rounded-full border border-[#8D1E29]/25 px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#8D1E29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8D1E29] hover:text-[#FFF7EC]"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden gap-12 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Imagen desktop */}
          <div
            className={`relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-x-0 translate-y-0 opacity-100"
                : "-translate-x-12 translate-y-8 opacity-0"
            }`}
          >
            <div className="lg:-translate-y-12">
              <span className="text-label mb-8 inline-flex rounded-full border border-[#8D1E29]/15 bg-[#FFF7EC]/95 px-5 py-2 uppercase tracking-[0.28em] text-[#8D1E29] shadow-[0_10px_25px_rgba(47,31,20,0.08)]">
                Nuestra esencia
              </span>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.4rem] border border-[#8D1E29]/12 bg-[#FFF7EC]/35" />

                <div className="group relative overflow-hidden rounded-[2rem] border-[5px] border-[#FFF7EC] bg-[#14100D] shadow-[0_24px_70px_rgba(47,31,20,0.22)]">
                  <Image
                    src="/images/historia/historia1.JPG"
                    alt="Barra móvil de café Anfitrión"
                    width={900}
                    height={1100}
                    className="h-[560px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/70 via-[#14100D]/12 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14100D]/28 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between gap-4 rounded-full border border-[#FFF7EC]/16 bg-[#100C09]/45 px-5 py-3 backdrop-blur-md">
                  <span className="font-button text-xs uppercase tracking-[0.22em] text-[#F3D7BA]">
                    Anfitrión Café
                  </span>

                  <span className="text-body text-sm text-[#FFF7EC]/70">
                    Experiencias para eventos
                  </span>
                </div>
              </div>

              <img
                src="/images/stickers/Recurso21.svg"
                alt=""
                className={`pointer-events-none absolute -right-5 -top-9 w-44 drop-shadow-[0_14px_24px_rgba(47,31,20,0.28)] transition-all delay-500 duration-700 ease-out ${
                  isVisible
                    ? "rotate-12 scale-100 opacity-100"
                    : "-rotate-6 scale-75 opacity-0"
                }`}
              />
            </div>
          </div>

          {/* Texto desktop */}
          <div
            className={`transition-all delay-200 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-12 translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-[#8D1E29]/10 bg-[#FFF7EC]/28 p-10 backdrop-blur-sm">
              <h2 className="title-section max-w-3xl !leading-[0.82] text-[#8D1E29]">
                El café como excusa para encontrarnos
              </h2>

              <p className="font-subtitle mt-6 max-w-2xl text-4xl leading-tight text-[#7A4A26]">
                Una barra móvil pensada para recibir, acompañar y transformar
                cada evento en una experiencia.
              </p>

              <div className="mt-7 max-w-2xl space-y-5">
                <p className="text-body text-[#3A2116]/90">
                  Creemos que Anfitrión Café no es solo una bebida: es una
                  pausa, una conversación y una forma de recibir mejor.
                </p>

                <p className="text-body text-[#3A2116]/90">
                  Llevamos una barra móvil de café a eventos, oficinas y
                  celebraciones para crear momentos cálidos, cuidados y
                  memorables. Cada servicio está pensado para acompañar el
                  encuentro, sumar identidad al evento y hacer que cada invitado
                  se sienta bienvenido.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <BrandButton href="#contacto">Consultar evento</BrandButton>

                <a
                  href="#servicios"
                  className="font-button inline-flex items-center justify-center rounded-full border border-[#8D1E29]/25 px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#8D1E29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8D1E29] hover:text-[#FFF7EC]"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
