import type { Metadata } from "next";
import { episodes } from "@/lib/data";
import EpisodeCard from "@/components/EpisodeCard";

export const metadata: Metadata = {
  title: "Episodes",
  description:
    "Browse all episodes of The Immigrant Perspective — immigrant stories exploring identity, home, and the journey between two worlds.",
};

export default function EpisodesPage() {
  return (
    <>
      {/* Hero — BUG FIX: was pt-32 with opacity-15 (invalid Tailwind v4 class) */}
      <section
        className="grain relative min-h-[22rem] flex items-end overflow-hidden"
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
        <div className="relative z-10 px-6 pb-14 pt-28 max-w-6xl mx-auto w-full">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.2em] mb-3 font-semibold">
            {episodes.length} Episodes & Counting
          </p>
          <h1
            className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            All Episodes
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {episodes.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
