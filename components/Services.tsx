"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
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
    image: "/images/beneficios/1.jpg",
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const activeBenefit = benefits[activeIndex];
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextBenefit = () => {
    setActiveIndex((current) =>
      current === benefits.length - 1 ? 0 : current + 1,
    );
  };

  const prevBenefit = () => {
    setActiveIndex((current) =>
      current === 0 ? benefits.length - 1 : current - 1,
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextBenefit();
    }

    if (distance < -minSwipeDistance) {
      prevBenefit();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };
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
      id="beneficios"
      className="relative overflow-visible bg-[#8D1E29] px-5 py-24 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Fondo patrón suave */}
      {/* Fondo patrón */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage: "url('/images/branding/Recurso 33.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Sticker */}
      <img
        src="/images/stickers/Recurso 26.svg"
        alt="El servicio como vocación, el café como excusa"
        className="absolute right-4 -top-4 z-30 w-40 rotate-[10deg] drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[7deg] hover:scale-[1.03] md:w-24 lg:right-20 lg:w-48"
      />
      <img
        src="/images/stickers/Recurso24.svg"
        alt="El servicio como vocación, el café como excusa"
        className="absolute -bottom-8 -left-3 z-30 w-58 -rotate-[6deg] drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:-rotate-[6deg] hover:scale-[1.03] md:-bottom-10 md:left-8 md:w-40 lg:-bottom-10 lg:left-10 lg:w-70"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-14 grid gap-8 transition-all duration-1000 ease-out lg:grid-cols-[0.9fr_1.1fr] lg:items-end ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
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

        {/* Desktop / tablet: selector editorial */}
        <div
          className={`hidden overflow-hidden rounded-[2.2rem] border border-[#FFF7EC]/14 bg-[#18110E]/88 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md transition-all delay-200 duration-1000 ease-out md:grid lg:grid-cols-[0.92fr_1.08fr] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          {/* Lista de beneficios */}
          <div className="flex min-h-[590px] flex-col justify-between border-r border-[#FFF7EC]/10 p-8 lg:p-10">
            <div>
              <span className="font-button inline-flex rounded-full border border-[#F3D7BA]/20 bg-[#FFF7EC]/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#F3D7BA]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(benefits.length).padStart(2, "0")}
              </span>

              <h3 className="title-card mt-8 max-w-xl text-[#FFF7EC]">
                {activeBenefit.title}
              </h3>

              <p className="font-subtitle mt-6 max-w-md text-2xl leading-tight text-[#F3D7BA]/85 md:text-3xl">
                {activeBenefit.description}
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {benefits.map((benefit, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={benefit.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-500 ${
                      isActive
                        ? "border-[#F3D7BA]/35 bg-[#FFF7EC]/10"
                        : "border-[#FFF7EC]/8 bg-transparent hover:border-[#F3D7BA]/25 hover:bg-[#FFF7EC]/6"
                    }`}
                  >
                    <span
                      className={`font-button text-xs tracking-[0.22em] transition-colors duration-500 ${
                        isActive ? "text-[#F3D7BA]" : "text-[#FFF7EC]/38"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`h-[2px] rounded-full transition-all duration-500 ${
                        isActive
                          ? "w-10 bg-[#F3D7BA]"
                          : "w-5 bg-[#FFF7EC]/22 group-hover:w-8 group-hover:bg-[#F3D7BA]/60"
                      }`}
                    />

                    <span
                      className={`title-card !text-[1.1rem] leading-none transition-colors duration-500 ${
                        isActive ? "text-[#FFF7EC]" : "text-[#FFF7EC]/58"
                      }`}
                    >
                      {benefit.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Imagen grande */}
          <div className="relative min-h-[590px] overflow-hidden bg-[#3A2116]">
            {benefits.map((benefit, index) => (
              <Image
                key={benefit.image}
                src={benefit.image}
                alt={benefit.title}
                fill
                sizes="60vw"
                className={`object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-[#100C09]/55 via-[#100C09]/12 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100C09]/50 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between gap-4 rounded-full border border-[#FFF7EC]/16 bg-[#100C09]/45 px-5 py-3 backdrop-blur-md">
              <span className="font-button text-xs uppercase tracking-[0.22em] text-[#F3D7BA]">
                Anfitrión Café
              </span>

              <span className="text-body text-sm text-[#FFF7EC]/70">
                Experiencias para eventos
              </span>
            </div>
          </div>
        </div>

        {/* Mobile: carrusel premium */}
        <div
          className={`transition-all delay-200 duration-1000 ease-out md:hidden ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div
            className="overflow-hidden rounded-[1.8rem] border border-[#FFF7EC]/12 bg-[#18110E] shadow-[0_22px_65px_rgba(0,0,0,0.38)] select-none touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Imagen carrusel */}
            <div
              className="relative h-[370px] overflow-hidden bg-[#100C09]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.image}
                  className={`absolute inset-0 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeIndex === index
                      ? "z-10 translate-x-0 scale-100 opacity-100"
                      : index < activeIndex
                        ? "z-0 -translate-x-8 scale-105 opacity-0"
                        : "z-0 translate-x-8 scale-105 opacity-0"
                  }`}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ))}

              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#18110E] via-[#18110E]/30 to-transparent" />
              <div className="absolute inset-0 z-20 bg-[#100C09]/10" />

              {/* Número */}
              <span className="font-button absolute left-5 top-5 z-30 rounded-full border border-[#FFF7EC]/18 bg-[#100C09]/45 px-3 py-2 text-xs tracking-[0.18em] text-[#F3D7BA] backdrop-blur-md">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(benefits.length).padStart(2, "0")}
              </span>
            </div>

            {/* Texto */}
            <div className="px-6 pb-6 pt-5">
              <span className="mb-4 block h-[2px] w-8 rounded-full bg-[#F3D7BA]/70" />

              <h3
                key={activeBenefit.title}
                className="title-card !text-[1.55rem] leading-tight text-[#FFF7EC]"
              >
                {activeBenefit.title}
              </h3>

              <p
                key={activeBenefit.description}
                className="text-body mt-3 min-h-[72px] text-[15px] !leading-relaxed text-[#F3D7BA]/76"
              >
                {activeBenefit.description}
              </p>

              {/* Dots */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {benefits.map((benefit, index) => (
                  <span
                    key={benefit.title}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-[#F3D7BA]"
                        : "w-2.5 bg-[#FFF7EC]/22"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="text-body mt-4 text-center text-xs uppercase tracking-[0.18em] text-[#FFF7EC]/38">
            Deslizá para ver más
          </p>
        </div>
      </div>
    </section>
  );
}
