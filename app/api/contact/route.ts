import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactRequest = {
  nombre?: unknown;
  email?: unknown;
  telefono?: unknown;
  tipoEvento?: unknown;
  fecha?: unknown;
  mensaje?: unknown;
};

const eventOptions = [
  "Evento corporativo",
  "Fecha especial",
  "Evento social",
  "Oficina",
  "Otro",
];

function cleanValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const nombre = cleanValue(body.nombre);
    const email = cleanValue(body.email);
    const telefono = cleanValue(body.telefono);
    const tipoEvento = cleanValue(body.tipoEvento);
    const fecha = cleanValue(body.fecha);
    const mensaje = cleanValue(body.mensaje);

    if (!nombre || !email || !mensaje) {
      return Response.json(
        {
          ok: false,
          message: "Faltan campos obligatorios.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        {
          ok: false,
          message: "El correo electrónico no es válido.",
        },
        {
          status: 400,
        },
      );
    }

    if (tipoEvento && !eventOptions.includes(tipoEvento)) {
      return Response.json(
        {
          ok: false,
          message: "El tipo de evento seleccionado no es válido.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      console.error("Faltan variables de entorno del correo.");

      return Response.json(
        {
          ok: false,
          message: "El servicio de correo no está configurado.",
        },
        {
          status: 500,
        },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono || "No informado");
    const safeTipoEvento = escapeHtml(tipoEvento || "No especificado");
    const safeFecha = escapeHtml(fecha || "No especificada");
    const safeMensaje = escapeHtml(mensaje).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"Web Anfitrión Café" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nueva consulta: ${tipoEvento || "Evento"} — ${nombre}`,

      text: `
Nueva consulta desde la web de Anfitrión Café

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || "No informado"}
Tipo de evento: ${tipoEvento || "No especificado"}
Fecha estimada: ${fecha || "No especificada"}

Mensaje:
${mensaje}
      `.trim(),

      html: `
        <div
          style="
            background-color: #f5efe5;
            padding: 32px 18px;
            font-family: Arial, Helvetica, sans-serif;
            color: #2f1f14;
          "
        >
          <div
            style="
              max-width: 620px;
              margin: 0 auto;
              overflow: hidden;
              border: 1px solid rgba(141, 30, 41, 0.18);
              border-radius: 24px;
              background-color: #fffaf2;
            "
          >
            <div
              style="
                background-color: #8d1e29;
                padding: 28px 32px;
                color: #fff7ec;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  font-size: 11px;
                  text-transform: uppercase;
                  letter-spacing: 3px;
                  color: #f3d7ba;
                "
              >
                Anfitrión Café
              </p>

              <h1
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 1.2;
                  font-weight: 500;
                "
              >
                Nueva consulta desde la web
              </h1>
            </div>

            <div style="padding: 30px 32px">
              <table
                role="presentation"
                style="
                  width: 100%;
                  border-collapse: collapse;
                  font-size: 15px;
                "
              >
                <tr>
                  <td style="padding: 10px 0; color: #7a4a26">
                    <strong>Nombre</strong>
                  </td>

                  <td style="padding: 10px 0; text-align: right">
                    ${safeNombre}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; color: #7a4a26">
                    <strong>Email</strong>
                  </td>

                  <td style="padding: 10px 0; text-align: right">
                    <a
                      href="mailto:${safeEmail}"
                      style="color: #8d1e29"
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; color: #7a4a26">
                    <strong>Teléfono</strong>
                  </td>

                  <td style="padding: 10px 0; text-align: right">
                    ${safeTelefono}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; color: #7a4a26">
                    <strong>Evento</strong>
                  </td>

                  <td style="padding: 10px 0; text-align: right">
                    ${safeTipoEvento}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; color: #7a4a26">
                    <strong>Fecha estimada</strong>
                  </td>

                  <td style="padding: 10px 0; text-align: right">
                    ${safeFecha}
                  </td>
                </tr>
              </table>

              <div
                style="
                  height: 1px;
                  margin: 24px 0;
                  background-color: rgba(141, 30, 41, 0.15);
                "
              ></div>

              <p
                style="
                  margin: 0 0 10px;
                  color: #7a4a26;
                  font-size: 12px;
                  font-weight: bold;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                "
              >
                Mensaje
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 15px;
                  line-height: 1.7;
                  color: #3a2116;
                "
              >
                ${safeMensaje}
              </p>
            </div>

            <div
              style="
                padding: 18px 32px;
                background-color: #2f1f14;
                color: rgba(255, 247, 236, 0.75);
                font-size: 12px;
                line-height: 1.5;
              "
            >
              Podés responder directamente este correo para contestarle a
              ${safeNombre}.
            </div>
          </div>
        </div>
      `,
    });

    return Response.json(
      {
        ok: true,
        message: "Consulta enviada correctamente.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error al enviar la consulta:", error);

    return Response.json(
      {
        ok: false,
        message: "No se pudo enviar la consulta.",
      },
      {
        status: 500,
      },
    );
  }
}
