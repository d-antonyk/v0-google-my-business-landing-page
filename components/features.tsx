import { CheckCircle2, Star, TrendingUp, Users, Calendar, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: CheckCircle2,
    title: "Accurate Business Information",
    description:
      "Keep your phone number, location, hours, and website updated in real-time so customers can always reach you.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "Monitor and respond to Google reviews professionally. Build trust and improve your online reputation.",
  },
  {
    icon: TrendingUp,
    title: "Higher Local Rankings",
    description:
      "Rank #1 in the local pack and outperform competitors in your area with proven optimization strategies.",
  },
  {
    icon: Users,
    title: "Target Local Customers",
    description: "Attract customers actively searching for your services in your area with geo-targeted optimization.",
  },
  {
    icon: Calendar,
    title: "Regular GMB Posts",
    description: "Promote your latest offers, events, and updates through engaging Google Posts that drive action.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track views, clicks, calls, and direction requests with detailed monthly reporting and insights.",
  },
]

export function Features() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
            Complete GMB Management Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to dominate local search and attract more customers to your business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
