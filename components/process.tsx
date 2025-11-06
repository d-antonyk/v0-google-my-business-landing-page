import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We analyze your current GMB profile and identify optimization opportunities.",
  },
  {
    number: "02",
    title: "Profile Optimization",
    description: "Complete setup and optimization of your business information, categories, and attributes.",
  },
  {
    number: "03",
    title: "Content Creation",
    description: "Regular posts, photos, and updates to keep your profile active and engaging.",
  },
  {
    number: "04",
    title: "Review Management",
    description: "Professional monitoring and responses to all customer reviews.",
  },
  {
    number: "05",
    title: "Performance Tracking",
    description: "Monthly reports showing your rankings, views, clicks, and customer actions.",
  },
  {
    number: "06",
    title: "Ongoing Optimization",
    description: "Continuous improvements based on performance data and algorithm updates.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-32 bg-muted/30 scroll-mt-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A systematic approach to getting your business to the top of local search results.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
