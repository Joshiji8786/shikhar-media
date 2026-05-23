"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { AipanPattern, AipanBorderPattern } from "@/components/AipanPattern";
import { ArrowRight, MapPin, Zap, Globe, Megaphone, Star, Mail, Camera } from "lucide-react";
import { siteMedia, servedAreas } from "@/content/siteContent";

/* Leaflet must be dynamically imported — it uses browser APIs */
const KumaonMap = dynamic(() => import("@/components/KumaonMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: 520, backgroundColor: "#1a2e1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span className="font-heading" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Loading Map…
      </span>
    </div>
  ),
});

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const hero = siteMedia.hero.backgroundImage;

  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = e.clientX + "px";
          followerRef.current.style.top = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <main style={{ backgroundColor: "#F7F0E6", minHeight: "100vh" }}>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "120px",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "160px",
          overflow: "hidden",
        }}
      >
        {/* Background image (from CMS config) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: hero.position,
            zIndex: 0,
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: `rgba(28,26,21,${hero.overlay})`,
            zIndex: 1,
          }}
        />
        {/* Aipan decorations */}
        <div style={{ position: "absolute", top: 64, right: 0, width: 500, height: 500, opacity: 0.15, zIndex: 2 }}>
          <AipanPattern opacity={0.18} />
        </div>

        {/* Location tag */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
          <MapPin size={12} color="#E8A020" />
          <span className="font-heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,160,32,0.9)" }}>
            Rooted in Kumaon · Built for Hospitality
          </span>
        </div>

        {/* Main headline */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200 }}>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              lineHeight: 0.9,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: 64,
            }}
          >
            Peak<br />
            <span style={{ color: "#C4522A" }}>Marketing</span><br />
            for the Hills.
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
            <p
              className="font-display"
              style={{ maxWidth: 380, color: "rgba(255,255,255,0.72)", fontSize: "1.15rem", lineHeight: 1.8, fontWeight: 300 }}
            >
              We grow Kumaon's hospitality brands through sharp strategy, creative content, and technology — so your property fills rooms, not spreadsheets.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
              <a
                href="#contact"
                className="font-heading"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  backgroundColor: "#C4522A", color: "white", fontWeight: 700,
                  fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
                  padding: "20px 36px", textDecoration: "none", transition: "background 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#E8A020")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4522A")}
              >
                Start Growing <ArrowRight size={14} />
              </a>
              <a href="#work" className="font-heading" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                See Our Work ↓
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            position: "relative", zIndex: 10, marginTop: 96, paddingTop: 48,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40,
          }}
        >
          {[
            { value: "5M+", label: "Organic Reach" },
            { value: "₹0.02", label: "Lowest CPM Achieved" },
            { value: "3x", label: "Avg. Lead Growth" },
            { value: "100%", label: "Kumaon-Focused" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: "2.5rem", color: "#C4522A" }}>{s.value}</div>
              <div className="font-heading" style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: 12 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div style={{ backgroundColor: "#C4522A", padding: "24px 0", overflow: "hidden" }}>
        <div className="marquee-inner" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {Array(4).fill(["STRATEGY", "CONTENT", "GROWTH", "KUMAON", "HOSPITALITY", "DIGITAL MARKETING", "AI-FIRST", "AIPAN ✦"]).flat().map((t, i) => (
            <span key={i} className="font-heading" style={{ fontSize: "0.85rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "white", padding: "0 48px", borderRight: "1px solid rgba(255,255,255,0.25)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ─── NICHE ─── */}
      <section id="niche" className="site-section" style={{ backgroundColor: "#1C1A15", position: "relative", overflow: "hidden" }}>
        {/* Large Aipan medallion — decorative right side */}
        <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", width: 560, height: 560, opacity: 0.22 }}>
          <AipanPattern color="#E8A020" opacity={1} />
        </div>
        {/* Smaller medallion top-left */}
        <div style={{ position: "absolute", left: -40, top: -40, width: 280, height: 280, opacity: 0.12 }}>
          <AipanPattern color="#C4522A" opacity={1} />
        </div>
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ color: "#E8A020", fontSize: "0.82rem" }}>Our Niche</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 96, alignItems: "center" }}>
            <div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "white", lineHeight: 1.15, marginBottom: 40 }}
              >
                We Only Serve<br />
                <span style={{ color: "#E8A020" }}>Kumaon Hospitality.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 48 }}>
                Hotels, homestays, cafés, resorts, and heritage properties in Nainital, Mukteshwar, Corbett, Ranikhet, Almora, Binsar — this is our territory. Deep niche = deep expertise = guaranteed results.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {servedAreas.map((area) => (
                  <span key={area.name} className="font-heading" style={{ border: "1px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "10px 20px" }}>
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: "🏔️", title: "Heritage Properties", desc: "Colonial-era hotels and heritage havelis" },
                { icon: "🌿", title: "Nature Retreats", desc: "Eco-lodges, forest camps, wildlife resorts" },
                { icon: "🏡", title: "Homestays & B&Bs", desc: "Authentic Kumaoni family experiences" },
                { icon: "☕", title: "Cafés & Restaurants", desc: "Local cuisine and mountain dining" },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{ border: "1px solid rgba(255,255,255,0.18)", padding: "36px 28px", transition: "border-color 0.3s, background 0.3s", backgroundColor: "rgba(255,255,255,0.03)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,160,32,0.5)"; e.currentTarget.style.backgroundColor = "rgba(232,160,32,0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 20 }}>{c.icon}</div>
                  <div className="font-heading" style={{ color: "white", fontSize: "1rem", fontWeight: 700, marginBottom: 12 }}>{c.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CULTURE & HERITAGE SECTION ─── */}
      <section
        id="culture"
        style={{
          backgroundColor: "#F7F0E6",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Full-bleed Aipan art background strip at top */}
        <div
          style={{
            width: "100%",
            height: 320,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${siteMedia.aipan[0].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28,26,21,0.45)" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 16,
              textAlign: "center",
              padding: "0 40px",
            }}
          >
            <span className="font-heading" style={{ fontSize: "0.82rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#E8A020" }}>The Soul of Our Brand</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "white", lineHeight: 1.05 }}>
              Rooted in the Art &amp; Architecture
            </h2>
            <p className="font-display" style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", fontWeight: 300, maxWidth: 560 }}>
              of Kumaon.
            </p>
          </div>
        </div>

        {/* Two-column culture split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

          {/* LEFT — Aipan Art */}
          <div style={{ position: "relative" }}>
            {/* Large Aipan image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                backgroundImage: `url(${siteMedia.aipan[1].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(transparent, rgba(196,82,42,0.85))" }} />
              <div style={{ position: "absolute", bottom: 28, left: 36 }}>
                <div className="font-heading" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                  {siteMedia.aipan[1].caption}
                </div>
              </div>
            </div>
            {/* Aipan text block */}
            <div
              style={{
                backgroundColor: "#C4522A",
                padding: "64px 56px",
              }}
            >
              <span className="font-heading" style={{ fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", display: "block", marginBottom: 20 }}>Aipan Folk Art</span>
              <h3 className="font-display" style={{ fontSize: "clamp(1.75rem,3vw,2.75rem)", color: "white", lineHeight: 1.15, marginBottom: 28 }}>
                Kumaon's Sacred
                <br />Living Art Form.
              </h3>
              <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.9, fontSize: "1rem", marginBottom: 28 }}>
                Aipan is a centuries-old ritual folk art from Kumaon — intricate patterns drawn with red clay and white rice paste on floors, walls, and doorways. Each motif is sacred: the lotus for purity, fish for prosperity, the sun for life.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                At Shikhar Media, Aipan isn't just visual inspiration — it's our philosophy. Just as every Aipan pattern is intentional and rooted in meaning, every campaign we craft is deliberate and deeply local.
              </p>
            </div>
          </div>

          {/* RIGHT — Kumaoni Homes */}
          <div style={{ position: "relative" }}>
            {/* Homes text block */}
            <div
              style={{
                backgroundColor: "#2C3E2D",
                padding: "64px 56px",
              }}
            >
              <span className="font-heading" style={{ fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8C5BC", display: "block", marginBottom: 20 }}>Kumaoni Architecture</span>
              <h3 className="font-display" style={{ fontSize: "clamp(1.75rem,3vw,2.75rem)", color: "white", lineHeight: 1.15, marginBottom: 28 }}>
                Stone, Slate &amp; Carved
                <br />Deodar Wood.
              </h3>
              <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.9, fontSize: "1rem", marginBottom: 28 }}>
                Traditional Kumaoni homes are built with thick stone walls that hold warmth, timber balconies with hand-carved lattice work, and grey slate roofs that have survived Himalayan winters for over four hundred years.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                These are the properties your guests travel hundreds of miles to experience. We help you tell that story — and fill every room.
              </p>
            </div>
            {/* Large home image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                backgroundImage: `url(${siteMedia.homes[0].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(transparent, rgba(28,26,21,0.7))" }} />
              <div style={{ position: "absolute", bottom: 28, left: 36 }}>
                <div className="font-heading" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                  {siteMedia.homes[0].caption}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Village panorama — full bleed */}
        <div
          style={{
            width: "100%",
            height: 480,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${siteMedia.homes[1].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28,26,21,0.38)" }} />
          {/* Floating stat */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
            }}
          >
            {[
              { num: "400+", label: "Years of tradition" },
              { num: "8", label: "Destinations served" },
              { num: "∞", label: "Stories to tell" },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center",
                  padding: "0 64px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none",
                }}
              >
                <div className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "white", lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
                <div className="font-heading" style={{ fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ─── */}
      <section id="map" style={{ backgroundColor: "#F7F0E6", paddingBottom: 0 }}>
        <div className="site-container" style={{ paddingTop: 100, paddingBottom: 64 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 64 }}>
            <div>
              <span className="section-label" style={{ color: "#C4522A", fontSize: "0.82rem" }}>Where We Work</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,4vw,3.75rem)", color: "#1C1A15", lineHeight: 1.1 }}>
                Our Territory.<br /><span style={{ color: "#E8A020" }}>8 Hill Destinations.</span>
              </h2>
            </div>
            <p style={{ maxWidth: 340, color: "rgba(28,26,21,0.65)", fontSize: "1rem", lineHeight: 1.85 }}>
              Hover over any pin to learn about each destination we serve. From forest camps to heritage havelis.
            </p>
          </div>
        </div>
        <KumaonMap />
        {/* Location legend strip */}
        <div style={{ backgroundColor: "rgba(196,82,42,0.06)", padding: "28px 80px", display: "flex", flexWrap: "wrap", gap: 0, borderTop: "1px solid rgba(196,82,42,0.15)" }}>
          {servedAreas.map((area, i) => (
            <div
              key={area.name}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "14px 32px",
                borderRight: i < servedAreas.length - 1 ? "1px solid rgba(196,82,42,0.15)" : "none",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#C4522A", flexShrink: 0, boxShadow: "0 0 10px rgba(196,82,42,0.4)" }} />
              <span className="font-heading" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(28,26,21,0.65)", fontWeight: 600 }}>
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="site-section" style={{ backgroundColor: "#F7F0E6", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <AipanBorderPattern />
        </div>
        <div className="site-container">
          <div className="section-header-spread">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#1C1A15", lineHeight: 1.1 }}>
                360° Marketing<br />Under One Roof.
              </h2>
            </div>
            <p style={{ maxWidth: 300, color: "rgba(28,26,21,0.5)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              We handle everything — so you focus on running your property, not chasing agencies.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2, backgroundColor: "rgba(196,82,42,0.1)" }}>
            {[
              { num: "01", icon: Camera, title: "Social Media", items: ["Content creation", "Founder profile", "Reels & stories", "Community management"] },
              { num: "02", icon: Globe, title: "Website Design", items: ["Brand identity", "UI/UX Design", "Development", "Booking integration"] },
              { num: "03", icon: Megaphone, title: "Lead Generation", items: ["Meta & Google Ads", "Email marketing", "Influencer outreach", "Ad funnel strategy"] },
              { num: "04", icon: Zap, title: "AI-First Services", items: ["AI video content", "Listing creatives", "Product photography", "AI avatar creation"] },
            ].map((s) => {
              const isHovered = hoveredService === s.title;
              return (
              <div
                key={s.title}
                className="service-card"
                style={{ backgroundColor: isHovered ? "#1C1A15" : "#F7F0E6", transition: "background 0.3s" }}
                onMouseEnter={() => setHoveredService(s.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
                  <span className="font-heading service-num" style={{ fontSize: "0.85rem", color: isHovered ? "#E8A020" : "#C4522A", fontWeight: 700, letterSpacing: "0.1em", transition: "color 0.3s" }}>{s.num}</span>
                  <s.icon size={22} color={isHovered ? "rgba(255,255,255,0.3)" : "rgba(28,26,21,0.22)"} style={{ transition: "color 0.3s" }} />
                </div>
                <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "1.35rem", color: isHovered ? "white" : "#1C1A15", marginBottom: 28, transition: "color 0.3s" }}>{s.title}</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ color: isHovered ? "rgba(255,255,255,0.92)" : "rgba(28,26,21,0.65)", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 12, transition: "color 0.3s" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#C4522A", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* ─── VALUE PROP ─── */}
      <section className="site-section" style={{ backgroundColor: "#2C3E2D", position: "relative", overflow: "hidden" }}>
        {/* Large Aipan in background */}
        <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 500, height: 500, opacity: 0.2 }}>
          <AipanPattern color="#B8C5BC" opacity={1} />
        </div>
        <div style={{ position: "absolute", left: -80, bottom: -60, width: 320, height: 320, opacity: 0.1 }}>
          <AipanPattern color="#E8A020" opacity={1} />
        </div>
        <div className="site-container">
          <span className="section-label" style={{ color: "#B8C5BC", fontSize: "0.82rem" }}>Our Value Prop</span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "white", lineHeight: 1.1, marginBottom: 80, maxWidth: 700 }}>
            Strategy, Execution,<br />and Long-Term Growth.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2, backgroundColor: "rgba(255,255,255,0.08)" }}>
            {[
              { num: "01", title: "Strategic Architecture", desc: "Moving beyond 'tasks' to high-level vision. We map your property's growth journey from first impression to full occupancy." },
              { num: "02", title: "Creative Execution", desc: "Bridging the gap between Kumaon's raw beauty and digital storytelling — content that converts." },
              { num: "03", title: "Future-Proofing", desc: "Integrating AI-based solutions and automation so your marketing engine keeps running without constant oversight." },
            ].map((v) => (
              <div
                key={v.title}
                style={{ backgroundColor: "#2C3E2D", padding: "56px 48px", border: "1px solid rgba(255,255,255,0.12)", transition: "border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(184,197,188,0.5)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.backgroundColor = "#2C3E2D"; }}
              >
                <div className="font-heading" style={{ fontSize: "0.85rem", color: "#B8C5BC", marginBottom: 40, fontWeight: 700, letterSpacing: "0.1em" }}>{v.num}</div>
                <h3 className="font-heading" style={{ fontWeight: 700, color: "white", fontSize: "1.25rem", marginBottom: 20 }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.85 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK / RESULTS ─── */}
      <section id="work" className="site-section" style={{ backgroundColor: "#F7F0E6" }}>
        <div className="site-container">
          <div className="section-header-spread">
            <div>
              <span className="section-label">Proven Results</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#1C1A15", lineHeight: 1.1 }}>
                Gigantic Results.<br />
                <span style={{ color: "#C4522A" }}>Real Numbers.</span>
              </h2>
            </div>
            <p style={{ maxWidth: 300, color: "rgba(28,26,21,0.5)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Proof of what happens when strategy, creativity, and execution are aligned.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, backgroundColor: "rgba(196,82,42,0.1)" }}>
            {[
              { client: "Tany's Pizzeria", handle: "@tanys.pizzeria", type: "F&B · Meta Ads", stats: [{ label: "Ad Spend", value: "₹9,989" }, { label: "Reach", value: "1.19M" }, { label: "CPM", value: "₹12" }, { label: "New Followers", value: "1,217" }] },
              { client: "Awwwnchal", handle: "@awwwnchal", type: "Creator · Meta Ads", stats: [{ label: "Followers", value: "1.1M" }, { label: "Ad Spend", value: "₹3,389" }, { label: "Reach", value: "1.99M" }, { label: "CPM", value: "₹1.70" }] },
              { client: "Cloudstok Technologies", handle: "@cloudstok", type: "Tech · Full Funnel", stats: [{ label: "Reach", value: "1.6M" }, { label: "CPP (Thruplay)", value: "₹0.02" }, { label: "ThruPlays", value: "4.96L" }, { label: "Leads", value: "42" }] },
            ].map((cs) => {
              const isHovered = hoveredCase === cs.client;
              return (
              <div
                key={cs.client}
                className="case-row"
                style={{ backgroundColor: isHovered ? "#1C1A15" : "#F7F0E6", transition: "background 0.5s" }}
                onMouseEnter={() => setHoveredCase(cs.client)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
                  <div style={{ minWidth: 240 }}>
                    <div className="section-label case-type" style={{ color: isHovered ? "#E8A020" : "#C4522A", marginBottom: 12, fontSize: "0.78rem", transition: "color 0.3s" }}>{cs.type}</div>
                    <h3 className="font-display case-client" style={{ fontSize: "2rem", color: isHovered ? "white" : "#1C1A15", marginBottom: 8, transition: "color 0.3s" }}>{cs.client}</h3>
                    <div className="font-heading case-handle" style={{ fontSize: "0.8rem", color: isHovered ? "rgba(255,255,255,0.45)" : "rgba(28,26,21,0.45)", transition: "color 0.3s" }}>{cs.handle}</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(80px, 1fr))", gap: 32, flex: 1 }}>
                    {cs.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display case-stat-value" style={{ fontSize: "2.25rem", color: "#C4522A", transition: "color 0.3s" }}>{s.value}</div>
                        <div className="font-heading case-stat-label" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: isHovered ? "rgba(255,255,255,0.55)" : "rgba(28,26,21,0.55)", marginTop: 10, transition: "color 0.3s" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="site-section" style={{ backgroundColor: "#1C1A15", position: "relative", overflow: "hidden" }}>
        {/* Aipan medallion watermarks */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, opacity: 0.06, pointerEvents: "none" }}>
          <AipanPattern color="#E8A020" opacity={1} />
        </div>
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span className="section-label" style={{ color: "#E8A020", fontSize: "0.82rem" }}>Client Reviews</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "white" }}>What Clients Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { quote: "OrbitAIM transformed our online presence completely. Bookings up 40% in 3 months.", name: "Priya Joshi", title: "Owner, Mukteshwar Retreat" },
              { quote: "They understand Kumaon like no agency we've worked with before. The content feels genuine.", name: "Rohit Mehta", title: "Manager, Nainital Heritage Hotel" },
              { quote: "The AI-powered listing pictures alone paid back our entire year's marketing investment.", name: "Sunita Rawat", title: "Founder, Kafal Homestay" },
            ].map((t) => (
              <div
                key={t.name}
                className="testimonial-card"
                style={{ border: "1px solid rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)", transition: "border-color 0.3s, background 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,160,32,0.5)"; e.currentTarget.style.backgroundColor = "rgba(232,160,32,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ display: "flex", gap: 5, marginBottom: 28 }}>
                  {[1,2,3,4,5].map((s) => <Star key={s} size={13} color="#E8A020" fill="#E8A020" />)}
                </div>
                <p className="font-display" style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.85, fontStyle: "italic", marginBottom: 36 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-heading" style={{ fontWeight: 700, color: "white", fontSize: "1rem" }}>{t.name}</div>
                  <div className="font-heading" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 8 }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="site-section" style={{ backgroundColor: "#F7F0E6", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, bottom: 0, width: 400, height: 400, opacity: 0.15 }}>
          <AipanPattern />
        </div>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 96, alignItems: "center" }}>
            <div>
              <span className="section-label">About Shikhar</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,4vw,3.75rem)", color: "#1C1A15", lineHeight: 1.15, marginBottom: 40 }}>
                We Take Away<br />3 Tasks from<br />Your List.
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
                {["Marketing", "Technology", "Strategy"].map((t) => (
                  <span key={t} className="font-heading" style={{ backgroundColor: "rgba(196,82,42,0.1)", color: "#C4522A", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 18px" }}>{t}</span>
                ))}
              </div>
              <p style={{ color: "rgba(28,26,21,0.6)", lineHeight: 1.9, marginBottom: 24, fontSize: "1rem" }}>
                Shikhar Media is the marketing arm of OrbitAIM Technologies — a Kumaon-based MartTech consultancy. We democratize world-class marketing for the properties that make our hills worth visiting.
              </p>
              <p style={{ color: "rgba(28,26,21,0.6)", lineHeight: 1.9, fontSize: "1rem" }}>
                Our sister products include <a href="https://orbitaim.io" style={{ color: "#C4522A" }}>orbitaim.io</a> (AI-powered SaaS) and <a href="https://orbitaim.com" style={{ color: "#C4522A" }}>orbitaim.com</a> (full-service consultancy). You just focus on growth.
              </p>
            </div>
            {/* Photo from CMS gallery */}
            <div style={{ position: "relative" }}>
              {/* Kumaoni home photo */}
              <div
                style={{
                  aspectRatio: "4/5",
                  backgroundImage: `url(${siteMedia.homes[0].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 28px 24px", background: "linear-gradient(transparent, rgba(28,26,21,0.85))" }}>
                  <div className="font-heading" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    {siteMedia.homes[0].caption}
                  </div>
                </div>
                {/* Aipan corner decorations */}
                <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: 80, opacity: 0.7 }}>
                  <AipanPattern color="#E8A020" opacity={0.9} />
                </div>
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 80, height: 80, opacity: 0.7 }}>
                  <AipanPattern color="#E8A020" opacity={0.9} />
                </div>
              </div>
              {/* Small Aipan art thumbnail below */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 4 }}>
                <div
                  style={{
                    aspectRatio: "3/2",
                    backgroundImage: `url(${siteMedia.aipan[0].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  style={{
                    aspectRatio: "3/2",
                    backgroundImage: `url(${siteMedia.aipan[1].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              {/* Offset accent */}
              <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, backgroundColor: "#C4522A", zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="site-section noise" style={{ backgroundColor: "#C4522A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <svg viewBox="0 0 1400 600" style={{ width: "100%", height: "100%", opacity: 0.1 }} aria-hidden="true">
            <circle cx="700" cy="300" r="400" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="700" cy="300" r="280" stroke="white" strokeWidth="0.5" fill="none" />
            <line x1="300" y1="300" x2="1100" y2="300" stroke="white" strokeWidth="0.5" />
            <line x1="700" y1="-100" x2="700" y2="700" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 96, alignItems: "center" }}>
            <div>
              <span className="font-heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 24 }}>
                Let's Build Together
              </span>
              <h2 className="font-display" style={{ fontSize: "clamp(3rem,6vw,5rem)", color: "white", lineHeight: 1.05, marginBottom: 36 }}>
                Ready to Fill<br />Every Room?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.85, marginBottom: 56 }}>
                Tell us about your property. We'll map out a custom growth strategy for your Kumaon hospitality brand — no fluff, just results.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <a href="mailto:hello@shikhar.media" style={{ display: "flex", alignItems: "center", gap: 16, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                  <Mail size={16} />
                  <span className="font-heading" style={{ fontSize: "0.9rem" }}>hello@shikhar.media</span>
                </a>
                <a href="https://instagram.com/orbitaim.io" style={{ display: "flex", alignItems: "center", gap: 16, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                  <Camera size={16} />
                  <span className="font-heading" style={{ fontSize: "0.9rem" }}>@orbitaim.io</span>
                </a>
              </div>
            </div>
            <div className="contact-form-wrap" style={{ backgroundColor: "rgba(28,26,21,0.2)", backdropFilter: "blur(8px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { label: "Property Name", placeholder: "Your hotel or homestay" },
                  { label: "Your Name", placeholder: "Owner / Manager" },
                  { label: "Email", placeholder: "you@yourproperty.com" },
                  { label: "Location in Kumaon", placeholder: "Nainital, Mukteshwar, Corbett..." },
                ].map((f) => (
                  <div key={f.label} className="form-field">
                    <label className="form-label">{f.label}</label>
                    <input type="text" placeholder={f.placeholder} className="form-input" />
                  </div>
                ))}
                <textarea placeholder="Tell us about your property and marketing goals..." rows={4} className="form-input" style={{ resize: "none", marginTop: 8 }} />
                <button
                  className="font-heading"
                  style={{ width: "100%", backgroundColor: "white", color: "#C4522A", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 0", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "background 0.3s, color 0.3s", marginTop: 8 }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1C1A15"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#C4522A"; }}
                >
                  Send Message <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: "#0E0C09", padding: "60px 80px" }}>
        {/* Aipan border divider at top */}
        <div style={{ marginBottom: 48, opacity: 0.45 }}>
          <AipanBorderPattern color="#C4522A" opacity={1} />
        </div>
        <div className="site-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <div className="font-heading" style={{ fontWeight: 800, color: "white", fontSize: "1.25rem" }}>
              <span style={{ color: "#C4522A" }}>SHIKHAR</span> MEDIA
            </div>
            <div className="font-heading" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 10 }}>
              A brand by OrbitAIM Technologies
            </div>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["#services", "#work", "#niche", "#about", "#contact"].map((href) => (
              <a key={href} href={href} className="font-heading" style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C4522A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                {href.replace("#", "")}
              </a>
            ))}
          </div>
          <div className="font-heading" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
            © 2026 Shikhar Media · Kumaon, Uttarakhand
          </div>
        </div>
      </footer>
    </main>
  );
}
