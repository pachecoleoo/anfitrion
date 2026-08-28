import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#353535] px-5 pt-20 text-[#f5efe5] md:px-10 lg:px-16">
      {/* Patrón de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/branding/Recurso 33.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Sticker decorativo */}
      <img
        src="/images/stickers/Recurso 27.svg"
        alt=""
        className="pointer-events-none absolute -right-12 top-80  lg:top-20 w-44 rotate-12 opacity-20 md:block lg:w-56"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-[#f5efe5]/15 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/branding/Recurso 12.png"
                alt="Anfitrión Café"
                width={220}
                height={120}
                className="h-auto w-40 md:w-52"
                priority={false}
              />
            </Link>

            <p className="font-subtitle mt-7 max-w-sm text-3xl leading-tight text-[#E8DBCA]">
              Café de especialidad para momentos que merecen ser recordados.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-label mb-5 uppercase tracking-[0.24em] text-[#c98b55]">
              Navegación
            </h3>

            <ul className="space-y-3 font-text text-base text-[#f5efe5]/80">
              <li>
                <Link
                  href="#inicio"
                  className="transition hover:text-[#c98b55]"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="transition hover:text-[#c98b55]"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#eventos"
                  className="transition hover:text-[#c98b55]"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="#beneficios"
                  className="transition hover:text-[#c98b55]"
                >
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="transition hover:text-[#c98b55]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-label mb-5 uppercase tracking-[0.24em] text-[#c98b55]">
              Servicios
            </h3>

            <ul className="space-y-3 font-text text-base text-[#f5efe5]/80">
              <li>Eventos corporativos</li>
              <li>Fechas especiales</li>
              <li>Oficinas con sabor</li>
              <li>Experiencias a medida</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-label mb-5 uppercase tracking-[0.24em] text-[#c98b55]">
              Contacto
            </h3>

            <div className="space-y-4 font-text text-base text-[#f5efe5]/80">
              <p>
                <span className="block text-[#f5efe5]">Email</span>
                <a
                  href="mailto:hola@anfitrioncafe.com"
                  className="transition hover:text-[#c98b55]"
                >
                  anfitrioncafe@gmail.com{" "}
                </a>
              </p>

              <p>
                <span className="block text-[#f5efe5]">Instagram</span>
                <a
                  href="https://www.instagram.com/anfitrion.cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#c98b55]"
                >
                  @anfitrion.cafe
                </a>
              </p>
              <p>
                <span className="block text-[#f5efe5]">Whatsapp</span>
                <a
                  href="https://wa.link/wbbw26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#c98b55]"
                >
                  +54 9 2996 74-0905
                </a>
              </p>
            </div>
            <br />
            {/* <BrandButton href="#contacto">Solicitar presupuesto</BrandButton> */}
          </div>
        </div>

        {/* Línea inferior */}
        <div className="flex items-left mt-4 gap-10 py-2 text-sm text-[#f5efe5]/55 md:flex-row md:items-center md:justify-between">
          <p className="font-text">
            © {currentYear} Anfitrión Café. Todos los derechos reservados.
          </p>

          <div className="flex items-center justify-center gap-3 -mt-2  font-text text-sm text-[#E8DBCA]/60">
            <span>Diseño y desarrollo por</span>

            <span className="h-5 w-px bg-[#E8DBCA]/20" />

            <a
              href="https://www.instagram.com/leonardowebservices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Leonardo Web Services"
              className="group inline-flex items-center"
            >
              <Image
                src="/images/marcas/leonardo.png"
                alt="Leonardo Web Services"
                width={100}
                height={100}
                className="w-[80px] w-auto object-contain opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
