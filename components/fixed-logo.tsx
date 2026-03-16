import Image from "next/image"

export function ScrollingLogo() {
  return (
    <div className="relative w-full flex justify-center -mt-[171px] mb-0 pointer-events-none">
      <div className="relative w-[420px] h-[490px] md:w-[476px] md:h-[532px]">
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
