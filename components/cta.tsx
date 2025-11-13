"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send } from "lucide-react"
import { useState } from "react"

const getCookie = (name: string) =>
  typeof document === "undefined"
    ? ""
    : (`; ${document.cookie}`.split(`; ${name}=`).pop() || "").split(";").shift() || "";

export function CTA() {
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
    try {
      const digits = (formData.phone || "").replace(/\D+/g, "")

      const payload = {
        caller_name: formData.name,
        phone_number: digits,
        email: formData.email,
        gclid: getCookie("gclid"),
        gbraid: getCookie("gbraid"),
        utm_source: getCookie("utm_source"),
        utm_medium: getCookie("utm_medium"),
        utm_campaign: getCookie("utm_campaign"),
        ctm_session_id: getCookie("ctm_session_id") || getCookie("ctm_session"),
        embed_url: typeof window !== "undefined" ? window.location.href : "",
      }

      const rsp = await fetch("/api", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })

      const data = await rsp.json()
      if (!rsp.ok || data?.status !== "success") {
        throw new Error(data?.text || "CTM error")
      }

      alert("Thank you! We'll contact you soon.")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      console.error(err)
      alert("Submission error. Please try again or call us.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/30 scroll-mt-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Card className="border-border/50 bg-card overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
                  Ready to Dominate Local Search?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Get a free consultation and discover how we can help your business rank #1 in Google My Business.
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
                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    <Send className="h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Get Free Consultation"}
                  </Button>
                </form>

                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
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
              </div>

              {/* Right side remains unchanged */}
              <div className="bg-primary/5 p-8 sm:p-12 lg:p-16 flex items-center justify-center">
                <div className="space-y-6 w-full max-w-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      ✓
                    </div>
                    <p className="text-foreground font-medium">Free GMB audit included</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      ✓
                    </div>
                    <p className="text-foreground font-medium">No long-term contracts</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      ✓
                    </div>
                    <p className="text-foreground font-medium">Results in 30-60 days</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
