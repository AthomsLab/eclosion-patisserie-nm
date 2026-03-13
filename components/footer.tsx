import { Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-4 md:px-6 py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
          <div className="flex items-center gap-2 text-foreground">
            <Phone size={16} strokeWidth={1.5} className="text-primary" />
            <span className="text-sm">+33 1 23 45 67 89</span>
          </div>
          <span className="hidden md:block text-foreground/40">|</span>
          <div className="flex items-center gap-2 text-foreground">
            <Mail size={16} strokeWidth={1.5} className="text-primary" />
            <span className="text-sm">contact@patisserieeclosion.fr</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} strokeWidth={1.5} className="text-foreground" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} strokeWidth={1.5} className="text-foreground" />
          </a>
        </div>
        <p className="text-foreground/60 text-xs">
          © 2024 Éclosion – Pâtisserie Artisanale. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
