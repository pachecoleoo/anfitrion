import Image from "next/image";
import BrandButton from "@/components/BrandButton";

const benefits = [
  {
    title: "Una experiencia memorable",
    description:
      "Convertimos una pausa de café en un momento especial para invitados, equipos o clientes.",
    image: "/images/beneficios/uno.jpg",
  },
  {
    title: "Servicio pensado a medida",
    description:
      "Adaptamos la propuesta según el tipo de evento, cantidad de personas, espacio y estilo de la marca.",
    image: "/images/beneficios/dos.jpg",
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
    image: "/images/beneficios/tres.jpg",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="experiencias"
      className="relative overflow-visible bg-[#8D1E29] px-5 py-20 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Sticker superior izquierdo */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Sticker superior izquierdo */}
        <div className="pointer-events-none absolute -translate-x-10  -translate-y-38 z-20  md:block">
          <img
            src="/images/stickers/recurso 19.svg"
            alt=""
            className="w-40 -rotate-[20deg]  drop-shadow-[0_12px_20px_rgba(47,31,20,0.25)] lg:w-50"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="text-label mb-5 inline-block uppercase tracking-[0.28em] text-[#F3D7BA]">
                Beneficios
              </span>

              <h2 className="title-section max-w-3xl text-[#FFF7EC]">
                Mucho más que servir café
              </h2>
            </div>

            <div className="  translate-y-5 ">
              <p className="font-subtitle max-w-2xl text-3xl leading-tight text-[#F3D7BA] md:text-4xl">
                Creamos una experiencia cálida, estética y recordable para cada
                evento.
              </p>

              <p className="text-body mt-5 max-w-2xl text-[#FFF7EC]/78">
                Anfitrión Café acompaña celebraciones, encuentros corporativos y
                momentos especiales con una propuesta cuidada desde la atención
                hasta la presentación.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {" "}
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group relative h-[520px] overflow-hidden rounded-[2rem] border-[3px] border-[#FFF7EC] bg-[#3A2116] shadow-[0_14px_32px_rgba(47,31,20,0.18)] md:h-[430px] lg:h-[420px]"
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Sombra base para lectura del título */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                {/* Sombra extra en la zona media */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28),transparent_58%)]" />

                {/* Oscurece un poco más en hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 md:group-hover:bg-black/50" />

                {/* Contenido */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex h-[230px] flex-col items-center justify-start px-6 pt-8 text-center  -translate-y-20  md:h-[215px] md:px-7 md:pt-0 ">
                  <h3 className="title-card flex min-h-[76px] max-w-[95%] items-center justify-center !text-3xl leading-none text-[#FFF7EC] [text-shadow:0_4px_14px_rgba(0,0,0,0.65)]  translate-y-15  md:-translate-y-20 md:!text-3xl lg:!text-[2rem]">
                    {benefit.title}
                  </h3>

                  <p className="text-body -mt-4 md:mt-1  max-w-[92%] translate-y-15  md:-translate-y-20  text-center text-[15px] !leading-normal text-[#FFF7EC]/88 opacity-100 transition-all duration-500 ease-out  md:opacity-0 md:group-hover:-translate-y-20 md:group-hover:opacity-100">
                    {benefit.description}
                  </p>

                  <span className="absolute bottom-0 translate-y-12 left-1/2 z-20  h-[4px] w-12 -translate-x-1/2 rounded-full bg-[#F3D7BA]/85 origin-center transition-transform duration-300 md:group-hover:scale-x-150 hidden md:block" />
                </div>
              </article>
            ))}
          </div>

          {/* <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-[#FFF7EC]/20 bg-[#3A2116]/25 p-7 backdrop-blur-sm md:flex-row md:items-center md:p-9">
          <div>
            <p className="font-subtitle text-3xl leading-tight text-[#F3D7BA] md:text-4xl">
              ¿Querés sumar café a tu evento?
            </p>

            <p className="text-body mt-3 max-w-2xl text-[#FFF7EC]/75">
              Contanos la fecha, el lugar y la cantidad estimada de invitados.
              Te ayudamos a armar una propuesta acorde.
            </p>
          </div>

          <BrandButton href="#contacto" className="shrink-0">
            Consultar
          </BrandButton>
        </div> */}
        </div>{" "}
      </div>
    </section>
  );
}
