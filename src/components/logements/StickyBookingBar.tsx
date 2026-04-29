"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Props {
  nom: string
  prixNuit: number
  accent: string
  email: string
}

export default function StickyBookingBar({ nom, prixNuit, accent, email }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid rgba(28,28,28,0.08)",
            boxShadow: "0 -8px 30px rgba(0,0,0,0.12)",
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 gap-4">
            <div>
              <p className="text-xs" style={{ color: "rgba(28,28,28,0.5)" }}>À partir de</p>
              <p className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                {prixNuit}€ <span className="text-sm font-normal" style={{ color: "rgba(28,28,28,0.45)" }}>/ nuit</span>
              </p>
            </div>
            <a
              href={`mailto:${email}?subject=Réservation ${encodeURIComponent(nom)}`}
              className="flex-1 max-w-[180px] text-center py-3 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: accent, color: "#FFFFFF" }}
            >
              Réserver
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
