export function WhatsIncluded() {
  const features = [
    "Uploading of business photos and videos",
    "Creating events and promotional posts",
    "Adding new products and service listings",
    "Monitoring and responding to Google reviews",
    "Q&A section creation and management",
    "Spam listing identification and removal",
    "Real-time profile monitoring",
    "Managing multi-location GMB profiles",
    "Monthly performance reports",
  ]

  return (
    <section className="py-20 bg-white scroll-mt-24" id="whats-included">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: "#1a2e5c" }}>
            What's included in our Google My Business management services?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
            Drive more calls, foot traffic, and sales to your business with the help of our turnkey GMB management
            services.
          </p>

          {/* Hero Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-lg">
            <picture>
              {/* Desktop image for screens 768px and wider */}
              <source
                media="(min-width: 768px)"
                srcSet="https://topposition.com/wp-content/uploads/2025/01/gmb-map-768x281.webp 768w, https://topposition.com/wp-content/uploads/2025/01/gmb-map.webp 939w"
                sizes="(min-width: 768px) 939px, 768px"
              />
              {/* Mobile image for screens smaller than 768px */}
              <source
                media="(max-width: 767px)"
                srcSet="https://topposition.com/wp-content/uploads/2025/01/gmb-map-M-150x150.webp 150w, https://topposition.com/wp-content/uploads/2025/01/gmb-map-M-300x300.webp 300w, https://topposition.com/wp-content/uploads/2025/01/gmb-map-M.webp 517w"
                sizes="(max-width: 767px) 100vw, 517px"
              />
              {/* Fallback image */}
              <img
                src="https://topposition.com/wp-content/uploads/2025/01/gmb-map.webp"
                alt="Google My Business 5.0 Rating on Map"
                className="w-full h-auto"
              />
            </picture>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-12 lg:gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Blue checkmark circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3b82f6" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Feature text */}
                <p className="text-lg md:text-xl font-medium" style={{ color: "#3b82f6" }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
