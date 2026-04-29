"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"

const FAQ = [
  {
    q: "Peut-on réserver directement sans passer par Airbnb ?",
    a: "Oui — et c'est même conseillé. En réservant directement via notre site, vous évitez les frais de service Airbnb et vous bénéficiez du meilleur tarif garanti. On vous répond en moins de 2h.",
  },
  {
    q: "Comment fonctionne l'arrivée ?",
    a: "L'arrivée se fait en autonomie grâce à une boîte à clés sécurisée. Vous recevez le code d'accès la veille de votre séjour. Pas besoin d'attendre quelqu'un — vous arrivez à votre rythme.",
  },
  {
    q: "Quelle est la politique d'annulation ?",
    a: "Annulation gratuite jusqu'à 7 jours avant l'arrivée. Au-delà, la première nuit est retenue. En cas de force majeure, on trouve toujours une solution — contactez-nous directement.",
  },
  {
    q: "Les packs sont-ils disponibles sur tous les logements ?",
    a: "Oui, nos expériences sur-mesure (romantique, anniversaire...) sont disponibles dans les 4 logements. Il suffit de nous en faire la demande lors de votre réservation ou par message.",
  },
  {
    q: "Combien de personnes peuvent séjourner ?",
    a: "La Cabanette et la Jungle Fever accueillent 2 personnes. Le Penthouse peut accueillir jusqu'à 4 personnes. O SPA ZEN est idéal pour 2 personnes en couple.",
  },
  {
    q: "Peut-on arriver plus tôt ou partir plus tard ?",
    a: "L'arrivée standard est à 18h et le départ à 11h. Une arrivée anticipée ou un départ tardif est possible moyennant un supplément de 25€, selon les disponibilités.",
  },
  {
    q: "Y a-t-il du parking à proximité ?",
    a: "Oui, des places de stationnement gratuites sont disponibles à proximité de chaque logement. Les détails vous sont communiqués dans le guide d'accès envoyé avant votre arrivée.",
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "rgba(28,28,28,0.08)" }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-6 py-6">
        <h3
          className="text-base sm:text-lg font-semibold leading-snug"
          style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
        >
          {q}
        </h3>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: isOpen ? "#1C1C1C" : "rgba(28,28,28,0.07)" }}
        >
          {isOpen
            ? <Minus className="w-3.5 h-3.5" style={{ color: "#FAF8F5" }} />
            : <Plus className="w-3.5 h-3.5" style={{ color: "#1C1C1C" }} />
          }
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-sm leading-relaxed pb-6 max-w-2xl"
              style={{ color: "rgba(28,28,28,0.6)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ReviewsSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.4em] uppercase mb-5" style={{ color: "#B8997A" }}>
            Questions fréquentes
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Tout ce que vous<br />voulez savoir.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ borderTop: "1px solid rgba(28,28,28,0.08)" }}
        >
          {FAQ.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
