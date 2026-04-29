"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Mail, MapPin, Phone } from "lucide-react"

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconTiktok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.18 8.18 0 0 0 4.78 1.52V6.9a4.85 4.85 0 0 1-1.01-.21z"/>
    </svg>
  )
}

const LOGEMENTS = [
  { slug: "o-spa-zen",  nom: "O SPA ZEN" },
  { slug: "penthouse",  nom: "Penthouse" },
  { slug: "jungle",     nom: "Jungle Fever" },
  { slug: "cabanette",  nom: "Cabanette" },
]

export default function Footer() {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: "#13151A", borderTop: "1px solid rgba(242,237,228,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
              >
                Wonderroomz
              </span>
              <div className="w-7 h-0.5 mt-2 rounded-full" style={{ backgroundColor: "#B8997A" }} />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(242,237,228,0.4)", maxWidth: "180px" }}>
              Suites privatives en Île-de-France. Des expériences, pas des nuits.
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              {[
                { href: "https://instagram.com", label: "Instagram", Icon: IconInstagram },
                { href: "https://tiktok.com",    label: "TikTok",    Icon: IconTiktok },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ border: "1px solid rgba(242,237,228,0.1)", color: "rgba(242,237,228,0.4)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#B8997A"
                    ;(e.currentTarget as HTMLElement).style.color = "#B8997A"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(242,237,228,0.1)"
                    ;(e.currentTarget as HTMLElement).style.color = "rgba(242,237,228,0.4)"
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Logements */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[10px] font-mono tracking-[0.35em] uppercase"
              style={{ color: "#B8997A" }}
            >
              Logements
            </h3>
            <ul className="flex flex-col gap-2.5">
              {LOGEMENTS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/logements/${l.slug}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(242,237,228,0.45)" }}
                  >
                    {l.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[10px] font-mono tracking-[0.35em] uppercase"
              style={{ color: "#B8997A" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(242,237,228,0.45)" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#B8997A" }} />
                Île-de-France, France
              </li>
              <li>
                <a
                  href="mailto:wonderroomz.suites@gmail.com"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "rgba(242,237,228,0.45)" }}
                >
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "#B8997A" }} />
                  wonderroomz.suites@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Liens */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[10px] font-mono tracking-[0.35em] uppercase"
              style={{ color: "#B8997A" }}
            >
              Informations
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/packs",             label: "Packs séjour" },
                { href: "/blog",              label: "Blog" },
                { href: "/contact",           label: "Contact" },
                { href: "/mentions-legales",  label: "Mentions légales" },
                { href: "/cgv",               label: "CGV" },
                { href: "/confidentialite",   label: "Confidentialité" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(242,237,228,0.45)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(242,237,228,0.06)", color: "rgba(242,237,228,0.2)" }}
        >
          <p>© {year} Wonderroomz — Tous droits réservés</p>
        </div>

      </div>
    </footer>
  )
}
