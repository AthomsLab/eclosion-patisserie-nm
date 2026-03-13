import { Cake, Gift, Heart, Star } from "lucide-react"

const services = [
  {
    icon: Cake,
    title: "Gâteaux sur mesure",
    description: "Créations personnalisées pour vos événements spéciaux.",
  },
  {
    icon: Heart,
    title: "Wedding Cakes",
    description: "Pièces montées et gâteaux de mariage d'exception.",
  },
  {
    icon: Gift,
    title: "Coffrets cadeaux",
    description: "Assortiments de pâtisseries élégamment présentés.",
  },
  {
    icon: Star,
    title: "Pâtisseries fines",
    description: "Sélection de pâtisseries individuelles raffinées.",
  },
]

export function ServicesSection() {
  return (
    <section className="px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12 tracking-wide">
          Nos services
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <service.icon size={20} strokeWidth={1.5} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-2 font-medium">{service.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
