import Image from "next/image";
const stackTops = ["top-20", "top-24", "top-28", "top-32"];
const mobileStackTops = ["top-24", "top-28", "top-32", "top-36"];
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
    image: "/images/beneficios/dos.jpg",
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
  return (
    <section
      id="servicios"
      className="relative overflow-visible bg-[#8D1E29] px-5 py-20 text-[#FFF7EC] md:px-10 lg:px-16"
    >
      {/* Sticker superior izquierdo */}
      <div className="pointer-events-none absolute z-20 -translate-y-[9.5rem] transition-transform duration-300 hover:-translate-y-40 hover:rotate-[7deg] hover:scale-[1.03] md:pointer-events-auto md:-translate-x-10 md:block">
        <img
          src="/images/stickers/recurso 19.svg"
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
        <div className="relative flex flex-col px-2 md:grid md:grid-cols-2 md:gap-6 md:px-0 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              style={{
                zIndex: index + 10,
                top: `calc(5.2rem + ${index * 18}px)`,
              }}
              className="group sticky mx-auto mb-[10vh] h-[430px] w-full  border-[3px] max-w-[420px] overflow-hidden rounded-[1.9rem] border-[#FFF7EC]/90 bg-[#2F241D] shadow-[0_24px_70px_rgba(47,31,20,0.35)] md:relative md:top-auto md:z-auto md:mb-0 md:mx-0 md:h-[430px] md:max-w-none md:rounded-[2rem] lg:h-[420px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 92vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1511]/92 via-[#1D1511]/42 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />

              {/* Contenido alineado */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex h-[225px] flex-col justify-start px-7 pt-8 text-left md:h-[215px] md:px-7 md:pt-8 lg:h-[215px]">
                <h3 className="title-card min-h-[78px] max-w-[92%] !text-[2rem] leading-[0.92] text-[#FFF7EC] [text-shadow:0_4px_16px_rgba(0,0,0,0.55)] md:!text-[2rem] lg:!text-[2rem]">
                  {service.title}
                </h3>

                <p className="text-body -mt-10 max-w-[92%] text-[14.5px] !leading-normal text-[#FFF7EC]/84 opacity-100 transition-all duration-500 ease-out md:mt-3 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {service.description}
                </p>

                <span className="mt-auto h-[3px] w-11 rounded-full bg-[#F3D7BA]/85 transition-all duration-300 md:group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
