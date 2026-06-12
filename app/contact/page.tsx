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
      {/* Hero with moody Manhattan image */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/ac55230b-20fd-44ba-96fe-ae4d1acf5bc4/immigrant_manhattan_moody2.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2E] via-[#1A1F2E]/50 to-transparent" />
        <div className="relative z-10 px-6 pb-12 max-w-6xl mx-auto w-full">
          <p className="text-[#7B9E8B] text-xs uppercase tracking-widest mb-2 font-medium">
            Your Story Matters
          </p>
          <h1
            className="font-display text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16">
            <h2
              className="font-display text-[#1A1F2E] mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.01em" }}
            >
              Would you like to share your story?
            </h2>
            <p className="text-[#52576A] text-lg leading-relaxed">
              Please get in touch and we&apos;ll get you on the recording schedule.
              Everyone who has navigated the space between two worlds has a story worth hearing.
            </p>
          </div>

          {/* Contact card */}
          <div className="bg-white border border-[#E8E0D4] rounded-sm p-10 text-center">
            <div className="w-16 h-16 bg-[#F0EDE6] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7B9E8B"
                strokeWidth="1.5"
                className="w-7 h-7"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <p className="text-[#8A8F9E] text-sm uppercase tracking-widest mb-3 font-medium">
              Email Us
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-display text-[#1A1F2E] text-2xl hover:text-[#7B9E8B] transition-colors"
              style={{ letterSpacing: "0.01em" }}
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Social */}
          <div className="mt-12 text-center">
            <p className="text-[#8A8F9E] text-sm uppercase tracking-widest mb-6 font-medium">
              Or Find Us Online
            </p>
            <div className="flex justify-center gap-6">
              {[
                { name: "Facebook", href: siteConfig.social.facebook },
                { name: "Instagram", href: siteConfig.social.instagram },
                { name: "YouTube", href: siteConfig.social.youtube },
              ].map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#1A1F2E] hover:text-[#7B9E8B] transition-colors border-b border-[#E8E0D4] hover:border-[#7B9E8B] pb-0.5"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
