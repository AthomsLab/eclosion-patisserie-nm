"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Check } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <section id="contact" className="px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12 tracking-wide">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl text-foreground mb-6 font-medium">Nous contacter</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Phone size={18} strokeWidth={1.5} className="text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail size={18} strokeWidth={1.5} className="text-primary" />
                <span>contact@patisserieeclosion.fr</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={18} strokeWidth={1.5} className="text-primary" />
                <span>123 Rue de la Pâtisserie, Paris</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl text-foreground mb-6 font-medium">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#b89a6a] text-white py-3 rounded-full text-sm tracking-wide hover:bg-primary transition-colors"
              >
                Envoyer
              </button>
              {showSuccess && (
                <div className="flex items-center justify-center gap-2 text-foreground animate-in fade-in duration-300">
                  <Check size={18} strokeWidth={1.5} />
                  <span className="text-sm">Message envoyé !</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
