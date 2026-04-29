import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Wonderroomz",
  description: "CGV Wonderroomz — réservation, paiement, annulation, responsabilité.",
}

export default function CgvPage() {
  return (
    <main style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono tracking-[0.45em] uppercase mb-5" style={{ color: "#B8997A" }}>
            Conditions d&apos;utilisation
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Conditions Générales de Vente
          </h1>

          <div className="flex flex-col gap-10" style={{ color: "rgba(28,28,28,0.7)" }}>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                1. Objet
              </h2>
              <p className="text-sm leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
                <strong style={{ color: "#1C1C1C" }}> Wonderroomz / Rentylib</strong> (ci-après &laquo; le Prestataire &raquo;)
                et toute personne souhaitant effectuer une réservation de logement (ci-après &laquo; le Client &raquo;).
                Toute réservation implique l&apos;acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                2. Réservation
              </h2>
              <p className="text-sm leading-relaxed">
                La réservation est confirmée à réception du paiement ou d&apos;un acompte convenu entre les parties.
                Toute réservation est nominative et ne peut être cédée à un tiers sans accord préalable du Prestataire.
                Le Client s&apos;engage à fournir des informations exactes lors de la réservation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                3. Tarifs et paiement
              </h2>
              <p className="text-sm leading-relaxed">
                Les tarifs sont indiqués en euros TTC sur le site. Ils comprennent la mise à disposition du logement
                pour la durée réservée ainsi que les équipements mentionnés dans la description du logement.
                Le paiement s&apos;effectue selon les modalités convenues lors de la réservation (virement, Stripe ou autre moyen agréé).
                Les packs séjour (romantique, anniversaire, bien-être, surprise) font l&apos;objet d&apos;une facturation séparée.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                4. Annulation et remboursement
              </h2>
              <p className="text-sm leading-relaxed">
                <strong style={{ color: "#1C1C1C" }}>Annulation plus de 5 jours avant l&apos;arrivée :</strong> remboursement intégral du montant versé.<br /><br />
                <strong style={{ color: "#1C1C1C" }}>Annulation entre 2 et 5 jours avant l&apos;arrivée :</strong> la première nuit est retenue.<br /><br />
                <strong style={{ color: "#1C1C1C" }}>Annulation moins de 48h avant l&apos;arrivée :</strong> aucun remboursement.<br /><br />
                En cas de force majeure avérée, le Prestataire étudiera chaque situation au cas par cas.
                Contactez-nous à <a href="mailto:wonderroomz.suites@gmail.com" style={{ color: "#B8997A" }}>wonderroomz.suites@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                5. Obligations du client
              </h2>
              <p className="text-sm leading-relaxed">
                Le Client s&apos;engage à :<br /><br />
                — Utiliser le logement en bon père de famille et dans le respect du règlement intérieur communiqué avant l&apos;arrivée.<br />
                — Ne pas organiser d&apos;événements, soirées ou rassemblements sans accord préalable du Prestataire.<br />
                — Respecter la capacité d&apos;accueil maximale indiquée dans l&apos;annonce.<br />
                — Restituer le logement dans l&apos;état dans lequel il a été trouvé à l&apos;arrivée.<br /><br />
                Tout dommage causé au logement ou à ses équipements sera facturé au Client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                6. Check-in & check-out
              </h2>
              <p className="text-sm leading-relaxed">
                L&apos;arrivée s&apos;effectue à partir de <strong style={{ color: "#1C1C1C" }}>15h00</strong> et le départ avant <strong style={{ color: "#1C1C1C" }}>11h00</strong>, sauf accord écrit préalable.
                L&apos;accès au logement est autonome 24h/24 via un boîtier à code communiqué avant l&apos;arrivée.
                Des options early check-in et late check-out peuvent être proposées sous réserve de disponibilité, avec ou sans supplément.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                7. Responsabilité
              </h2>
              <p className="text-sm leading-relaxed">
                Le Prestataire décline toute responsabilité en cas de vol, perte ou dommage aux effets personnels du Client pendant le séjour.
                Il est recommandé au Client de souscrire une assurance voyage ou annulation adaptée.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}>
                8. Litiges
              </h2>
              <p className="text-sm leading-relaxed">
                En cas de litige, le Client est invité à contacter le Prestataire en premier lieu à l&apos;adresse
                <a href="mailto:wonderroomz.suites@gmail.com" style={{ color: "#B8997A" }}> wonderroomz.suites@gmail.com</a>.
                À défaut de résolution amiable, le litige sera soumis aux tribunaux compétents du ressort d&apos;Île-de-France,
                conformément au droit français.
              </p>
            </section>

          </div>

          <div className="mt-16 pt-8 flex gap-6 text-xs" style={{ borderTop: "1px solid rgba(28,28,28,0.08)", color: "rgba(28,28,28,0.4)" }}>
            <Link href="/mentions-legales" style={{ color: "#B8997A" }}>Mentions légales</Link>
            <Link href="/confidentialite" style={{ color: "#B8997A" }}>Confidentialité</Link>
            <Link href="/contact" style={{ color: "#B8997A" }}>Contact</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
