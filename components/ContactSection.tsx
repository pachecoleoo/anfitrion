"use client";

import { useEffect, useRef, useState } from "react";
type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  tipoEvento: string;
  fecha: string;
  mensaje: string;
};
const eventOptions = [
  "Evento corporativo",
  "Fecha especial",
  "Oficina",
  "Otro",
];
export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -120px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");

      setForm({
        nombre: "",
        email: "",
        telefono: "",
        tipoEvento: "",
        fecha: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative overflow-hidden bg-[#f5efe5] px-5 py-24 text-[#2f1f14] md:px-10 lg:px-16"
    >
      {/* Fondo patrón */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.60]"
        style={{
          backgroundImage: "url('/images/services/Recurso 34.svg')",
          backgroundSize: "360px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Sticker decorativo */}
      <img
        src="/images/stickers/Recurso 6.png"
        alt=""
        className={`absolute -right-7 top-10 z-40 w-40 rotate-12 transition-all delay-500 duration-700 ease-out hover:-translate-y-[5%] md:-right-7 md:top-20 md:block lg:w-52 ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-8 scale-90 opacity-0"
        }`}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* Texto lateral */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          {" "}
          <span className="text-label mb-5 inline-block uppercase tracking-[0.25em] text-[#8a5a32]">
            Contacto
          </span>
          <h2 className="title-section max-w-xl text-[#2f1f14]">
            Llevemos café de especialidad a tu próximo evento
          </h2>
          <p className="font-subtitle mt-6 max-w-lg text-3xl leading-tight text-[#7a4a26] md:text-4xl">
            Contanos qué estás imaginando y armamos una propuesta a medida.
          </p>
          <p className="text-body mt-6 max-w-xl text-[#4c382b]">
            Completá el formulario y nos pondremos en contacto para conocer más
            sobre tu evento, cantidad de invitados, fecha estimada y tipo de
            experiencia que buscás.
          </p>
          <div className="mt-10 space-y-5 border-l border-[#8a5a32]/30 pl-6">
            <div>
              <p className="text-label uppercase tracking-[0.18em] text-[#8a5a32]">
                Email
              </p>
              <p className="text-body mt-1">hola@anfitrioncafe.com</p>
            </div>

            <div>
              <p className="text-label uppercase tracking-[0.18em] text-[#8a5a32]">
                Instagram
              </p>
              <p className="text-body mt-1">@anfitrioncafe</p>
            </div>

            <div>
              <p className="text-label uppercase tracking-[0.18em] text-[#8a5a32]">
                Servicio
              </p>
              <p className="text-body mt-1">
                Eventos corporativos, fechas especiales y oficinas.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-[2rem] border border-[#8a5a32]/20 bg-[#fffaf2]/85 p-6 shadow-[0_20px_80px_rgba(47,31,20,0.12)] backdrop-blur-md transition-all delay-200 duration-1000 ease-out md:p-10 lg:mt-22 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <div className="grid gap-5 md:grid-cols-2 ">
            <div className="md:col-span-1">
              <label className="text-label mb-2 block uppercase tracking-[0.16em] text-[#8a5a32]">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full rounded-full border border-[#8a5a32]/20 bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition focus:border-[#8a5a32]"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-label mb-2 block uppercase tracking-[0.16em] text-[#8a5a32]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tuemail@gmail.com"
                className="w-full rounded-full border border-[#8a5a32]/20 bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition focus:border-[#8a5a32]"
              />
            </div>

            <div className="md:col-span-1">
              <label className=" required text-label mb-2 block uppercase tracking-[0.16em] text-[#8a5a32]">
                Teléfono
              </label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Tu número"
                className="w-full rounded-full border border-[#8a5a32]/20 bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition focus:border-[#8a5a32]"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-label mb-2 block uppercase tracking-[0.16em] text-[#8a5a32]">
                Tipo de evento
              </label>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsEventOpen(!isEventOpen)}
                  className={`font-text flex w-full items-center justify-between rounded-full border bg-[#FFF7EC] px-5 py-2 text-left text-sm outline-none transition duration-300 ${
                    isEventOpen
                      ? "border-[#8D1E29] ring-4 ring-[#8D1E29]/10"
                      : "border-[#8a5a32]/20 hover:border-[#8a5a32]/40"
                  }`}
                >
                  <span
                    className={
                      form.tipoEvento ? "text-[#2f1f14]" : "text-[#2f1f14]/45"
                    }
                  >
                    {form.tipoEvento || "Seleccionar experiencia"}
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#8D1E29]/10 text-[#8D1E29] transition duration-300 ${
                      isEventOpen
                        ? "rotate-180 bg-[#8D1E29] text-[#FFF7EC]"
                        : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isEventOpen && (
                  <div className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-[1.5rem] border border-[#8a5a32]/20 bg-[#FFF7EC] p-2 shadow-[0_18px_45px_rgba(47,31,20,0.18)]">
                    {eventOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            tipoEvento: option,
                          }));
                          setIsEventOpen(false);
                        }}
                        className={`font-text w-full rounded-full px-4 py-3 text-left text-sm transition duration-200 ${
                          form.tipoEvento === option
                            ? "bg-[#8D1E29] text-[#FFF7EC]"
                            : "text-[#2f1f14] hover:bg-[#8D1E29]/10 hover:text-[#8D1E29]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="text-label mb-2 block uppercase tracking-[0.16em] text-[#8a5a32]">
                Fecha estimada
              </label>
              <input
                type="date"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                className="w-full rounded-full border border-[#8a5a32]/20 bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition focus:border-[#8a5a32]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-label mb-2 block uppercase tracking-[0.16em] text-[#8a5a32]">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Contanos cantidad de invitados, lugar, tipo de evento o cualquier detalle importante."
                className="w-full resize-none rounded-[1.5rem] border border-[#8a5a32]/20 bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition focus:border-[#8a5a32]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="font-button mt-7 w-full rounded-full bg-[#2f1f14] px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#7a4a26] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar consulta"}
          </button>

          {status === "success" && (
            <p className="text-body mt-4 text-center text-[#2f7a45]">
              Gracias por escribirnos. Te responderemos pronto.
            </p>
          )}

          {status === "error" && (
            <p className="text-body mt-4 text-center text-red-700">
              No pudimos enviar el mensaje. Intentá nuevamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
