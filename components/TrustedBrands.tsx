import Image from "next/image";

const brands = [
  {
    name: "Vista Oil & Gas",
    logo: "/images/marcas/vista.svg",
  },

  // Agregá las próximas marcas de esta forma:
  {
    name: "Sion",
    logo: "/images/marcas/sion.png",
  },
  {
    name: "Sion",
    logo: "/images/marcas/leosfier2.png",
  },
  {
    name: "Terraza",
    logo: "/images/marcas/terraza4.png",
  },
  {
    name: "Malma",
    logo: "/images/marcas/malma.png",
  },
  {
    name: "Amor",
    logo: "/images/marcas/amor1.png",
  },
  {
    name: "Royal",
    logo: "/images/marcas/royal2.png",
  },
  {
    name: "Wow",
    logo: "/images/marcas/wow.png",
  },
];

type BrandGroupProps = {
  brands: typeof brands;
  duplicate?: boolean;
};

export default function TrustedBrands() {
  return (
    <section
      id="marcas"
      className="relative overflow-hidden bg-[#353535] pt-18 pb-24 md:py-20"
    >
      {/* Iluminación suave de fondo */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#791E25]/10 blur-[140px]" />

      <div className="relative">
        {/* Encabezado */}

        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="font-button text-[10px] uppercase tracking-[0.3em] text-[#E8DBCA]/60">
              Experiencias compartidas
            </span>
          </div>

          <h2 className="mt-5 font-title text-[3.2rem] leading-[0.88] tracking-[-0.02em] text-[#E8DBCA] md:text-[4.8rem]">
            Marcas que confían
            <span className="text-[#A41F25]"> en nosotros</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-6 text-[#E8DBCA]/55 md:text-base">
            Nos eligen para transformar cada encuentro en una experiencia
            alrededor del café.
          </p>
        </div>

        {/* Carrusel */}

        <div className="relative mt-14 overflow-hidden py-10 md:mt-20 md:py-12">
          {/* Desvanecimiento del lado izquierdo */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#353535] via-[#353535]/90 to-transparent md:w-40" />

          {/* Desvanecimiento del lado derecho */}

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#353535] via-[#353535]/90 to-transparent md:w-40" />

          {/* Logos en movimiento */}

          <div className="brands-track-clean flex w-max items-center">
            <BrandGroup brands={brands} />

            <BrandGroup brands={brands} duplicate />
          </div>
        </div>

        {/* Enlace inferior */}

        <div className="mt-10 flex justify-center px-6 md:mt-12">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-4 font-button text-[10px] uppercase tracking-[0.22em] text-[#E8DBCA]/65 transition-colors duration-300 hover:text-[#E8DBCA]"
          >
            Sumá tu marca a esta experiencia
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DBCA]/20 bg-[#E8DBCA]/5 transition-all duration-300 group-hover:border-[#A41F25] group-hover:bg-[#A41F25]">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function BrandGroup({ brands, duplicate = false }: BrandGroupProps) {
  return (
    <div
      aria-hidden={duplicate}
      className="flex flex-none items-center gap-16 pr-16 md:gap-28 md:pr-28"
    >
      {brands.map((brand, index) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${brand.name}-${index}`}
          className="group relative flex h-24 w-40 flex-none items-center justify-center md:h-28 md:w-52"
        >
          {/* Luz suave al pasar el mouse */}

          <span className="pointer-events-none absolute inset-4  bg-[#A41F25]/0 blur-2xl transition-colors duration-500 " />

          {/* Logo */}

          <Image
            src={brand.logo}
            alt={duplicate ? "" : `Logo de ${brand.name}`}
            width={220}
            height={110}
            sizes="(max-width: 768px) 160px, 210px"
            className="relative z-10 max-h-[82px] w-full object-contain  grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-[96px]"
            style={{
              filter: `
             
              `,
            }}
          />
        </div>
      ))}
    </div>
  );
}
