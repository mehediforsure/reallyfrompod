interface Episode {
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
      className="group block bg-white rounded-lg overflow-hidden border border-[#E8E0D4] hover:border-[#7B9E8B]/40 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D4]">
        <img
          src={episode.image}
          alt={episode.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Episode number + date */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-[#7B9E8B] uppercase tracking-widest">
            {episode.id === 0 ? "Trailer" : `Ep. ${episode.id}`}
          </span>
          <span className="text-xs text-[#8A8F9E]">{episode.date}</span>
        </div>

        {/* Title */}
        <h3
          className="font-display text-xl font-semibold text-[#1A1F2E] mb-3 leading-snug group-hover:text-[#7B9E8B] transition-colors"
          style={{ letterSpacing: "0.01em" }}
        >
          {episode.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#52576A] leading-relaxed line-clamp-3">
          {episode.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {episode.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-[#F0EDE6] text-[#8A8F9E] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
