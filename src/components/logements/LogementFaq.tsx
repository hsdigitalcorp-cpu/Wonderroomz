"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"

const FAQ_ITEMS = [
  {
    q: "Comment se passe l'arrivée ?",
    a: "L'arrivée est totalement autonome, 24h/24. Vous recevrez le code d'accès par message avant votre arrivée. Pas besoin de rencontrer qui que ce soit.",
  },
  {
    q: "Quelle est la politique d'annulation ?",
    a: "Annulation gratuite jusqu'à 5 jours avant l'arrivée. Au-delà, la première nuit est retenue. En cas de force majeure, contactez-nous directement.",
  },
  {
    q: "Y a-t-il un parking ?",
    a: "Un parking est disponible à proximité du logement. Les détails vous seront communiqués dans le guide d'arrivée envoyé avant votre séjour.",
  },
  {
    q: "Peut-on arriver tôt ou partir tard ?",
    a: "Sous réserve de disponibilité, early check-in et late check-out sont possibles sur demande. Contactez-nous à l'avance pour organiser ça.",
  },
  {
    q: "Les packs séjour sont-ils disponibles ?",
    a: "Oui ! Roses, champagne, décoration romantique, massage en duo... Contactez-nous lors de la réservation pour personnaliser votre séjour.",
  },
]

interface Props { accent: string }

function FaqItem({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid rgba(28,28,28,0.07)" }}>
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium" style={{ color: "#1C1C1C" }}>{q}</span>
        <div
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: open ? accent : "rgba(28,28,28,0.06)" }}
        >
          {open
            ? <Minus className="w-3 h-3 text-white" />
            : <Plus className="w-3 h-3" style={{ color: "rgba(28,28,28,0.5)" }} />
          }
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-4 text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.6)" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function LogementFaq({ accent }: Props) {
  return (
    <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono tracking-[0.4em] uppercase mb-4" style={{ color: accent }}>
          Questions fréquentes
        </p>
        <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
          Tout ce qu&apos;il faut savoir.
        </h2>
        <div style={{ borderTop: "1px solid rgba(28,28,28,0.07)" }}>
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.q} {...item} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  )
}
