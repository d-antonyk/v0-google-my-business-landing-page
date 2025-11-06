import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Star, TrendingUp, Users, Megaphone } from "lucide-react"

const services = [
  {
    icon: CheckCircle2,
    title: "Ensure correct business info",
    description:
      "We update your phone number, Google Maps location, opening hours, website link, and social media links in real time so customers can reach you how they like.",
  },
  {
    icon: Star,
    title: "Establish a good online reputation",
    description:
      "Our Google My Business services will monitor your Google reviews, and we'll assign a dedicated profile manager to respond to your customers.",
  },
  {
    icon: TrendingUp,
    title: "Rank higher than your competitors",
    description:
      "We'll make you #1 in the local pack, whether you're operating in 1 or 100 locations nationwide so that you can outsmart even the biggest competitors.",
  },
  {
    icon: Users,
    title: "Target local customers near you",
    description:
      "Our Google My Business management service for local SEO will help you attract more loyal customers who are actively searching for your goods or services.",
  },
  {
    icon: Megaphone,
    title: "Promote your latest offers",
    description:
      "From balloons to houses, we'll help you sell anything faster by promoting it on the Google Posts and Photos section of your GMB profile.",
  },
]

export function HowWeHelp() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-gradient-to-b from-blue-50/50 to-white scroll-mt-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-6 text-primary">
            How our Google My Business management service can help
          </h2>
          <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
            Is your new service phone too quiet lately? Or do customers call you confused about your location and
            business hours? Sounds like you need our Google My Business management service to fix the problem! Here's
            how we do it:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top row: items 1, 2, 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex justify-start mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-primary">{service.title}</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Bottom row: items 4, 5 centered to create staggered effect */}
          <div className="flex flex-col md:flex-row gap-8 md:max-w-4xl md:mx-auto">
            {services.slice(3, 5).map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index + 3}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow md:flex-1"
                >
                  <CardContent className="p-8">
                    <div className="flex justify-start mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-primary">{service.title}</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
