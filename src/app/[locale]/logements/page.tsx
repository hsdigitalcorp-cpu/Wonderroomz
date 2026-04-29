import type { Metadata } from "next"
import LogementsGrid from "@/components/sections/LogementsGrid"
import Link from "next/link"
import { logements } from "@/data/logements"

export const metadata: Metadata = {
  title: "Nos logements — Suites privatives en Île-de-France | Wonderroomz",
  description:
    "4 suites privatives uniques en Île-de-France : jacuzzi privatif, sauna, cinéma privatif. O SPA ZEN, Penthouse, Jungle Fever, Cabanette — réservation directe, meilleur prix garanti.",
  openGraph: {
    title: "Nos logements — Wonderroomz",
    description:
      "4 suites privatives uniques en Île-de-France. Jacuzzi, sauna, cinéma privatif. Réservez directement au meilleur prix.",
  },
}

const ARGUMENTS = [
  {
    icon: "✦",
    titre: "Réservation directe",
    texte: "Sans intermédiaire, sans commission Airbnb. Vous économisez jusqu'à 15 % et bénéficiez d'un contact direct avec l'hôte.",
  },
  {
    icon: "✦",
    titre: "Meilleur prix garanti",
    texte: "Le tarif affiché est le tarif le plus bas disponible. Nulle part ailleurs vous ne trouverez moins cher pour la même nuit.",
  },
  {
    icon: "✦",
    titre: "Équipements privatifs",
    texte: "Jacuzzi, sauna, cinéma privatif — tout est réservé exclusivement pour vous, disponible 24h/24 pendant votre séjour.",
  },
  {
    icon: "✦",
    titre: "Expériences uniques",
    texte: "Chaque logement est une scénographie à part entière. Aucun ne ressemble à un hôtel ordinaire — ni à un autre Wonderroomz.",
  },
]

const CHOIX = [
  {
    slug: "o-spa-zen",
    nom: "O SPA ZEN",
    accent: "#7A5C58",
    pour: "Les couples en quête de bien-être total",
    pitch: "Jacuzzi + sauna + terrasse pergola. Le logement le plus complet pour décompresser vraiment. Note 4.93 · Coup de cœur Voyageurs.",
  },
  {
    slug: "penthouse",
    nom: "Penthouse",
    accent: "#4A4E69",
    pour: "Les amateurs d'élégance et de volumes",
    pitch: "Moulures, hauteur sous plafond, jacuzzi privatif. Ambiance hôtel particulier dans un écrin art déco.",
  },
  {
    slug: "jungle",
    nom: "Jungle Fever",
    accent: "#3D5A3E",
    pour: "Les cinéphiles et les amoureux de l'insolite",
    pitch: "Cinéma privatif avec sièges massants, mezzanine tropicale. L'expérience la plus originale de la gamme. Coup de cœur Voyageurs.",
  },
  {
    slug: "cabanette",
    nom: "La Cabanette",
    accent: "#5C6B3A",
    pour: "Les couples en quête de cocooning nature",
    pitch: "Jacuzzi, sauna, mezzanine cosy et ambiance chalet raffiné. Parfaite en toutes saisons, magique en hiver.",
  },
]

const FAQ_ITEMS = [
  {
    q: "Peut-on réserver sans passer par Airbnb ?",
    a: "Oui — c'est même recommandé. La réservation directe vous permet d'économiser les frais de service Airbnb (jusqu'à 15 %) et d'accéder à des packs personnalisables (romantique, anniversaire, bien-être) que nous ne proposons pas sur les plateformes.",
  },
  {
    q: "Les logements sont-ils tous en Île-de-France ?",
    a: "Oui. Tous nos logements sont situés en petite couronne parisienne, à 15–30 minutes de Paris en transports en commun (RER A et RER C). Idéal pour profiter de Paris sans payer le prix d'un hôtel en centre-ville.",
  },
  {
    q: "Combien de personnes peuvent séjourner ?",
    a: "Nos logements sont pensés pour les couples (2 personnes). Certains peuvent accueillir jusqu'à 4 personnes selon les configurations. Les détails sont précisés sur chaque page logement.",
  },
  {
    q: "Y a-t-il un minimum de nuits ?",
    a: "En général 1 nuit minimum, avec des conditions spécifiques selon les dates et la saison. Contactez-nous directement pour connaître les disponibilités et négocier un tarif pour un séjour plus long.",
  },
  {
    q: "Comment se passe l'arrivée ?",
    a: "L'arrivée est autonome 24h/24. Vous recevez le code d'accès avant votre arrivée par message. Aucun check-in en face-à-face n'est nécessaire — vous êtes libres d'arriver à l'heure qui vous convient.",
  },
]

export default function LogementsPage() {
  const totalAvis = logements.reduce((sum, l) => sum + (l.avis ?? 0), 0)
  const noteMovenne = (logements.reduce((sum, l) => sum + (l.note ?? 0), 0) / logements.length).toFixed(2)

  return (
    <main>
      {/* ── Header dark ── */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#13151A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-mono tracking-[0.45em] uppercase mb-5"
            style={{ color: "#B8997A" }}
          >
            Île-de-France · Réservation directe
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            4 suites privatives
            <br />
            <span style={{ color: "#B8997A" }}>à deux pas de Paris.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mb-10" style={{ color: "rgba(242,237,228,0.5)" }}>
            Jacuzzi privatif, sauna finlandais, cinéma privatif — des expériences pensées pour les couples
            qui veulent vivre quelque chose d&apos;unique en Île-de-France.
          </p>

          {/* Social proof agrégé */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4" viewBox="0 0 12 12" fill="#F5C842">
                    <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.436.59 3.432L6 8.375l-3.09 1.625.59-3.432L1 4.132l3.455-.502z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "#F2EDE4" }}>{noteMovenne} / 5</span>
              <span className="text-sm" style={{ color: "rgba(242,237,228,0.4)" }}>· {totalAvis}+ avis vérifiés</span>
            </div>
            <div
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(245,200,66,0.1)", color: "#F5C842", border: "1px solid rgba(245,200,66,0.2)" }}
            >
              🏆 2 logements Coup de cœur Voyageurs
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid des logements ── */}
      <LogementsGrid />

      {/* ── Pourquoi réserver en direct ── */}
      <section className="py-20" style={{ backgroundColor: "#13151A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono tracking-[0.45em] uppercase mb-4" style={{ color: "#B8997A" }}>
              Réservation directe
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
            >
              Pourquoi réserver chez nous
              <br />plutôt que sur Airbnb ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARGUMENTS.map((arg, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(242,237,228,0.03)", border: "1px solid rgba(242,237,228,0.06)" }}
              >
                <span className="text-lg mb-4 block" style={{ color: "#B8997A" }}>{arg.icon}</span>
                <h3 className="text-base font-semibold mb-2" style={{ color: "#F2EDE4" }}>{arg.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(242,237,228,0.45)" }}>{arg.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide de choix ── */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-mono tracking-[0.45em] uppercase mb-4" style={{ color: "#B8997A" }}>
              Quel logement choisir
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
            >
              Trouvez le logement
              <br />fait pour vous.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CHOIX.map((item) => (
              <Link key={item.slug} href={`/logements/${item.slug}`} className="group block">
                <div
                  className="p-6 rounded-2xl h-full transition-shadow duration-300"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(28,28,28,0.06)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-1 self-stretch rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.accent }}
                    />
                    <div>
                      <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: item.accent }}>
                        {item.pour}
                      </p>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
                      >
                        {item.nom}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(28,28,28,0.6)" }}>
                        {item.pitch}
                      </p>
                      <span
                        className="text-xs font-semibold transition-opacity group-hover:opacity-70"
                        style={{ color: item.accent }}
                      >
                        Découvrir ce logement →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-[0.45em] uppercase mb-4" style={{ color: "#B8997A" }}>
              Questions fréquentes
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
            >
              Tout ce qu&apos;il faut savoir.
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: "1px solid rgba(28,28,28,0.08)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "#1C1C1C" }}>{item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.6)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20" style={{ backgroundColor: "#13151A" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono tracking-[0.45em] uppercase mb-4" style={{ color: "#B8997A" }}>
            Prêt à réserver ?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Une question ? On vous répond.
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(242,237,228,0.45)" }}>
            Disponibilités, packs personnalisés, arrivée tardive — contactez-nous directement
            pour organiser le séjour parfait.
          </p>
          <a
            href="mailto:wonderroomz.suites@gmail.com?subject=Demande de réservation"
            className="inline-block px-8 py-4 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: "#B8997A", color: "#FFFFFF" }}
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  )
}
