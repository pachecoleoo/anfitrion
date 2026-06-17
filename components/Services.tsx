"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Una experiencia memorable",
    description:
      "Convertimos una pausa de café en un momento especial para invitados, equipos o clientes.",
    image: "/images/beneficios/uno.JPG",
  },
  {
    title: "Servicio pensado a medida",
    description:
      "Adaptamos la propuesta según el tipo de evento, cantidad de personas, espacio y estilo de la marca.",
    image: "/images/varias/11.jpg",
  },
  {
    title: "Montaje ágil y cuidado",
    description:
      "Llegamos con todo lo necesario para que el servicio funcione de forma ordenada, estética y sin complicaciones.",
    image: "/images/beneficios/1.JPG",
  },
  {
    title: "Café de especialidad",
    description:
      "Trabajamos con una propuesta de calidad, cuidando cada detalle: sabor, presentación y atención.",
    image: "/images/beneficios/tres.JPG",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBenefit = benefits[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === benefits.length - 1 ? 0 : current + 1,
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? benefits.length - 1 : current - 1,
    );
  };
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
        rootMargin: "0px 0px -120px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="experiencias"
      className="relative overflow-visible bg-[#353535] px-5 py-24 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Sticker */}
      <img
        src="/images/stickers/Recurso24.svg"
        alt="El servicio como vocación, el café como excusa"
        className="absolute right-4 top-0 z-30  w-44 rotate-[10deg] drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[7deg] hover:scale-[1.03] md:block lg:right-20 lg:w-64"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-14 grid gap-8 transition-all duration-1000 ease-out lg:grid-cols-[0.9fr_1.1fr] lg:items-end ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {" "}
          <div>
            <span className="text-label mb-5 inline-block uppercase tracking-[0.28em] text-[#F3D7BA]">
              Beneficios
            </span>

            <h2 className="title-section max-w-3xl text-[#FFF7EC]">
              Mucho más que servir café
            </h2>
          </div>
          <div className="lg:translate-y-5">
            <p className="font-subtitle max-w-2xl text-3xl leading-tight text-[#F3D7BA] md:text-4xl">
              Una propuesta para recibir, acompañar y sorprender.
            </p>

            <p className="text-body mt-5 max-w-2xl text-[#FFF7EC]/72">
              Anfitrión Café acompaña celebraciones, encuentros corporativos y
              momentos especiales con una propuesta cuidada desde la atención
              hasta la presentación.
            </p>
          </div>
        </div>

        {/* Carrusel principal */}
        {/* Carrusel principal */}
        <div
          className={`overflow-hidden rounded-[2.4rem] border-[3px] border-[#FFF7EC] bg-[#FFF7EC] shadow-[0_28px_90px_rgba(0,0,0,0.35)] transition-all delay-200 duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-[0.95fr_2.05fr]">
            {/* Texto */}
            <div className="relative flex min-h-[360px] flex-col justify-between bg-[#E8DFD2] p-7 md:p-10 lg:min-h-[590px]">
              <div>
                <span className="font-button inline-flex rounded-full border border-[#8D1E29]/20 bg-[#FFF7EC]/70 px-4 py-2 text-xs tracking-[0.2em] text-[#8D1E29]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(benefits.length).padStart(2, "0")}
                </span>

                <h3 className="title-card mt-8 max-w-xl text-[#8D1E29]">
                  {activeBenefit.title}
                </h3>

                <p className="font-subtitle mt-7 max-w-md text-2xl leading-tight text-[#3A2116] md:text-3xl">
                  {activeBenefit.description}
                </p>
              </div>

              {/* Controles */}
              <div className="mt-10 flex items-center justify-between gap-5">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Anterior"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8D1E29]/25 text-[#8D1E29] transition duration-300 hover:-translate-y-1 hover:bg-[#8D1E29] hover:text-[#FFF7EC]"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Siguiente"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8D1E29] text-[#FFF7EC] shadow-[0_14px_35px_rgba(141,30,41,0.32)] transition duration-300 hover:-translate-y-1 hover:bg-[#791E25]"
                  >
                    →
                  </button>
                </div>

                <div className="hidden items-center gap-2 md:flex">
                  {benefits.map((benefit, index) => (
                    <button
                      key={benefit.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Ver ${benefit.title}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-10 bg-[#8D1E29]"
                          : "w-2.5 bg-[#8D1E29]/25 hover:bg-[#8D1E29]/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[360px] overflow-hidden bg-[#3A2116] md:h-[520px] lg:h-[590px]">
              <Image
                key={activeBenefit.image}
                src={activeBenefit.image}
                alt={activeBenefit.title}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="scale-105 object-cover opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] animate-[fadeImage_900ms_ease_forwards]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#3A2116]/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2116]/35 via-transparent to-transparent" />

              {/* Etiqueta inferior */}
              {/* <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 rounded-full border border-[#FFF7EC]/22 bg-[#353535]/55 px-5 py-3 backdrop-blur-md">
                <span className="font-button text-xs uppercase tracking-[0.22em] text-[#FFF7EC]">
                  Anfitrión Café
                </span>

                <span className="text-body text-sm text-[#FFF7EC]/75">
                  Experiencias para eventos
                </span>
              </div> */}
            </div>
          </div>
        </div>
        {/* Mini navegación mobile */}
        <div className="mt-7 flex justify-center gap-2 md:hidden">
          {benefits.map((benefit, index) => (
            <button
              key={benefit.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${benefit.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-10 bg-[#F3D7BA]"
                  : "w-2.5 bg-[#FFF7EC]/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
