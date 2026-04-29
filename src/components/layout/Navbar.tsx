"use client"

import { useState, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { routing } from "@/i18n/routing"

const LOCALES: Record<string, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  it: "IT",
  de: "DE",
  ru: "RU",
}

export default function Navbar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false)
    setLangOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/logements", label: t("logements") },
    { href: "/packs", label: t("packs") },
    { href: "/blog", label: t("blog") },
  ]

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
    setLangOpen(false)
    setMobileOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#13151A] shadow-[0_1px_0_rgba(242,237,228,0.06)]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span
              className="text-xl md:text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
            >
              Wonderroomz
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(242,237,228,0.65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B8997A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,228,0.65)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right: lang selector + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-1"
                style={{ color: "rgba(242,237,228,0.5)" }}
                aria-label="Changer de langue"
              >
                <Globe className="w-4 h-4" />
                <span>{LOCALES[locale]}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    langOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 rounded-xl shadow-xl overflow-hidden min-w-[80px]"
                    style={{ backgroundColor: "#1E2228", border: "1px solid rgba(242,237,228,0.08)" }}
                  >
                    {routing.locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={cn(
                          "w-full px-4 py-2 text-sm text-left transition-colors duration-150",
                          loc === locale
                            ? "font-semibold"
                            : ""
                        )}
                        style={{
                          color: loc === locale ? "#B8997A" : "rgba(242,237,228,0.7)",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(242,237,228,0.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        {LOCALES[loc]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="/logements"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: "#B8997A", color: "#13151A" }}
            >
              {t("reserver")}
            </Link>
          </div>

          {/* Mobile: lang + burger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium py-1"
                style={{ color: "rgba(242,237,228,0.55)" }}
                aria-label="Changer de langue"
              >
                <Globe className="w-4 h-4" />
                <span>{LOCALES[locale]}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 rounded-xl shadow-xl overflow-hidden min-w-[80px] z-50"
                    style={{ backgroundColor: "#1E2228", border: "1px solid rgba(242,237,228,0.08)" }}
                  >
                    {routing.locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className="w-full px-4 py-2 text-sm text-left transition-colors duration-150"
                        style={{ color: loc === locale ? "#B8997A" : "rgba(242,237,228,0.7)" }}
                      >
                        {LOCALES[loc]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Burger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: "rgba(242,237,228,0.8)" }}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden backdrop-blur-md"
            style={{ backgroundColor: "rgba(19,21,26,0.97)", borderTop: "1px solid rgba(242,237,228,0.06)" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 px-2 text-base font-medium transition-colors duration-200"
                    style={{ color: "rgba(242,237,228,0.75)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3, ease: "easeOut" }}
                className="pt-3 mt-2"
                style={{ borderTop: "1px solid rgba(242,237,228,0.06)" }}
              >
                <Link
                  href="/logements"
                  className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
                  style={{ backgroundColor: "#B8997A", color: "#13151A" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {t("reserver")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
