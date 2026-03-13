import Image from "next/image"

export function FixedLogo() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none flex justify-center -mt-[20px]">
      <div className="relative w-[300px] h-[350px] md:w-[340px] md:h-[380px]">
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
