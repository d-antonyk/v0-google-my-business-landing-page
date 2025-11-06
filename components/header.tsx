"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // Close menu immediately for better UX
    setIsOpen(false)

    // Small delay to let menu close animation start, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Benefits", id: "benefits" },
    { label: "Process", id: "process" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          <img
            src="https://lp.topposition.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-header.f2a3c5d9.webp&w=384&q=75"
            alt="TopPosition"
            className="h-10 w-auto"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-[#1a2b4a] hover:text-[#ff5722] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+1234567890">
            <Button className="gap-2 bg-[#ff5722] hover:bg-[#ff5722]/90 text-white">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Us</span>
            </Button>
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-[#1a2b4a]">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-base font-medium text-[#1a2b4a] hover:text-[#ff5722] hover:bg-gray-50 transition-colors py-4 px-4 rounded-lg"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a href="tel:+1234567890" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gap-2 bg-[#ff5722] hover:bg-[#ff5722]/90 text-white py-6">
                      <Phone className="h-4 w-4" />
                      Call Us: +1 (234) 567-890
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
