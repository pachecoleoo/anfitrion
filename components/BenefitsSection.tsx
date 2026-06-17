"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
  {
    title: "Fechas especiales",
    description:
      "Aniversarios, celebraciones privadas y regalos pensados para sorprender con un servicio cálido, personalizado y diferente.",
    mobileDescription: "Café y detalles especiales para celebraciones únicas.",
    image: "/images/varias/8.jpg",
  },
  {
    title: "Eventos corporativos",
    description:
      "Activaciones de marca, inauguraciones, congresos y lanzamientos donde el café se convierte en una experiencia memorable para invitados, clientes y equipos.",
    mobileDescription:
      "Una barra de café para marcas, equipos y eventos empresariales.",
    image: "/images/beneficios/dos.JPG",
  },
  {
    title: "Eventos sociales",
    description:
      "Casamientos, cumpleaños y encuentros íntimos acompañados por café de especialidad y baristas profesionales.",
    mobileDescription:
      "Café de especialidad para encuentros sociales y momentos compartidos.",
    image: "/images/varias/6.jpg",
  },
  {
    title: "Oficinas con sabor",
    description:
      "Una pausa distinta para agasajar a tu equipo, mejorar la jornada y generar un momento de encuentro dentro del espacio de trabajo.",
    mobileDescription:
      "Una pausa diferente para disfrutar café en el espacio de trabajo.",
    image: "/images/varias/4.jpg",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="servicios"
      className="relative overflow-visible bg-[#8D1E29] px-5 py-20 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Sticker superior izquierdo */}
      <div className="pointer-events-none absolute z-20 -translate-y-[9.5rem] transition-transform duration-300 hover:-translate-y-40 hover:rotate-[7deg] hover:scale-[1.03] md:pointer-events-auto md:-translate-x-10 md:block">
        <img
          src="/images/stickers/Recurso19.svg"
          alt=""
          className="w-40 -rotate-[20deg] drop-shadow-[0_12px_20px_rgba(47,31,20,0.25)] lg:w-50"
        />
      </div>

      {/* Fondo patrón */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage: "url('/images/branding/Recurso 33.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      /> */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-label mb-5 inline-block uppercase tracking-[0.28em] text-[#F3D7BA]">
              Servicios
            </span>

            <h2 className="title-section max-w-3xl text-[#FFF7EC]">
              Servicios para eventos
            </h2>
          </div>

          <div className="translate-y-5">
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

        {/* Desktop: grid estático original */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>

      {/* Mobile: stack scroll-driven */}
      <div className="md:hidden">
        <MobileCardStack />
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

        {/* Oscurece un poco la imagen en hover */}
        <div className="absolute inset-0 bg-[#100C09]/10 transition-colors duration-500 group-hover:bg-[#100C09]/28" />

        {/* Degradé más largo y suave */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#14100D_0%,rgba(20,16,13,0.96)_18%,rgba(20,16,13,0.78)_42%,rgba(20,16,13,0.34)_72%,transparent_100%)]" />
      </div>

      {/* Texto oscuro, integrado a la imagen */}
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

function MobileCardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = services.length;

  // Wrapper alto: controla la velocidad del scroll-driven animation.
  // Subí este número (vh) para que el ciclo sea más LENTO (hay que scrollear
  // más para pasar las 4 cards). Bajalo para que sea más rápido.
  // 250vh = rápido | 300vh = actual | 400vh = muy lento / cinematográfico.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center -mb-30 -mt-15 overflow-hidden px-6">
        <div className="relative h-[480px] w-full max-w-[470px]">
          {services.map((service, i) => (
            <StackCard
              key={service.title}
              service={service}
              index={i}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StackCard({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Cada card ocupa una "rebanada" igual del progreso total de scroll.
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const isLast = index === total - 1;

  // Offset de reposo: cuánto asoma esta card por debajo de la que tiene
  // delante, como el lomo de un mazo prolijo (estilo MercadoPago).
  // Las cards más al fondo del mazo asoman un poquito más.
  const peekOffsets = [0, 14, 24, 32];
  const restY = peekOffsets[Math.min(index, peekOffsets.length - 1)];

  // Progreso local de "salida": 0 mientras espera o está activa, 0->1
  // mientras se retira limpio hacia arriba y se desvanece.
  const exitProgress = useTransform(scrollYProgress, [start, end], [0, 1], {
    clamp: true,
  });

  // Antes de su turno: en reposo, asomando (restY, escala levemente menor).
  // Llega su turno: sube a y:0, escala 1 (queda al frente, plana, sin rotar).
  // Pasa su turno: sigue subiendo y se desvanece (sale del mazo, no queda de fondo).
  // Punto de inicio del tramo de "reposo" (mientras esta card asoma en el
  // fondo del mazo, antes de que le toque el turno). Para la primera card
  // no hay tramo de reposo previo, así que usamos un punto ligeramente
  // anterior a 0 para evitar valores de entrada duplicados en useTransform.
  const restStart = index === 0 ? -0.001 : Math.max(start - step, 0);

  const y = useTransform(
    scrollYProgress,
    [restStart, start, end],
    [restY, 0, isLast ? 0 : -60],
  );

  const scale = useTransform(
    scrollYProgress,
    [restStart, start, end],
    [1 - Math.min(index, 3) * 0.03, 1, isLast ? 1 : 1],
  );

  const opacity = useTransform(
    exitProgress,
    [0, 0.85, 1],
    isLast ? [1, 1, 1] : [1, 1, 0],
  );

  // z-index: en reposo, las cards de más adelante en el mazo (índice menor)
  // deben tapar a las de más atrás. Pero en cuanto a una card le toca
  // retirarse, su z-index debe caer por debajo de TODAS las demás para que
  // la card entrante no quede tapada durante la transición de salida.
  const restZIndex = total - index;
  const zIndex = useTransform(exitProgress, (v) => (v > 0.05 ? 0 : restZIndex));

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        zIndex,
      }}
      className="absolute inset-x-0 top-0 flex h-[420px] flex-col overflow-hidden rounded-[1.4rem] bg-[#14100D] shadow-[0_2px_8px_rgba(0,0,0,0.18),0_22px_45px_-12px_rgba(0,0,0,0.45)]"
    >
      {/* Imagen: predominante, sin overlay pesado */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,#14100D_0%,rgba(20,16,13,0.90)_30%,rgba(20,16,13,0.45)_65%,transparent_100%)]" />
      </div>

      {/* Franja de texto sólida, separada de la imagen */}
      <div className="flex flex-col gap-2 bg-[linear-gradient(180deg,#14100D_0%,#0F0B09_100%)] px-6 py-5">
        <span className="h-[2px] w-7 rounded-full bg-[#F3D7BA]/65" />

        <h3 className="title-card !text-xl leading-tight text-[#FFF7EC]">
          {service.title}
        </h3>

        <p className="text-body line-clamp-2 text-[14px] !leading-snug text-[#F3D7BA]/75">
          {service.mobileDescription}
        </p>
      </div>
    </motion.article>
  );
}
