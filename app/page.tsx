import Link from "next/link";
import { episodes, siteConfig } from "@/lib/data";
import EpisodeCard from "@/components/EpisodeCard";

export default function Home() {
  const latestEpisodes = episodes.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#1A1F2E" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/227e70b3-c9fa-403d-af19-cd02139d4c69/gitr_kilkee_cliff_mlmfave2.jpeg')",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2E]/40 via-transparent to-[#1A1F2E]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-[#7B9E8B] text-xs uppercase tracking-[0.25em] mb-8 font-medium"
          >
            A Podcast About Migration & Identity
          </p>

          {/* Signature hero headline */}
          <h1
            className="font-display text-white mb-8"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: "1.0",
              letterSpacing: "-0.01em",
            }}
          >
            Where are you
            <br />
            <em
              className="not-italic"
              style={{ color: "#7B9E8B", fontStyle: "italic" }}
            >
              really
            </em>{" "}
            from?
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            <strong className="text-white font-semibold">The Immigrant Perspective</strong> is a podcast dedicated to the voices
            of those who live between two worlds — the nostalgia, the culture shock,
            and the triumphs of finding home in a new land.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/episodes"
              className="inline-block px-8 py-4 bg-[#7B9E8B] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#9DB8A8] transition-colors rounded-sm"
            >
              All Episodes
            </Link>
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white/30 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm"
            >
              Listen on Spotify
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-[#F0EDE6] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-display text-[#1A1F2E] leading-snug"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", letterSpacing: "0.01em" }}
          >
            &quot;I&apos;m not just looking for stories; I&apos;m a seeker looking for the
            common threads that bind everyone who has ever had to redefine the
            word{" "}
            <em className="text-[#7B9E8B]">home.</em>&quot;
          </p>
          <p className="mt-6 text-sm text-[#8A8F9E] uppercase tracking-widest font-medium">
            — Mary Lou Mangan-Lamb, Host
          </p>
        </div>
      </section>

      {/* ── LATEST EPISODES ── */}
      <section className="py-24 px-6 bg-[#FAF8F4]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-2 font-medium">
                Recent Episodes
              </p>
              <h2
                className="font-display text-[#1A1F2E]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.01em" }}
              >
                New Episodes Weekly
              </h2>
            </div>
            <Link
              href="/episodes"
              className="hidden md:inline-block text-sm font-medium text-[#7B9E8B] hover:text-[#1A1F2E] transition-colors border-b border-[#7B9E8B]/40 hover:border-[#1A1F2E] pb-0.5"
            >
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestEpisodes.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/episodes"
              className="text-sm font-medium text-[#7B9E8B] hover:text-[#1A1F2E] transition-colors"
            >
              View All Episodes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── LISTEN PLATFORMS ── */}
      <section className="bg-[#1A1F2E] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-4 font-medium">
            Available On
          </p>
          <h2
            className="font-display text-white mb-10"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.01em" }}
          >
            Listen Wherever You Tune In
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1DB954] text-white text-sm font-semibold rounded-sm hover:bg-[#1ed760] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <path fill="#1DB954" d="M16.7 13.3a.7.7 0 0 1-.97.23c-2.66-1.63-6.01-2-9.95-1.1a.7.7 0 1 1-.31-1.37c4.3-.98 8-.56 10.96 1.27a.7.7 0 0 1 .27.97zm1.35-2.97a.87.87 0 0 1-1.2.29C14 8.88 10.28 8.4 7.42 9.22a.87.87 0 1 1-.5-1.67c3.27-.97 7.34-.5 10.14 1.57a.87.87 0 0 1 .29 1.2zm.12-3.1A13.3 13.3 0 0 0 7.58 6.17a1.05 1.05 0 1 0-.6 2.01 11.2 11.2 0 0 1 9.02 1.72 1.05 1.05 0 1 0 1.17-1.74z" />
              </svg>
              Spotify
            </a>
            <a
              href={siteConfig.social.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#9B59B6] text-white text-sm font-semibold rounded-sm hover:bg-[#8e44ad] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.5 13.5c-.3.5-.7.8-1.2.8-.4 0-.7-.1-1-.4l-.4-.4c-.2-.2-.3-.5-.3-.8 0-.6.5-1.2 1.2-1.4v-4c0-.3.2-.5.5-.5h.4c.3 0 .5.2.5.5v3.9c.6.2 1 .7 1 1.4 0 .3-.1.6-.2.8l-.5.1z" />
              </svg>
              Apple Podcasts
            </a>
          </div>
          <p className="mt-6 text-white/40 text-sm">
            New episodes drop weekly. Subscribe so you don&apos;t miss them.
          </p>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 px-6 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-[#7B9E8B]/20 rounded-sm"
              aria-hidden="true"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/9e8118cf-7cee-4301-84a2-1820ccfcdab4/gitr_arranmore_road_blue_sky.jpeg"
              alt="Arranmore Island, Ireland"
              className="w-full aspect-[4/3] object-cover rounded-sm relative z-10"
            />
          </div>
          <div>
            <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-4 font-medium">
              About the Show
            </p>
            <h2
              className="font-display text-[#1A1F2E] mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.01em" }}
            >
              A Journey That Began in 1986
            </h2>
            <p className="text-[#52576A] leading-relaxed mb-4">
              My own journey began in March of 1986, when I left a tiny beach town
              on the West Coast of Ireland as a ten-year-old passenger on my
              parents&apos; pursuit of the American Dream. We traded the rugged cliffs
              of County Clare for the rolling hills of Southeast Tennessee.
            </p>
            <p className="text-[#52576A] leading-relaxed mb-8">
              Even now, I haven&apos;t quite finished &quot;unpacking.&quot; I still feel that
              visceral pull every time the wheels touch the tarmac at Shannon Airport.
            </p>
            <Link
              href="/about"
              className="inline-block px-7 py-3 bg-[#1A1F2E] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#252B3E] transition-colors rounded-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #1A1F2E 0%, #252B3E 100%)",
        }}
      >
        <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-4 font-medium">
          Share Your Story
        </p>
        <h2
          className="font-display text-white mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.01em" }}
        >
          Want to Be on the Show?
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Everyone who has ever had to redefine the word &quot;home&quot; has a story worth
          telling. Reach out and let&apos;s start a conversation.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-[#C9956A] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#d4a67d] transition-colors rounded-sm"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
