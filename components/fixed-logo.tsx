import Image from "next/image"

export function ScrollingLogo() {
  return (
    <div className="relative w-full flex justify-center -mt-[130px] mb-4 pointer-events-none">
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
