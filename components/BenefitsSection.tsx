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
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className=" mx-5  md:mx-1 group relative h-[520px] overflow-hidden rounded-[2rem] border-[3px] border-[#FFF7EC] bg-[#3A2116] shadow-[0_14px_32px_rgba(47,31,20,0.18)] md:h-[430px] lg:h-[420px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Sombra base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              {/* Sombra extra */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28),transparent_58%)]" />

              {/* Oscurece en hover */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 md:group-hover:bg-black/50" />

              {/* Contenido */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex h-[230px] -translate-y-20 flex-col items-center justify-start px-6 pt-8 text-center md:h-[215px] md:px-7 md:pt-0">
                <h3 className="title-card flex min-h-[76px] max-w-[95%] translate-y-15 items-center justify-center !text-3xl leading-none text-[#FFF7EC] [text-shadow:0_4px_14px_rgba(0,0,0,0.65)] md:-translate-y-20 md:!text-3xl lg:!text-[2rem]">
                  {service.title}
                </h3>

                <p className="text-body -mt-4 max-w-[92%] translate-y-15 text-center text-[15px] !leading-normal text-[#FFF7EC]/88 opacity-100 transition-all duration-500 ease-out md:mt-1 md:-translate-y-20 md:opacity-0 md:group-hover:-translate-y-20 md:group-hover:opacity-100">
                  {service.description}
                </p>

                <span className="absolute bottom-0 left-1/2 z-20 hidden h-[4px] w-12 -translate-x-1/2 translate-y-12 origin-center rounded-full bg-[#F3D7BA]/85 transition-transform duration-300 md:block md:group-hover:scale-x-150" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
