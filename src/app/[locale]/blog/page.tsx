import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog"

export const metadata: Metadata = {
  title: "Blog — Wonderroomz",
  description:
    "Conseils séjour, idées romantiques, bons plans en Île-de-France. Le blog de Wonderroomz.",
  openGraph: {
    title: "Blog — Wonderroomz",
    description: "Conseils séjour, idées romantiques, bons plans en Île-de-France.",
  },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <main style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-mono tracking-[0.45em] uppercase mb-6"
            style={{ color: "#B8997A" }}
          >
            Le blog
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            Idées, conseils &amp;
            <br />
            <span style={{ color: "#B8997A" }}>inspirations séjour.</span>
          </h1>
          <p
            className="text-base max-w-xl mt-6"
            style={{ color: "rgba(28,28,28,0.45)" }}
          >
            Séjours romantiques, bons plans IDF, guides bien-être — tout ce qu&apos;il faut pour préparer
            (ou rêver à) votre prochaine escapade.
          </p>
        </div>
      </section>

      {/* Article à la une */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(28,28,28,0.06)" }}>
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] overflow-hidden">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Texte */}
              <div
                className="flex flex-col justify-center p-8 sm:p-12"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <span
                  className="text-xs font-mono tracking-[0.35em] uppercase mb-4"
                  style={{ color: "#B8997A" }}
                >
                  À la une · {featured.category}
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold leading-snug mb-4"
                  style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(28,28,28,0.55)" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "rgba(28,28,28,0.35)" }}>
                    {featured.readTime} de lecture
                  </span>
                  <span
                    className="text-xs font-semibold tracking-wide transition-opacity group-hover:opacity-75"
                    style={{ color: "#B8997A" }}
                  >
                    Lire l&apos;article →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grille des autres articles */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ border: "1px solid rgba(28,28,28,0.06)", backgroundColor: "#FFFFFF" }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Texte */}
                  <div className="flex flex-col flex-1 p-5">
                    <span
                      className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
                      style={{ color: "#B8997A" }}
                    >
                      {post.category}
                    </span>
                    <h3
                      className="text-base font-bold leading-snug mb-3 flex-1"
                      style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs" style={{ color: "rgba(28,28,28,0.35)" }}>
                        {post.readTime}
                      </span>
                      <span
                        className="text-xs font-semibold transition-opacity group-hover:opacity-75"
                        style={{ color: "#B8997A" }}
                      >
                        Lire →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
