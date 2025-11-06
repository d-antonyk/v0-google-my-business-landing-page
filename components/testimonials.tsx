"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Local Bakery Owner",
    content:
      "TopPosition helped us increase our local visibility by 300%. We now get daily calls from customers who found us on Google Maps!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Dental Practice",
    content:
      "Our Google My Business profile went from invisible to the top 3 results in our area. The ROI has been incredible.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Fitness Studio",
    content:
      "The team manages our reviews, posts, and keeps our profile updated. Our booking rate has doubled since we started working with them.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real results from real businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
