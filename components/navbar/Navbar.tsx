"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import BrandButton from "@/components/BrandButton";
const links = [
  { label: "Nuestra Esencia", href: "#nosotros" },
  { label: "Eventos", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const isNavigating = useRef(false);
  const navigationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const customEvent = event as CustomEvent<{ scroll: number }>;

      const scroll = customEvent.detail?.scroll ?? window.scrollY;
      setIsScrolled(scroll > 80);

      /*
       * Durante una navegación desde el menú no modificamos
       * la visibilidad del navbar.
       */
      if (isNavigating.current) {
        lastScrollY.current = scroll;
        return;
      }

      const difference = scroll - lastScrollY.current;

      if (scroll < 100) {
        setIsNavbarHidden(false);
      } else if (difference > 5) {
        setIsNavbarHidden(true);
        setIsOpen(false);
      } else if (difference < -5) {
        setIsNavbarHidden(false);
      }

      lastScrollY.current = scroll;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("lenis-scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis-scroll", handleScroll);

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const target = document.getElementById(sectionId);

    if (!target) return;

    setIsOpen(false);

    /*
     * Al ir al Hero mostramos el navbar.
     * En el resto de las secciones lo ocultamos para que
     * no tape el comienzo de la sección.
     */
    const isHero = sectionId === "hero";

    isNavigating.current = true;
    setIsNavbarHidden(!isHero);

    if (navigationTimeoutRef.current) {
      window.clearTimeout(navigationTimeoutRef.current);
    }

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });

    /*
     * Actualiza correctamente la URL sin duplicar el hash.
     */
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${href}`,
    );

    navigationTimeoutRef.current = window.setTimeout(
      () => {
        isNavigating.current = false;
        lastScrollY.current = window.scrollY;
      },
      reduceMotion ? 100 : 1100,
    );
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 transition-transform duration-500 ease-out md:px-8 md:pt-6 lg:px-10"
      style={{
        transform: isNavbarHidden ? "translateY(-170px)" : "translateY(0)",
      }}
    >
      {/* Sombra superior al salir del hero */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-36 bg-gradient-to-b from-[#160B06]/90 via-[#24140D]/55 to-transparent transition-opacity duration-500 md:block ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* ================================================= */}
      {/* DESKTOP: elementos flotantes */}
      {/* ================================================= */}

      <nav className="mx-auto hidden max-w-[1440px] items-start justify-between md:flex">
        {/* Logo flotante */}

        <a
          href="#hero"
          onClick={(event) => handleNavigation(event, "#hero")}
          aria-label="Volver al inicio"
          className="relative z-20 transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src="/images/stickers/Recurso 22.svg"
            alt="Anfitrión Café"
            width={300}
            height={140}
            className="h-auto w-[205px] drop-shadow-[0_12px_24px_rgba(47,31,20,0.28)] lg:w-[230px]"
            priority
          />
        </a>

        {/* Botones flotantes */}

        <div className="flex items-center gap-2 pt-2 lg:gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-[#FFF7EC]/65 bg-[#E8DFD2]/78 px-4 font-button text-[9px] uppercase tracking-[0.15em] text-[#3A2116] shadow-[0_8px_22px_rgba(36,20,13,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#FFF7EC] hover:bg-[#FFF7EC] hover:text-[#8D1E29] lg:px-5 lg:text-[10px] lg:tracking-[0.17em]"
            >
              <span className="relative z-10">{link.label}</span>

              <span className="absolute inset-x-0 bottom-0 h-0 bg-[#8D1E29] transition-all duration-300 group-hover:h-full" />

              <span className="absolute inset-0 z-20 flex items-center justify-center text-[#FFF7EC] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {link.label}
              </span>
            </a>
          ))}

          <BrandButton
            href="https://wa.link/wbbw26"
            className="ml-1 !min-h-11 !px-5 !py-0 !text-[9px] !tracking-[0.17em] shadow-[0_8px_22px_rgba(36,20,13,0.18)] lg:!px-6 lg:!text-[10px]"
          >
            Consultar
          </BrandButton>
        </div>
      </nav>

      {/* ================================================= */}
      {/* MOBILE: mantenemos el navbar actual */}
      {/* ================================================= */}

      <nav className="mx-auto md:hidden">
        <div className="flex items-start justify-between">
          {/* Logo flotante */}

          <a
            href="#hero"
            onClick={(event) => handleNavigation(event, "#hero")}
            aria-label="Volver al inicio"
            className="relative z-30 transition-transform duration-300 active:scale-95"
          >
            <Image
              src="/images/stickers/Recurso 22.svg"
              alt="Anfitrión Café"
              width={300}
              height={140}
              className="h-auto w-[195px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.32)]"
              priority
            />
          </a>

          {/* Botón menú flotante */}

          <button
            type="button"
            onClick={() => setIsOpen((previousValue) => !previousValue)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="relative z-30 mt-1 flex h-12 w-12 rotate-[2deg] items-center justify-center rounded-[11px] border-[3px] border-[#A41F25] bg-[#E8DBCA] text-[#A41F25] ring-[3px] ring-[#FFF7EC] shadow-[4px_5px_0_#791E25,0_12px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:rotate-0 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#791E25]"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute right-0 top-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] w-5 rotate-45" : "w-5"
                }`}
              />

              <span
                className={`absolute right-0 top-[7px] h-[2px] w-3.5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-x-2 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute right-0 top-[14px] h-[2px] rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-[7px] w-5 -rotate-45" : "w-5"
                }`}
              />
            </span>
          </button>
        </div>
        {/* Menú desplegable mobile */}

        <div
          className={`transition-all duration-500 ease-out ${
            isOpen
              ? "visible max-h-[520px] translate-y-0 opacity-100"
              : "invisible pointer-events-none max-h-0 -translate-y-3 opacity-0"
          }`}
        >
          <div className="ml-auto w-[min(88vw,330px)] px-1 pb-6 pt-5">
            {/* Panel estilo sticker */}

            <div className="relative overflow-hidden rounded-[18px] border-[3px] border-[#A41F25] bg-[#FFF7EC]/95 p-3 ring-[3px] ring-[#FFF7EC] shadow-[6px_7px_0_#791E25,0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              {/* Detalle decorativo superior */}

              <div className="mb-3 flex items-center justify-between border-b border-[#A41F25]/15 px-2 pb-3">
                <span className="font-button text-[9px] uppercase tracking-[0.25em] text-[#791E25]/70">
                  Menú
                </span>

                <span className="h-2 w-2 rounded-full bg-[#A41F25] shadow-[0_0_10px_rgba(164,31,37,0.35)]" />
              </div>

              {/* Enlaces */}

              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => handleNavigation(event, link.href)}
                    className="group flex items-center justify-between rounded-[10px] border border-[#A41F25]/15 bg-[#E8DBCA]/50 px-4 py-3.5 font-button text-[10px] uppercase tracking-[0.17em] text-[#3A2116] transition-all duration-300 hover:translate-x-1 hover:border-[#A41F25] hover:bg-[#A41F25] hover:text-[#FFF7EC]"
                  >
                    <span>{link.label}</span>

                    <span className="flex items-center gap-3">
                      <span className="text-[8px] tracking-normal opacity-35 group-hover:opacity-60">
                        0{index + 1}
                      </span>

                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                        <path
                          d="M14 7L19 12L14 17"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>

              {/* Botón principal */}

              <div className="mt-3 border-t border-[#A41F25]/15 pt-3">
                <BrandButton
                  href="https://wa.link/wbbw26"
                  className="w-full !rounded-[30px] !px-5 !py-3.5 !text-[10px] !tracking-[0.2em]"
                >
                  Consultar
                </BrandButton>
              </div>

              {/* Mancha roja decorativa */}

              <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#A41F25]/8 blur-2xl" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
