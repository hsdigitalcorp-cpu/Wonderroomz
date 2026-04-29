import type { Metadata } from "next"
import LogementsGrid from "@/components/sections/LogementsGrid"

export const metadata: Metadata = {
  title: "Nos logements",
  description:
    "Découvrez nos 4 suites privatives en Île-de-France : O SPA ZEN, Penthouse, Jungle Fever, Cabanette. Jacuzzi, sauna, cinéma privatif — des expériences uniques à deux pas de Paris.",
  openGraph: {
    title: "Nos logements — Wonderroomz",
    description:
      "4 suites privatives uniques en Île-de-France. Réservez directement au meilleur prix garanti.",
  },
}

export default function LogementsPage() {
  return (
    <main>
      {/* Header page */}
      <section className="pt-32 pb-4" style={{ backgroundColor: "#13151A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-mono tracking-[0.4em] uppercase mb-5"
            style={{ color: "#B8997A" }}
          >
            4 expériences uniques
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Nos logements
          </h1>
        </div>
      </section>

      {/* Grid des logements */}
      <LogementsGrid />
    </main>
  )
}
