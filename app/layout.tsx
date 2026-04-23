import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rockaway Beach Music Festival",
  description: "Annual music festival at Rockaway Beach, Oregon",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <div aria-hidden="true" className="hidden">
          {children}
        </div>
        <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 py-16 text-white">
          <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-2xl backdrop-blur">
            <div className="mx-auto flex max-w-xl justify-center">
              <Image
                src="/images/rbmf-title.png"
                alt="Rockaway Beach Music Festival logo"
                width={900}
                height={225}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-8 text-2xl font-semibold uppercase tracking-[0.2em] text-white sm:text-3xl">
              Updated website coming soon
            </p>
            <Link
              href="https://www.eventbrite.com/e/rockaway-beach-music-festival-2026-tickets-1987021841818"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f05537] px-8 py-4 text-base font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#ff6b4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              RSVP NOW
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
