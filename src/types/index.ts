export type Logement = {
  id: string
  slug: string
  nom: string
  tagline: string
  description: string
  prixNuit: number
  capacite: number
  surface: number
  chambres: number
  images: string[]
  amenities: string[]
  ambiance: string // ex: "zen", "nature", "urban", "prestige"
  accent: string   // couleur thème par logement
  note: number
  avis: number
  coupDeCoeur: boolean
  features: string[] // points forts avec checkmark
}

export type Pack = {
  id: string
  nom: string
  occasion: "romantique" | "anniversaire"
  prix: number
  highlight?: boolean
  features: string[]
}
