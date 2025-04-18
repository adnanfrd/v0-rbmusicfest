"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/simple-button"
import { festivalData } from "@/data/festival-data"
import { Calendar, MapPin, Mail, Crown } from "lucide-react"
import { SimpleDialog } from "@/components/simple-dialog"
import { EmailSignupForm } from "@/components/email-signup-form"
import { useReducedMotion } from "@/components/use-reduced-motion"

export function CtaRibbon() {
  const [isVisible, setIsVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      // Show the ribbon after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const variants = {
    hidden: {
      y: reduceMotion ? 0 : -100,
      opacity: reduceMotion ? 0 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const emailButton = (
    <Button size="sm" variant="outline" className="whitespace-nowrap">
      <Mail className="mr-2 h-4 w-4" />
      <span className="hidden sm:inline">Get Updates</span>
    </Button>
  )

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-md"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="container py-3">
        <div className="flex justify-between items-center gap-2 overflow-x-auto">
          <Button size="sm" className="bg-festival-blue hover:bg-festival-blue/90 whitespace-nowrap">
            <Link href={festivalData.eventbriteUrl} target="_blank" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">RSVP</span>
            </Link>
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="border-festival-pink text-festival-pink hover:bg-festival-pink hover:text-white whitespace-nowrap"
          >
            <Link href={festivalData.vipUrl} target="_blank" className="flex items-center">
              <Crown className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">VIP Access</span>
            </Link>
          </Button>

          <SimpleDialog trigger={emailButton} title="Stay Updated">
            <EmailSignupForm />
          </SimpleDialog>

          <Button size="sm" variant="outline" className="whitespace-nowrap">
            <Link href={festivalData.mapUrl} target="_blank" className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Directions</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
