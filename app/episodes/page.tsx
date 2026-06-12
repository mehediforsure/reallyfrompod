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
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "#1A1F2E" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/227e70b3-c9fa-403d-af19-cd02139d4c69/gitr_kilkee_cliff_mlmfave2.jpeg')",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-4 font-medium">
            {episodes.length} Episodes & Counting
          </p>
          <h1
            className="font-display text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
          >
            All Episodes
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
