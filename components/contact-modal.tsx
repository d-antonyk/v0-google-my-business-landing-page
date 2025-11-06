"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Form submitted:", formData)
    alert("Thank you! We'll contact you soon.")

    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
    onOpenChange(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1a2e5c]">Get Your Free Consultation</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <p className="text-muted-foreground mb-6">
            Fill out the form below and we'll get back to you within 24 hours to discuss how we can help your business
            dominate local search.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full gap-2 bg-[#ea580c] hover:bg-[#dc2626] text-white"
              disabled={isSubmitting}
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? "Sending..." : "Get Free Consultation"}
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
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

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-white font-bold">
                ✓
              </div>
              <p className="text-foreground">Free GMB audit included</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-white font-bold">
                ✓
              </div>
              <p className="text-foreground">No long-term contracts</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-white font-bold">
                ✓
              </div>
              <p className="text-foreground">Results in 30-60 days</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
