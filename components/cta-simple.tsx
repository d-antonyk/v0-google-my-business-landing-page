"use client"

interface CTASimpleProps {
  onOpenModal: () => void
}

export function CTASimple({ onOpenModal }: CTASimpleProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#3b82f6] relative overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <p className="text-white/90 text-lg sm:text-xl mb-3 font-medium">Don't get lost in the pack</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 text-balance leading-tight">
            Learn more about our Google My Business management services today!
          </h2>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="inline-block bg-[#ea580c] hover:bg-[#dc2626] text-white font-semibold text-lg px-12 py-5 rounded-xl transition-all duration-300"
            style={{
              boxShadow: "0 10px 30px rgba(234, 88, 12, 0.4)",
            }}
          >
            Book A Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
