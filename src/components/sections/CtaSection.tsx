"use client"

import { motion } from "motion/react"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#13151A" }}>

      {/* Glow central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(184,153,122,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <p
            className="text-xs font-mono tracking-[0.45em] uppercase"
            style={{ color: "#B8997A" }}
          >
            Réservation directe · Meilleur prix garanti
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Prêt à vivre l'expérience ?
          </h2>

          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "rgba(242,237,228,0.45)" }}
          >
            Réservez directement — sans intermédiaire, sans surprise.
          </p>

          <Link
            href="/logements"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#B8997A", color: "#13151A" }}
          >
            Choisir mon expérience
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Trust pills */}
          <div className="flex items-center gap-2 flex-wrap justify-center pt-2">
            {["928 avis Airbnb", "Support 7j/7", "Sans frais de réservation"].map((item, i) => (
              <span
                key={item}
                className="text-[11px] px-3 py-1 rounded-full"
                style={{
                  color: "rgba(242,237,228,0.4)",
                  backgroundColor: "rgba(242,237,228,0.05)",
                  border: "1px solid rgba(242,237,228,0.08)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
