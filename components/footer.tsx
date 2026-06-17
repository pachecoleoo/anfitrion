import Link from "next/link";
import BrandButton from "./BrandButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#2f1f14] px-5 pt-20 text-[#f5efe5] md:px-10 lg:px-16">
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
        src="/images/stickers/Recurso27.svg"
        alt=""
        className="pointer-events-none absolute -right-12 top-8  w-44 rotate-12 opacity-20 md:block lg:w-56"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-[#f5efe5]/15 pb-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="font-title text-5xl leading-none text-[#f5efe5] md:text-6xl">
                Anfitrión
              </h2>
              <p className="font-button mt-2 text-sm uppercase tracking-[0.32em] text-[#c98b55]">
                Café
              </p>
            </Link>

            <p className="font-subtitle mt-7 max-w-sm text-3xl leading-tight text-[#e6c8aa]">
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
                  href="#galeria"
                  className="transition hover:text-[#c98b55]"
                >
                  Galería
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
                  href="https://www.instagram.com/anfitrion.cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#c98b55]"
                >
                  2995230382
                </a>
              </p>
            </div>
            <br />
            {/* <BrandButton href="#contacto">Solicitar presupuesto</BrandButton> */}
          </div>
        </div>

        {/* Línea inferior */}
        <div className="flex flex-col gap-4 py-7 text-sm text-[#f5efe5]/55 md:flex-row md:items-center md:justify-between">
          <p className="font-text">
            © {currentYear} Anfitrión Café. Todos los derechos reservados.
          </p>

          <p className="font-text">
            Diseño y desarrollo por{" "}
            <a
              href="https://www.instagram.com/pachecoleoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c98b55] transition hover:text-[#f5efe5]"
            >
              Leo Pacheco
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
