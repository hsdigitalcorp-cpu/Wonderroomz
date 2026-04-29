import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { logements } from "@/data/logements"
import LogementGallery from "@/components/logements/LogementGallery"
import LogementReviews from "@/components/logements/LogementReviews"
import JungleDecor from "@/components/logements/JungleDecor"
import OspazenDecor from "@/components/logements/OspazenDecor"
import PenthouseDecor from "@/components/logements/PenthouseDecor"
import CabanetteDecor from "@/components/logements/CabanetteDecor"
import { Users, Maximize2, BedDouble, Check } from "lucide-react"
import StickyBookingBar from "@/components/logements/StickyBookingBar"
import LogementFaq from "@/components/logements/LogementFaq"
import LogementPacksTeaser from "@/components/logements/LogementPacksTeaser"
import LogementGuide from "@/components/logements/LogementGuide"
import LogementsSimilaires from "@/components/logements/LogementsSimilaires"

const REVIEWS: Record<string, { author: string; text: string }[]> = {
  "o-spa-zen": [
    {
      author: "Julie",
      text: "Séjour exceptionnel ! L'appartement est absolument parfait pour se retrouver en amoureux au calme à deux pas de Paris. Le jacuzzi et sauna sont parfaits pour se détendre et la jolie terrasse aménagée donne un cadre vraiment charmant. Je reviendrai avec grand plaisir !",
    },
    {
      author: "Bocx",
      text: "Le séjour a commencé dès l'ouverture de la porte de l'immeuble ! Un parfum enivrant vous accompagne jusqu'au logement. Une fois entré, je ne puis en dire plus et vous laisse découvrir et vivre VOTRE propre expérience ! La nôtre fut unique.",
    },
    {
      author: "Anthony",
      text: "Le spa et le sauna sont un vrai plus — un luxe rare qui invite à la détente totale. La terrasse offre un cadre tranquille pour prendre un café le matin ou un verre le soir. On voit le soin apporté aux détails : propreté irréprochable, équipements modernes, literie confortable.",
    },
    {
      author: "Sekhara",
      text: "Un véritable coin de paradis digne d'un spa de luxe ! Jacuzzi et sauna parfaits pour une détente absolue, dans un cadre cosy et raffiné. La terrasse et l'intérieur, décorés avec beaucoup de goût. Une escapade inoubliable, à revivre sans hésitation.",
    },
    {
      author: "Jihane",
      text: "Le jacuzzi et le sauna offrent un vrai moment de détente, et la terrasse est tout simplement splendide. Tout était parfaitement propre, bien équipé et très confortable. Nous repartons reposés et ravis.",
    },
    {
      author: "Thomas",
      text: "Un appartement hors du commun. Le sauna et le jacuzzi sont d'un confort rare, et la terrasse le soir est tout simplement magique. On se sent dans un vrai spa privé.",
    },
    {
      author: "Laura",
      text: "Coup de cœur absolu ! Tout était parfait, de l'accueil jusqu'au départ. L'ambiance zen est immédiatement ressentie dès qu'on entre. La terrasse est un vrai bonheur.",
    },
    {
      author: "Mehdi",
      text: "Le jacuzzi est fantastique, bien chaud à toute heure. La literie est excellente et le logement sent bon dès l'entrée. On y retournera sans hésiter.",
    },
    {
      author: "Camille",
      text: "Une bulle de douceur à deux pas de Paris. Le sauna nous a permis de vraiment décompresser. Tout était propre, bien équipé, et les hôtes sont aux petits soins.",
    },
    {
      author: "Yasmine",
      text: "Logement absolument magnifique ! On a adoré le jacuzzi et la terrasse, parfaits pour une soirée romantique. Les photos sont fidèles à la réalité, voire mieux.",
    },
  ],
  cabanette: [
    {
      author: "Cedrick",
      text: "Un lieu hors du temps, qui force l'admiration par son aménagement magnifique, son côté cosy et agréable. Un vrai cocon de douceur. Un environnement paisible et des voisins chaleureux.",
    },
    {
      author: "Flavie",
      text: "Nous avons passé une nuit parfaite en amoureux dans ce superbe logement ! Tout était réuni pour une escapade romantique réussie : un espace propre, chaleureux et joliment décoré, une ambiance cosy dès l'arrivée, et surtout un jacuzzi incroyable.",
    },
    {
      author: "Lucie",
      text: "Le logement est vraiment très cocooning, parfait pour se détendre et se reposer. J'ai particulièrement apprécié le jacuzzi et le sauna, qui apportent un vrai plus au séjour. J'ai vraiment pu me ressourcer dans un cadre calme et confortable.",
    },
    {
      author: "Marion",
      text: "Un moment de déconnexion dans un appartement décoré avec beaucoup de goût. Ambiance cocooning et romantique à souhait. L'appart est aussi beau qu'en photo.",
    },
    {
      author: "Anaïs",
      text: "Un véritable cocon, proche de Paris. Idéal pour une escapade. L'appartement est magnifiquement décoré, le jacuzzi et le hammam fonctionnaient parfaitement.",
    },
    {
      author: "Kévin",
      text: "Un vrai cocon ! L'ambiance cabane est parfaitement réussie, on se sent immédiatement dépaysé. Le jacuzzi est impeccable et la mezzanine est très cosy pour dormir.",
    },
    {
      author: "Sophie",
      text: "Week-end romantique réussi à 100% ! Le logement est encore plus beau qu'en photo. Le jacuzzi et le sauna sont un vrai luxe. Hôtes très réactifs et aux petits soins.",
    },
    {
      author: "Julien",
      text: "Endroit parfait pour se ressourcer en couple. L'atmosphère est vraiment unique, on se croirait dans un chalet haut de gamme. Le sauna est un vrai plus.",
    },
    {
      author: "Inès",
      text: "Séjour magique dans ce petit cocon hors du temps. La décoration est soignée dans les moindres détails. Le jacuzzi fonctionne parfaitement. On reviendra !",
    },
    {
      author: "Nicolas",
      text: "Logement de caractère, chaleureux et bien équipé. La mezzanine est vraiment sympa et originale. Communication irréprochable avec les hôtes. Je recommande vivement.",
    },
  ],
  jungle: [
    {
      author: "Diane",
      text: "Un logement très agréable, très original et hyper fonctionnel. La délicate attention de laisser du maïs à disposition afin de pouvoir faire son propre pop corn tout chaud avec la machine a été très appréciée!",
    },
    {
      author: "Sofiane",
      text: "Logement magnifique et très original pour une soirée cinéma en couple. L'hôte est très réactif, bienveillant et soucieux du détail (à l'image du logement qui est pensé dans les moindres détails dans l'univers de la jungle). Je recommande.",
    },
    {
      author: "Rayane",
      text: "Nous avons passés un très bon séjour, le logement est si joliment décoré qu'on se retrouve en immersion totale au point d'en perdre la notion du temps.",
    },
    {
      author: "Alice",
      text: "Nous avons adoré notre séjour dans la jungle room. Le lieu est très bien décoré, on s'y sent bien. Nous avons pu faire un week-end à binge-watcher pleins de films. Parfait pour un week-end à ne rien faire.",
    },
    {
      author: "Willy",
      text: "Moi qui voyage beaucoup, quand j'arrive dans l'appartement, je me sens zen et ça fait du bien. Elle fait partie de mes Top 1.",
    },
    {
      author: "Fatou",
      text: "On a passé une soirée de rêve dans ce logement hors du commun ! Le cinéma privatif est incroyable et les sièges massants sont un vrai bonheur. On se croirait dans un autre monde.",
    },
    {
      author: "Romain",
      text: "Logement absolument unique ! L'ambiance jungle est parfaitement retranscrite. Le cinéma privatif avec les sièges massants, c'est vraiment une expérience à part. Coup de cœur.",
    },
    {
      author: "Nadia",
      text: "On cherchait quelque chose d'original pour notre anniversaire et on n'a pas été déçus ! L'appartement est encore plus beau en vrai. Le cinéma privatif était notre moment préféré.",
    },
    {
      author: "Samuel",
      text: "Une expérience immersive exceptionnelle. Dès qu'on entre, on est transporté dans une jungle tropicale. Les plantes, la déco, le cinéma — tout est parfait. Hôte très disponible.",
    },
    {
      author: "Chloé",
      text: "Séjour inoubliable ! L'atmosphère est vraiment envoûtante, on perd complètement la notion du temps. Le pop-corn maison devant le cinéma privatif, un pur moment de bonheur !",
    },
  ],
  penthouse: [
    {
      author: "Djadjii",
      text: "Séjour exceptionnel ! Le logement est impeccable, très propre, bien équipé et parfaitement situé. Le vrai petit plus : le jacuzzi dans le salon, un vrai moment de détente qui rend le séjour encore plus unique. Je recommande les yeux fermés et je reviendrai avec grand plaisir !",
    },
    {
      author: "Anis",
      text: "Une expérience absolument magique ! La love room était encore plus belle que sur les photos : décor romantique, ambiance tamisée, lit confortable, et le jacuzzi privatif était la cerise sur le gâteau. Tout était impeccablement propre et chaque détail semblait pensé pour créer une atmosphère intime et chaleureuse.",
    },
    {
      author: "Céline",
      text: "L'idéal pour un break intimiste et paisible… le logement est impeccable et tout y est pour passer un moment de qualité. Foncez les yeux fermés… vous ne serez pas déçu…",
    },
    {
      author: "Fode",
      text: "Franchement, un vrai coup de cœur pour ce logement ! La décoration est superbe, la maison est magnifique. Un endroit idéal pour se ressourcer, profiter, et passer un moment de qualité. Je recommande à 100 %.",
    },
    {
      author: "Noellen",
      text: "Dès notre arrivée, la maison sentait très bon et tout était facile à utiliser. Nadine a été incroyablement réactive et disponible. Rien de négatif à dire, tout était parfait !",
    },
    {
      author: "Alexandre",
      text: "Un logement d'exception, digne des meilleurs hôtels parisiens. Les finitions sont irréprochables et la vue est à couper le souffle. Le jacuzzi dans le salon est une vraie surprise.",
    },
    {
      author: "Marie",
      text: "On a fêté notre anniversaire de mariage ici et c'était parfait. Le logement est spacieux, luxueux et très bien équipé. Les hôtes sont réactifs et adorables. Merci !",
    },
    {
      author: "Karim",
      text: "Logement grand luxe, très bien situé. Les 2 chambres sont parfaites pour un séjour en famille ou entre amis. La déco est soignée et l'ambiance est vraiment haut de gamme.",
    },
    {
      author: "Émilie",
      text: "Un séjour 5 étoiles ! Le Penthouse est exactement comme sur les photos — superbe. Le jacuzzi privatif est un vrai plus, et les hôtes ont pensé à tout pour notre confort.",
    },
    {
      author: "Vincent",
      text: "Expérience premium du début à la fin. L'appartement est immense, propre et décoré avec beaucoup de goût. On s'y sent comme dans un hôtel de luxe parisien. On reviendra.",
    },
  ],
}

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const logement = logements.find((l) => l.slug === slug)
  if (!logement) return {}

  return {
    title: `${logement.nom} — Wonderroomz`,
    description: logement.description,
    openGraph: {
      title: `${logement.nom} — Wonderroomz`,
      description: logement.description,
      images: logement.images[0] ? [{ url: logement.images[0] }] : [],
    },
  }
}

export function generateStaticParams() {
  return logements.map((l) => ({ slug: l.slug }))
}

export default async function LogementPage({ params }: Props) {
  const { slug } = await params
  const logement = logements.find((l) => l.slug === slug)
  if (!logement) notFound()

  const { accent, note, avis, coupDeCoeur, features, amenities } = logement
  const reviews = REVIEWS[logement.slug] ?? []

  return (
    <main style={{ backgroundColor: "#FAF8F5" }}>
      {/* Layout produit avec gradient accent en fond */}
      <section
        className="pt-20 md:pt-24 pb-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${accent}55 0%, ${accent}22 40%, #FAF8F5 75%)`,
        }}
      >
        <div className="absolute inset-0 z-0">
          {logement.slug === "jungle" && <JungleDecor />}
          {logement.slug === "o-spa-zen" && <OspazenDecor />}
          {logement.slug === "penthouse" && <PenthouseDecor />}
          {logement.slug === "cabanette" && <CabanetteDecor />}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── Gauche : Galerie ── */}
          <div className="w-full lg:w-[58%] lg:sticky lg:top-28">
            <LogementGallery
              images={logement.images}
              nom={logement.nom}
              accent={accent}
            />
          </div>

          {/* ── Droite : Infos produit ── */}
          <div className="w-full lg:w-[42%] flex flex-col gap-6">

            {/* Tagline + nom */}
            <div>
              <p
                className="text-xs font-mono tracking-[0.4em] uppercase mb-3"
                style={{ color: accent }}
              >
                {logement.tagline}
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
              >
                {logement.nom}
              </h1>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1.5l1.854 3.756 4.146.602-3 2.924.708 4.129L8 10.75l-3.708 1.161.708-4.129-3-2.924 4.146-.602L8 1.5z"
                      fill="#F5C842"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "#1C1C1C" }}>
                {note}
              </span>
              <span className="text-sm" style={{ color: "rgba(28,28,28,0.45)" }}>
                · {avis} avis
              </span>
              {coupDeCoeur && (
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${accent}18`, color: accent }}
                >
                  🏆 Coup de cœur voyageurs
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed" style={{ color: "rgba(28,28,28,0.6)" }}>
              {logement.description}
            </p>

            {/* Amenity pills */}
            <div className="flex flex-wrap gap-2">
              {amenities.map((a) => (
                <span
                  key={a}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: `${accent}12`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {a}
                </span>
              ))}
            </div>

            <div style={{ height: 1, backgroundColor: "rgba(28,28,28,0.08)" }} />

            {/* Points forts */}
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${accent}18` }}
                  >
                    <Check className="w-3 h-3" style={{ color: accent }} />
                  </div>
                  <span className="text-sm leading-snug" style={{ color: "rgba(28,28,28,0.75)" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ height: 1, backgroundColor: "rgba(28,28,28,0.08)" }} />

            {/* Infos clés */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Users className="w-4 h-4" />, val: `${logement.capacite} pers.`, label: "Capacité" },
                { icon: <Maximize2 className="w-4 h-4" />, val: `${logement.surface} m²`, label: "Surface" },
                { icon: <BedDouble className="w-4 h-4" />, val: `${logement.chambres} ch.`, label: "Chambres" },
              ].map(({ icon, val, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 py-4 rounded-xl"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(28,28,28,0.07)" }}
                >
                  <span style={{ color: accent }}>{icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "#1C1C1C" }}>{val}</span>
                  <span className="text-xs" style={{ color: "rgba(28,28,28,0.4)" }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Prix + CTA */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(28,28,28,0.07)" }}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
                >
                  {logement.prixNuit}€
                </span>
                <span className="text-sm" style={{ color: "rgba(28,28,28,0.45)" }}>/ nuit</span>
              </div>

              {/* Placeholder Smoobu */}
              <div
                className="rounded-xl p-4 text-center text-sm"
                style={{
                  backgroundColor: `${accent}08`,
                  border: `1px dashed ${accent}40`,
                  color: "rgba(28,28,28,0.4)",
                }}
              >
                Widget calendrier Smoobu — disponible dès réception des clés API
              </div>

              <a
                href={`mailto:wonderroomz.suites@gmail.com?subject=Réservation ${logement.nom}`}
                className="w-full text-center py-4 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: accent, color: "#FFFFFF" }}
              >
                Réserver ce logement
              </a>

              <p
                className="text-center text-xs"
                style={{ color: "rgba(28,28,28,0.35)" }}
              >
                Réservation directe · Meilleur prix garanti · Sans frais
              </p>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* Section avis clients */}
      <LogementReviews
        note={note}
        avis={avis}
        accent={accent}
        coupDeCoeur={coupDeCoeur}
        reviews={reviews}
      />

      <LogementPacksTeaser accent={accent} />
      <LogementGuide accent={accent} />
      <LogementsSimilaires currentSlug={logement.slug} />
      <LogementFaq accent={accent} />

      <StickyBookingBar
        nom={logement.nom}
        prixNuit={logement.prixNuit}
        accent={accent}
        email="wonderroomz.suites@gmail.com"
      />
    </main>
  )
}
