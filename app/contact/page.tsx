import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your immigrant story with The Immigrant Perspective podcast. Get in touch with host Mary Lou Mangan-Lamb.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — BUG FIX: was h-80 with no pt for nav */}
      <section className="grain relative min-h-[26rem] flex items-end overflow-hidden" style={{ background: "#12161F" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/ac55230b-20fd-44ba-96fe-ae4d1acf5bc4/immigrant_manhattan_moody2.jpeg')",
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161F] via-[#12161F]/40 to-transparent" />
        <div className="relative z-10 px-6 pb-14 pt-28 max-w-6xl mx-auto w-full">
          <p className="text-[#7B9E8B] text-[0.65rem] uppercase tracking-[0.2em] mb-3 font-semibold">
            Your Story Matters
          </p>
          <h1
            className="font-display text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-14">
            <h2
              className="font-display text-[#1A1F2E] mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.005em" }}
            >
              Would you like to share your story?
            </h2>
            <p className="text-[#52576A] text-sm leading-relaxed">
              Please get in touch and we'll get you on the recording schedule.
              Everyone who has navigated the space between two worlds has a story worth hearing.
            </p>
          </div>

          {/* Email card */}
          <div className="border border-[#E8E0D4] bg-white p-10 text-center">
            <div className="w-12 h-12 border border-[#7B9E8B]/30 flex items-center justify-center mx-auto mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7B9E8B"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <p className="text-[0.65rem] text-[#8A8F9E] uppercase tracking-[0.18em] mb-3 font-semibold">
              Email Us Directly
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-display text-[#1A1F2E] text-2xl hover:text-[#7B9E8B] transition-colors"
              style={{ letterSpacing: "0.01em" }}
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <hr className="flex-1 border-[#E8E0D4]" />
            <span className="text-[0.6rem] uppercase tracking-widest text-[#8A8F9E]">or find us on</span>
            <hr className="flex-1 border-[#E8E0D4]" />
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {[
              { name: "Facebook", href: siteConfig.social.facebook },
              { name: "Instagram", href: siteConfig.social.instagram },
              { name: "YouTube", href: siteConfig.social.youtube },
              { name: "Spotify", href: siteConfig.social.spotify },
            ].map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-[#E8E0D4] text-[0.65rem] font-semibold uppercase tracking-wider text-[#52576A] hover:border-[#7B9E8B] hover:text-[#7B9E8B] transition-all"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
