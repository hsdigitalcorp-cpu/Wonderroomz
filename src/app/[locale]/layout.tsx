import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import "../globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Wonderroomz — Séjours d'exception en Île-de-France",
    template: "%s | Wonderroomz",
  },
  description:
    "4 appartements uniques en Île-de-France. Réservez directement au meilleur prix garanti.",
  openGraph: {
    siteName: "Wonderroomz",
    locale: "fr_FR",
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Locale = (typeof routing.locales)[number]

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1C1C]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
