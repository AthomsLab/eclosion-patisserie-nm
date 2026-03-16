"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const products = [
  { id: 1, name: "Tarte aux fruits", price: "28€" },
  { id: 2, name: "Entremets chocolat", price: "35€" },
  { id: 3, name: "Paris-Brest", price: "32€" },
  { id: 4, name: "Mille-feuille", price: "30€" },
  { id: 5, name: "Éclair assortiment (6)", price: "24€" },
  { id: 6, name: "Macaron coffret (12)", price: "26€" },
]

export function OrderSection() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [showSuccess, setShowSuccess] = useState(false)

  const toggleProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const handleOrder = () => {
    if (selectedProducts.length > 0) {
      setShowSuccess(true)
      setSelectedProducts([])
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <section id="order" className="px-4 md:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12 tracking-wide">
          Commander
        </h2>
        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl text-foreground mb-6 text-center font-medium">
            Sélectionnez vos pâtisseries
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => toggleProduct(product.id)}
                className={`flex items-center justify-between p-4 rounded-xl btn-date ${
                  selectedProducts.includes(product.id)
                    ? "bg-button text-white"
                    : "bg-white/30 text-foreground hover:bg-white/50"
                }`}
              >
                <span className="text-sm">{product.name}</span>
                <span className="text-sm font-medium">{product.price}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleOrder}
              disabled={selectedProducts.length === 0}
              className="btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Valider la commande
            </button>
          </div>
          {showSuccess && (
            <div className="mt-4 flex items-center justify-center gap-2 text-foreground animate-in fade-in duration-300">
              <Check size={18} strokeWidth={1.5} />
              <span className="text-sm">Commande enregistrée ! Nous vous contacterons bientôt.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
