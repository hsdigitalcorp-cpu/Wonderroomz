import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog"
import Link from "next/link"
import MdxArticle from "@/components/blog/MdxArticle"

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Wonderroomz`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <main style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      {/* Header article */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-xs" style={{ color: "rgba(28,28,28,0.4)" }}>
            <Link href="/blog" className="hover:underline" style={{ color: "#B8997A" }}>Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          {/* Label catégorie */}
          <p className="text-xs font-mono tracking-[0.4em] uppercase mb-5" style={{ color: "#B8997A" }}>
            {post.category}
          </p>

          {/* Titre */}
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs mb-8" style={{ color: "rgba(28,28,28,0.4)" }}>
            <span>
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime} de lecture</span>
          </div>

          {/* Divider */}
          <div className="w-12 h-px mb-12" style={{ backgroundColor: "rgba(184,153,122,0.4)" }} />
        </div>
      </section>

      {/* Contenu MDX */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <MdxArticle slug={slug} />
        </div>
      </section>

      {/* CTA retour */}
      <section className="px-4 sm:px-6 lg:px-8 py-16" style={{ backgroundColor: "#13151A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono tracking-[0.4em] uppercase mb-4" style={{ color: "#B8997A" }}>
            Nos logements
          </p>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Prêt à vivre l&apos;expérience ?
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(242,237,228,0.55)" }}>
            Jacuzzi privatif, sauna, cinéma privatif — choisissez votre séjour Wonderroomz.
          </p>
          <Link
            href="/logements"
            className="inline-block px-8 py-4 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: "#B8997A", color: "#FFFFFF" }}
          >
            Voir nos appartements
          </Link>
        </div>
      </section>
    </main>
  )
}
