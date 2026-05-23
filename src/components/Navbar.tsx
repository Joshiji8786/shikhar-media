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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 80px" }}>
          <a href="#" className="font-heading" style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.01em", color: "#1C1A15", textDecoration: "none" }}>
            <span style={{ color: "#C4522A" }}>SHIKHAR</span>
            <span style={{ fontSize: "0.7rem", marginLeft: 6, opacity: 0.5, fontWeight: 400 }}>MEDIA</span>
          </a>
          <div className="font-heading" style={{ display: "flex", alignItems: "center", gap: 48, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(28,26,21,0.65)" }}>
            {[["#services","Services"],["#work","Work"],["#niche","Our Niche"],["#about","About"]].map(([href, label]) => (
              <a key={href} href={href} style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C4522A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(28,26,21,0.65)")}
              >{label}</a>
            ))}
          </div>
          <a href="#contact" className="font-heading" style={{ backgroundColor: "#C4522A", color: "white", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", transition: "background 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1C1A15")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4522A")}
          >
            Let's Talk
          </a>
          <button onClick={() => setMenuOpen(true)} style={{ display: "none", padding: 8, color: "#1C1A15", background: "none", border: "none", cursor: "pointer" }}>
            <Menu size={22} />
          </button>
        </div>
      </nav>



      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#C4522A] flex flex-col">
          <div className="flex justify-between items-center px-6 py-5">
            <span className="font-heading font-800 text-xl text-white">SHIKHAR</span>
            <button onClick={() => setMenuOpen(false)} className="text-white"><X size={24} /></button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 gap-8">
            {["Services", "Work", "Our Niche", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl text-white hover:text-[#1C1A15] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="px-8 py-8 text-white/60 text-sm font-heading">© 2026 Shikhar Media</div>
        </div>
      )}
    </>
  );
}
