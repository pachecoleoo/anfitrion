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
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#E8DFD2] px-5 py-24 text-[#3A2116] md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Imagen */}
        <div
          className={`relative order-2 transition-all duration-1000 ease-out lg:order-1 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-[2rem] border-[4px] border-[#FFF7EC] shadow-[0_18px_45px_rgba(47,31,20,0.18)]">
            <Image
              src="/images/historia/historia1.JPG"
              alt="Barra móvil de café Anfitrión"
              width={900}
              height={1100}
              className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2116]/45 via-transparent to-transparent" />
          </div>

          {/* Sticker */}
          <img
            src="/images/stickers/Recurso 5.png"
            alt=""
            className={`pointer-events-none absolute -right-6 -top-8 w-32 drop-shadow-[0_12px_20px_rgba(47,31,20,0.25)] transition-all duration-700 ease-out md:w-40 ${
              isVisible
                ? "rotate-12 scale-100 opacity-100 delay-500"
                : "-rotate-6 scale-75 opacity-0"
            }`}
          />
        </div>

        {/* Texto */}
        <div
          className={`order-1 transition-all duration-1000 ease-out lg:order-2 ${
            isVisible
              ? "translate-x-0 opacity-100 delay-200"
              : "translate-x-16 opacity-0"
          }`}
        >
          <span className="text-label mb-5 inline-block uppercase tracking-[0.28em] text-[#8D1E29]">
            Nuestra esencia
          </span>

          <h2 className="title-section max-w-3xl !leading-[0.8] text-[#8D1E29]">
            El café como excusa para encontrarnos
          </h2>

          <p className="font-subtitle mt-6 max-w-2xl text-3xl leading-tight text-[#7A4A26] md:text-4xl">
            Una barra móvil pensada para recibir, acompañar y transformar cada
            evento en una experiencia.
          </p>

          <div className="mt-7 max-w-2xl space-y-5">
            <p className="text-body text-[#3A2116]">
              Creemos que Anfitrión Café no es solo una bebida: es una pausa,
              una conversación y una forma de recibir mejor.
            </p>

            <p className="text-body text-[#3A2116]">
              Llevamos una barra móvil de café a eventos, oficinas y
              celebraciones para crear momentos cálidos, cuidados y memorables.
              Cada servicio está pensado para acompañar el encuentro, sumar
              identidad al evento y hacer que cada invitado se sienta
              bienvenido.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <BrandButton href="#contacto">Consultar evento</BrandButton>

            <a
              href="#servicios"
              className="font-button inline-flex items-center justify-center rounded-full border border-[#8D1E29]/25 px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#8D1E29] transition-colors duration-300 hover:bg-[#8D1E29] hover:text-[#FFF7EC]"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
