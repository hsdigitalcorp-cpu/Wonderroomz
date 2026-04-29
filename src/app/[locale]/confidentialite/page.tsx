import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de confidentialité — Wonderroomz",
  description: "Politique de confidentialité et RGPD — Wonderroomz.",
}

export default function ConfidentialitePage() {
  return (
    <main style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono tracking-[0.45em] uppercase mb-5" style={{ color: "#B8997A" }}>
            RGPD & vie privée
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Politique de confidentialité
          </h1>

          <div className="flex flex-col gap-10" style={{ color: "rgba(28,28,28,0.7)" }}>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                1. Responsable du traitement
              </h2>
              <p className="text-sm leading-relaxed">
                Le responsable du traitement des données collectées sur ce site est :<br /><br />
                <strong style={{ color: "#1C1C1C" }}>Rentylib / Wonderroomz</strong><br />
                Île-de-France, France<br />
                Email : <a href="mailto:wonderroomz.suites@gmail.com" style={{ color: "#B8997A" }}>wonderroomz.suites@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                2. Données collectées
              </h2>
              <p className="text-sm leading-relaxed">
                Ce site collecte uniquement les données que vous nous communiquez volontairement via :<br /><br />
                — Le formulaire de contact (nom, adresse e-mail, message).<br />
                — Les échanges par e-mail dans le cadre d&apos;une réservation ou d&apos;une demande.<br /><br />
                Ce site n&apos;utilise pas de cookies de traçage ni de scripts tiers à des fins publicitaires (Google Analytics, Meta Pixel non encore activés).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                3. Finalités du traitement
              </h2>
              <p className="text-sm leading-relaxed">
                Les données collectées sont utilisées exclusivement pour :<br /><br />
                — Répondre à vos demandes de contact ou de réservation.<br />
                — Gérer la relation client (confirmation de séjour, envoi d&apos;informations pratiques).<br />
                — Améliorer nos services sur la base de vos retours.<br /><br />
                Elles ne sont jamais vendues, louées ni transmises à des tiers sans votre consentement explicite.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                4. Durée de conservation
              </h2>
              <p className="text-sm leading-relaxed">
                Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact,
                sauf obligation légale contraire (comptabilité, litige).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                5. Vos droits
              </h2>
              <p className="text-sm leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés,
                vous disposez des droits suivants :<br /><br />
                — <strong style={{ color: "#1C1C1C" }}>Droit d&apos;accès</strong> : obtenir une copie de vos données.<br />
                — <strong style={{ color: "#1C1C1C" }}>Droit de rectification</strong> : corriger vos données inexactes.<br />
                — <strong style={{ color: "#1C1C1C" }}>Droit à l&apos;effacement</strong> : demander la suppression de vos données.<br />
                — <strong style={{ color: "#1C1C1C" }}>Droit d&apos;opposition</strong> : vous opposer à certains traitements.<br />
                — <strong style={{ color: "#1C1C1C" }}>Droit à la portabilité</strong> : recevoir vos données dans un format structuré.<br /><br />
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:wonderroomz.suites@gmail.com" style={{ color: "#B8997A" }}>wonderroomz.suites@gmail.com</a>.
                Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#B8997A" }}>cnil.fr</a>).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                6. Cookies
              </h2>
              <p className="text-sm leading-relaxed">
                Ce site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site (session, préférence de langue).
                Aucun cookie publicitaire ou analytique n&apos;est déposé sans votre consentement.
                Des outils de mesure d&apos;audience (GA4, Meta Pixel) pourront être intégrés ultérieurement,
                avec bandeau de consentement conforme au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                7. Sécurité
              </h2>
              <p className="text-sm leading-relaxed">
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données
                contre toute perte, destruction, altération ou divulgation non autorisée.
                Le site est hébergé sur Vercel (infrastructure sécurisée, HTTPS forcé).
              </p>
            </section>

          </div>

          <div className="mt-16 pt-8 flex gap-6 text-xs" style={{ borderTop: "1px solid rgba(28,28,28,0.08)", color: "rgba(28,28,28,0.4)" }}>
            <Link href="/mentions-legales" style={{ color: "#B8997A" }}>Mentions légales</Link>
            <Link href="/cgv" style={{ color: "#B8997A" }}>CGV</Link>
            <Link href="/contact" style={{ color: "#B8997A" }}>Contact</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
