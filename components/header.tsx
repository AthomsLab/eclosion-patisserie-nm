"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Comment commander", href: "#how-to-order" },
  { label: "Contact", href: "#contact" },
  { label: "Commander", href: "#order", isButton: true },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-40 bg-transparent">
      <nav 
        className="fixed top-[30px] left-0 right-0 max-w-6xl mx-auto px-6 py-4"
        style={{
          boxShadow: "0 -8px 16px -8px rgba(147, 122, 105, 0.15), 0 8px 16px -8px rgba(147, 122, 105, 0.15)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground text-sm tracking-wide hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Spacer for logo */}
          <div className="hidden md:block w-48" />

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(2).map((item) =>
              item.isButton ? (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="btn-primary"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground text-sm tracking-wide hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/30">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) =>
                item.isButton ? (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="btn-primary w-fit"
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground text-sm tracking-wide hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
