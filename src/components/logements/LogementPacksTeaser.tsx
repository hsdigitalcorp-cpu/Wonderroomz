import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"

const PACKS = [
  { emoji: "🌹", nom: "Pack Romantique", desc: "Roses, champagne, bougies..." },
  { emoji: "🎂", nom: "Pack Anniversaire", desc: "Décoration + message personnalisé..." },
  { emoji: "🕯️", nom: "Pack Bien-être", desc: "Massage en duo, soins..." },
  { emoji: "✨", nom: "Pack Surprise", desc: "On s'occupe de tout." },
]

interface Props { accent: string }

export default function LogementPacksTeaser({ accent }: Props) {
  return (
    <section className="py-16" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(28,28,28,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono tracking-[0.4em] uppercase mb-3" style={{ color: accent }}>
              Sublimez votre séjour
            </p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
              Ajoutez une touche magique.
            </h2>
          </div>
          <Link
            href="/packs"
            className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: accent }}
          >
            Voir tous les packs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PACKS.map((pack) => (
            <div
              key={pack.nom}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid rgba(28,28,28,0.06)" }}
            >
              <span className="text-2xl">{pack.emoji}</span>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#1C1C1C" }}>{pack.nom}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(28,28,28,0.45)" }}>{pack.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:wonderroomz.suites@gmail.com?subject=Demande pack séjour"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: accent, color: "#FFFFFF" }}
          >
            Personnaliser mon séjour <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
