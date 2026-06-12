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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  const navBg = isHome
    ? scrolled
      ? "bg-[#1A1F2E]/95 backdrop-blur-sm shadow-lg"
      : "bg-transparent"
    : "bg-[#1A1F2E]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#7B9E8B]/40 group-hover:border-[#7B9E8B] transition-colors">
            <img
              src="https://images.squarespace-cdn.com/content/v1/68b6232c97b1917a39d83a68/4480df14-52bd-48fa-bf65-3b1c05ddd35c/logo_immigrant_perspective_favicon.jpg?format=100w"
              alt="The Immigrant Perspective"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="font-display text-white text-lg font-semibold hidden sm:block leading-tight"
            style={{ letterSpacing: "0.01em" }}
          >
            The Immigrant Perspective
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-[#7B9E8B]"
                  : "text-white/80 hover:text-white"
              }`}
              style={{ letterSpacing: "0.06em" }}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1F2E] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-display text-2xl font-medium transition-colors ${
                pathname === href ? "text-[#7B9E8B]" : "text-white/90 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
