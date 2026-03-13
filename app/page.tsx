import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ReservationBox } from "@/components/reservation-box"
import { AboutSection } from "@/components/about-section"
import { HowToOrderSection } from "@/components/how-to-order-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { OrderSection } from "@/components/order-section"
import { Footer } from "@/components/footer"
import { FixedLogo } from "@/components/fixed-logo"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-floral-rZ0bxxNZdQJzAHkiUJy2GuR2DIHe1q.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Fixed Logo - Always visible, overlapping header */}
      <FixedLogo />

      {/* Header */}
      <Header />

      {/* Main Content - clipped at top so content disappears under logo */}
      <main 
        className="relative z-10 pt-[320px]"
        style={{
          clipPath: "inset(350px 0 0 0)",
          marginTop: "-350px",
          paddingTop: "670px",
        }}
      >
        <Hero />
        <ReservationBox />
        <AboutSection />
        <HowToOrderSection />
        <ServicesSection />
        <ContactSection />
        <OrderSection />
        <Footer />
      </main>
    </div>
  )
}
