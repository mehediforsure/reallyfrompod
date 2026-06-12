import Link from "next/link";
import { siteConfig } from "@/lib/data";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="#1A1F2E" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path fill="#1A1F2E" d="M16.7 13.3a.7.7 0 0 1-.97.23c-2.66-1.63-6.01-2-9.95-1.1a.7.7 0 1 1-.31-1.37c4.3-.98 8-.56 10.96 1.27a.7.7 0 0 1 .27.97zm1.35-2.97a.87.87 0 0 1-1.2.29C14 8.88 10.28 8.4 7.42 9.22a.87.87 0 1 1-.5-1.67c3.27-.97 7.34-.5 10.14 1.57a.87.87 0 0 1 .29 1.2zm.12-3.1A13.3 13.3 0 0 0 7.58 6.17a1.05 1.05 0 1 0-.6 2.01 11.2 11.2 0 0 1 9.02 1.72 1.05 1.05 0 1 0 1.17-1.74z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-white/70 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="font-display text-2xl text-white mb-3"
              style={{ letterSpacing: "0.02em" }}
            >
              The Immigrant Perspective
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Stories of those who live between two worlds — the nostalgia, the
              culture shock, and the triumphs of finding home in a new land.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7B9E8B] mb-5 font-medium">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Listen", "/listen"],
                ["Episodes", "/episodes"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#7B9E8B] mb-5 font-medium">
              Follow Along
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7B9E8B] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7B9E8B] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7B9E8B] transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href={siteConfig.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7B9E8B] transition-colors"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/60 hover:text-[#7B9E8B] transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} The Immigrant Perspective. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
