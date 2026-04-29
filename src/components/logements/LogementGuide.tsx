interface Props {
  accent: string
}

interface Rubrique {
  icon: string
  titre: string
  items: string[]
}

const rubriques: Rubrique[] = [
  {
    icon: "🚇",
    titre: "Accès facile",
    items: [
      "Paris centre — 20 à 40 min en RER",
      "Aéroport CDG — 45 min en RER B",
      "Orly — 30 min en voiture",
      "Vélib & trottinettes disponibles",
    ],
  },
  {
    icon: "✨",
    titre: "Idées séjour",
    items: [
      "Dîner romantique à Paris (20 min)",
      "Spa & bien-être sur place",
      "Balades en forêt de Sénart",
      "Marchés locaux le week-end",
      "Sorties culturelles (musées, expos)",
    ],
  },
  {
    icon: "🍽️",
    titre: "Autour de vous",
    items: [
      "Supermarchés à 5 min à pied",
      "Restaurants & bars à proximité",
      "Pharmacies et commerces",
      "Livraison à domicile disponible",
    ],
  },
]

export default function LogementGuide({ accent }: Props) {
  return (
    <section style={{ backgroundColor: "#FAF8F5" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="text-xs font-mono tracking-[0.4em] uppercase mb-4"
            style={{ color: accent }}
          >
            Dans les environs
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            L&apos;Île-de-France comme vous ne l&apos;avez jamais vue.
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(28,28,28,0.6)" }}
          >
            À deux pas de Paris, chaque logement Wonderroomz est votre base idéale pour explorer la région.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {rubriques.map((rubrique) => (
            <div
              key={rubrique.titre}
              className="flex flex-col gap-5 p-6 rounded-2xl"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(28,28,28,0.07)" }}
            >
              {/* Icon + Titre */}
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none">{rubrique.icon}</span>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: accent }}
                >
                  {rubrique.titre}
                </h3>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-3">
                {rubrique.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "rgba(28,28,28,0.65)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
