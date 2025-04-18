"use client"

import { useState, useEffect, type ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SimpleDialogProps {
  trigger: ReactNode
  title: string
  children: ReactNode
  className?: string
}

export function SimpleDialog({ trigger, title, children, className }: SimpleDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close dialog when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when dialog is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {trigger}
      </div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)} aria-hidden="true" />
      <div
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg",
          className,
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-gray-100" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
