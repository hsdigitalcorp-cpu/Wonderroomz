"use client"

import { motion } from "motion/react"

const REVIEWS = [
  {
    nom: "Sekhara",
    appart: "O SPA ZEN",
    accent: "#7A5C58",
    note: 5,
    texte: "Un véritable coin de paradis digne d'un spa de luxe ! Jacuzzi et sauna parfaits pour une détente absolue, dans un cadre cosy et raffiné. Une escapade inoubliable, à revivre sans hésitation.",
  },
  {
    nom: "Anis",
    appart: "Penthouse",
    accent: "#4A4E69",
    note: 5,
    texte: "Une expérience absolument magique ! La love room était encore plus belle que sur les photos : décor romantique, ambiance tamisée, lit confortable, et le jacuzzi privatif était la cerise sur le gâteau.",
  },
  {
    nom: "Rayane",
    appart: "Jungle Fever",
    accent: "#3D5A3E",
    note: 5,
    texte: "Nous avons passés un très bon séjour, le logement est si joliment décoré qu'on se retrouve en immersion totale au point d'en perdre la notion du temps.",
  },
  {
    nom: "Cedrick",
    appart: "Cabanette",
    accent: "#5C6B3A",
    note: 5,
    texte: "Un lieu hors du temps, qui force l'admiration par son aménagement magnifique, son côté cosy et agréable. Un vrai cocon de douceur. Un hôte aux petits soins, d'une réactivité remarquable.",
  },
  {
    nom: "Julie",
    appart: "O SPA ZEN",
    accent: "#7A5C58",
    note: 5,
    texte: "Séjour exceptionnel ! L'appartement est absolument parfait pour se retrouver en amoureux au calme à deux pas de Paris. Le jacuzzi et sauna sont parfaits et la jolie terrasse donne un cadre vraiment charmant.",
  },
  {
    nom: "Willy",
    appart: "Jungle Fever",
    accent: "#3D5A3E",
    note: 5,
    texte: "Moi qui voyage beaucoup, quand j'arrive dans l'appartement, je me sens zen et ça fait du bien. Elle fait partie de mes Top 1.",
  },
  {
    nom: "Bocx",
    appart: "O SPA ZEN",
    accent: "#7A5C58",
    note: 5,
    texte: "Le séjour a commencé dès l'ouverture de la porte de l'immeuble ! Un parfum enivrant vous accompagne jusqu'au logement. Une fois entré, je ne puis en dire plus et vous laisse découvrir VOTRE propre expérience !",
  },
  {
    nom: "Flavie",
    appart: "Cabanette",
    accent: "#5C6B3A",
    note: 5,
    texte: "Nous avons passé une nuit parfaite en amoureux dans ce superbe logement ! Tout était réuni pour une escapade romantique réussie : propre, chaleureux, joliment décoré, et surtout un jacuzzi incroyable.",
  },
  {
    nom: "Fode",
    appart: "Penthouse",
    accent: "#4A4E69",
    note: 5,
    texte: "Franchement, un vrai coup de cœur pour ce logement ! La décoration est superbe, la maison est magnifique. Un endroit idéal pour se ressourcer, profiter, et passer un moment de qualité. Je recommande à 100 %.",
  },
  {
    nom: "Anthony",
    appart: "O SPA ZEN",
    accent: "#7A5C58",
    note: 5,
    texte: "Le spa et le sauna sont un vrai plus — un luxe rare qui invite à la détente totale. On voit le soin apporté aux détails : propreté irréprochable, équipements modernes, literie confortable.",
  },
]

// Divise en 2 rangées
const ROW_1 = REVIEWS.slice(0, 5)
const ROW_2 = REVIEWS.slice(5, 10)

function ReviewCard({ nom, appart, accent, note, texte }: typeof REVIEWS[0]) {
  return (
    <div
      className="flex-shrink-0 w-80 flex flex-col gap-4 p-6 rounded-2xl mx-3"
      style={{
        backgroundColor: "#1A1D24",
        border: "1px solid rgba(242,237,228,0.06)",
      }}
    >
      {/* Étoiles */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: note }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="#F5C842">
            <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.436.59 3.432L6 8.375l-3.09 1.625.59-3.432L1 4.132l3.455-.502z"/>
          </svg>
        ))}
      </div>

      {/* Texte */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "rgba(242,237,228,0.72)", fontFamily: "var(--font-inter)" }}
      >
        "{texte}"
      </p>

      {/* Auteur */}
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(242,237,228,0.06)" }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: `${accent}33`, color: accent }}
        >
          {nom[0]}
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: "#F2EDE4" }}>{nom}</p>
          <p className="text-[10px]" style={{ color: "rgba(242,237,228,0.35)" }}>{appart}</p>
        </div>
      </div>
    </div>
  )
}

function Marquee({ items, reverse = false }: { items: typeof REVIEWS; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} 40s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  )
}

export default function WhySection() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#13151A" }}>

      {/* Keyframes CSS */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p
            className="text-xs font-mono tracking-[0.4em] uppercase mb-4"
            style={{ color: "#B8997A" }}
          >
            928 avis vérifiés Airbnb
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Nos clients parlent<br className="hidden sm:block" /> pour nous.
          </h2>
          {/* Stats */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4" viewBox="0 0 12 12" fill="#F5C842">
                    <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.436.59 3.432L6 8.375l-3.09 1.625.59-3.432L1 4.132l3.455-.502z"/>
                  </svg>
                ))}
              </div>
              <span className="text-lg font-bold" style={{ color: "#F2EDE4" }}>4.89</span>
              <span className="text-sm" style={{ color: "rgba(242,237,228,0.4)" }}>moyenne sur 4 logements</span>
            </div>
            <div className="w-px h-4 hidden sm:block" style={{ backgroundColor: "rgba(242,237,228,0.12)" }} />
            <div className="flex items-center gap-2">
              <span style={{ color: "#B8997A" }}>🏆</span>
              <span className="text-sm" style={{ color: "rgba(242,237,228,0.55)" }}>Coup de cœur voyageurs Airbnb ×2</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rangées défilantes */}
      <div className="flex flex-col gap-5">
        <Marquee items={ROW_1} />
        <Marquee items={ROW_2} reverse />
      </div>

    </section>
  )
}
