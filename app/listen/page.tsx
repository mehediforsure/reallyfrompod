import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Listen",
  description: "Subscribe to The Immigrant Perspective on Spotify or Apple Podcasts.",
};

const platforms = [
  {
    name: "Spotify",
    href: siteConfig.social.spotify,
    color: "#1DB954",
    description: "Stream all episodes and subscribe for new releases.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path
          fill="white"
          d="M16.7 13.3a.7.7 0 0 1-.97.23c-2.66-1.63-6.01-2-9.95-1.1a.7.7 0 1 1-.31-1.37c4.3-.98 8-.56 10.96 1.27a.7.7 0 0 1 .27.97zm1.35-2.97a.87.87 0 0 1-1.2.29C14 8.88 10.28 8.4 7.42 9.22a.87.87 0 1 1-.5-1.67c3.27-.97 7.34-.5 10.14 1.57a.87.87 0 0 1 .29 1.2zm.12-3.1A13.3 13.3 0 0 0 7.58 6.17a1.05 1.05 0 1 0-.6 2.01 11.2 11.2 0 0 1 9.02 1.72 1.05 1.05 0 1 0 1.17-1.74z"
        />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: siteConfig.social.apple,
    color: "#9B59B6",
    description: "Subscribe on Apple Podcasts and never miss an episode.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 13.5c-.3.5-.7.8-1.2.8-.4 0-.7-.1-1-.4l-.4-.4c-.2-.2-.3-.5-.3-.8 0-.6.5-1.2 1.2-1.4v-4c0-.3.2-.5.5-.5h.4c.3 0 .5.2.5.5v3.9c.6.2 1 .7 1 1.4 0 .3-.1.6-.2.8l-.5.1z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    color: "#FF0000",
    description: "Watch full video episodes on the YouTube channel.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export default function ListenPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{ background: "#1A1F2E" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/227e70b3-c9fa-403d-af19-cd02139d4c69/gitr_kilkee_cliff_mlmfave2.jpeg')",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-4 font-medium">
            Tune In
          </p>
          <h1
            className="font-display text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
          >
            Listen
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            New episodes dropping soon. Subscribe so you don&apos;t miss them.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[#7B9E8B] text-xs uppercase tracking-widest mb-12 font-medium">
            Available On
          </p>
          <div className="space-y-5">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white border border-[#E8E0D4] rounded-sm hover:border-[#7B9E8B]/40 hover:shadow-md transition-all group"
              >
                <div style={{ color: platform.color }}>{platform.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1A1F2E] group-hover:text-[#7B9E8B] transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-[#8A8F9E] mt-0.5">{platform.description}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-[#8A8F9E] group-hover:text-[#7B9E8B] group-hover:translate-x-1 transition-all"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
