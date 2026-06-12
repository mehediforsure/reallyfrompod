"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/listen", label: "Listen" },
  { href: "/episodes", label: "Episodes" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = isHome
    ? scrolled
      ? "bg-[#1A1F2E]/96 backdrop-blur-md shadow-[0_1px_0_rgba(123,158,139,0.15)]"
      : "bg-transparent"
    : "bg-[#1A1F2E] shadow-[0_1px_0_rgba(123,158,139,0.15)]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 overflow-hidden border border-[#7B9E8B]/30 group-hover:border-[#7B9E8B]/70 transition-colors"
               style={{ borderRadius: "50%" }}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/4480df14-52bd-48fa-bf65-3b1c05ddd35c/logo_immigrant_perspective_favicon.jpg?format=100w"
              alt="The Immigrant Perspective"
              className="w-full h-full object-cover"
              width={36}
              height={36}
            />
          </div>
          <span
            className="font-display text-white text-[1.05rem] font-semibold hidden sm:block"
            style={{ letterSpacing: "0.02em" }}
          >
            The Immigrant Perspective
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-[0.7rem] font-semibold tracking-[0.12em] transition-colors pb-0.5 ${
                pathname === href
                  ? "text-[#7B9E8B]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label.toUpperCase()}
              {pathname === href && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#7B9E8B]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`block h-px bg-white origin-center transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-white origin-center transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu — full overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#1A1F2E] z-40 flex flex-col justify-center px-8 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Close button inside overlay */}
        <button
          className="absolute top-5 right-6 text-white/60 hover:text-white p-2 transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`font-display py-3 text-4xl font-light transition-colors border-b border-white/5 last:border-0 ${
                pathname === href ? "text-[#7B9E8B]" : "text-white/80 hover:text-white"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:immigrantpod@gmail.com"
          className="mt-12 text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          immigrantpod@gmail.com
        </a>
      </div>
    </header>
  );
}
