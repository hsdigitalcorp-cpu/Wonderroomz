"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { logements } from "@/data/logements"

// Enrichissement visuel + social proof par logement
const CARD_META: Record<string, {
  accent: string
  note: number
  avis: number
  coupDeCoeur: boolean
  amenitiesLabel: string[]
}> = {
  ospazen:   { accent: "#7A5C58", note: 4.93, avis: 268, coupDeCoeur: true,  amenitiesLabel: ["Jacuzzi", "Sauna", "Terrasse"] },
  penthouse: { accent: "#4A4E69", note: 4.87, avis: 204, coupDeCoeur: false, amenitiesLabel: ["Jacuzzi", "Ambiance hôtel", "2 chambres"] },
  jungle:    { accent: "#3D5A3E", note: 4.88, avis: 186, coupDeCoeur: true,  amenitiesLabel: ["Cinéma privatif", "Sièges massage", "Jungle"] },
  cabanette: { accent: "#5C6B3A", note: 4.87, avis: 270, coupDeCoeur: false, amenitiesLabel: ["Jacuzzi", "Sauna", "Mezzanine"] },
}

function CardCarousel({ images, accent }: { images: string[]; accent: string }) {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent((index + images.length) % images.length)
  }, [images.length])

  const startTimer = useCallback(() => {
    if (images.length <= 1) return
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 3000)
  }, [images.length])

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [startTimer, stopTimer])

  if (images.length === 0) {
    return (
      <div className="w-full h-full" style={{ background: `linear-gradient(160deg, ${accent}88 0%, #0F1115 100%)` }} />
    )
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => { setHovered(true); stopTimer() }}
      onMouseLeave={() => { setHovered(false); startTimer() }}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Flèches */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(current - 1) }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "rgba(13,15,20,0.6)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(242,237,228,0.12)",
              opacity: hovered ? 1 : 0,
              transform: `translateY(-50%) scale(${hovered ? 1 : 0.85})`,
            }}
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-3.5 h-3.5" style={{ color: "#F2EDE4" }} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(current + 1) }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "rgba(13,15,20,0.6)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(242,237,228,0.12)",
              opacity: hovered ? 1 : 0,
              transform: `translateY(-50%) scale(${hovered ? 1 : 0.85})`,
            }}
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-3.5 h-3.5" style={{ color: "#F2EDE4" }} />
          </button>
        </>
      )}

      {/* Indicateurs */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "14px" : "4px",
                height: "4px",
                backgroundColor: i === current ? "#F2EDE4" : "rgba(242,237,228,0.3)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Ordre d'affichage aligné sur le hero
const ORDER = ["ospazen", "penthouse", "jungle", "cabanette"]

export default function LogementsGrid({ hideHeader = false }: { hideHeader?: boolean }) {
  const sorted = ORDER.map((id) => logements.find((l) => l.id === id)).filter(Boolean) as typeof logements

  return (
    <section id="logements" className={hideHeader ? "pb-24" : "py-24"} style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-mono tracking-[0.4em] uppercase mb-4"
            style={{ color: "#B8997A" }}
          >
            4 expériences uniques
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Choisissez l&apos;émotion<br className="hidden sm:block" /> que vous voulez vivre.
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "rgba(28,28,28,0.55)" }}>
            Chaque logement a son univers. Aucun ne ressemble aux autres.
          </p>
        </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sorted.map((logement, i) => {
            const meta = CARD_META[logement.id]
            if (!meta) return null
            return (
              <motion.div
                key={logement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/logements/${logement.slug}`} className="block group h-full">
                  <div
                    className="relative flex flex-col h-full overflow-hidden rounded-2xl"
                    style={{ backgroundColor: "#1A1D24", border: "1px solid rgba(242,237,228,0.06)" }}
                  >
                    {/* Carousel */}
                    <div className="relative h-56 overflow-hidden">
                      <CardCarousel images={logement.images} accent={meta.accent} />
                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(26,29,36,0.95) 0%, rgba(26,29,36,0.1) 60%, transparent 100%)" }}
                      />
                      {/* Prix badge */}
                      <div
                        className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10"
                        style={{ backgroundColor: "rgba(13,15,20,0.75)", color: "#B8997A", border: "1px solid rgba(184,153,122,0.3)", backdropFilter: "blur(8px)" }}
                      >
                        dès {logement.prixNuit}€/nuit
                      </div>
                      {/* Coup de cœur badge */}
                      {meta.coupDeCoeur && (
                        <div
                          className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium z-10"
                          style={{ backgroundColor: "rgba(13,15,20,0.75)", color: "#F5C842", border: "1px solid rgba(245,200,66,0.25)", backdropFilter: "blur(8px)" }}
                        >
                          🏆 Coup de cœur
                        </div>
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      {/* Accent line + nom */}
                      <div>
                        <div className="w-6 h-0.5 mb-3 rounded-full" style={{ backgroundColor: meta.accent }} />
                        <h3
                          className="text-lg font-bold leading-tight"
                          style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
                        >
                          {logement.nom}
                        </h3>
                        <p className="text-sm mt-1 italic" style={{ color: "rgba(242,237,228,0.45)" }}>
                          {logement.tagline}
                        </p>
                      </div>

                      {/* Amenities pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {meta.amenitiesLabel.map((a) => (
                          <span
                            key={a}
                            className="text-[10px] px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: `${meta.accent}22`, color: "rgba(242,237,228,0.55)", border: `1px solid ${meta.accent}44` }}
                          >
                            {a}
                          </span>
                        ))}
                      </div>

                      {/* Social proof */}
                      <div className="flex items-center gap-1.5 mt-auto pt-3" style={{ borderTop: "1px solid rgba(242,237,228,0.06)" }}>
                        <div className="flex items-center gap-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <svg key={s} className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="#F5C842">
                              <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.436.59 3.432L6 8.375l-3.09 1.625.59-3.432L1 4.132l3.455-.502z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs font-semibold" style={{ color: "#F2EDE4" }}>{meta.note}</span>
                        <span className="text-[11px]" style={{ color: "rgba(242,237,228,0.35)" }}>· {meta.avis} avis</span>
                        <ArrowRight
                          className="w-3.5 h-3.5 ml-auto transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: meta.accent }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
