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
    image: "/images/beneficios/uno.jpg",
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

export default function Services() {
  return (
    <section
      id="experiencias"
      className="relative overflow-visible bg-[#E8DFD2] px-5 py-24 text-[#3A2116] md:px-10 lg:px-16"
    >
      {/* Fondo patrón
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "url('/images/branding/Recurso 33.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      /> */}

      {/* Sticker */}
      <img
        src="/images/stickers/Recurso 24.svg"
        alt="El servicio como vocación, el café como excusa"
        className="absolute right-10 top-5 z-50  w-60 -translate-x-5 -translate-y-5 rotate-[10deg] drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:-translate-y-8 hover:rotate-[7deg] hover:scale-[1.03] md:block lg:right-24 lg:w-80"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-label mb-5 inline-block uppercase tracking-[0.28em] text-[#8D1E29]">
              Beneficios
            </span>

            <h2 className="title-section max-w-3xl text-[#8D1E29]">
              Mucho más que servir café
            </h2>
          </div>

          <div className="lg:translate-y-5">
            <p className="font-subtitle max-w-2xl text-3xl leading-tight text-[#7A4A26] md:text-4xl">
              Creamos una experiencia cálida, estética y recordable para cada
              evento.
            </p>

            <p className="text-body mt-5 max-w-2xl text-[#3A2116]/78">
              Anfitrión Café acompaña celebraciones, encuentros corporativos y
              momentos especiales con una propuesta cuidada desde la atención
              hasta la presentación.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.2rem] border-[3px] border-[#FFF7EC] bg-[#353535] shadow-[0_24px_80px_rgba(47,31,20,0.22)]">
          {benefits.map((benefit) => (
            <details
              key={benefit.title}
              className="group border-b border-[#FFF7EC]/14 last:border-b-0"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_42px] items-center gap-3 px-5 py-7 transition-all duration-300 md:grid-cols-[1fr_48px] md:px-8 md:py-8">
                <h3 className="title-card text-[#FFF7EC] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#791E25] ">
                  {benefit.title}
                </h3>

                <span className="font-title flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF7EC]/10 text-3xl leading-none text-[#FFF7EC] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8D1E29] group-hover:text-[#FFF7EC] group-open:rotate-45 group-open:bg-[#8D1E29] group-open:text-[#FFF7EC]">
                  +
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-open:grid-rows-[1fr] group-open:opacity-100">
                <div className="overflow-hidden">
                  <div className="px-5 pb-12 pt-0 md:px-8 lg:px-12">
                    <div className="grid overflow-hidden rounded-[2rem] border border-[#FFF7EC]/18 bg-[#2B2F2F] shadow-[0_18px_45px_rgba(0,0,0,0.22)] lg:grid-cols-4">
                      {/* Texto - 1 cuarto */}
                      <div className="flex min-h-[260px] items-center bg-[#353535] p-7 md:min-h-[320px] md:p-9 lg:col-span-1 lg:min-h-[500px]">
                        <p className="font-subtitle translate-y-6 text-2xl leading-tight text-[#FFF7EC] opacity-0 transition-all delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:translate-y-0 group-open:opacity-100 md:text-3xl lg:text-[2rem]">
                          {benefit.description}
                        </p>
                      </div>

                      {/* Imagen - 3 cuartos */}
                      <div className="relative h-[320px] bg-[#3A2116] md:h-[430px] lg:col-span-3 lg:h-[500px]">
                        <Image
                          src={benefit.image}
                          alt={benefit.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 75vw"
                          className="scale-105 object-cover opacity-0 transition-all delay-300 duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-open:scale-100 group-open:opacity-100"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#353535]/35 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
