"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

// Remplacer les images par les vraies photos déco quand disponibles (IMGPACKS/)
const PACKS = [
  {
    id: "romantique",
    label: "Pour les amoureux",
    titre: "L'amour mérite mieux qu'une nuit ordinaire.",
    desc: "On s'occupe de tout pour que ce soir soit celui dont vous vous souviendrez. Vous n'avez qu'à arriver.",
    accent: "#B8997A",
    photos: [
      { src: "/images/penthouse/d18a7010-2ec2-41c6-9e5a-1d2d82b37845.webp", rotate: "-6deg", z: 10 },
      { src: "/images/ospazen/2327514d-f1d8-4c24-a695-2134d15ec83d.avif",   rotate: "4deg",  z: 0  },
    ],
  },
  {
    id: "anniversaire",
    label: "Pour fêter comme il se doit",
    titre: "Certaines dates ne se fêtent pas à moitié.",
    desc: "On transforme votre logement en scène sur mesure. Vous posez vos valises — la magie est déjà là.",
    accent: "#B8997A",
    photos: [
      { src: "/images/cabanette/14a7e246-fb1a-4880-a4f5-f2221ecb9363.avif", rotate: "5deg",  z: 10 },
      { src: "/images/jungle/b801a5e4-2645-4d20-9d63-60f77c28b237.avif",    rotate: "-4deg", z: 0  },
    ],
  },
]

export default function PacksPreview() {
  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header centré — style B */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-20"
        >
          <p
            className="text-xs font-mono tracking-[0.45em] uppercase mb-5"
            style={{ color: "#B8997A" }}
          >
            Expériences sur-mesure
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold leading-tight max-w-xl mb-5"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Certains séjours méritent<br />qu'on aille plus loin.
          </h2>
          <p className="text-sm max-w-md" style={{ color: "rgba(28,28,28,0.5)" }}>
            Pour les moments qui comptent vraiment — on s'occupe de tout.
          </p>
          <div className="w-10 h-px mt-7" style={{ backgroundColor: "rgba(184,153,122,0.5)" }} />
        </motion.div>

        {/* Bandes — style A */}
        <div className="flex flex-col gap-0" style={{ borderTop: "1px solid rgba(28,28,28,0.07)" }}>
          {PACKS.map(({ id, label, titre, desc, accent, photos }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 py-16 md:py-20"
              style={{ borderBottom: "1px solid rgba(28,28,28,0.07)" }}
            >
              {/* Texte */}
              <div className={`flex flex-col justify-center gap-6 pr-0 md:pr-16 ${i % 2 === 1 ? "md:order-2 md:pl-16 md:pr-0" : ""}`}>
                <span
                  className="text-[10px] font-mono tracking-[0.4em] uppercase w-fit px-3 py-1 rounded-full"
                  style={{ color: accent, backgroundColor: "rgba(184,153,122,0.1)", border: "1px solid rgba(184,153,122,0.2)" }}
                >
                  {label}
                </span>

                <h3
                  className="text-2xl sm:text-3xl font-bold leading-snug"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
                >
                  {titre}
                </h3>

                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(28,28,28,0.5)" }}>
                  {desc}
                </p>

                <Link
                  href="/contact"
                  className="group/cta inline-flex items-center gap-2 text-sm font-semibold w-fit transition-all duration-300"
                  style={{ color: accent }}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </Link>
              </div>

              {/* Polaroïds */}
              <div className={`relative h-72 md:h-auto flex items-center justify-center mt-10 md:mt-0 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {photos.map((photo, j) => (
                  <div
                    key={j}
                    className="absolute w-52 h-64 bg-white shadow-xl"
                    style={{
                      transform: `rotate(${photo.rotate}) translateY(${j === 1 ? "20px" : "-10px"}) translateX(${j === 1 ? "28px" : "-28px"})`,
                      zIndex: photo.z,
                      padding: "10px 10px 32px 10px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    <img
                      src={photo.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note bas */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10 text-xs"
          style={{ color: "rgba(28,28,28,0.3)" }}
        >
          Disponible sur demande · À personnaliser selon vos envies
        </motion.p>

      </div>
    </section>
  )
}
