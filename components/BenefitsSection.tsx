"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
const services = [
  {
    title: "Fechas especiales",
    description:
      "Aniversarios, celebraciones privadas y regalos pensados para sorprender con un servicio cálido, personalizado y diferente.",
    image: "/images/varias/8.jpg",
  },
  {
    title: "Eventos corporativos",
    description:
      "Activaciones de marca, inauguraciones, congresos y lanzamientos donde el café se convierte en una experiencia memorable para invitados, clientes y equipos.",
    image: "/images/beneficios/dos.JPG",
  },
  {
    title: "Eventos sociales",
    description:
      "Casamientos, cumpleaños y encuentros íntimos acompañados por café de especialidad y baristas profesionales.",
    image: "/images/varias/6.jpg",
  },
  {
    title: "Oficinas con sabor",
    description:
      "Una pausa distinta para agasajar a tu equipo, mejorar la jornada y generar un momento de encuentro dentro del espacio de trabajo.",
    image: "/images/varias/4.jpg",
  },
];

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

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative overflow-visible bg-[#8D1E29] px-5 py-20 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Sticker superior izquierdo */}
      <div className="pointer-events-none absolute z-20 -translate-y-[9.5rem] transition-transform duration-300 hover:-translate-y-40 hover:rotate-[7deg] hover:scale-[1.03] md:pointer-events-auto md:-translate-x-10 md:block">
        <img
          src="/images/stickers/Recurso 3.png"
          alt=""
          className="w-40 -rotate-[20deg] drop-shadow-[0_12px_20px_rgba(47,31,20,0.25)] lg:w-50"
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
          className={`mb-16 grid gap-8 will-change-[transform,opacity] transition-all duration-1000 ease-out lg:grid-cols-[0.9fr_1.1fr] lg:items-end ${
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

        {/* Desktop: grid original */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`will-change-[transform,opacity] transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0"
              }`}
              style={{
                transitionDelay: `${200 + index * 120}ms`,
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Mobile: cards con entrada individual */}
        <div className="grid gap-5 md:hidden">
          {services.map((service, index) => (
            <MobileRevealCard key={service.title}>
              <MobileServiceCard service={service} index={index} />
            </MobileRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="group relative flex h-[460px] flex-col overflow-hidden rounded-[1.4rem] bg-[#14100D] shadow-[0_2px_8px_rgba(0,0,0,0.16),0_22px_45px_-12px_rgba(0,0,0,0.42)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.18),0_34px_70px_-16px_rgba(0,0,0,0.55)] md:h-[460px] lg:h-[480px]">
      {/* Imagen */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-[#100C09]/10 transition-colors duration-500 group-hover:bg-[#100C09]/28" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#14100D_0%,rgba(20,16,13,0.96)_18%,rgba(20,16,13,0.78)_42%,rgba(20,16,13,0.34)_72%,transparent_100%)]" />
      </div>

      {/* Texto desktop */}
      <div className="relative flex flex-col gap-2 bg-[linear-gradient(180deg,#14100D_0%,#0F0B09_100%)] px-6 py-5">
        <span className="h-[2px] w-7 rounded-full bg-[#F3D7BA]/65 transition-all duration-500 group-hover:w-12 group-hover:bg-[#FFF7EC]" />

        <h3 className="title-card !text-xl leading-tight text-[#FFF7EC] transition-colors duration-500 lg:!text-[1.4rem]">
          {service.title}
        </h3>

        <p className="text-body grid text-[14px] !leading-snug text-[#F3D7BA]/75 transition-all duration-500 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] group-hover:text-[#FFF7EC]/88">
          <span className="overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {service.description}
          </span>
        </p>
      </div>
    </article>
  );
}

function MobileServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-[#FFF7EC]/14 bg-[#14100D] shadow-[0_18px_45px_rgba(0,0,0,0.32)]">
      {/* Imagen */}
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#100C09]/10" />

        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_top,#14100D_0%,rgba(20,16,13,0.92)_28%,rgba(20,16,13,0.45)_68%,transparent_100%)]" />
      </div>

      {/* Texto */}
      <div className="bg-[linear-gradient(180deg,#14100D_0%,#0F0B09_100%)] px-6 pb-6 pt-5">
        <span className="mb-4 block h-[2px] w-8 rounded-full bg-[#F3D7BA]/70" />

        <h3 className="title-card !text-[1.45rem] leading-tight text-[#FFF7EC]">
          {service.title}
        </h3>

        <p className="text-body mt-3 text-[14px] !leading-relaxed text-[#F3D7BA]/76">
          {service.description}
        </p>
      </div>
    </article>
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
      className={`will-change-[transform,opacity] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isCardVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-16 scale-[0.96] opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
