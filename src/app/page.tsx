"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { AipanPattern, AipanBorderPattern } from "@/components/AipanPattern";
import PricingSection from "@/components/PricingSection";
import { ArrowRight, MapPin, Zap, Globe, Megaphone, Star, Mail, Camera } from "lucide-react";
import { siteMedia, servedAreas } from "@/content/siteContent";

/* Leaflet must be dynamically imported — it uses browser APIs */
const KumaonMap = dynamic(() => import("@/components/KumaonMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "clamp(350px, 50vh, 520px)", backgroundColor: "#1a2e1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "clamp(64px, 10vw, 120px)",
          paddingLeft: "clamp(24px, 6vw, 80px)",
          paddingRight: "clamp(24px, 6vw, 80px)",
          paddingTop: "clamp(110px, 14vw, 160px)",
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
            className="font-display hero-headline"
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
              We grow Kumaon's hospitality brands through strategy, content, and technology — so your property fills rooms, not spreadsheets.
            </p>
            <div className="hero-actions" style={{ display: "flex", alignItems: "center", gap: 36 }}>
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
          className="hero-stats"
          style={{
            position: "relative", zIndex: 10, marginTop: "clamp(48px, 8vw, 96px)", paddingTop: "clamp(24px, 4vw, 48px)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(120px, 100%), 1fr))", gap: "clamp(16px, 4vw, 40px)",
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
            <span key={i} className="font-heading marquee-item" style={{ fontSize: "0.85rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "white", padding: "0 48px", borderRight: "1px solid rgba(255,255,255,0.25)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ─── NICHE & TERRITORY ─── */}
      <section id="niche" className="site-section" style={{ backgroundColor: "#1C1A15", position: "relative", overflow: "hidden" }}>
        {/* Mountain Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} />
        {/* Large Aipan medallion — decorative right side */}
        <div style={{ position: "absolute", right: -80, top: "20%", width: 560, height: 560, opacity: 0.15, pointerEvents: "none" }}>
          <AipanPattern color="#E8A020" opacity={1} />
        </div>
        {/* Smaller medallion bottom-left */}
        <div style={{ position: "absolute", left: -40, bottom: -40, width: 280, height: 280, opacity: 0.1, pointerEvents: "none" }}>
          <AipanPattern color="#C4522A" opacity={1} />
        </div>
        
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <span className="section-label" style={{ color: "#E8A020", fontSize: "0.82rem" }}>Our Niche &amp; Territory</span>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "clamp(32px, 6vw, 64px)", alignItems: "center" }}>
            <div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "white", lineHeight: 1.15, marginBottom: 24 }}
              >
                We Only Serve<br />
                <span style={{ color: "#E8A020" }}>Kumaon Hospitality.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 32 }}>
                Our territory spans 8 key destinations across Kumaon. We work exclusively with local hospitality brands, providing deep regional expertise that generic outside agencies can't match.
              </p>
              
              {/* Compact client type badges */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: "🏔️", title: "Heritage", desc: "Hotels & havelis" },
                  { icon: "🌿", title: "Nature Retreats", desc: "Eco-lodges & camps" },
                  { icon: "🏡", title: "Homestays", desc: "B&Bs & guest houses" },
                  { icon: "☕", title: "Cafés", desc: "Dining & local food" },
                ].map((c) => (
                  <div
                    key={c.title}
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "8px",
                      padding: "16px",
                      backgroundColor: "rgba(255,255,255,0.02)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                    <div>
                      <h4 className="font-heading" style={{ color: "white", fontSize: "0.85rem", fontWeight: 700 }}>{c.title}</h4>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginTop: 2 }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded interactive map */}
            <div style={{ position: "relative", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}>
              <KumaonMap />
            </div>
          </div>

          {/* Served destinations pills list */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {servedAreas.map((area) => (
              <span key={area.name} className="font-heading" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 16px", borderRadius: "100px" }}>
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CULTURE & HERITAGE SECTION ─── */}
      <section
        id="culture"
        style={{ backgroundColor: "#C4522A", position: "relative", overflow: "hidden" }}
      >
        {/* Aipan Art Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/aipan-art.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04, mixBlendMode: "overlay", pointerEvents: "none" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(450px, 100%), 1fr))" }}>
          {/* LEFT — Aipan Art Image */}
          <div
            style={{ width: "100%", aspectRatio: "4/3", backgroundImage: `url(${siteMedia.aipan[1].src})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", minHeight: 380 }}
          >
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(transparent, rgba(196,82,42,0.85))" }} />
            <div style={{ position: "absolute", bottom: 28, left: 36 }}>
              <div className="font-heading" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{siteMedia.aipan[1].caption}</div>
            </div>
          </div>

          {/* RIGHT — Aipan Art Content */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)", color: "white" }}>
            <span className="font-heading" style={{ fontSize: "0.8rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", display: "block", marginBottom: 16 }}>Aipan Folk Art</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "white", lineHeight: 1.15, marginBottom: 24 }}>
              Kumaon’s Sacred Living Art Form.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.8, fontSize: "1.05rem", maxWidth: 520 }}>
              Aipan is a centuries-old folk art from Kumaon — patterns drawn with red clay and white rice paste. Each motif is sacred. At Shikhar Media, it’s our philosophy: every campaign we craft is intentional and deeply local.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="site-section" style={{ backgroundColor: "#F7F0E6", position: "relative", overflow: "hidden" }}>
        {/* Aipan Art Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/aipan-art.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.03, pointerEvents: "none" }} />
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
              Strategy. Execution. AI. Everything — so you focus on running your property.
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

      {/* ─── WORK / RESULTS ─── */}
      <section id="work" className="site-section" style={{ backgroundColor: "#F7F0E6", position: "relative" }}>
        {/* Aipan Art Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/aipan-art.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.03, pointerEvents: "none" }} />
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div className="section-header-spread" style={{ marginBottom: 48 }}>
            <div>
              <span className="section-label">Proven Results</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#1C1A15", lineHeight: 1.1 }}>
                Gigantic Results.<br />
                <span style={{ color: "#C4522A" }}>Company Summary.</span>
              </h2>
            </div>
            <p style={{ maxWidth: 360, color: "rgba(28,26,21,0.5)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Proof of what happens when strategy, regional context, and modern ad technology are aligned.
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: "#1C1A15", 
            borderRadius: "16px", 
            padding: "clamp(24px, 5vw, 48px)",
            color: "white",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "40px",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Background watermark */}
            <div style={{ position: "absolute", right: -40, bottom: -40, width: 240, height: 240, opacity: 0.08, pointerEvents: "none" }}>
              <AipanPattern color="#E8A020" opacity={1} />
            </div>

            <div>
              <span className="font-heading" style={{ fontSize: "0.75rem", color: "#E8A020", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
                Performance Overview
              </span>
              <h3 className="font-display" style={{ fontSize: "2rem", marginBottom: 20 }}>
                High scale. Low spend.
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 24 }}>
                Across F&B, creator profiles, and tech brands, our campaigns are engineered for maximum efficiency. We focus on cutting down ad costs (CPM) while driving direct action — whether that's social reach, video views, or direct leads.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <span className="font-heading" style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: "100px", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>
                  ✓ Meta &amp; Google Ads
                </span>
                <span className="font-heading" style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: "100px", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>
                  ✓ Organic Reels Funnel
                </span>
                <span className="font-heading" style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: "100px", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>
                  ✓ Lead Generation
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {[
                { value: "5.2M+", label: "Total Paid & Organic Reach" },
                { value: "₹0.01", label: "Lowest Cost per Thruplay" },
                { value: "1,200+", label: "New F&B Followers (₹10K Spend)" },
                { value: "3x", label: "Average Lead Cost Reduction" },
              ].map((stat, i) => (
                <div key={i} style={{ borderLeft: "2px solid #C4522A", paddingLeft: 16 }}>
                  <div className="font-display" style={{ fontSize: "2.25rem", color: "#E8A020" }}>
                    {stat.value}
                  </div>
                  <div className="font-heading" style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6, lineHeight: 1.4 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <PricingSection />

      {/* ─── ABOUT ─── */}
      <section id="about" className="site-section" style={{ backgroundColor: "#F7F0E6", position: "relative", overflow: "hidden" }}>
        {/* Aipan Art Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/aipan-art.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.03, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, bottom: 0, width: 400, height: 400, opacity: 0.15 }}>
          <AipanPattern />
        </div>
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <span className="section-label" style={{ margin: "0 auto 16px" }}>About Shikhar</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,4vw,3.75rem)", color: "#1C1A15", lineHeight: 1.15, marginBottom: 32 }}>
              We Take Away 3 Tasks from Your List.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 32 }}>
              {["Marketing", "Technology", "Strategy"].map((t) => (
                <span key={t} className="font-heading" style={{ backgroundColor: "rgba(196,82,42,0.1)", color: "#C4522A", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 18px" }}>{t}</span>
              ))}
            </div>
            <p style={{ color: "rgba(28,26,21,0.6)", lineHeight: 1.9, fontSize: "1.05rem" }}>
              Shikhar Media is the marketing arm of OrbitAIM Technologies — a Kumaon-based MarTech consultancy. We also build <a href="https://orbitaim.io" style={{ color: "#C4522A" }}>orbitaim.io</a> (AI SaaS) and <a href="https://orbitaim.com" style={{ color: "#C4522A" }}>orbitaim.com</a> (full-service consultancy).
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="site-section noise" style={{ backgroundColor: "#C4522A", position: "relative", overflow: "hidden", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)" }}>
        {/* Aipan Art Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/aipan-art.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04, mixBlendMode: "overlay", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <svg viewBox="0 0 1400 600" style={{ width: "100%", height: "100%", opacity: 0.1 }} aria-hidden="true">
            <circle cx="700" cy="300" r="400" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="700" cy="300" r="280" stroke="white" strokeWidth="0.5" fill="none" />
            <line x1="300" y1="300" x2="1100" y2="300" stroke="white" strokeWidth="0.5" />
            <line x1="700" y1="-100" x2="700" y2="700" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "clamp(48px, 8vw, 96px)", alignItems: "center" }}>
            <div>
              <span className="font-heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 24 }}>
                Let's Build Together
              </span>
              <h2 className="font-display" style={{ fontSize: "clamp(3rem,6vw,5rem)", color: "white", lineHeight: 1.05, marginBottom: 36 }}>
                Ready to Fill<br />Every Room?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 48 }}>
                Tell us about your property. We’ll map a custom growth strategy — no fluff, just results.
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
      <footer style={{ backgroundColor: "#0E0C09", padding: "clamp(40px, 6vw, 60px) clamp(20px, 6vw, 80px)", position: "relative", overflow: "hidden" }}>
        {/* Mountain Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} />
        {/* Aipan border divider at top */}
        <div style={{ marginBottom: 48, opacity: 0.45, position: "relative", zIndex: 10 }}>
          <AipanBorderPattern color="#C4522A" opacity={1} />
        </div>
        <div className="site-container footer-inner" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 24, position: "relative", zIndex: 10 }}>
          <div>
            <div className="font-heading" style={{ fontWeight: 800, color: "white", fontSize: "1.25rem" }}>
              <span style={{ color: "#C4522A" }}>SHIKHAR</span> MEDIA
            </div>
            <div className="font-heading" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 10 }}>
              A brand by OrbitAIM Technologies
            </div>
          </div>
          <div className="footer-links" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px, 2vw, 32px)" }}>
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
