import { Header } from "@/components/header"
import { ScrollingLogo } from "@/components/fixed-logo"
import { Hero } from "@/components/hero"
import { ReservationBox } from "@/components/reservation-box"
import { AboutSection } from "@/components/about-section"
import { HowToOrderSection } from "@/components/how-to-order-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { OrderSection } from "@/components/order-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-floral-rZ0bxxNZdQJzAHkiUJy2GuR2DIHe1q.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 pt-[80px]">
        {/* Scrolling Logo - Part of content flow */}
        <ScrollingLogo />
        
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
