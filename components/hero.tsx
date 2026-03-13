import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-16 pb-8 flex flex-col items-center">
      {/* Logo */}
      <div className="relative z-50 w-[280px] h-[280px] md:w-[340px] md:h-[340px] -mt-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-JvEAhQAIDSYOybYPkw7f2fWID7zi0l.png"
          alt="Éclosion - Pâtisserie Artisanale"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Tagline */}
      <h1 className="font-serif text-2xl md:text-3xl text-foreground text-center mt-4 italic tracking-wide text-balance">
        Elegance & infinie gourmandise
      </h1>
    </section>
  )
}
