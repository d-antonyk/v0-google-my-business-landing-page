"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Form submitted:", formData)
    alert("Thank you! We'll contact you soon.")

    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
    setOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-28">
      {/* Desktop blue diagonal background with phone image */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-[58%] h-full bg-gradient-to-br from-[#4169E1] to-[#3B5FD9] overflow-hidden"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <img
          src="https://topposition.com/wp-content/uploads/2025/01/gmb-hero-img-1.webp"
          alt="Google My Business Management"
          className="w-full h-full object-contain object-center scale-110"
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 max-w-xl">
            <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] text-[#1a2b4a] leading-[1.1]">
              Google My Business Management Service
            </h1>

            <p className="text-lg sm:text-lg text-gray-600 text-pretty leading-relaxed">
              Make your business listing the first thing customers see online through our Google My Business management
              service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg bg-[#ff5722] hover:bg-[#f4511e] text-white rounded-lg px-10 py-7 shadow-lg font-semibold"
                  >
                    Book A Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Ready to Dominate Local Search?</DialogTitle>
                    <DialogDescription className="text-base">
                      Get a free consultation and discover how we can help your business rank #1 in Google My Business.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your business..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 bg-[#ff5722] hover:bg-[#f4511e]"
                      disabled={isSubmitting}
                    >
                      <Send className="h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Get Free Consultation"}
                    </Button>
                  </form>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-border">
                    <Button size="sm" variant="outline" className="gap-2 flex-1 bg-transparent" asChild>
                      <a href="tel:+13237666998">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 flex-1 bg-transparent" asChild>
                      <a href="mailto:contact@example.com">
                        <Mail className="h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>

                  <div className="space-y-3 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        ✓
                      </div>
                      <p className="text-sm text-foreground font-medium">Free GMB audit included</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        ✓
                      </div>
                      <p className="text-sm text-foreground font-medium">No long-term contracts</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        ✓
                      </div>
                      <p className="text-sm text-foreground font-medium">Results in 30-60 days</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="lg:hidden relative w-full max-w-lg mx-auto mt-4 z-10">
            <img
              src="https://topposition.com/wp-content/uploads/2025/01/gmb-hero-img-1.webp"
              alt="Google My Business Management"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="relative lg:ml-auto" />
        </div>
      </div>
    </section>
  )
}
