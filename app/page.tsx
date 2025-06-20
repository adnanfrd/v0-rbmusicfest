"use client"

import { useEffect } from "react"
import HeroSection from "./components/hero-section"
import CtaRibbon from "./components/cta-ribbon"
import LineupSection from "./components/lineup-section"
import ExperienceSection from "./components/experience-section"
import MapSection from "./components/map-section"
import FaqSection from "./components/faq-section"
import Footer from "./components/footer"

export default function Home() {
  useEffect(() => {
    // Log for debugging
    console.log("Page loaded, checking for images...")

    // Check if images are loading correctly
    const images = document.querySelectorAll("img")
    images.forEach((img, index) => {
      console.log(`Image ${index}:`, {
        src: img.src,
        loaded: img.complete,
        naturalWidth: img.naturalWidth,
      })

      // Add load event listener
      img.addEventListener("load", () => {
        console.log(`Image ${index} loaded:`, img.src)
      })

      // Add error event listener
      img.addEventListener("error", (e) => {
        console.error(`Image ${index} failed to load:`, img.src, e)
      })
    })

    // Preload critical images using the correct blob URLs
    const preloadImages = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/squatch-DCY8BTAEooyduNm7u5koD5N6njziJA.png", // squatch.png
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/rbmf-title-GWRcFb3YGP7Fiulma7arIRkXrZpcl0.png", // rbmf-title.png
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/TyphoonPressPhoto2021-Z5RuyFSjooyEf5tKLrjwCafNpVCe43.png", // TyphoonPressPhoto2021.png
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox-band-rGTMT50p4Z9byp83kyjCRvuqZ8cjXU.jpeg", // glitterfox-band.jpeg
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mitch-whitaker-band-u2qj1InxzFKqrWeyjr57Mzz6gGSLnF.webp", // mitch-whitaker-band.webp
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mercury-coast-band-qbQ8pMcV5AHPHsvoNxl270xYXJbBW4.jpeg", // mercury-coast-band.jpeg
    ]

    preloadImages.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => console.log(`Preloaded: ${src}`)
      img.onerror = (e) => console.error(`Failed to preload: ${src}`, e)
    })
  }, [])

  return (
    <main>
      <HeroSection />
      <CtaRibbon />
      <LineupSection />
      <div className="section-divider"></div>
      <ExperienceSection />
      <div className="section-divider"></div>
      <MapSection />
      <div className="section-divider"></div>
      <FaqSection />
      <Footer />
    </main>
  )
}
