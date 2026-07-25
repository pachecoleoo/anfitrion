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

type FormErrors = Partial<Record<keyof FormState, string>>;

type FormStatus = "idle" | "loading" | "success" | "error";

const eventOptions = [
  "Evento corporativo",
  "Fecha especial",
  "Evento social",
  "Oficina",
  "Otro",
];

const initialForm: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  tipoEvento: "",
  fecha: "",
  mensaje: "",
};

function getLocalToday(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const [isEventOpen, setIsEventOpen] = useState(false);
  const [highlightEventField, setHighlightEventField] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const eventDropdownRef = useRef<HTMLDivElement | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);

  const today = getLocalToday();

  /* Entrada de la sección */
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

  /* Cierra el menú cuando se hace clic afuera */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const dropdown = eventDropdownRef.current;

      if (
        dropdown &&
        event.target instanceof Node &&
        !dropdown.contains(event.target)
      ) {
        setIsEventOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* Recibe la selección realizada desde las cards */
  useEffect(() => {
    const handleServiceSelected = (event: Event) => {
      const selectedType = (event as CustomEvent<string>).detail;

      if (!eventOptions.includes(selectedType)) return;

      setForm((previousForm) => ({
        ...previousForm,
        tipoEvento: selectedType,
      }));

      clearFieldError("tipoEvento");

      setStatus("idle");
      setSubmitMessage("");
      setIsEventOpen(false);
      setHighlightEventField(true);

      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }

      highlightTimeoutRef.current = window.setTimeout(() => {
        setHighlightEventField(false);
      }, 2500);
    };

    window.addEventListener(
      "anfitrion:service-selected",
      handleServiceSelected,
    );

    return () => {
      window.removeEventListener(
        "anfitrion:service-selected",
        handleServiceSelected,
      );

      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  const clearFieldError = (field: keyof FormState) => {
    setErrors((previousErrors) => {
      if (!previousErrors[field]) return previousErrors;

      const nextErrors = { ...previousErrors };

      delete nextErrors[field];

      return nextErrors;
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof FormState;
    const value = event.target.value;

    setForm((previousForm) => ({
      ...previousForm,
      [field]: value,
    }));

    clearFieldError(field);

    if (status !== "idle") {
      setStatus("idle");
    }

    if (submitMessage) {
      setSubmitMessage("");
    }
  };

  const handleEventSelection = (option: string) => {
    setForm((previousForm) => ({
      ...previousForm,
      tipoEvento: option,
    }));

    clearFieldError("tipoEvento");

    setStatus("idle");
    setSubmitMessage("");
    setIsEventOpen(false);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const nombre = form.nombre.trim();
    const email = form.email.trim();
    const telefono = form.telefono.trim();
    const mensaje = form.mensaje.trim();

    if (!nombre) {
      newErrors.nombre = "Ingresá tu nombre.";
    } else if (nombre.length < 2) {
      newErrors.nombre = "El nombre es demasiado corto.";
    } else if (nombre.length > 80) {
      newErrors.nombre = "El nombre no puede superar los 80 caracteres.";
    }

    if (!email) {
      newErrors.email = "Ingresá tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ingresá un correo electrónico válido.";
    }

    if (telefono && !/^[0-9+\-()\s]{6,20}$/.test(telefono)) {
      newErrors.telefono = "Ingresá un número de teléfono válido.";
    }

    if (!form.tipoEvento) {
      newErrors.tipoEvento = "Seleccioná un tipo de evento.";
    } else if (!eventOptions.includes(form.tipoEvento)) {
      newErrors.tipoEvento = "La opción seleccionada no es válida.";
    }

    if (form.fecha) {
      const selectedDate = new Date(`${form.fecha}T00:00:00`);
      const currentDate = new Date(`${today}T00:00:00`);

      if (Number.isNaN(selectedDate.getTime()) || selectedDate < currentDate) {
        newErrors.fecha = "Seleccioná una fecha válida desde hoy en adelante.";
      }
    }

    if (!mensaje) {
      newErrors.mensaje = "Contanos brevemente sobre tu evento.";
    } else if (mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    } else if (mensaje.length > 1500) {
      newErrors.mensaje = "El mensaje no puede superar los 1500 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setSubmitMessage("Revisá los campos señalados antes de enviar.");

      const firstErrorField = Object.keys(
        validationErrors,
      )[0] as keyof FormState;

      document
        .querySelector<HTMLElement>(`[data-field="${firstErrorField}"]`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      return;
    }

    setErrors({});
    setStatus("loading");
    setSubmitMessage("");

    const controller = new AbortController();

    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, 20000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
          tipoEvento: form.tipoEvento,
          fecha: form.fecha,
          mensaje: form.mensaje.trim(),
        }),
        signal: controller.signal,
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo enviar la consulta.");
      }

      setStatus("success");
      setSubmitMessage(
        data?.message || "Gracias por escribirnos. Te responderemos pronto.",
      );

      setForm(initialForm);
      setErrors({});
      setIsEventOpen(false);
      setHighlightEventField(false);
    } catch (error) {
      console.error("Error del formulario:", error);

      setStatus("error");

      if (error instanceof Error && error.name === "AbortError") {
        setSubmitMessage(
          "El envío está demorando demasiado. Intentá nuevamente.",
        );
      } else if (error instanceof Error) {
        setSubmitMessage(error.message);
      } else {
        setSubmitMessage("No pudimos enviar el mensaje. Intentá nuevamente.");
      }
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-[#f5efe5] px-5 py-24 text-[#2f1f14] md:px-10 lg:px-16"
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

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* Texto lateral */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <span className="text-label mb-5 inline-block uppercase tracking-[0.25em] text-[#8a5a32]">
            Contacto
          </span>

          <h2 className="title-section max-w-xl text-[#353535]">
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

              <a
                href="mailto:anfitrioncafe@gmail.com"
                className="text-body mt-1 inline-block transition hover:text-[#8D1E29]"
              >
                anfitrioncafe@gmail.com
              </a>
            </div>

            <div>
              <p className="text-label uppercase tracking-[0.18em] text-[#8a5a32]">
                Instagram
              </p>

              <a
                href="https://www.instagram.com/anfitrion.cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body mt-1 inline-block transition hover:text-[#8D1E29]"
              >
                @anfitrioncafe
              </a>
            </div>

            <div>
              <p className="text-label uppercase tracking-[0.18em] text-[#8a5a32]">
                Servicio
              </p>

              <p className="text-body mt-1">
                Eventos corporativos, fechas especiales, eventos sociales y
                oficinas.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className={`relative overflow-visible rounded-[2rem] border border-[#8a5a32]/20 bg-[#fffaf2]/85 p-6 shadow-[0_20px_80px_rgba(47,31,20,0.12)] backdrop-blur-md transition-all delay-200 duration-1000 ease-out md:p-10 lg:mt-22 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <img
            src="/images/stickers/Recurso 20.svg"
            alt=""
            className={`pointer-events-none absolute -right-14 -top-15 z-30 w-34 rotate-[10deg] drop-shadow-[0_18px_25px_rgba(47,31,20,0.28)] transition-all delay-500 duration-700 ease-out md:-right-7 md:-top-10 md:w-40 lg:-right-20 lg:-top-15 lg:w-48 ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-6 scale-90 opacity-0"
            }`}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {/* Nombre */}
            <div className="md:col-span-1" data-field="nombre">
              <label
                htmlFor="nombre"
                className="text-label mb-2 block uppercase tracking-[0.16em] text-[#353535]"
              >
                Nombre
              </label>

              <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                autoComplete="name"
                maxLength={80}
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? "nombre-error" : undefined}
                placeholder="Tu nombre"
                className={`w-full rounded-full border bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition ${
                  errors.nombre
                    ? "border-red-600 ring-4 ring-red-600/10"
                    : "border-[#8a5a32]/20 focus:border-[#8a5a32] focus:ring-4 focus:ring-[#8a5a32]/10"
                }`}
              />

              <FieldError id="nombre-error" message={errors.nombre} />
            </div>

            {/* Email */}
            <div className="md:col-span-1" data-field="email">
              <label
                htmlFor="email"
                className="text-label mb-2 block uppercase tracking-[0.16em] text-[#353535]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                maxLength={160}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="tuemail@gmail.com"
                className={`w-full rounded-full border bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition ${
                  errors.email
                    ? "border-red-600 ring-4 ring-red-600/10"
                    : "border-[#8a5a32]/20 focus:border-[#8a5a32] focus:ring-4 focus:ring-[#8a5a32]/10"
                }`}
              />

              <FieldError id="email-error" message={errors.email} />
            </div>

            {/* Teléfono */}
            <div className="md:col-span-1" data-field="telefono">
              <label
                htmlFor="telefono"
                className="text-label mb-2 block uppercase tracking-[0.16em] text-[#353535]"
              >
                Teléfono
                <span className="ml-2 normal-case tracking-normal text-[#353535]/45">
                  Opcional
                </span>
              </label>

              <input
                id="telefono"
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                maxLength={20}
                aria-invalid={Boolean(errors.telefono)}
                aria-describedby={
                  errors.telefono ? "telefono-error" : undefined
                }
                placeholder="Tu número"
                className={`w-full rounded-full border bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition ${
                  errors.telefono
                    ? "border-red-600 ring-4 ring-red-600/10"
                    : "border-[#8a5a32]/20 focus:border-[#8a5a32] focus:ring-4 focus:ring-[#8a5a32]/10"
                }`}
              />

              <FieldError id="telefono-error" message={errors.telefono} />
            </div>

            {/* Evento */}
            <div className="md:col-span-1" data-field="tipoEvento">
              <div className="mb-2 flex min-h-6 items-center justify-between gap-3">
                <label
                  id="evento-label"
                  className="text-label block uppercase tracking-[0.16em] text-[#353535]"
                >
                  Evento
                </label>

                <span
                  className={`font-button rounded-full bg-[#8D1E29]/10 px-3 py-1 text-[8px] uppercase tracking-[0.16em] text-[#8D1E29] transition-all duration-300 ${
                    highlightEventField
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-1 opacity-0"
                  }`}
                >
                  Servicio seleccionado
                </span>
              </div>

              <div ref={eventDropdownRef} className="relative">
                <button
                  type="button"
                  aria-labelledby="evento-label"
                  aria-haspopup="listbox"
                  aria-expanded={isEventOpen}
                  aria-invalid={Boolean(errors.tipoEvento)}
                  aria-describedby={
                    errors.tipoEvento ? "tipo-evento-error" : undefined
                  }
                  onClick={() => {
                    setIsEventOpen((previousValue) => !previousValue);
                  }}
                  className={`font-text flex w-full items-center justify-between rounded-full border px-5 py-2 text-left text-sm outline-none transition-all duration-300 ${
                    errors.tipoEvento
                      ? "border-red-600 bg-red-50 ring-4 ring-red-600/10"
                      : isEventOpen
                        ? "border-[#8D1E29] bg-[#FFF7EC] ring-4 ring-[#8D1E29]/10"
                        : highlightEventField
                          ? "border-[#8D1E29] bg-[#8D1E29]/[0.06] shadow-[0_0_0_5px_rgba(141,30,41,0.12)]"
                          : "border-[#8a5a32]/20 bg-[#FFF7EC] hover:border-[#8a5a32]/40"
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
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#8D1E29]/10 text-[#8D1E29] transition duration-300 ${
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
                  <div
                    role="listbox"
                    aria-labelledby="evento-label"
                    className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-[1.5rem] border border-[#8a5a32]/20 bg-[#FFF7EC] p-2 shadow-[0_18px_45px_rgba(47,31,20,0.18)]"
                  >
                    {eventOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        role="option"
                        aria-selected={form.tipoEvento === option}
                        onClick={() => handleEventSelection(option)}
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

              <FieldError id="tipo-evento-error" message={errors.tipoEvento} />
            </div>

            {/* Fecha */}
            <div className="md:col-span-2" data-field="fecha">
              <label
                htmlFor="fecha"
                className="text-label mb-2 block uppercase tracking-[0.16em] text-[#353535]"
              >
                Fecha estimada
                <span className="ml-2 normal-case tracking-normal text-[#353535]/45">
                  Opcional
                </span>
              </label>

              <input
                id="fecha"
                type="date"
                name="fecha"
                min={today}
                value={form.fecha}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fecha)}
                aria-describedby={errors.fecha ? "fecha-error" : undefined}
                className={`w-full rounded-full border bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition ${
                  errors.fecha
                    ? "border-red-600 ring-4 ring-red-600/10"
                    : "border-[#8a5a32]/20 focus:border-[#8a5a32] focus:ring-4 focus:ring-[#8a5a32]/10"
                }`}
              />

              <FieldError id="fecha-error" message={errors.fecha} />
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2" data-field="mensaje">
              <label
                htmlFor="mensaje"
                className="text-label mb-2 block uppercase tracking-[0.16em] text-[#353535]"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                minLength={10}
                maxLength={1500}
                rows={5}
                aria-invalid={Boolean(errors.mensaje)}
                aria-describedby={
                  errors.mensaje ? "mensaje-error" : "mensaje-counter"
                }
                placeholder="Contanos cantidad de invitados, lugar, tipo de evento o cualquier detalle importante."
                className={`w-full resize-none rounded-[1.5rem] border bg-white px-5 py-4 font-text text-sm text-[#2f1f14] outline-none transition ${
                  errors.mensaje
                    ? "border-red-600 ring-4 ring-red-600/10"
                    : "border-[#8a5a32]/20 focus:border-[#8a5a32] focus:ring-4 focus:ring-[#8a5a32]/10"
                }`}
              />

              <div className="mt-2 flex items-start justify-between gap-4 px-3">
                <FieldError
                  id="mensaje-error"
                  message={errors.mensaje}
                  withMargin={false}
                />

                <span
                  id="mensaje-counter"
                  className={`ml-auto flex-none text-xs ${
                    form.mensaje.length >= 1400
                      ? "text-[#8D1E29]"
                      : "text-[#2f1f14]/45"
                  }`}
                >
                  {form.mensaje.length}/1500
                </span>
              </div>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === "loading"}
            aria-busy={status === "loading"}
            className="font-button group relative mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#FFF7EC]/20 bg-[#2f1f14] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#FFF7EC] shadow-[0_16px_35px_rgba(47,31,20,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F3D7BA]/60 hover:bg-[#8D1E29] hover:shadow-[0_20px_45px_rgba(141,30,41,0.28)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_0%,rgba(255,247,236,0.22)_45%,transparent_70%)] transition-transform duration-700 group-hover:translate-x-[120%]" />

            <span className="relative z-10">
              {status === "loading" ? "Enviando..." : "Enviar consulta"}
            </span>
          </button>

          {/* Resultado */}
          {submitMessage && (
            <p
              aria-live="polite"
              role={status === "error" ? "alert" : "status"}
              className={`text-body mt-4 rounded-[1rem] px-4 py-3 text-center ${
                status === "success"
                  ? "bg-[#2f7a45]/10 text-[#2f7a45]"
                  : "bg-red-700/10 text-red-700"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function FieldError({
  id,
  message,
  withMargin = true,
}: {
  id: string;
  message?: string;
  withMargin?: boolean;
}) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className={`${withMargin ? "mt-2" : ""} px-3 text-xs leading-relaxed text-red-700`}
    >
      {message}
    </p>
  );
}
