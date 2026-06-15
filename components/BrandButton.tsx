import Link from "next/link";

type BrandButtonProps = {
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

function CoffeeIcon() {
  return (
    <span className="relative flex h-6 w-6 items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Humo */}
        <path
          d="M16 14C14 11.5 14.5 9.5 17 7"
          className="steam steam-1"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M24 13C22 10.5 22.5 8.5 25 6"
          className="steam steam-2"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M32 14C30 11.5 30.5 9.5 33 7"
          className="steam steam-3"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Taza */}
        <path
          d="M12 19H32V28C32 32.4183 28.4183 36 24 36H20C15.5817 36 12 32.4183 12 28V19Z"
          fill="currentColor"
          className="transition-all duration-300"
        />

        {/* Asa */}
        <path
          d="M32 21H34C37.3137 21 40 23.6863 40 27C40 30.3137 37.3137 33 34 33H32"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Plato */}
        <path
          d="M10 39H36"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function BrandButton({
  href,
  children,
  type = "button",
  disabled = false,
  className = "",
}: BrandButtonProps) {
  const baseClasses = `
    brand-btn group relative inline-flex items-center justify-center overflow-hidden
    rounded-full border border-[#8b1e2d]
    bg-[#8b1e2d] px-8 py-4
    font-button text-xs uppercase tracking-[0.22em] text-[#fff7ec]
    shadow-[0_14px_35px_rgba(80,35,20,0.22)]
    transition-all duration-500 ease-out
    hover:-translate-y-0.5 hover:bg-[#3a2116] hover:border-[#3a2116]
    hover:shadow-[0_18px_45px_rgba(80,35,20,0.28)]
    active:translate-y-0
    disabled:pointer-events-none disabled:opacity-60
    ${className}
  `;

  const content = (
    <>
      {/* brillo */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {/* borde interno */}
      <span className="absolute inset-[3px] rounded-full border border-[#fff7ec]/20" />

      {/* contenido */}
      <span className="relative z-10 flex items-center gap-3">
        <span>{children}</span>

        <CoffeeIcon />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}
