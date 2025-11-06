import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Eye, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    stat: "300%",
    label: "More Profile Views",
    description: "Increase visibility in local search results",
  },
  {
    icon: Phone,
    stat: "5x",
    label: "More Phone Calls",
    description: "Drive direct customer inquiries",
  },
  {
    icon: MapPin,
    stat: "250%",
    label: "More Direction Requests",
    description: "Get customers to your location",
  },
  {
    icon: MessageSquare,
    stat: "4.8★",
    label: "Average Rating",
    description: "Build trust with positive reviews",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-32 scroll-mt-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
            Real Results for Your Business
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our clients see measurable improvements in their local search performance and customer engagement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 bg-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{benefit.stat}</div>
                <div className="font-semibold text-card-foreground mb-2">{benefit.label}</div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
