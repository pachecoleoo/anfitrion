"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

const services = [
  {
    title: "Fechas especiales",
    formValue: "Fecha especial",
    description:
      "Aniversarios, celebraciones privadas. Servicio cálido, personalizado y diferente.",
    image: "/images/varias/8.jpg",
  },
  {
    title: "Eventos corporativos",
    formValue: "Evento corporativo",
    description:
      "Activaciones de marca, inauguraciones, congresos y lanzamientos. El café como experiencia.",
    image: "/images/beneficios/dos.JPG",
  },
  {
    title: "Eventos sociales",
    formValue: "Evento social",
    description:
      "Casamientos, cumpleaños y encuentros. Acompañados por café de especialidad y baristas profesionales.",
    image: "/images/varias/6.jpg",
  },
  {
    title: "Oficinas con sabor",
    formValue: "Oficina",
    description:
      "Una pausa distinta para agasajar a tu equipo. Un momento de encuentro dentro del espacio laboral.",
    image: "/images/varias/4.jpg",
  },
];

type Service = (typeof services)[number];

export default function BenefitsSection() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (service: Service) => {
    window.dispatchEvent(
      new CustomEvent<string>("anfitrion:service-selected", {
        detail: service.formValue,
      }),
    );

    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative overflow-visible bg-[#8D1E29] px-5 py-20 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Sticker superior izquierdo */}
      <div
        className={`pointer-events-none absolute z-20 -translate-y-[9.5rem] transition-all delay-500 duration-1000 ease-out md:pointer-events-auto md:-translate-x-10 md:block ${
          isVisible
            ? "translate-x-0 scale-100 opacity-100"
            : "-translate-x-12 scale-75 opacity-0"
        }`}
      >
        <img
          src="/images/stickers/Recurso 3.png"
          alt=""
          className={`w-40 drop-shadow-[0_12px_20px_rgba(47,31,20,0.25)] transition-transform delay-500 duration-1000 ease-out lg:w-50 ${
            isVisible ? "-rotate-[20deg]" : "-rotate-[40deg]"
          }`}
        />
      </div>

      {/* Fondo patrón */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage: "url('/images/branding/Recurso 33.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-16 grid gap-8 transition-all duration-1000 ease-out lg:grid-cols-[0.9fr_1.1fr] lg:items-end ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div>
            <span className="text-label mb-5 inline-block uppercase tracking-[0.28em] text-[#F3D7BA]">
              Servicios
            </span>

            <h2 className="title-section max-w-3xl text-[#FFF7EC]">
              Servicios para eventos
            </h2>
          </div>

          <div className="lg:translate-y-5">
            <p className="font-subtitle max-w-2xl text-3xl leading-tight text-[#F3D7BA] md:text-4xl">
              Una experiencia pensada para adaptarse a cada ocasión.
            </p>

            <p className="text-body mt-5 max-w-2xl text-[#FFF7EC]/78">
              Llevamos café de especialidad, baristas profesionales y una barra
              completamente equipada para acompañar eventos, oficinas y
              celebraciones.
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden auto-rows-fr gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`h-full transition-[transform,opacity] duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${200 + index * 120}ms`,
              }}
            >
              <ServiceCard
                service={service}
                onSelect={() => handleSelectService(service)}
              />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid auto-rows-fr gap-5 md:hidden">
          {services.map((service) => (
            <MobileRevealCard key={service.title}>
              <MobileServiceCard
                service={service}
                onSelect={() => handleSelectService(service)}
              />
            </MobileRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  onSelect,
}: {
  service: Service;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Seleccionar ${service.title}`}
      className="group relative flex h-[500px] w-full cursor-pointer flex-col overflow-hidden rounded-[1.4rem] bg-[#14100D] text-left shadow-[0_2px_8px_rgba(0,0,0,0.16),0_22px_45px_-12px_rgba(0,0,0,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F3D7BA]/50"
    >
      {/* Imagen estática */}
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#100C09]/16" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#14100D_0%,rgba(20,16,13,0.96)_18%,rgba(20,16,13,0.78)_42%,rgba(20,16,13,0.34)_72%,transparent_100%)]" />
      </div>

      {/* Contenido */}
      <div className="relative flex h-[215px] w-full flex-none flex-col overflow-hidden bg-[linear-gradient(180deg,#14100D_0%,#0F0B09_100%)] px-6 py-5">
        {/* Título con hover */}
        <h3 className="title-card origin-left !text-xl leading-tight text-[#FFF7EC] transition-transform duration-300 ease-out group-hover:scale-[1.04] lg:!text-[1.4rem]">
          {service.title}
        </h3>

        <p className="font-text mt-3 line-clamp-3 text-[13px] !leading-relaxed text-[#F3D7BA]/75">
          {service.description}
        </p>

        {/* Seleccionar */}
        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col items-start gap-2">
              <span className="font-button text-[8px] uppercase tracking-[0.2em] text-[#FFF7EC]/60 transition-colors duration-300 group-hover:text-[#FFF7EC]">
                Seleccionar servicio
              </span>

              {/* Esta línea se mantiene */}
              <span className="relative h-px w-[135px] overflow-hidden bg-[#FFF7EC]/20">
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#8D1E29] transition-transform duration-2000 ease-out group-hover:scale-x-100" />
              </span>
            </div>

            <span
              aria-hidden="true"
              className="pb-1 text-lg text-[#F3D7BA] transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function MobileServiceCard({
  service,
  onSelect,
}: {
  service: Service;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Seleccionar ${service.title}`}
      className="flex h-[570px] w-full flex-col overflow-hidden rounded-[1.6rem] border border-[#FFF7EC]/14 bg-[#14100D] text-left shadow-[0_18px_45px_rgba(0,0,0,0.28)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F3D7BA]/50"
    >
      {/* Imagen más grande */}
      <div className="relative h-[320px] w-full flex-none overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#100C09]/10" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#14100D_0%,rgba(20,16,13,0.9)_25%,rgba(20,16,13,0.38)_65%,transparent_100%)]" />
      </div>

      {/* Texto */}
      <div className="flex min-h-0 w-full flex-1 flex-col bg-[linear-gradient(180deg,#14100D_0%,#0F0B09_100%)] px-6 pb-6 pt-5">
        <span className="mb-4 block h-[2px] w-8 rounded-full bg-[#F3D7BA]/70" />

        <h3 className="title-card !text-[1.45rem] leading-tight text-[#FFF7EC]">
          {service.title}
        </h3>

        <p className="text-body mt-3 line-clamp-3 text-[14px] !leading-relaxed text-[#F3D7BA]/76">
          {service.description}
        </p>

        <div className="mt-auto pt-5">
          <span className="mb-4 block h-px w-full bg-[#FFF7EC]/12" />

          <div className="flex items-center justify-between gap-4">
            <span className="font-button text-[9px] uppercase tracking-[0.2em] text-[#FFF7EC]/70">
              Seleccionar servicio
            </span>

            <span aria-hidden="true" className="text-lg text-[#F3D7BA]">
              →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function MobileRevealCard({ children }: { children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
          observer.unobserve(card);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`h-full transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isCardVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
