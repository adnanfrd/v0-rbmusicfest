"use client"

import { useEffect, useRef } from "react"
import { X, Globe, Instagram, Youtube, LinkIcon } from "lucide-react"
import ImageCarousel from "./image-carousel"
import VideoEmbed from "./video-embed"

interface SocialLink {
  name: string
  url: string
}

interface Video {
  title: string
  url: string
}

interface ArtistModalProps {
  artist: {
    name: string
    image: string
    images?: string[]
    description: string
    fullBio?: string
    website: string | null
    tag?: string
    videos?: Video[]
    socialLinks?: SocialLink[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ArtistModal({ artist, isOpen, onClose }: ArtistModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "website":
        return <Globe className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "bandcamp":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM9.5 15.5L9 8.4h5.1L19 15.5H9.5z" />
          </svg>
        )
      case "twitter":
      case "twitter/x":
      case "x":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        )
      case "facebook":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )
      case "spotify":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        )
      case "tiktok":
      case "tik tok":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        )
      case "linktree":
        return <LinkIcon className="h-5 w-5" />
      case "soundcloud":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.175 12.225c-.051 0-.094.046-.101.105l-.233 2.154.233 2.105c.007.058.05.104.101.104.05 0 .093-.046.101-.104l.266-2.105-.266-2.154c-.008-.059-.051-.105-.101-.105zm1.49.105c-.059 0-.109.053-.109.117l-.2 2.058.2 2.042c0 .064.05.117.109.117s.109-.053.109-.117l.235-2.042-.235-2.058c0-.064-.05-.117-.109-.117zm1.49.058c-.067 0-.125.058-.125.132l-.182 2.013.182 2.067c0 .074.058.132.125.132.066 0 .124-.058.124-.132l.209-2.067-.209-2.013c0-.074-.058-.132-.124-.132zm1.49-.024c-.075 0-.141.067-.141.15l-.164 2.046.164 2.083c0 .083.066.15.141.15.074 0 .14-.067.14-.15l.189-2.083-.189-2.046c0-.083-.066-.15-.14-.15zm1.49-.083c-.083 0-.158.075-.158.167l-.147 2.129.147 2.1c0 .092.075.167.158.167.082 0 .157-.075.157-.167l.170-2.1-.170-2.129c0-.092-.075-.167-.157-.167zm1.49-.125c-.091 0-.174.083-.174.183l-.130 2.254.130 2.125c0 .1.083.183.174.183.09 0 .173-.083.173-.183l.151-2.125-.151-2.254c0-.1-.083-.183-.173-.183zm1.49-.2c-.1 0-.191.092-.191.2l-.113 2.454.113 2.142c0 .108.091.2.191.2.099 0 .190-.092.190-.2l.132-2.142-.132-2.454c0-.108-.091-.2-.190-.2zm1.49-.283c-.108 0-.208.1-.208.217l-.096 2.737.096 2.158c0 .117.1.217.208.217.107 0 .207-.1.207-.217l.113-2.158-.113-2.737c0-.117-.1-.217-.207-.217zm1.49-.367c-.117 0-.225.108-.225.233l-.079 3.104.079 2.175c0 .125.108.233.225.233.116 0 .224-.108.224-.233l.094-2.175-.094-3.104c0-.125-.108-.233-.224-.233zm1.49-.458c-.125 0-.241.117-.241.25l-.062 3.562.062 2.192c0 .133.116.25.241.25.125 0 .241-.117.241-.25l.075-2.192-.075-3.562c0-.133-.116-.25-.241-.25zm1.49-.575c-.133 0-.258.125-.258.275l-.045 4.137.045 2.208c0 .15.125.275.258.275.132 0 .257-.125.257-.275l.056-2.208-.056-4.137c0-.15-.125-.275-.257-.275zm1.49-.692c-.141 0-.274.133-.274.292l-.028 4.829.028 2.225c0 .159.133.292.274.292.140 0 .273-.133.273-.292l.037-2.225-.037-4.829c0-.159-.133-.292-.273-.292zm1.49-.808c-.15 0-.291.142-.291.317l-.011 5.521.011 2.242c0 .175.141.317.291.317.149 0 .290-.142.290-.317l.018-2.242-.018-5.521c0-.175-.141-.317-.290-.317zm1.49-.942c-.158 0-.308.15-.308.333l.005 6.463-.005 2.258c0 .183.15.333.308.333.157 0 .307-.15.307-.333l-.002-2.258.002-6.463c0-.183-.15-.333-.307-.333zm1.49-1.075c-.166 0-.325.159-.325.35l.013 7.538-.013 2.275c0 .191.159.35.325.35.165 0 .324-.159.324-.35l-.016-2.275.016-7.538c0-.191-.159-.35-.324-.35zm1.49-1.208c-.174 0-.341.167-.341.375l.020 8.613-.020 2.292c0 .208.167.375.341.375.173 0 .340-.167.340-.375l-.023-2.292.023-8.613c0-.208-.167-.375-.340-.375zm1.49-1.341c-.182 0-.358.175-.358.392l.027 9.688-.027 2.308c0 .217.176.392.358.392.181 0 .357-.175.357-.392l-.030-2.308.030-9.688c0-.217-.176-.392-.357-.392zm1.49-1.475c-.190 0-.374.183-.374.408l.034 10.763-.034 2.325c0 .225.184.408.374.408.189 0 .373-.183.373-.408l-.037-2.325.037-10.763c0-.225-.184-.408-.373-.408zm1.49-1.608c-.198 0-.391.192-.391.425l.041 11.838-.041 2.342c0 .233.193.425.391.425.197 0 .390-.192.390-.425l-.044-2.342.044-11.838c0-.233-.193-.425-.390-.425z" />
          </svg>
        )
      case "apple music":
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.02 1.88.475 3.208c-.192.466-.34.943-.408 1.44-.087.645-.108 1.298-.094 1.952.004.278.016.554.022.83v9.14c-.007.276-.02.558-.026.834-.01.413.044.826.098 1.237.146 1.11.55 2.082 1.31 2.867.42.43.904.77 1.436 1.02.46.22.942.374 1.446.457.368.06.74.083 1.113.09.32.01.64.01.96.01H19.05c.225-.004.45-.012.674-.024 1.13-.06 2.2-.356 3.09-1.07.38-.306.724-.658 1.006-1.056.372-.528.6-1.11.77-1.735.11-.41.185-.834.21-1.266.012-.21.014-.423.014-.636V7.97c-.003-.29-.005-.58-.01-.87l.01-.857zm-4.057 11.512c-.016.095-.033.19-.055.283-.08.383-.215.74-.42 1.065-.31.5-.72.865-1.227 1.143-.358.193-.74.328-1.148.4-.19.032-.383.044-.577.045-.544.005-1.088 0-1.632-.002h-8.46c-.522 0-1.043.005-1.564-.01-.39-.01-.77-.077-1.134-.215-.506-.188-.93-.512-1.258-.95-.2-.267-.356-.56-.445-.878-.06-.213-.09-.436-.09-.66 0-.307.004-.614.004-.92V7.76c0-.757-.006-1.514.012-2.27.015-.622.203-1.18.616-1.655.378-.43.848-.73 1.396-.882.335-.093.683-.142 1.03-.142 1.065-.005 2.13-.004 3.195-.004h8.987c.57 0 1.14.008 1.71.04.348.02.686.09 1.007.215.55.212.99.57 1.328 1.052.206.296.36.62.46.966.076.262.1.534.108.81.01.398.002.797.002 1.195V17.1c0 .16-.006.32-.018.48z" />
            <path d="M17.58 10.554c-.36-.037-.717-.06-1.075-.06-1.462 0-2.922 0-4.385.002-.116 0-.233.01-.348.022-.6.057-1.08.54-1.132 1.14-.02.235-.01.47-.01.706v4.85c0 .202.01.403.03.603.05.335.172.64.418.878.262.254.592.394.962.435.14.016.282.02.423.02h.14c1.268 0 2.535.002 3.803 0 .29 0 .58-.023.866-.076.674-.124 1.156-.57 1.28-1.244.025-.137.035-.276.035-.415V12.51c0-.202-.01-.403-.03-.603-.073-.6-.396-1.03-.977-1.353z" />
          </svg>
        )
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  if (!isOpen || !artist) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          animation: "modalFadeIn 0.3s ease-out forwards",
        }}
      >
        <div className="relative aspect-video">
          {artist.images && artist.images.length > 0 ? (
            <ImageCarousel images={artist.images} alt={artist.name} />
          ) : (
            <img
              src={artist.image || "/placeholder.svg"}
              alt={artist.name}
              className="w-full h-full object-cover rounded-t-lg"
              onError={(e) => {
                console.error("Error loading image:", e)
                e.currentTarget.src = `https://placehold.co/800x400/gray/white?text=${artist.name}`
              }}
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          {artist.tag && (
            <div className="absolute top-4 left-4 bg-festival-pink text-white px-3 py-1 rounded-full text-sm z-10">
              {artist.tag}
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{artist.name}</h2>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 whitespace-pre-line">{artist.fullBio || artist.description}</p>
          </div>

          {/* Social Links */}
          {artist.socialLinks && artist.socialLinks.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {artist.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {getSocialIcon(link.name)}
                    <span className="ml-2">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {artist.videos && artist.videos.length > 0 && (
            <div className="mt-8">
              <VideoEmbed videos={artist.videos} />
            </div>
          )}

          {/* Main CTA - Only show if website exists */}
          {artist.website && (
            <div className="mt-8 flex justify-center">
              <a
                href={artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
              >
                Visit Official Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
