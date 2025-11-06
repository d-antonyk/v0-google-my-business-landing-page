"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { WhatIsGMB } from "@/components/what-is-gmb"
import { HowWeHelp } from "@/components/how-we-help"
import { WhatsIncluded } from "@/components/whats-included"
import { Benefits } from "@/components/benefits"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CTASimple } from "@/components/cta-simple"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <WhatIsGMB />
        <HowWeHelp />
        <WhatsIncluded />
        <Benefits />
        <Process />
        <Pricing onOpenModal={() => setIsModalOpen(true)} />
        <Testimonials />
        <CTASimple onOpenModal={() => setIsModalOpen(true)} />
        <CTA />
      </main>
      <Footer />

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
