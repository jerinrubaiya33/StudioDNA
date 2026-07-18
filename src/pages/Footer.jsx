import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import officeImage from "../assets/akm.png";
import office2Image from "../assets/sushi.png";
import logo from "/src/assets/studioDNA_logo_green.png";
import logo2 from "/src/assets/outline.png";

// Colorful social icon button
const SocialIcon = ({ children, label, href, activeColor }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[#4f5d39]/25 text-[#4f5d39] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-white"
  >
    <span
      className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ backgroundColor: activeColor }}
    />
    <span className="relative z-10 flex items-center justify-center">
      {children}
    </span>
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 overflow-hidden border-t border-[#4f5d39]/15 bg-[#f5f2ea] text-[#2c3524]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Decorative top rule */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f5d39]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-10 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        {/* ---------- Brand Row ---------- */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            {/* Flex container that wraps nicely on mobile, maintaining proper alignment */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:flex-nowrap">
              <img
                src={logo}
                alt="STUDIO DNA Logo"
                className="h-16 w-auto shrink-0 object-contain max-sm:-ml-7 sm:h-18 md:h-22 md:-ml-7"
              />
              <p className="text-[#4f5d39] text-lg md:-ml-8 -ml-4">+</p>
              <img
                src={logo2}
                alt="Outline Architects Logo"
                className="h-16 w-auto shrink-0 object-contain sm:h-16 md:h-20 -ml-1 md:-ml-4 md:mt-2"
              />

              <div className="w-full mt-4 sm:w-auto sm:mt-0">
                <div
                  className="text-xl tracking-tight text-[#4f5d39] sm:text-2xl"
                  style={{ fontFamily: "'serif'" }}
                >
                  STUDIO DNA
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] text-[#e97100] uppercase sm:text-[11px] sm:tracking-[0.25em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  A Subsidiary Studio
                </div>
                <div
                  className="text-xl tracking-tight text-[#4f5d39] sm:text-2xl"
                  style={{ fontFamily: "'serif'" }}
                >
                  OUTLINE ARCHITECTS
                </div>
              </div>
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-[#2c3524]/80 sm:mt-8 sm:text-[15px] max-w-2xl">
              STUDIO DNA provides comprehensive services in architecture,
              planning & engineering, interior & landscape design for both
              public and private sectors — covering residential, commercial,
              institutional & industrial projects, renovations, and landmark
              restorations. We deliver efficient, end-to-end design, build and
              supply services to our valued clients.
            </p>
          </div>

          {/* Social + newsletter */}
          <div className="md:col-span-5 md:pl-6">
            <p
              className="text-[11px] tracking-[0.3em] text-[#4f5d39]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              — FOLLOW THE STUDIO
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <SocialIcon label="Instagram" href="#" activeColor="#E1306C">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Facebook" href="#" activeColor="#1877F2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="LinkedIn" href="#" activeColor="#4d97e1">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>

              <SocialIcon label="YouTube" href="#" activeColor="#FF0000">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Pinterest" href="#" activeColor="#BD081C">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.077 3.158 9.413 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.748-1.379l-.749 2.848c-.27 1.039-1.001 2.344-1.488 3.137C10.456 23.9 11.224 24 12.017 24 18.639 24 24 18.639 24 12.017 24 5.397 18.639 0 12.017 0z" />
                </svg>
              </SocialIcon>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex items-center border-b border-[#4f5d39]/40 pb-2 focus-within:border-[#e97100]"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-transparent text-sm text-[#2c3524] placeholder:text-[#4f5d39]/60 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-3 text-[11px] tracking-[0.25em] text-[#4f5d39] transition-colors hover:text-[#e97100]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                SUBSCRIBE →
              </button>
            </form>
            <p className="mt-2 text-[11px] text-[#4f5d39]/70">
              Occasional dispatches on projects, journals & studio news.
            </p>
          </div>
        </div>

        {/* ---------- Locations ---------- */}
        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* ================= 01 STUDIO DNA ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Details */}
            <div>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-xs tracking-[0.3em] text-[#4f5d39]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  01
                </span>
                <span className="h-px w-8 bg-[#4f5d39]" />
                <h3
                  className="text-sm font-semibold tracking-[0.25em] text-[#4f5d39]"
                  style={{ fontFamily: "'serif'" }}
                >
                  STUDIO DNA
                </h3>
              </div>

              <ul className="mt-6 space-y-4 text-sm text-[#2c3524]/85">
                <li className="flex gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#4f5d39]"
                  />
                  <span className="leading-relaxed">
                    House 42, Road 11, Baridhara,
                    <br />
                    Dhaka 1212, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-[#4f5d39]" />
                  <a
                    href="tel:+8801711000000"
                    className="transition-colors hover:text-[#e97100]"
                  >
                    +880 1711-000 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#4f5d39]" />
                  <a
                    href="mailto:info@studiodna.com"
                    className="transition-colors hover:text-[#e97100]"
                  >
                    info@studiodna.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Media (Image + Map) */}
            <div className="flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-sm shadow-[0_10px_40px_-20px_rgba(44,53,36,0.5)]">
                <img
                  src={officeImage}
                  alt="Inside the Studio DNA office — architects at work"
                  loading="lazy"
                  className="h-[140px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3524]/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                  <p
                    className="text-[9px] tracking-[0.2em] text-white/90"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    — THE STUDIO / BARIDHARA
                  </p>
                  <p
                    className="text-[9px] tracking-[0.2em] text-white/70"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    EST. 1994
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-sm border border-[#4f5d39]/20">
                <iframe
                  title="Studio DNA location map"
                  src="https://www.google.com/maps?q=Baridhara+Dhaka+Bangladesh&output=embed"
                  width="100%"
                  height="140"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[140px] w-full grayscale-[15%] transition-all duration-500 hover:grayscale-0"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>

          {/* ================= 02 OUTLINE ARCHITECTS ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Details */}
            <div>
              <div className="flex items-baseline gap-3">
                <span
                  className="text-xs tracking-[0.3em] text-[#4f5d39]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  02
                </span>
                <span className="h-px w-8 bg-[#4f5d39]/40" />
                <h3
                  className="text-sm font-semibold tracking-[0.25em] text-[#4f5d39]"
                  style={{ fontFamily: "'serif'" }}
                >
                  OUTLINE ARCHITECTS
                </h3>
              </div>

              <ul className="mt-6 space-y-4 text-sm text-[#2c3524]/85">
                <li className="flex gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#4f5d39]"
                  />
                  <span className="leading-relaxed">
                    Level 6, Chartered Tower, GEC Circle,
                    <br />
                    Chattogram 4000, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-[#4f5d39]" />
                  <a
                    href="tel:+8801811000000"
                    className="transition-colors hover:text-[#e97100]"
                  >
                    +880 1811-000 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#4f5d39]" />
                  <a
                    href="mailto:contact@outlinearchitects.com"
                    className="transition-colors hover:text-[#e97100]"
                  >
                    contact@outlinearchitects.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Media (Image + Map) */}
            <div className="flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-sm shadow-[0_10px_40px_-20px_rgba(44,53,36,0.5)]">
                <img
                  src={office2Image}
                  alt="Inside the Outline Architects office"
                  loading="lazy"
                  className="h-[140px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3524]/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                  <p
                    className="text-[9px] tracking-[0.2em] text-white/90"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    — HQ / CHATTOGRAM
                  </p>
                  <p
                    className="text-[9px] tracking-[0.2em] text-white/70"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    EST. 2010
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-sm border border-[#4f5d39]/20">
                <iframe
                  title="Outline Architects location map"
                  src="https://www.google.com/maps?q=GEC+Circle+Chattogram+Bangladesh&output=embed"
                  width="100%"
                  height="140"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[140px] w-full grayscale-[15%] transition-all duration-500 hover:grayscale-0"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#4f5d39]/20 pt-6 sm:mt-16 sm:flex-row sm:items-center">
          <p
            className="max-w-2xl text-[10px] leading-relaxed tracking-[0.15em] text-[#4f5d39] sm:text-[11px] sm:tracking-[0.2em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30
            YEARS OF PRACTICE INTO FOCUSED RESIDENTIAL & BOUTIQUE WORK.
            <br />© {year} ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#4f5d39] transition-colors hover:text-[#e97100] self-end sm:self-auto"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            BACK TO TOP
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4f5d39]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#e97100]">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>

      {/*  GREEN DISPLAY SECTION  */}
      <div className="w-full px-4 py-6 md:py-10 sm:-mb-10 -mb-5 -mt-10 sm:-mt-0 select-none overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <h1
            className="text-[7.5vw] sm:text-[5.8vw] md:text-[5.2vw] lg:text-[7vw] font-bold tracking-tighter leading-none text-[#4f5d39] text-center uppercase whitespace-nowrap text-ellipsis"
            style={{ fontFamily: "'serif'" }}
          >
            Let's Build Together.
          </h1>
        </div>
      </div>
    </footer>
  );
}
