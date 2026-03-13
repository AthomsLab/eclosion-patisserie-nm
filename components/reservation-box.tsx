"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const dates = [
  { day: "Sat", date: 29 },
  { day: "Sun", date: 30 },
  { day: "Mar", date: 31 },
  { day: "Jun", date: 1 },
  { day: "Ven", date: 2 },
  { day: "Sed", date: 3 },
  { day: "Thu", date: 4 },
]

const times = ["09:30", "10:00", "11:00", "11:30", "14:00", "16:00"]

export function ReservationBox() {
  const [selectedDate, setSelectedDate] = useState(3)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleValidate = () => {
    if (selectedTime) {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <section className="px-4 md:px-6 py-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-card backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-foreground text-center text-lg md:text-xl mb-6 tracking-wide">
            Réservez votre créneau de retrait
          </h2>

          {/* Date Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {dates.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`flex flex-col items-center justify-center w-12 h-14 md:w-14 md:h-16 rounded-lg transition-all ${
                  selectedDate === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/30 text-foreground hover:bg-white/50"
                }`}
              >
                <span className="text-xs">{item.day}</span>
                <span className="text-sm font-medium">{item.date}</span>
              </button>
            ))}
          </div>

          {/* Time Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedTime === time
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/30 text-foreground hover:bg-white/50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Validate Button */}
          <div className="flex justify-center">
            <button
              onClick={handleValidate}
              className="bg-primary text-primary-foreground px-10 py-3 rounded-full text-sm tracking-wide hover:bg-[#c4a07f] transition-colors"
            >
              Valider
            </button>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 flex items-center justify-center gap-2 text-foreground animate-in fade-in duration-300">
              <Check size={18} strokeWidth={1.5} />
              <span className="text-sm">Réservation confirmée !</span>
            </div>
          )}
        </div>

        {/* Info Text */}
        <div className="text-center mt-8">
          <p className="text-foreground text-lg mb-4 tracking-wide">
            Commandes exclusivement sur réservation
          </p>
          <button className="bg-primary/80 text-primary-foreground px-8 py-3 rounded-full text-sm tracking-wide hover:bg-primary transition-colors">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  )
}
