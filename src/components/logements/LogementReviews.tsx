"use client"

interface Review {
  author: string
  text: string
}

interface Props {
  note: number
  avis: number
  accent: string
  coupDeCoeur: boolean
  reviews: Review[]
}

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1.5l1.854 3.756 4.146.602-3 2.924.708 4.129L8 10.75l-3.708 1.161.708-4.129-3-2.924 4.146-.602L8 1.5z"
      fill="#F5C842"
    />
  </svg>
)

export default function LogementReviews({
  note,
  avis,
  accent,
  coupDeCoeur,
  reviews,
}: Props) {
  if (reviews.length === 0) return null

  // Split en deux rangées différentes, chacune doublée pour l'effet infini
  const half = Math.ceil(reviews.length / 2)
  const row1 =
    reviews.length >= 4
      ? [...reviews.slice(0, half), ...reviews.slice(0, half)]
      : [...reviews, ...reviews]
  const row2 =
    reviews.length >= 4
      ? [...reviews.slice(half), ...reviews.slice(half)]
      : [...reviews, ...reviews]

  return (
    <section
      style={{
        backgroundColor: `${accent}10`,
        borderTop: "1px solid rgba(28,28,28,0.07)",
        borderBottom: "1px solid rgba(28,28,28,0.07)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
        }
        .marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
        }
      `}</style>

      {/* Header centré */}
      <div className="text-center pt-16 pb-10 px-4">
        <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: accent }}
          >
            {note} · {avis} avis vérifiés Airbnb
          </p>
          {coupDeCoeur && (
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${accent}18`, color: accent }}
            >
              🏆 Coup de cœur voyageurs
            </span>
          )}
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
        >
          Ce qu&apos;ils en disent.
        </h2>
      </div>

      {/* Rangée 1 — vers la gauche */}
      <div className="mb-4" style={{ overflow: "hidden" }}>
        <div className="marquee-left">
          {row1.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} accent={accent} />
          ))}
        </div>
      </div>

      {/* Rangée 2 — vers la droite */}
      <div className="mb-16" style={{ overflow: "hidden" }}>
        <div className="marquee-right">
          {row2.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review, accent }: { review: Review; accent: string }) {
  return (
    <div
      className="flex-shrink-0 mx-3 rounded-2xl p-6 flex flex-col gap-3"
      style={{
        width: "320px",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(28,28,28,0.07)",
      }}
    >
      {/* Étoiles */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <StarIcon key={s} />
        ))}
      </div>

      {/* Texte avis */}
      <p
        className="text-sm leading-relaxed italic flex-1"
        style={{ color: "rgba(28,28,28,0.7)" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Bandeau auteur */}
      <div
        className="flex items-center gap-3 pt-3"
        style={{ borderTop: "1px solid rgba(28,28,28,0.07)" }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          {review.author[0].toUpperCase()}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold" style={{ color: "#1C1C1C" }}>
            {review.author}
          </span>
          <span className="text-xs" style={{ color: "rgba(28,28,28,0.4)" }}>
            Airbnb
          </span>
        </div>
      </div>
    </div>
  )
}
