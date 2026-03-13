import Image from "next/image"

export function FixedLogo() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none flex justify-center pt-4">
      <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[420px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoTransparent-fhG5gxZG2497pjbMmYfgguS7Fgn7zx.png"
          alt="Éclosion - Pâtisserie Artisanale"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
