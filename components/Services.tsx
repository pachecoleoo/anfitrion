const services = [
  {
    number: "01",
    title: "Eventos corporativos",
    description:
      "Activaciones de marca, inauguraciones, congresos y lanzamientos donde el café se convierte en una experiencia memorable para invitados, clientes y equipos.",
    image: "/images/services/services.jpg",
  },
  {
    number: "02",
    title: "Fechas especiales",
    description:
      "Aniversarios, celebraciones privadas y regalos pensados para sorprender con un servicio cálido, personalizado y diferente.",
    image: "/images/services/especiales-banner.jpg",
  },
  {
    number: "03",
    title: "Oficinas con sabor",
    description:
      "Una pausa distinta para agasajar a tu equipo, mejorar la jornada y generar un momento de encuentro dentro del espacio de trabajo.",
    image: "/images/services/oficina-banner.jpg",
  },
  {
    number: "04",
    title: "Eventos sociales",
    description:
      "Casamientos, cumpleaños y encuentros íntimos acompañados por café de especialidad y baristas profesionales.",
    image: "/images/services/sociales-banner.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative z-5 overflow-visible py-16">
      {/* Capa bordó */}
      <div className="absolute inset-0 bg-[#8D1E29] z-5" />
      {/* Sticker decorativo desktop */}
      <img
        src="/images/stickers/Recurso 24.svg"
        alt="El servicio como vocación, el café como excusa"
        className="pointer-events-none absolute right-10 top-0 z-40 hidden w-40 -translate-y-[20]  -translate-x-[20]  rotate-[10deg] drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] md:block lg:right-24 lg:w-80"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <p className="text-label mb-4 text-[#E8DFD2]">Servicios</p>

        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="title-section max-w-[360px] text-white md:max-w-none">
            Servicios para eventos
          </h2>

          {/* Sticker mobile */}
          <img
            src="/images/stickers/Recurso 24.svg"
            alt="El servicio como vocación, el café como excusa"
            className="mt-1 w-40 shrink-0 rotate-[10deg] drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)] md:hidden"
          />
        </div>

        <p className="text-body mb-16 max-w-2xl text-white/85">
          Una experiencia pensada para adaptarse a cada ocasión.
        </p>

        <div className="border-t border-white/20">
          {services.map((service) => (
            <details
              key={service.title}
              className="group border-b border-white/20"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[64px_1fr_32px] items-center gap-0 py-8 text-left transition-all duration-300 hover:bg-white/[0.04] hover:px-4">
                <span className=" text-xl text-white/45 transition-colors duration-300 group-hover:text-white/80">
                  {service.number}
                </span>

                <h3 className="title-card text-white/75 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white group-open:text-white">
                  {service.title}
                </h3>

                <span className="font-title text-4xl leading-none text-white transition-all duration-300 group-hover:scale-110 group-open:rotate-45">
                  +
                </span>
              </summary>

              {/* Contenido acordeón */}
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:grid-rows-[1fr] group-open:opacity-100">
                <div className="overflow-hidden">
                  <div className="pb-12 pt-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:translate-y-0 md:pl-[64px]">
                    <p className="text-body mb-8 max-w-3xl translate-y-6 text-white/85 opacity-0 transition-all delay-150 duration-700 group-open:translate-y-0 group-open:opacity-100">
                      {service.description}
                    </p>

                    <div className="relative max-w-4xl overflow-hidden bg-[#E8DFD2] shadow-[0_-25px_45px_rgba(0,0,0,0.35)]">
                      <div className="relative h-[230px] w-full overflow-hidden md:h-[300px]">
                        <div
                          className="absolute inset-0 scale-110 bg-cover bg-center opacity-0 transition-all delay-200 duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-open:scale-100 group-open:opacity-100"
                          style={{
                            backgroundImage: `url('${service.image}')`,
                          }}
                        />

                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent" />

                        <div className="absolute inset-0 bg-black/10 transition duration-500 hover:bg-black/0" />
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
