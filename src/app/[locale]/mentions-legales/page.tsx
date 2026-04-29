import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions légales — Wonderroomz",
  description: "Mentions légales du site Wonderroomz — éditeur, hébergeur, propriété intellectuelle.",
}

export default function MentionsLegalesPage() {
  return (
    <main style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono tracking-[0.45em] uppercase mb-5" style={{ color: "#B8997A" }}>
            Informations légales
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Mentions légales
          </h1>

          <div className="flex flex-col gap-10" style={{ color: "rgba(28,28,28,0.7)" }}>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                1. Éditeur du site
              </h2>
              <p className="text-sm leading-relaxed">
                Le présent site <strong style={{ color: "#1C1C1C" }}>wonderroomz.fr</strong> est édité par :<br /><br />
                <strong style={{ color: "#1C1C1C" }}>Rentylib</strong><br />
                Île-de-France, France<br />
                Email : <a href="mailto:wonderroomz.suites@gmail.com" style={{ color: "#B8997A" }}>wonderroomz.suites@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                2. Hébergement
              </h2>
              <p className="text-sm leading-relaxed">
                Ce site est hébergé par :<br /><br />
                <strong style={{ color: "#1C1C1C" }}>Vercel Inc.</strong><br />
                340 Pine Street, Suite 701<br />
                San Francisco, CA 94104 — États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#B8997A" }}>vercel.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                3. Propriété intellectuelle
              </h2>
              <p className="text-sm leading-relaxed">
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, visuels, structure) est la propriété exclusive de Wonderroomz / Rentylib, sauf mention contraire.
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable et écrite.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                4. Données personnelles
              </h2>
              <p className="text-sm leading-relaxed">
                Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:wonderroomz.suites@gmail.com" style={{ color: "#B8997A" }}>wonderroomz.suites@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                5. Responsabilité
              </h2>
              <p className="text-sm leading-relaxed">
                Wonderroomz s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
                Cependant, nous ne pouvons garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
                En conséquence, nous déclinons toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                6. Droit applicable
              </h2>
              <p className="text-sm leading-relaxed">
                Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

          </div>

          <div className="mt-16 pt-8 flex gap-6 text-xs" style={{ borderTop: "1px solid rgba(28,28,28,0.08)", color: "rgba(28,28,28,0.4)" }}>
            <Link href="/cgv" style={{ color: "#B8997A" }}>CGV</Link>
            <Link href="/confidentialite" style={{ color: "#B8997A" }}>Confidentialité</Link>
            <Link href="/contact" style={{ color: "#B8997A" }}>Contact</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
