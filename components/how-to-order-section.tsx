import { Calendar, Clock, ShoppingBag } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Choisissez votre date",
    description: "Sélectionnez le jour de retrait qui vous convient parmi nos créneaux disponibles.",
  },
  {
    icon: Clock,
    title: "Réservez votre créneau",
    description: "Choisissez l'heure de retrait et validez votre réservation en ligne.",
  },
  {
    icon: ShoppingBag,
    title: "Récupérez votre commande",
    description: "Venez chercher vos pâtisseries fraîchement préparées à l'heure convenue.",
  },
]

export function HowToOrderSection() {
  return (
    <section id="how-to-order" className="px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-12 tracking-wide italic">
          Comment commander
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <step.icon size={24} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="text-lg text-foreground mb-3 font-medium">{step.title}</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
