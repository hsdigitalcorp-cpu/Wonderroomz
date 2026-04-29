"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

// 268 + 186 + 204 + 270 = 928 avis — moyenne pondérée ≈ 4.89
const SOCIAL_PROOF = {
  avgRating: 4.89,
  totalReviews: 928,
  coupDeCoeur: 2, // O SPA ZEN + Jungle Fever
}

const EXPERIENCES = [
  {
    id: "ospazen",
    slug: "o-spa-zen",
    nom: "O SPA ZEN",
    accroche: "Posez tout.",
    tagline: "Vous ne réalisez pas encore à quel point vous en avez besoin. Votre corps, lui, sait déjà.",
    prix: 220,
    image: "/images/ospazen/2327514d-f1d8-4c24-a695-2134d15ec83d.avif",
    accent: "#7A5C58",
    position: "center center",
    note: 4.93,
    avis: 268,
    coupDeCoeur: true,
  },
  {
    id: "penthouse",
    slug: "penthouse",
    nom: "Penthouse",
    accroche: "L'exception, sans excuse.",
    tagline: "Il y a des soirs qui méritent d'être différents. Ce logement a été fait pour eux.",
    prix: 146,
    image: "/images/penthouse/d18a7010-2ec2-41c6-9e5a-1d2d82b37845.webp",
    accent: "#4A4E69",
    position: "75% center",
    note: 4.87,
    avis: 204,
    coupDeCoeur: false,
  },
  {
    id: "jungle",
    slug: "jungle",
    nom: "Jungle Fever",
    accroche: "Ce soir, le film c'est vous.",
    tagline: "Une jungle, un écran géant, des sièges massage. Vous n'êtes plus dans votre vie — et c'est exactement ça le but.",
    prix: 100,
    image: "/images/jungle/b801a5e4-2645-4d20-9d63-60f77c28b237.avif",
    accent: "#3D5A3E",
    position: "center center",
    note: 4.88,
    avis: 186,
    coupDeCoeur: true,
  },
  {
    id: "cabanette",
    slug: "cabanette",
    nom: "Cabanette",
    accroche: "Le cocon qu'on ne veut plus quitter.",
    tagline: "On ne sait pas trop ce qui se passe ici. Mais dès qu'on entre, on veut plus repartir.",
    prix: 139,
    image: "/images/cabanette/14a7e246-fb1a-4880-a4f5-f2221ecb9363.avif",
    accent: "#5C6B3A",
    position: "center center",
    note: 4.87,
    avis: 270,
    coupDeCoeur: false,
  },
]

export default function HeroSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#13151A]">

      {/* ── Mobile : grille 2×2 ── */}
      <div className="md:hidden grid grid-cols-2 grid-rows-2 h-full">
        {EXPERIENCES.map((exp) => (
          <Link key={exp.id} href={`/logements/${exp.slug}`} className="relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-active:scale-105"
              style={{ backgroundImage: `url(${exp.image})` }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,15,20,0.85) 0%, rgba(13,15,20,0.1) 60%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <h2
                className="text-base font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
              >
                {exp.nom}
              </h2>
              <p className="text-[10px] mt-0.5" style={{ color: "rgba(242,237,228,0.6)" }}>Dès {exp.prix}€/nuit</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Desktop : 4 panneaux ── */}
      <div className="hidden md:flex h-full" onMouseLeave={() => setHovered(null)}>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.id}
            className="relative h-full overflow-hidden cursor-pointer"
            style={{
              flexGrow: hovered === exp.id ? 3.2 : hovered ? 0.75 : 1,
              flexShrink: 0,
              flexBasis: 0,
              transition: "flex-grow 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={() => setHovered(exp.id)}
          >
            {/* Photo */}
            <img
              src={exp.image}
              alt={exp.nom}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: exp.position }}
            />

            {/* Overlay de base — assombrit toujours le bas */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,15,20,0.88) 0%, rgba(13,15,20,0.18) 55%, transparent 100%)" }}
            />

            {/* Overlay foncé sur les panneaux non-actifs */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(13,15,20,0.38)",
                opacity: hovered && hovered !== exp.id ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            />

            {/* Séparateur */}
            {i < EXPERIENCES.length - 1 && (
              <div className="absolute top-0 right-0 w-px h-full z-10" style={{ backgroundColor: "rgba(242,237,228,0.08)" }} />
            )}

            {/* ── Repos : nom centré en bas ── */}
            <div
              className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-1"
              style={{
                opacity: hovered === exp.id ? 0 : 1,
                transition: "opacity 0.25s ease",
                pointerEvents: "none",
              }}
            >
              <span
                className="text-[10px] font-mono tracking-[0.35em] uppercase"
                style={{ color: "rgba(242,237,228,0.35)" }}
              >
                0{i + 1}
              </span>
              <h2
                className="font-bold text-center px-2"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "#FFFFFF",
                  fontSize: "clamp(0.85rem, 1.2vw, 1.3rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.95)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "90%",
                }}
              >
                {exp.nom}
              </h2>
            </div>

            {/* ── Hover : contenu centré ── */}
            <div
              className="absolute inset-0 z-10 flex flex-col items-start justify-center px-8"
              style={{
                opacity: hovered === exp.id ? 1 : 0,
                transform: hovered === exp.id ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.35s ease 0.08s, transform 0.35s ease 0.08s",
                pointerEvents: hovered === exp.id ? "auto" : "none",
              }}
            >
              <div
                className="flex flex-col rounded-2xl px-7 py-7"
                style={{
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  backgroundColor: "rgba(13,15,20,0.5)",
                  border: "1px solid rgba(242,237,228,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
              <span
                className="text-[10px] font-mono tracking-[0.35em] uppercase mb-4"
                style={{ color: "rgba(242,237,228,0.4)" }}
              >
                Expérience 0{i + 1}
              </span>

              <p
                className="text-sm font-light italic mb-2"
                style={{ color: "#B8997A", fontFamily: "var(--font-inter)" }}
              >
                {exp.accroche}
              </p>

              <h2
                className="font-bold leading-none mb-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "#FFFFFF",
                  fontSize: "clamp(2.2rem, 3vw, 3.8rem)",
                  textShadow: "0 2px 24px rgba(0,0,0,0.9)",
                }}
              >
                {exp.nom}
              </h2>

              <div className="w-8 h-0.5 mb-4 rounded-full" style={{ backgroundColor: exp.accent }} />

              <p
                className="text-sm font-light leading-relaxed mb-1 max-w-[260px]"
                style={{ color: "rgba(242,237,228,0.72)" }}
              >
                {exp.tagline}
              </p>

              <p className="text-xs mb-4" style={{ color: "rgba(242,237,228,0.4)" }}>
                À partir de{" "}
                <span className="font-semibold" style={{ color: "#B8997A" }}>
                  {exp.prix}€
                </span>
                /nuit
              </p>

              {/* Social proof par appart */}
              <div className="flex items-center gap-2 flex-wrap mb-7 pt-4" style={{ borderTop: "1px solid rgba(242,237,228,0.08)" }}>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="#F5C842">
                      <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.436.59 3.432L6 8.375l-3.09 1.625.59-3.432L1 4.132l3.455-.502z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: "#F2EDE4" }}>{exp.note}</span>
                <span className="text-[11px]" style={{ color: "rgba(242,237,228,0.4)" }}>· {exp.avis} avis</span>
                {exp.coupDeCoeur && (
                  <>
                    <div className="w-px h-3" style={{ backgroundColor: "rgba(242,237,228,0.12)" }} />
                    <span className="text-[11px]">🏆</span>
                    <span className="text-[11px]" style={{ color: "rgba(242,237,228,0.5)" }}>Coup de cœur voyageurs</span>
                  </>
                )}
              </div>

              <Link
                href={`/logements/${exp.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-85 transition-opacity duration-200"
                style={{ backgroundColor: exp.accent, color: "#FFFFFF" }}
              >
                Découvrir
                <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Copywriting central (disparaît au hover) ── */}
      <motion.div
        className="hidden md:flex absolute inset-x-0 z-20 items-start justify-center pointer-events-none"
        style={{ top: "22%" }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="flex flex-col items-center text-center px-10 py-8 rounded-2xl"
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            backgroundColor: "rgba(13,15,20,0.45)",
            border: "1px solid rgba(242,237,228,0.1)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            maxWidth: "520px",
          }}
        >
          <p
            className="text-xl lg:text-2xl font-light leading-snug"
            style={{
              fontFamily: "var(--font-inter)",
              color: "#B8997A",
              letterSpacing: "0.01em",
            }}
          >
            Vous méritez mieux qu'une nuit ordinaire.
          </p>
          <div className="w-8 h-px my-4" style={{ backgroundColor: "rgba(242,237,228,0.15)" }} />
          <p
            className="text-base lg:text-lg font-bold"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#FFFFFF",
            }}
          >
            Une expérience à part — pour vous retrouver, enfin.
          </p>
          {/* Social proof */}
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(242,237,228,0.08)" }}>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {/* Note globale */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3 h-3" viewBox="0 0 12 12" fill="#B8997A">
                      <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.436.59 3.432L6 8.375l-3.09 1.625.59-3.432L1 4.132l3.455-.502z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold" style={{ color: "#F2EDE4" }}>{SOCIAL_PROOF.avgRating}</span>
                <span className="text-xs" style={{ color: "rgba(242,237,228,0.4)" }}>· {SOCIAL_PROOF.totalReviews} avis</span>
              </div>
              {/* Séparateur */}
              <div className="w-px h-3.5" style={{ backgroundColor: "rgba(242,237,228,0.15)" }} />
              {/* Badge */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🏆</span>
                <span className="text-[11px]" style={{ color: "rgba(242,237,228,0.55)" }}>Coup de cœur voyageurs</span>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: "rgba(184,153,122,0.15)", color: "#B8997A", border: "1px solid rgba(184,153,122,0.2)" }}
                >
                  ×2
                </span>
              </div>
            </div>
          </div>

          <p
            className="mt-4 text-[10px] uppercase tracking-[0.5em] text-center"
            style={{ color: "rgba(242,237,228,0.2)" }}
          >
            Survolez pour choisir
          </p>
        </div>
      </motion.div>

    </section>
  )
}
