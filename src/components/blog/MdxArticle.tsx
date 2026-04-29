"use client"

import dynamic from "next/dynamic"

const articles: Record<string, React.ComponentType> = {
  "sejours-romantiques": dynamic(() => import("@/content/blog/sejours-romantiques.mdx")) as React.ComponentType,
  "bons-plans-idf": dynamic(() => import("@/content/blog/bons-plans-idf.mdx")) as React.ComponentType,
  "idees-cadeaux": dynamic(() => import("@/content/blog/idees-cadeaux.mdx")) as React.ComponentType,
  "guide-spa-bien-etre": dynamic(() => import("@/content/blog/guide-spa-bien-etre.mdx")) as React.ComponentType,
  "week-ends-en-amoureux": dynamic(() => import("@/content/blog/week-ends-en-amoureux.mdx")) as React.ComponentType,
}

interface Props {
  slug: string
}

export default function MdxArticle({ slug }: Props) {
  const Article = articles[slug]
  if (!Article) return null

  return (
    <>
      <style>{`
        .blog-content h2 {
          font-family: var(--font-playfair);
          font-size: 1.75rem;
          font-weight: 700;
          color: #1C1C1C;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .blog-content h3 {
          font-family: var(--font-playfair);
          font-size: 1.25rem;
          font-weight: 600;
          color: #1C1C1C;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          color: rgba(28,28,28,0.75);
          line-height: 1.8;
          margin-bottom: 1.25rem;
          font-size: 1.0625rem;
        }
        .blog-content ul, .blog-content ol {
          color: rgba(28,28,28,0.75);
          line-height: 1.8;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content a {
          color: #B8997A;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .blog-content a:hover {
          opacity: 0.75;
        }
        .blog-content strong {
          color: #1C1C1C;
          font-weight: 600;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
        }
        .blog-content th {
          text-align: left;
          padding: 0.625rem 1rem;
          background: rgba(28,28,28,0.04);
          border-bottom: 1px solid rgba(28,28,28,0.08);
          font-weight: 600;
          color: #1C1C1C;
        }
        .blog-content td {
          padding: 0.625rem 1rem;
          border-bottom: 1px solid rgba(28,28,28,0.06);
          color: rgba(28,28,28,0.7);
        }
        .blog-content blockquote {
          border-left: 3px solid #B8997A;
          padding-left: 1.25rem;
          margin-left: 0;
          color: rgba(28,28,28,0.6);
          font-style: italic;
        }
        .blog-content hr {
          border: none;
          border-top: 1px solid rgba(28,28,28,0.08);
          margin: 2rem 0;
        }
      `}</style>
      <div className="blog-content">
        <Article />
      </div>
    </>
  )
}
