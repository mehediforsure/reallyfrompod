export interface Episode {
  id: number;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image: string;
  originalUrl: string;
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <a
      href={episode.originalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white overflow-hidden border border-[#E8E0D4] hover:border-[#7B9E8B]/50 hover:shadow-xl transition-all duration-300"
      style={{ borderRadius: 0 }}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-[#E8E0D4] flex-shrink-0">
        <img
          src={episode.image}
          alt={episode.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Episode label + date */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[0.6rem] font-bold text-[#7B9E8B] uppercase tracking-[0.18em]"
          >
            {episode.id === 0 ? "Trailer" : `Episode ${episode.id}`}
          </span>
          <time className="text-[0.65rem] text-[#8A8F9E] tabular-nums">{episode.date}</time>
        </div>

        {/* Title */}
        <h3
          className="font-display text-[1.25rem] font-semibold text-[#1A1F2E] mb-3 leading-[1.25] group-hover:text-[#7B9E8B] transition-colors duration-200"
          style={{ letterSpacing: "0.01em" }}
        >
          {episode.title}
        </h3>

        {/* Rule */}
        <div className="w-8 h-px bg-[#7B9E8B] mb-3 opacity-40 group-hover:opacity-80 group-hover:w-12 transition-all duration-300" />

        {/* Description */}
        <p
          className="text-[0.82rem] text-[#52576A] leading-[1.65] flex-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {episode.description}
        </p>

        {/* Footer row */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {episode.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[0.6rem] font-medium px-2 py-0.5 bg-[#F0EDE6] text-[#8A8F9E] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[#7B9E8B] text-xs group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
