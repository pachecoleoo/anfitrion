"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ scroll: number }>;
      const scroll = customEvent.detail?.scroll ?? window.scrollY;
      const diff = scroll - lastScrollY.current;

      if (scroll < 100) {
        setIsNavbarHidden(false);
      } else if (diff > 5) {
        setIsNavbarHidden(true);
        setIsOpen(false);
      } else if (diff < -5) {
        setIsNavbarHidden(false);
      }

      lastScrollY.current = scroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("lenis-scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis-scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed left-0 z-50 w-full px-4 pt-4 transition-[top] duration-500 ease-out md:px-8"
      style={{
        top: isNavbarHidden ? "-160px" : "0px",
      }}
    >
      <nav className="mx-auto max-w-7xl">
        <div className="relative">
          {/* sombra inferior sticker */}
          <div className="absolute inset-x-4 top-4 h-full rounded-[2.5rem] bg-[#3A2116]/20 blur-md" />

          {/* navbar */}
          <div className="relative rounded-[1.8rem] border-[3px] border-[#FFF7EC] bg-[#E8DFD2]/85 shadow-[0_14px_35px_rgba(47,31,20,0.20)] backdrop-blur-xl">
            {/* LOGO STICKER SOBRESALIDO */}
            <Link
              href="#hero"
              className="absolute left-[-6px] top-1/2 z-30 -translate-y-[48%] transition-transform duration-300 hover:-translate-y-[52%] md:left-[-14px]"
            >
              <Image
                src="/images/stickers/Recurso 22.svg"
                alt="Anfitrión Café"
                width={300}
                height={140}
                className="h-auto w-[210px] drop-shadow-[0_14px_22px_rgba(47,31,20,0.28)] md:w-[250px]"
                priority
              />
            </Link>
            <div className="relative grid h-14 grid-cols-[1fr_auto] items-center overflow-hidden rounded-[1.8rem] border border-[#8D1E29]/18 px-4 md:h-20 md:grid-cols-[1fr_auto_1fr] md:px-6">
              {/* espacio reservado para que el logo no tape el layout */}
              <div className="relative z-10 h-14 w-[180px] justify-self-start md:h-20 md:w-[260px]" />

              {/* links desktop centrados */}
              <div className="relative z-10 hidden items-center justify-center gap-3 md:flex">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative rounded-full border border-[#8D1E29]/10 bg-[#FFF7EC]/42 px-5 py-3 font-button text-[11px] uppercase tracking-[0.18em] text-[#3A2116]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8D1E29]/25 hover:bg-[#FFF7EC]/80 hover:text-[#8D1E29] hover:shadow-[0_8px_18px_rgba(47,31,20,0.10)]"
                  >
                    {link.label}

                    <span className="absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-[#8D1E29]/45 transition-all duration-300 group-hover:w-6" />
                  </Link>
                ))}
              </div>

              {/* botón desktop */}
              <div className="relative z-10 hidden justify-self-end md:block">
                <BrandButton
                  href="#contacto"
                  className="!px-5 !py-3 !text-[10px] !tracking-[0.18em]"
                >
                  Consultar
                </BrandButton>
              </div>

              {/* botón mobile */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative z-10 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border-[2px] border-[#FFF7EC] bg-[#8D1E29] text-[#FFF7EC] shadow-[0_8px_18px_rgba(47,31,20,0.20)] md:hidden"
                aria-label="Abrir menú"
              >
                <span className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                      isOpen ? "top-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-4 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                      isOpen ? "top-2 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* menú mobile */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative mt-3 rounded-[2rem] border-[4px] border-[#FFF7EC] bg-[#E8DFD2]/90 p-4 shadow-[0_18px_45px_rgba(47,31,20,0.18)] backdrop-blur-xl">
            <div className="relative rounded-[1.5rem] border-[3px] border-[#FFF7EC] bg-[#E8DFD2]/82 shadow-[0_14px_35px_rgba(47,31,20,0.20)] backdrop-blur-xl">
              {" "}
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-[#8D1E29]/10 bg-[#FFF7EC]/45 px-5 py-3 font-button text-xs uppercase tracking-[0.18em] text-[#3A2116] transition hover:bg-[#FFF7EC] hover:text-[#8D1E29]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <BrandButton
                  href="#contacto"
                  className="w-full !px-5 !py-3 !text-[10px]"
                >
                  Consultar
                </BrandButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
