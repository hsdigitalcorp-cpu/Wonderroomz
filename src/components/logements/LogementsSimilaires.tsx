import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { logements } from "@/data/logements"

interface Props {
  currentSlug: string
}

export default function LogementsSimilaires({ currentSlug }: Props) {
  const autres = logements.filter((l) => l.slug !== currentSlug)

  return (
    <section style={{ backgroundColor: "#13151A" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="text-xs font-mono tracking-[0.4em] uppercase mb-4"
            style={{ color: "#B8997A" }}
          >
            Vous aimerez aussi
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Nos autres expériences.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {autres.map((logement) => (
            <Link
              key={logement.slug}
              href={`/logements/${logement.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#1C1F27" }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={logement.images[0]}
                  alt={logement.nom}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {logement.coupDeCoeur && (
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(184,153,122,0.9)", color: "#13151A" }}
                  >
                    🏆 Coup de cœur
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5">
                {/* Nom */}
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
                >
                  {logement.nom}
                </h3>

                {/* Note + avis */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 1.5l1.854 3.756 4.146.602-3 2.924.708 4.129L8 10.75l-3.708 1.161.708-4.129-3-2.924 4.146-.602L8 1.5z"
                          fill="#F5C842"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#F2EDE4" }}>
                    {logement.note}
                  </span>
                  <span className="text-sm" style={{ color: "rgba(242,237,228,0.45)" }}>
                    · {logement.avis} avis
                  </span>
                </div>

                {/* Prix */}
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
                  >
                    {logement.prixNuit}€
                  </span>
                  <span className="text-sm" style={{ color: "rgba(242,237,228,0.45)" }}>
                    / nuit
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-1">
                  <span
                    className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity duration-200 group-hover:opacity-85"
                    style={{ backgroundColor: logement.accent, color: "#FFFFFF" }}
                  >
                    Découvrir
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
