"use client"

export function Clients() {
  const clients = [
    {
      name: "Factoring Express",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-Factoring.svg",
    },
    {
      name: "Eau Claire Bodycare",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-eauclare.svg",
    },
    {
      name: "Rent For Event",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-Rent.svg",
    },
    {
      name: "Rush In",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-RushIn.svg",
    },
    {
      name: "L&A Wellness Home",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-LAWellness.svg",
    },
    {
      name: "PPT Pacific Plumbing Team",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-PPT.svg",
    },
    {
      name: "Emulate",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-emulate.svg",
    },
    {
      name: "PURE",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-PURE.svg",
    },
    {
      name: "Rock",
      logo: "https://topposition.com/wp-content/uploads/2024/08/logo-rock.svg",
    },
  ]

  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#1a2b4a] mb-8 sm:mb-12">Our clients</h2>

        <div className="relative">
          <div className="flex animate-marquee">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center mx-8 sm:mx-12 flex-shrink-0 transition-all duration-300"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
