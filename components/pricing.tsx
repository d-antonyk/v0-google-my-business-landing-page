"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface PricingProps {
  onOpenModal: () => void
}

export function Pricing({ onOpenModal }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false)
  const [locations, setLocations] = useState(1)

  // Package configurations
  const packages = [
    {
      name: "Starter Package",
      basePrice: 173,
      features: [
        "Profile setup and basic audit",
        "Keyword integration for optimization",
        "Monthly reporting",
        "Basic review monitoring",
        "Google Posts management",
      ],
      popular: false,
    },
    {
      name: "Professional Package",
      basePrice: 299,
      features: [
        "Everything in Starter, plus:",
        "Advanced keyword research",
        "Competitor analysis",
        "Review response management",
        "Weekly performance reports",
        "Photo optimization",
        "Q&A management",
      ],
      popular: true,
    },
    {
      name: "Business Package",
      basePrice: 499,
      features: [
        "Everything in Professional, plus:",
        "Priority support",
        "Custom content creation",
        "Advanced analytics dashboard",
        "Reputation management",
        "Local citation building",
        "Bi-weekly strategy calls",
      ],
      popular: false,
    },
    {
      name: "Enterprise Package",
      basePrice: 799,
      features: [
        "Everything in Business, plus:",
        "Dedicated account manager",
        "Multi-location management",
        "Custom reporting",
        "API integration",
        "White-label solutions",
        "24/7 priority support",
        "Quarterly business reviews",
      ],
      popular: false,
    },
  ]

  // Calculate price for a package
  const calculatePrice = (basePrice: number) => {
    const pricePerLocation = basePrice * locations
    return isAnnual ? Math.round(pricePerLocation * 0.83) : pricePerLocation
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a2e5c] mb-12">GMB management packages</h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isAnnual ? "font-semibold text-[#1a2e5c]" : "text-gray-600"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full transition-colors duration-300"
              style={{ backgroundColor: isAnnual ? "#ea580c" : "#e5e7eb" }}
              aria-label="Toggle billing frequency"
            >
              <span
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300"
                style={{ transform: isAnnual ? "translateX(32px)" : "translateX(0)" }}
              />
            </button>
            <span className={`text-lg ${isAnnual ? "font-semibold text-[#1a2e5c]" : "text-gray-600"}`}>
              Pay annually and
            </span>
          </div>

          {/* Save Badge */}
          {isAnnual && (
            <div className="text-center mb-8">
              <span className="text-2xl font-bold text-[#3b82f6] relative inline-block">
                save up to 17%
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6C50 2 150 2 198 6" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          )}

          {/* Locations Slider */}
          <div className="mb-12 max-w-2xl mx-auto">
            <label className="block text-lg font-semibold text-[#1a2e5c] mb-4">Number of locations</label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="10"
                value={locations}
                onChange={(e) => setLocations(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ea580c 0%, #ea580c ${((locations - 1) / 9) * 100}%, #e5e7eb ${((locations - 1) / 9) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between mt-2 text-[#1a2e5c] font-semibold">
                <span>1</span>
                <span>5</span>
                <span>10</span>
                <span>10+</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl p-8 relative shadow-sm ${
                  pkg.popular ? "ring-2 ring-[#3b82f6]" : "border border-gray-200"
                }`}
              >
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-[#1a2e5c] mb-6">{pkg.name}</h3>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-[#1a2e5c]">${calculatePrice(pkg.basePrice)}</span>
                  <span className="text-xl text-gray-500"> /month</span>
                </div>

                <p className="text-gray-500 mb-8">
                  for {locations} location{locations > 1 ? "s" : ""}
                </p>

                {/* CTA Button - Changed color from navy blue to orange */}
                <button
                  onClick={onOpenModal}
                  className="w-full bg-[#ea580c] hover:bg-[#dc2626] text-white text-lg font-semibold py-4 rounded-xl mb-8 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.4), 0 8px 10px -6px rgba(234, 88, 12, 0.3)",
                  }}
                >
                  Start now
                </button>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-8" />

                {/* Features List */}
                <ul className="space-y-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3b82f6] flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white stroke-[3]" />
                      </div>
                      <span className="text-[#1a2e5c] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Most Popular Badge at bottom */}
                {pkg.popular && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ea580c;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ea580c;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  )
}
