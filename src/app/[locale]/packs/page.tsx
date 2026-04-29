import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Packs séjour — Wonderroomz",
  description:
    "Roses, champagne, spa privatif, massage… Composez votre séjour sur-mesure avec nos packs romantiques en Île-de-France.",
  openGraph: {
    title: "Packs séjour — Wonderroomz",
    description: "Des séjours pensés dans les moindres détails. Sur demande, selon vos envies.",
  },
}

const PACKS = [
  {
    nom: "Pack Romantique",
    description: "Roses, champagne, bougies — l'atmosphère parfaite pour une soirée inoubliable.",
    emoji: "🌹",
  },
  {
    nom: "Pack Anniversaire",
    description: "Décoration sur-mesure, message personnalisé, gâteau — chaque détail compte.",
    emoji: "🎂",
  },
  {
    nom: "Pack Bien-être",
    description: "Massage en duo, soins, huiles — un moment de détente absolue.",
    emoji: "🕯️",
  },
  {
    nom: "Pack Surprise",
    description: "On s'occupe de tout. Vous n'avez qu'à arriver.",
    emoji: "✨",
  },
]

export default function PacksPage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-mono tracking-[0.45em] uppercase mb-5"
            style={{ color: "#B8997A" }}
          >
            Sur demande · Personnalisable
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold max-w-xl"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Certains séjours méritent qu'on aille plus loin.
          </h1>
          <p
            className="mt-6 text-base leading-relaxed max-w-lg"
            style={{ color: "rgba(28,28,28,0.5)" }}
          >
            Nous préparons tout avant votre arrivée — décoration, ambiance, surprises.
            Chaque pack est pensé pour créer un souvenir que vous n'oublierez pas.
          </p>
        </div>
      </section>

      {/* Packs grid */}
      <section className="pb-24" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PACKS.map((pack) => (
              <div
                key={pack.nom}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(28,28,28,0.07)",
                }}
              >
                <span className="text-3xl mb-5 block">{pack.emoji}</span>
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
                >
                  {pack.nom}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.5)" }}>
                  {pack.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p
              className="text-xs font-mono tracking-[0.4em] uppercase mb-6"
              style={{ color: "#B8997A" }}
            >
              Disponible en complément de votre réservation
            </p>
            <a
              href="mailto:wonderroomz.suites@gmail.com?subject=Demande pack séjour"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold transition-opacity duration-300 hover:opacity-85"
              style={{ backgroundColor: "#B8997A", color: "#FFFFFF" }}
            >
              Demander un pack
              <ArrowRight className="w-4 h-4" />
            </a>
            <p
              className="mt-4 text-xs"
              style={{ color: "rgba(28,28,28,0.35)" }}
            >
              On vous répond sous 24h pour composer votre séjour idéal.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
