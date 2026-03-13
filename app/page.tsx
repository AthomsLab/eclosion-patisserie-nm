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

      {/* Gradient Mask at Top - Content fades under logo at ~450px */}
      <div
        className="fixed top-0 left-0 right-0 z-30 pointer-events-none"
        style={{
          height: "450px",
          background:
            "linear-gradient(to bottom, rgba(250, 246, 243, 1) 0%, rgba(250, 246, 243, 0.98) 70%, rgba(250, 246, 243, 0.9) 85%, rgba(250, 246, 243, 0) 100%)",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 pt-[420px]">
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
