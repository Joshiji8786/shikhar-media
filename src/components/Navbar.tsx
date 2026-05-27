"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.5s, border-color 0.5s",
        ...(scrolled ? { backgroundColor: "rgba(247,240,230,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(196,82,42,0.1)" } : {}),
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "clamp(16px, 3vw, 28px) clamp(20px, 5vw, 80px)" }}>
          <a href="#" className="font-heading" style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.01em", color: "#1C1A15", textDecoration: "none", flexShrink: 0 }}>
            <span style={{ color: "#C4522A" }}>SHIKHAR</span>
            <span style={{ fontSize: "0.7rem", marginLeft: 6, opacity: 0.5, fontWeight: 400 }}>MEDIA</span>
          </a>

          {/* Desktop nav links — hidden on mobile via Tailwind */}
          <div className="hidden md:flex font-heading" style={{ alignItems: "center", gap: 40, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(28,26,21,0.65)" }}>
            {[["#services","Services"],["#work","Work"],["#niche","Our Niche"],["#pricing","Pricing"],["#about","About"]].map(([href, label]) => (
              <a key={href} href={href} style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C4522A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(28,26,21,0.65)")}
              >{label}</a>
            ))}
          </div>

          {/* Desktop CTA — hidden on mobile */}
          <a href="#contact" className="hidden md:inline-flex font-heading" style={{ backgroundColor: "#C4522A", color: "white", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", transition: "background 0.3s", alignItems: "center" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1C1A15")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4522A")}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger — shown only on mobile */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ padding: 8, color: "#1C1A15", background: "none", border: "none", cursor: "pointer", alignItems: "center", justifyContent: "center" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "#C4522A", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
            <span className="font-heading" style={{ fontWeight: 800, fontSize: "1.25rem", color: "white" }}>SHIKHAR MEDIA</span>
            <button onClick={() => setMenuOpen(false)} style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}>
              <X size={28} />
            </button>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", gap: 36 }}>
            {[["#services","Services"],["#work","Work"],["#niche","Our Niche"],["#pricing","Pricing"],["#about","About"],["#contact","Contact"]].map(([href, item]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display"
                style={{ fontSize: "clamp(2rem, 9vw, 3rem)", color: "white", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>
          <div style={{ padding: "24px 32px", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }} className="font-heading">
            © 2026 Shikhar Media
          </div>
        </div>
      )}
    </>
  );
}
