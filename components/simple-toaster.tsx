"use client"

import React, { useState, type ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Toast {
  id: string
  title: string
  description?: string
  variant?: "default" | "destructive"
}

interface ToasterContextValue {
  toast: (props: Omit<Toast, "id">) => void
}

const ToasterContext = React.createContext<ToasterContextValue | undefined>(undefined)

export function useToast() {
  const context = React.useContext(ToasterContext)
  if (!context) {
    throw new Error("useToast must be used within a ToasterProvider")
  }
  return context
}

export function ToasterProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (props: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, ...props }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToasterContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 max-w-md">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "flex items-start gap-2 rounded-md border p-4 shadow-md bg-white",
              toast.variant === "destructive" && "border-red-500 bg-red-50",
            )}
            role="alert"
          >
            <div className="flex-1">
              <div className="font-semibold">{toast.title}</div>
              {toast.description && <div className="text-sm text-gray-500">{toast.description}</div>}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="rounded-full p-1 hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToasterContext.Provider>
  )
}

export function SimpleToaster() {
  return null // This is just a placeholder component
}
