"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(form.sujet || "Demande de contact")
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:wonderroomz.suites@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main style={{ backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#13151A" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono tracking-[0.45em] uppercase mb-5" style={{ color: "#B8997A" }}>
            On vous répond sous 2h
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#F2EDE4" }}
          >
            Contactez-nous.
          </h1>
          <p className="text-base max-w-lg" style={{ color: "rgba(242,237,228,0.45)" }}>
            Disponibilités, packs personnalisés, questions sur un logement — on est là pour vous.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Infos contact */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1C" }}
              >
                Informations
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(184,153,122,0.12)" }}>
                    <Mail className="w-4 h-4" style={{ color: "#B8997A" }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "#B8997A" }}>Email</p>
                    <a
                      href="mailto:wonderroomz.suites@gmail.com"
                      className="text-sm hover:underline"
                      style={{ color: "#1C1C1C" }}
                    >
                      wonderroomz.suites@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(184,153,122,0.12)" }}>
                    <MapPin className="w-4 h-4" style={{ color: "#B8997A" }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "#B8997A" }}>Localisation</p>
                    <p className="text-sm" style={{ color: "#1C1C1C" }}>Île-de-France, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(184,153,122,0.12)" }}>
                    <Clock className="w-4 h-4" style={{ color: "#B8997A" }} />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "#B8997A" }}>Disponibilité</p>
                    <p className="text-sm" style={{ color: "#1C1C1C" }}>7j/7 · Réponse en moins de 2h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sujets fréquents */}
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "#B8997A" }}>
                Sujets fréquents
              </p>
              <div className="flex flex-col gap-2">
                {["Disponibilités & réservation", "Packs personnalisés", "Arrivée tardive / early check-in", "Question sur un logement", "Partenariat"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, sujet: s }))}
                    className="text-left text-sm py-2 px-3 rounded-lg transition-all duration-150"
                    style={{
                      backgroundColor: form.sujet === s ? "rgba(184,153,122,0.12)" : "rgba(28,28,28,0.04)",
                      color: form.sujet === s ? "#B8997A" : "rgba(28,28,28,0.6)",
                      border: `1px solid ${form.sujet === s ? "rgba(184,153,122,0.3)" : "transparent"}`,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest uppercase" style={{ color: "#B8997A" }}>
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(28,28,28,0.1)",
                      color: "#1C1C1C",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest uppercase" style={{ color: "#B8997A" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(28,28,28,0.1)",
                      color: "#1C1C1C",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono tracking-widest uppercase" style={{ color: "#B8997A" }}>
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="Ex : Disponibilités week-end du 15 juin"
                  value={form.sujet}
                  onChange={(e) => setForm((f) => ({ ...f, sujet: e.target.value }))}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(28,28,28,0.1)",
                    color: "#1C1C1C",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono tracking-widest uppercase" style={{ color: "#B8997A" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Dites-nous tout..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(28,28,28,0.1)",
                    color: "#1C1C1C",
                  }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-85 self-start"
                style={{ backgroundColor: "#B8997A", color: "#FFFFFF" }}
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
              <p className="text-xs" style={{ color: "rgba(28,28,28,0.35)" }}>
                En cliquant sur Envoyer, votre client mail s&apos;ouvrira avec le message pré-rempli.
              </p>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
