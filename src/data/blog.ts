export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  cover: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sejours-romantiques",
    title: "5 idées de séjours romantiques en Île-de-France",
    excerpt: "Jacuzzi privatif, champagne au lit, ambiance hôtel particulier... Découvrez comment transformer un week-end en IDF en souvenir inoubliable.",
    category: "Séjours romantiques",
    date: "2026-04-29",
    readTime: "5 min",
    cover: "/images/ospazen/2327514d-f1d8-4c24-a695-2134d15ec83d.avif",
  },
  {
    slug: "bons-plans-idf",
    title: "Les meilleurs bons plans en Île-de-France",
    excerpt: "Marchés, balades, restaurants locaux, expériences insolites — notre sélection des pépites à découvrir autour de Paris.",
    category: "Bons plans IDF",
    date: "2026-04-29",
    readTime: "6 min",
    cover: "/images/jungle/01cd6aa8-823e-4de8-9e8c-7a0eab34c62c.avif",
  },
  {
    slug: "idees-cadeaux",
    title: "Offrir un séjour : les meilleures idées cadeaux pour un couple",
    excerpt: "Anniversaire, Saint-Valentin, simple envie de gâter — un séjour surprise est le cadeau qui crée des souvenirs durables.",
    category: "Idées cadeaux",
    date: "2026-04-29",
    readTime: "4 min",
    cover: "/images/cabanette/14a7e246-fb1a-4880-a4f5-f2221ecb9363.avif",
  },
  {
    slug: "guide-spa-bien-etre",
    title: "Guide spa & bien-être : s'offrir une vraie pause en IDF",
    excerpt: "Sauna, jacuzzi privatif, massage en duo... Tout ce qu'il faut savoir pour choisir le bon séjour bien-être sans quitter la région.",
    category: "Guide spa & bien-être",
    date: "2026-04-29",
    readTime: "5 min",
    cover: "/images/ospazen/092fd24b-00e7-40ed-b518-b2b93f92db14.avif",
  },
  {
    slug: "week-ends-en-amoureux",
    title: "Week-ends en amoureux : 4 escapades qui changent tout",
    excerpt: "Sortir de la routine sans aller loin. Quatre séjours pensés pour les couples qui veulent vivre quelque chose d'unique, à deux pas de Paris.",
    category: "Week-ends en amoureux",
    date: "2026-04-29",
    readTime: "5 min",
    cover: "/images/penthouse/20bec17b-9ed4-4755-b087-c92d4b7d8919.avif",
  },
]

export const articleRegistry: Record<string, () => Promise<{ default: React.ComponentType; meta: BlogPost }>> = {
  "sejours-romantiques": () => import("@/content/blog/sejours-romantiques.mdx") as never,
  "bons-plans-idf": () => import("@/content/blog/bons-plans-idf.mdx") as never,
  "idees-cadeaux": () => import("@/content/blog/idees-cadeaux.mdx") as never,
  "guide-spa-bien-etre": () => import("@/content/blog/guide-spa-bien-etre.mdx") as never,
  "week-ends-en-amoureux": () => import("@/content/blog/week-ends-en-amoureux.mdx") as never,
}
