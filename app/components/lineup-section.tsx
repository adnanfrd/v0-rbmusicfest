"use client"

import type React from "react"

import Link from "next/link"
import { Info, ExternalLink, Calendar, Music } from "lucide-react"
import { useEffect, useState } from "react"
import ArtistModal from "./artist-modal"

export default function LineupSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [saturdayVisible, setSaturdayVisible] = useState(false)
  const [sundayVisible, setSundayVisible] = useState(false)
  const [stayUpdatedVisible, setStayUpdatedVisible] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setSaturdayVisible(true), 300)
          setTimeout(() => setSundayVisible(true), 600)
          setTimeout(() => setStayUpdatedVisible(true), 900)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("lineup")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  // Current Saturday artists (will be reordered and expanded)
  const saturdayArtists = [
    {
      name: "Mercury Coast",
      description:
        "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2008, they released an EP and two full-length records.",
      fullBio:
        "Eric and Molly Sappington first formed the duo Mercury 27 years ago after moving from the Midwest to the Oregon Coast. Between 1999 and 2008, they released an EP and two full-length records.\n\nEric continued songwriting and performing around the Northwest, while Molly focused on raising their two sons.\n\nFlash forward to September 2022, when Ebon Bergeron approached Eric and asked if he'd want to add some guitar tracks to his drums. The result was a fast-moving expression of emotion and creativity. Both Eric and Ebon had been waiting for this moment, and it happened at just the right time.\n\nEnter Steve Doss, a recent transplant from California. Steve joined on standup bass, then Molly returned with backing vocals and percussion. MERCURY COAST was formed.\n\nWe have now built a solid local following and plan to release our first of 2 singles, Spring 2024. We look forward to making this world a better place through art and music. This is the time to feel the shine.",
      website: "https://mercurycoast.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mercury-coast-band-qbQ8pMcV5AHPHsvoNxl270xYXJbBW4.jpeg",
      setTime: "12:00 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mercury-coast/mercury-coast-1-G5HLeOFXcgXjiMRvR4Djx558EuaP0Z.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mercury-coast/mercury-coast-2-ASNCdxYLbRyPImQaZYsq9KY1tO4BWG.png",
      ],
      videos: [
        {
          title: "Mercury Coast - Live at the Hoffman Center",
          url: "https://www.youtube.com/watch?v=KWTCSIBnups",
        },
        {
          title: "Mercury Coast - Live Performance",
          url: "https://youtu.be/E8vzPecOPqU?si=EX28-p35sDU3zaz_",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://mercurycoast.com",
        },
        {
          name: "Bandcamp",
          url: "https://mercury1.bandcamp.com/",
        },
        {
          name: "Spotify",
          url: "https://open.spotify.com/artist/42k4J5jjsvI3e65saK8Mxy",
        },
        {
          name: "Apple Music",
          url: "https://music.apple.com/us/artist/mercury-coast/1728194760",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@ericsappingtonart1317",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/mercury_coast/?igsh=dm5wOWpnbWJjcmJh",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/mooner02/",
        },
      ],
    },
    {
      name: "The Dead Lines",
      description:
        "The Dead Lines are a mystery wrapped in a conundrum and gently folded into an enigma. A secret enclave of coastal musicians come together to form a one-time supergroup show to support music education. Purveyors of ill ass yacht rap, they emerge in the middle of summer to remind us how to have a good time.",
      fullBio:
        "The Dead Lines are a mystery wrapped in a conundrum and gently folded into an enigma. A secret enclave of coastal musicians come together to form a one-time supergroup show to support music education on the coast. Purveyors of ill ass yacht rap, they emerge in the middle of summer to remind us how to have a good time. Complex lyrical stylings meet a modern funk live rhythm section with guitars, horns, more vocals and samples from the MPC all played live with no safety net. Assuming everything goes to plan. Don't you want to see how this turns out?!?",
      website: null, // No website for mysterious band
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Dead%20Lines%20Hero-UFp6pmM95Z3992tkhFiU2ICvfzPCsr.png",
      setTime: "1:30 PM",
      tag: "debut show",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Dead%20Lines%20Hero-UFp6pmM95Z3992tkhFiU2ICvfzPCsr.png",
      ],
      videos: [],
      socialLinks: [],
    },
    {
      name: "Nik Xandir Wolf",
      description:
        "Writer, lyricist, and tomfool, Nik is multitalented. He originally manifested at the 2025 Rockaway Writers Rendezvous and has taken his poetry to new levels by creating his own genre of surf cowboy hip hop. We're putting together a backing band so Nik will be performing his hits as a live band performance!",
      fullBio:
        "Writer, Lyricist, Tomfool\n\nNik is multitalented. He originally manifested at the 2025 Rockaway Writers Rendezvous where he gave a fantastic presentation based on his experience as a published author and from operating the ocean conservation nonprofit Kelp Journal. He has taken his poetry to new levels by creating his own genre of surf cowboy hip hop. Naturally we had to ask him back to share this at our music festival, and we are putting together a backing band to replace the DJ, so Nik will be performing his hits as a live band performance!\n\nNik is a writer, photographer, filmmaker, and poet. He is the Editor-in-Chief of Kelp Journal. He is a graduate of Stanford's OWC program in novel writing and holds an MFA in creative writing from the University of California, Riverside Palm Desert. He has published books of poetry, a novel, multiple anthologies, and various work in literary journals and magazines. He is at work on a crime novel series and a linked collection of short stories. He resides on California's central coast where he surfs regularly, and helps keep the ocean clean by volunteering with Surfrider Foundation's Monterey Chapter.",
      website: "https://nikxandirwolf.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nik%20xandir%20wolf%20blurry%20headshot-da3yNQTWU6dP9Sq9ptXkLnD4hzwzp9.avif",
      setTime: "3:00 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nik%20xandir%20wolf%20blurry%20headshot-da3yNQTWU6dP9Sq9ptXkLnD4hzwzp9.avif",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nik%20xandir%20wolf%20logo-CVmzacRvkazviLgLhhfIuUxG71ux10.avif",
      ],
      videos: [
        {
          title: "Nik Xandir Wolf Performance",
          url: "https://www.youtube.com/watch?v=KsDFyHOytjs",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://nikxandirwolf.com",
        },
        {
          name: "SoundCloud",
          url: "https://soundcloud.com/nikxandirwolf",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/nikxandirwolf",
        },
      ],
    },
    {
      name: "Mitch Whitaker",
      description:
        "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity; on grief and a crisis of faith—to listen to Mitch's music is to hear songs on the pretense of greenwashed capitalism; on the pervasiveness of white supremacy; on the trauma of gun violence.",
      fullBio:
        "To listen to Mitch's music is to hear songs of experience: on existential loneliness; on rejected identity; on grief and a crisis of faith—to listen to Mitch's music is to hear songs on the pretense of greenwashed capitalism; on the pervasiveness of white supremacy; on the trauma of gun violence—to listen to Mitch's music is to hear songs of yearning, songs of dependency, songs of entanglement.\n\nTrained in classical guitar at Western Washington University, Mitch began writing songs a few years ago and hasn't looked back. He's been a student at Berklee College of Music, lived and performed in Nashville, TN, and now resides in Portland, OR where he recently finished recording his first studio album.",
      website: "https://mitchwhitakermusic.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mitch-whitaker-band-u2qj1InxzFKqrWeyjr57Mzz6gGSLnF.webp",
      setTime: "4:45 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mitch-whitaker/mitch-whitaker-1-A87ZHYr44IQurxYwudic92nhdUYkvF.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mitch-whitaker/mitch-whitaker-2-VFMyjJpHLTES47bzORaSODJb3o12Qs.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mitch-whitaker/mitch-whitaker-3-h0VZfPrFNSQrjKWVvOm4veyH2XWhtM.webp",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/mitch-whitaker/mitch-whitaker-4-eAOBYIgZdeOAYH1iWz3H2vcoZ4554W.webp",
      ],
      videos: [
        {
          title: "Tiny Desk Submission: This Klan",
          url: "https://www.youtube.com/watch?v=tdHnLohk6Nc",
        },
        {
          title: "I Lose Myself (Live Studio Version)",
          url: "https://www.youtube.com/watch?v=rIDStWlRj9Y",
        },
        {
          title: "Everybody's Gotta Know (Live Studio Session)",
          url: "https://www.youtube.com/watch?v=TqJqsDubtSo",
        },
      ],
      socialLinks: [
        {
          name: "Linktree",
          url: "https://linktr.ee/mitchwhitakermusic",
        },
        {
          name: "Instagram",
          url: "https://instagram.com/mitchwhitakermusic",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/@mitchwhitakermusic",
        },
        {
          name: "TikTok",
          url: "https://tiktok.com/@mitchwhitakermusic",
        },
        {
          name: "Spotify",
          url: "https://open.spotify.com/artist/4nR7wxyQbOF0sY5OSH9o9T?si=9FAlL7TjRX2p3xOPvKy3jA",
        },
        {
          name: "Website",
          url: "https://mitchwhitakermusic.com/",
        },
      ],
    },
    {
      name: "Glitterfox",
      description:
        "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creative partners Solange Igoa and Andrea Walker, the Portland-based band has built their career the analog way: a van, a map, and unforgettable shows stitched across towns like constellations.",
      fullBio:
        "Glitterfox doesn't chase the algorithm — they follow instinct, community, and a kind of magia (Basque for magic). Formed by longtime creative partners Solange Igoa and Andrea Walker, the Portland-based band has built their career the analog way: a van, a map, and unforgettable shows stitched across towns like constellations. Their rise has been defined by raw connection and fearless self-expression, with music that fuses garage rock grit, new wave shimmer, southern Americana soul, and a dancefloor pulse — all tangled with heart and heat until what emerges is unmistakably, inimitably Glitterfox.\n\nNow joined by Eric Stalker and Blaine Heinonen, Glitterfox is more than a band — they're chosen family, held together by sound and the invisible threads that music always knows how to weave. Whether launching Portland's annual Glitterfest as a wedding reception or channeling the messy middle of life into something unforgettable, Glitterfox's gift is their transparency, their defiance, and their freedom — sung loud.",
      website: "https://glitterfoxband.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox-band-rGTMT50p4Z9byp83kyjCRvuqZ8cjXU.jpeg",
      setTime: "6:30 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-1-vkfWIV5pzWSdAC6jPWv6ndJul8mdxk.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-2-Tg19fBFYY4xJ6xBoQ8FYmYxNf4CxUQ.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-3-7psWa1TzwwP4oG01EWiNcDfbQ431Mb.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-4-r7J52z9Vg1jsMGu18re3EyOyIswWSj.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-5-yXtie401cgKZZ7evmenrmlOFergFUh.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-6-IPhxcdGvEEXiOS8c6S6vJ1HnCrU9hS.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-7-7nufFBs6PzRvXTAZ5IglsqCurFgA8c.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/glitterfox/glitterfox-8-wS7a4OYPPhqQQ9ttqw2lCVbE3u2lLF.jpeg",
      ],
      videos: [
        {
          title: "OPB",
          url: "https://youtu.be/Jd1nu1jldH0?feature=shared",
        },
        {
          title: "La Da Da (Official Music Video)",
          url: "https://youtu.be/oqmj_LJ602M",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://glitterfoxband.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/glitterfoxband",
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/channel/UC8SP3PG6O2V7JOH2aGerx5g",
        },
      ],
    },
    {
      name: "Typhoon",
      description:
        "Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Known for their orchestral arrangements and big-hearted indie rock anthems, Typhoon's sound often incorporates a traditional rock setup complemented by brass, strings, and auxiliary percussion.",
      fullBio:
        'Typhoon is an American indie rock band that originated in Salem, Oregon, and is now based in Portland. Formed in 2005 by high school friends Kyle Morton (singer-songwriter, piano, guitar), Toby Tanabe (bass, vocals), and Dave Hall (guitar, vocals), the band is known for its large and fluctuating membership, which has included up to fourteen musicians in the past.\n\nCharacterized by their orchestral arrangements and big-hearted indie rock anthems, Typhoon\'s sound often incorporates a traditional rock setup complemented by brass, strings, and auxiliary percussion. Lyrically, many of their songs delve into themes of mortality, partly influenced by frontman Kyle Morton\'s childhood struggle with Lyme disease.\n\nOver their career, Typhoon has released five studio albums, including their self-titled debut in 2005, "Hunger and Thirst" (2010), "White Lighter" (2013), "Offerings" (2018), and "Sympathetic Magic" (2021), as well as EPs like "A New Kind of House." Their most recent album, "Underground Complex No. 1," was released in 2022. The band has gained recognition for their dynamic live performances and has toured with notable acts such as The Decemberists, Belle and Sebastian, and The Shins. Key members, in addition to the founders, include drummer Alex Fitch and violinist/vocalist Shannon Steele.',
      website: "https://wearetyphoon.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/v0-RBMF-v0-SITE-main/public/images/TyphoonPressPhoto2021-Z5RuyFSjooyEf5tKLrjwCafNpVCe43.png",
      tag: "members of",
      setTime: "8:30 PM",
      videos: [
        {
          title: "Typhoon on NPR's Tiny Desk Series",
          url: "https://youtu.be/nDdO60XcqPQ?feature=shared&t=46",
        },
      ],
      socialLinks: [
        {
          name: "Website",
          url: "https://wearetyphoon.com",
        },
        {
          name: "Bandcamp",
          url: "https://wearetyphoon.bandcamp.com",
        },
        {
          name: "Instagram",
          url: "http://www.instagram.com/typhoonfamilyvacation",
        },
        {
          name: "Twitter/X",
          url: "http://www.twitter.com/wearetyphoon",
        },
        {
          name: "Facebook",
          url: "http://www.facebook.com/wearetyphoon",
        },
      ],
    },
  ]

  // Sunday artists with custom inline SVG placeholders
  const sundayArtists = [
    {
      name: "Stay Tuned",
      description: "Artist information coming soon...",
      fullBio: "Full biography will be added soon.",
      website: "#",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stay%20Tuned-EkK6KB4P8QPXEsMT5mfUIINBZFW1ee.png",
      setTime: "11:00 AM",
      socialLinks: [],
      videos: [],
    },
    {
      name: "Doral Vance",
      description: "Artist information coming soon...",
      fullBio: "Full biography will be added soon.",
      website: "#",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doral%20Vance-gQsNwycFz9a0xHBlDt2vsAZkyYQPGB.png",
      setTime: "12:15 PM",
      socialLinks: [],
      videos: [],
    },
    {
      name: "Blaine Heinonen",
      description: "Artist information coming soon...",
      fullBio: "Full biography will be added soon.",
      website: "#",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blaine%20Heinonen.png-CUb65H4LOuxRVab5uV9eezpWQkAAQw.jpeg",
      setTime: "1:30 PM",
      socialLinks: [],
      videos: [],
    },
    {
      name: "Sunkicks",
      description: "Artist information coming soon...",
      fullBio: "Full biography will be added soon.",
      website: "#",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunkicks.png-EzNtGSWe3oRmGUtPxWBMSLaIeXxb03.jpeg",
      setTime: "2:45 PM",
      socialLinks: [],
      videos: [],
    },
    {
      name: "Dylan Crawford",
      description:
        "Dylan Crawford is a multi-instrumentalist, vocalist and songwriter currently hailing from Lincoln City, OR. He is the guitarist and vocalist of Massive Delicious, their new record just launched on all streaming services called Beneath the Dirt.",
      fullBio:
        "Dylan Crawford is a multi-instrumentalist, vocalist and songwriter currently hailing from Lincoln City, OR. He is the guitarist and vocalist of Massive Delicious, their new record just launched on all streaming services called Beneath the Dirt. Visit Massive Delicious on Instagram @massive_delicious",
      website: "https://music.youtube.com/channel/UC6HaWzM6wByA8WS4zFy_y-A",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20dylan%20crawford%20logo-ZB49E7mrijGzMB3z9L88W4C2d9jhdl.png",
      setTime: "4:00 PM",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20dylan%20crawford%20logo-ZB49E7mrijGzMB3z9L88W4C2d9jhdl.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20massive%20delicious-lKaHw4gsjn0ostTxkkVMrvkV7LOrOz.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20massive%20delicious%20album.png-Hn38oGS7L09jCnnKxBlVqVnciFFoPq.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20massive%20delicious%20promo-21eqlxaTsUpAJx7Dn33sq412NigHxp.png",
      ],
      videos: [],
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/dylan_crawford_music",
        },
        {
          name: "YouTube Music",
          url: "https://music.youtube.com/channel/UC6HaWzM6wByA8WS4zFy_y-A",
        },
      ],
    },
    {
      name: "Hope Montgomery",
      description: "Artist information coming soon...",
      fullBio: "Full biography will be added soon.",
      website: "#",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hope%20Montgomery-34eBTgkvZW3og0kzadeJ7vgINCfVoe.png",
      setTime: "5:15 PM",
      socialLinks: [],
      videos: [],
    },
  ]

  const openModal = (artist: any) => {
    setSelectedArtist(artist)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Improved function to handle image errors
  const handleImageError = (artistName: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed toload image for ${artistName}:`, e.currentTarget.src)

    // Update the error state
    setImageErrors((prev) => ({
      ...prev,
      [artistName]: true,
    }))

    // Set fallback image
    e.currentTarget.src = `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(artistName)}`
  }

  const renderArtistGrid = (artists: any[], visible: boolean) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ opacity: visible ? 1 : 0 }}>
      {artists.map((artist, index) => (
        <div
          key={index}
          style={{
            opacity: visible ? 1 : 0,
            transform: `translateY(${visible ? "0" : "20px"})`,
            transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
          }}
        >
          <div className="rounded-lg border bg-white text-gray-900 shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300 relative">
            <div className="p-0 aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
              {imageErrors[artist.name] ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
                  {artist.name}
                </div>
              ) : (
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className={`w-full h-full object-cover ${artist.name === "Typhoon" ? "object-center" : ""}`}
                  onError={(e) => handleImageError(artist.name, e)}
                />
              )}
              {artist.tag && (
                <div className="absolute top-2 left-2 bg-festival-pink text-white text-xs px-2 py-1 rounded-full">
                  {artist.tag}
                </div>
              )}
              {artist.setTime && artist.setTime !== "TBD" && (
                <div className="absolute top-2 right-2 bg-festival-blue text-white text-xs px-2 py-1 rounded-full">
                  {artist.setTime}
                </div>
              )}
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
              <p className="text-gray-700 line-clamp-3">{artist.description}</p>
            </div>
            <div className="p-4 pt-0 flex justify-between items-center">
              <button
                onClick={() => openModal(artist)}
                className="inline-flex items-center text-festival-blue hover:text-festival-pink transition-all duration-300 font-semibold"
              >
                <Info className="mr-1 h-4 w-4" />
                <span>More Info</span>
              </button>
              {artist.website && artist.website !== "#" ? (
                <Link
                  href={artist.website}
                  target="_blank"
                  className="inline-flex items-center text-gray-600 hover:text-festival-blue transition-all duration-300 font-semibold"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              ) : (
                <div className="inline-flex items-center text-gray-400">
                  <span>No Website</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="lineup" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4">
        {/* Main Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-2 text-festival-blue font-bold">LIVE MUSIC LINEUP</h2>
          <div className="w-24 h-1 bg-festival-blue mx-auto mb-6"></div>
        </div>

        {/* Saturday Section */}
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? "0" : "-20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-blue text-white rounded-full mb-4">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="text-xl md:text-2xl font-bold">Saturday, August 16th</h3>
            </div>
          </div>
          {renderArtistGrid(saturdayArtists, saturdayVisible)}
        </div>

        {/* Divider between days */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 px-4 text-sm text-gray-500">DAY 2</span>
          </div>
        </div>

        {/* Sunday Section */}
        <div
          className="mb-16"
          style={{
            opacity: sundayVisible ? 1 : 0,
            transform: `translateY(${sundayVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-festival-pink text-white rounded-full mb-4">
              <Calendar className="mr-2 h-5 w-5" />
              <h3 className="text-xl md:text-2xl font-bold">Sunday, August 17th</h3>
            </div>
          </div>
          {renderArtistGrid(sundayArtists, sundayVisible)}
        </div>

        {/* Stay Updated Section - Now at bottom */}
        <div
          className="mt-16 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
          style={{
            opacity: stayUpdatedVisible ? 1 : 0,
            transform: `translateY(${stayUpdatedVisible ? "0" : "20px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="bg-festival-blue text-white py-4 px-6">
            <div className="flex items-center justify-center">
              <Music className="mr-3 h-6 w-6" />
              <h3 className="text-2xl md:text-3xl font-bold">Stay Updated</h3>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Get the Latest Festival News</h4>
              <p className="text-lg text-gray-700 mb-6">
                Sign up for our mailing list to receive the latest news about performers, schedules, and special events
                for the Rockaway Beach Music Festival.
              </p>
              <div className="flex justify-center">
                <Link
                  href="http://ncamfoundation.org"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg bg-festival-blue text-white hover:bg-blue-700 transition-colors"
                >
                  Sign Up at NCAM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArtistModal artist={selectedArtist} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
