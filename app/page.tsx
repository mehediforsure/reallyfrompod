import Link from "next/link";
import { episodes, siteConfig } from "@/lib/data";
import EpisodeCard from "@/components/EpisodeCard";

export default function Home() {
  const latestEpisodes = episodes.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="grain relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#12161F" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/227e70b3-c9fa-403d-af19-cd02139d4c69/gitr_kilkee_cliff_mlmfave2.jpeg')",
            opacity: 0.28,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12161F]/60 via-transparent to-[#12161F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12161F]/30 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#7B9E8B]/60" />
            <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.25em] font-semibold">
              A Podcast About Migration & Identity
            </p>
            <div className="w-8 h-px bg-[#7B9E8B]/60" />
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white mb-8 leading-[0.95]"
            style={{
              fontSize: "clamp(3.2rem, 9vw, 8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Where are you
            <br />
            <em
              style={{ color: "#7B9E8B", fontStyle: "italic" }}
            >
              really
            </em>{" "}
            from?
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12" style={{ letterSpacing: "0.01em" }}>
            <strong className="text-white/90 font-medium">The Immigrant Perspective</strong> dives into the nostalgia,
            the culture shock, and the triumphs of finding home in a new land.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/episodes"
              className="inline-block px-8 py-3.5 bg-[#7B9E8B] text-white text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:bg-[#9DB8A8] transition-colors"
            >
              Browse All Episodes
            </Link>
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-white/20 text-white/80 text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:border-white/50 hover:text-white transition-all"
            >
              Listen on Spotify
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[0.55rem] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-[#F0EDE6] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <hr className="rule-sage mb-12 w-16" />
          <blockquote>
            <p
              className="font-display text-[#1A1F2E] leading-[1.15]"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.2rem)", letterSpacing: "0.005em" }}
            >
              "I'm not just looking for stories — I'm a seeker looking for the
              common threads that bind everyone who has ever had to redefine the
              word <em className="text-[#7B9E8B]">home.</em>"
            </p>
            <footer className="mt-6">
              <cite className="not-italic text-xs text-[#8A8F9E] uppercase tracking-[0.18em] font-semibold">
                — Mary Lou Mangan-Lamb, Host
              </cite>
            </footer>
          </blockquote>
          <hr className="rule-sage mt-12 w-16 ml-auto" />
        </div>
      </section>

      {/* ── LATEST EPISODES ── */}
      <section className="py-24 px-6 bg-[#FAF8F4]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.18em] mb-3 font-semibold">
                Most Recent
              </p>
              <h2
                className="font-display text-[#1A1F2E]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", letterSpacing: "0.005em" }}
              >
                Latest Episodes
              </h2>
            </div>
            <Link
              href="/episodes"
              className="hidden md:flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-widest text-[#7B9E8B] hover:text-[#1A1F2E] transition-colors"
            >
              All Episodes <span className="text-base leading-none">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestEpisodes.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/episodes" className="text-sm font-semibold text-[#7B9E8B] uppercase tracking-widest">
              View All Episodes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── LISTEN PLATFORMS ── */}
      <section className="bg-[#1A1F2E] py-20 px-6 border-y border-[#7B9E8B]/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.18em] mb-4 font-semibold">
            Available On
          </p>
          <h2
            className="font-display text-white mb-10"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.005em" }}
          >
            Listen Wherever You Tune In
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1DB954] text-white text-[0.7rem] font-bold uppercase tracking-widest hover:bg-[#1ed760] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="white">
                <circle cx="12" cy="12" r="10" />
                <path fill="#1DB954" d="M16.7 13.3a.7.7 0 0 1-.97.23c-2.66-1.63-6.01-2-9.95-1.1a.7.7 0 1 1-.31-1.37c4.3-.98 8-.56 10.96 1.27a.7.7 0 0 1 .27.97zm1.35-2.97a.87.87 0 0 1-1.2.29C14 8.88 10.28 8.4 7.42 9.22a.87.87 0 1 1-.5-1.67c3.27-.97 7.34-.5 10.14 1.57a.87.87 0 0 1 .29 1.2zm.12-3.1A13.3 13.3 0 0 0 7.58 6.17a1.05 1.05 0 1 0-.6 2.01 11.2 11.2 0 0 1 9.02 1.72 1.05 1.05 0 1 0 1.17-1.74z" />
              </svg>
              Spotify
            </a>
            <a
              href={siteConfig.social.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-3.5 border border-white/20 text-white/80 text-[0.7rem] font-bold uppercase tracking-widest hover:border-white/50 hover:text-white transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 13.5c-.3.5-.7.8-1.2.8-.4 0-.7-.1-1-.4l-.4-.4c-.2-.2-.3-.5-.3-.8 0-.6.5-1.2 1.2-1.4v-4c0-.3.2-.5.5-.5h.4c.3 0 .5.2.5.5v3.9c.6.2 1 .7 1 1.4 0 .3-.1.6-.2.8l-.5.1z" />
              </svg>
              Apple Podcasts
            </a>
          </div>
          <p className="mt-6 text-white/30 text-xs uppercase tracking-widest">
            New episodes drop weekly
          </p>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image with offset border */}
          <div className="relative">
            <div
              className="absolute -top-3 -left-3 w-full h-full border border-[#7B9E8B]/25"
              aria-hidden="true"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/9e8118cf-7cee-4301-84a2-1820ccfcdab4/gitr_arranmore_road_blue_sky.jpeg"
              alt="Arranmore Island, Ireland — winding coastal road"
              className="w-full aspect-[4/3] object-cover relative z-10"
            />
          </div>
          <div>
            <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.18em] mb-4 font-semibold">
              About the Show
            </p>
            <h2
              className="font-display text-[#1A1F2E] mb-6 leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "0.005em" }}
            >
              A Journey That Began in 1986
            </h2>
            <p className="text-[#52576A] text-sm leading-relaxed mb-4">
              In March of 1986, I left a tiny beach town on the West Coast of Ireland as a
              ten-year-old passenger on my parents' pursuit of the American Dream. We traded the
              rugged cliffs of County Clare for the rolling hills of Southeast Tennessee.
            </p>
            <p className="text-[#52576A] text-sm leading-relaxed mb-8">
              Forty years later, I still haven't quite finished "unpacking."
            </p>
            <Link
              href="/about"
              className="inline-block px-7 py-3 bg-[#1A1F2E] text-white text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:bg-[#252B3E] transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        className="grain relative py-24 px-6 text-center overflow-hidden"
        style={{ background: "#1A1F2E" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/ac55230b-20fd-44ba-96fe-ae4d1acf5bc4/immigrant_manhattan_moody2.jpeg')",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.18em] mb-5 font-semibold">
            Share Your Story
          </p>
          <h2
            className="font-display text-white mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.005em" }}
          >
            Want to Be on the Show?
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            Everyone who has ever had to redefine the word "home" has a story worth
            telling. Reach out and let's start a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#C9956A] text-white text-[0.7rem] font-bold uppercase tracking-[0.15em] hover:bg-[#d4a67d] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
