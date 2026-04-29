"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  images: string[]
  nom: string
  accent: string
}

export default function LogementGallery({ images, nom, accent }: Props) {
  const [active, setActive] = useState(0)

  const prev = useCallback(() => {
    setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const next = useCallback(() => {
    setActive((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [prev, next])

  return (
    <div className="flex flex-col gap-3">
      {/* Image principale */}
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={images[active]}
          alt={`${nom} — photo ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={active === 0}
          sizes="(max-width: 768px) 100vw, 60vw"
        />

        {/* Gradient accent bas */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent, ${accent}40)`,
          }}
        />

        {/* Flèche précédente */}
        <button
          onClick={prev}
          aria-label="Photo précédente"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.35)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)"
          }}
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        {/* Flèche suivante */}
        <button
          onClick={next}
          aria-label="Photo suivante"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.35)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)"
          }}
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>

        {/* Compteur */}
        <div
          className="absolute bottom-4 right-4 text-xs font-mono px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff", backdropFilter: "blur(8px)" }}
        >
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className="relative shrink-0 rounded-xl overflow-hidden transition-all duration-200"
            style={{
              width: 72,
              height: 54,
              outline: i === active ? `2px solid ${accent}` : "2px solid transparent",
              outlineOffset: 2,
              opacity: i === active ? 1 : 0.55,
            }}
          >
            <Image
              src={src}
              alt={`${nom} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="72px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
