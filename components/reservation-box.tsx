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
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="font-serif text-foreground text-center text-2xl md:text-3xl mb-6 tracking-wide">
            Réservez votre créneau de retrait
          </h2>

          {/* Date Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {dates.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg btn-date ${
                  selectedDate === index
                    ? "bg-button text-white"
                    : "bg-white/10 text-foreground hover:bg-white/30"
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
                className={`px-4 py-2 rounded-lg text-sm transition-all ${selectedTime === time
                    ? "bg-button text-white"
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
              className="btn-lg"
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
          <p className="font-serif text-foreground text-2xl md:text-3xl mb-4 tracking-wide">
            Commandes exclusivement sur réservation
          </p>
          <button className="btn-lg">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  )
}
