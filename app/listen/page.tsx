import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Listen",
  description: "Subscribe to The Immigrant Perspective on Spotify, Apple Podcasts, or YouTube.",
};

const platforms = [
  {
    name: "Spotify",
    href: siteConfig.social.spotify,
    color: "#1DB954",
    bg: "bg-[#1DB954]/8",
    description: "Stream all episodes and subscribe for weekly new releases.",
    cta: "Open in Spotify",
  },
  {
    name: "Apple Podcasts",
    href: siteConfig.social.apple,
    color: "#9B59B6",
    bg: "bg-[#9B59B6]/8",
    description: "Subscribe on Apple Podcasts and never miss an episode.",
    cta: "Open in Apple Podcasts",
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    color: "#FF0000",
    bg: "bg-[#FF0000]/8",
    description: "Watch full video episodes on the YouTube channel.",
    cta: "Open YouTube",
  },
];

const PlatformIcon = ({ name, color }: { name: string; color: string }) => {
  if (name === "Spotify") return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" style={{ color }}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path fill="white" d="M16.7 13.3a.7.7 0 0 1-.97.23c-2.66-1.63-6.01-2-9.95-1.1a.7.7 0 1 1-.31-1.37c4.3-.98 8-.56 10.96 1.27a.7.7 0 0 1 .27.97zm1.35-2.97a.87.87 0 0 1-1.2.29C14 8.88 10.28 8.4 7.42 9.22a.87.87 0 1 1-.5-1.67c3.27-.97 7.34-.5 10.14 1.57a.87.87 0 0 1 .29 1.2zm.12-3.1A13.3 13.3 0 0 0 7.58 6.17a1.05 1.05 0 1 0-.6 2.01 11.2 11.2 0 0 1 9.02 1.72 1.05 1.05 0 1 0 1.17-1.74z" />
    </svg>
  );
  if (name === "Apple Podcasts") return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" style={{ color }} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 13.5c-.3.5-.7.8-1.2.8-.4 0-.7-.1-1-.4l-.4-.4c-.2-.2-.3-.5-.3-.8 0-.6.5-1.2 1.2-1.4v-4c0-.3.2-.5.5-.5h.4c.3 0 .5.2.5.5v3.9c.6.2 1 .7 1 1.4 0 .3-.1.6-.2.8l-.5.1z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" style={{ color }} fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
};

export default function ListenPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="grain relative min-h-[22rem] flex items-end overflow-hidden text-center"
        style={{ background: "#12161F" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/227e70b3-c9fa-403d-af19-cd02139d4c69/gitr_kilkee_cliff_mlmfave2.jpeg')",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161F] via-[#12161F]/30 to-transparent" />
        <div className="relative z-10 px-6 pb-14 pt-28 max-w-6xl mx-auto w-full text-left">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.2em] mb-3 font-semibold">
            Tune In
          </p>
          <h1
            className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            Listen
          </h1>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.18em] mb-2 font-semibold text-center">
            Available on
          </p>
          <p className="text-center text-[#8A8F9E] text-sm mb-12">
            New episodes drop weekly. Subscribe so you don't miss them.
          </p>

          <div className="space-y-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-white border border-[#E8E0D4] hover:border-[#7B9E8B]/40 hover:shadow-md transition-all group"
              >
                <PlatformIcon name={p.name} color={p.color} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1A1F2E] group-hover:text-[#7B9E8B] transition-colors text-sm">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#8A8F9E] mt-0.5 leading-relaxed">{p.description}</p>
                </div>
                <span className="text-[#8A8F9E] group-hover:text-[#7B9E8B] group-hover:translate-x-1 transition-all text-base flex-shrink-0">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
