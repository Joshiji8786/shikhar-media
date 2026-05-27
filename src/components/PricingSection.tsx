import React, { useState } from "react";
import { Check, Sparkles, Zap, Target, ShieldCheck, MapPin } from "lucide-react";
import { pricingContent } from "@/content/pricingContent";

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({
    foundation: false,
    growth: false,
    partner: false,
  });

  return (
    <section id="pricing" className="site-section" style={{ backgroundColor: "#1C1A15", position: "relative", overflow: "hidden", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)" }}>
      {/* Mountain Background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} />
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label" style={{ color: "#E8A020", fontSize: "0.82rem" }}>
            {pricingContent.header.label}
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "white", marginBottom: 16 }}>
            {pricingContent.header.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem" }}>
            {pricingContent.header.desc}
          </p>
        </div>

        {/* AUDIT PROMO */}
        <div style={{
          backgroundColor: "#2C3E2D",
          borderRadius: "16px",
          padding: "clamp(24px, 4vw, 36px)",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 60,
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(24px, 4vw, 40px)",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ flex: "1 1 300px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(232,160,32,0.15)", color: "#E8A020", padding: "6px 12px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700, marginBottom: 16 }}>
              <Zap size={14} /> Free Audit during our stay
            </div>
            <h3 className="font-display" style={{ fontSize: "2rem", color: "white", margin: 0 }}>
              {pricingContent.audit.title}
            </h3>
          </div>
          <div style={{ flex: "2 1 400px" }}>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              {pricingContent.audit.items.map((item) => (
                <li key={item.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Check size={16} color="#E8A020" style={{ flexShrink: 0 }} />
                  <span style={{ color: "white", fontSize: "0.9rem", fontWeight: 600 }}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRICING PLANS */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}>
          <span className="font-heading" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
            THREE PLANS — CHOOSE BASED ON YOUR SEASON GOAL
          </span>
        </div>
        
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 24, marginBottom: 40 }}>
          {pricingContent.plans.map((plan) => {
            const isHovered = hoveredPlan === plan.id;
            const isRec = plan.recommended;
            const isExpanded = expandedPlans[plan.id];
            
            return (
              <div 
                key={plan.id}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: `2px solid ${isRec ? "#4A90E2" : isHovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "16px",
                  padding: "clamp(24px, 3vw, 36px) clamp(20px, 3vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)"
                }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Header */}
                <div style={{ marginBottom: isExpanded ? 24 : 16 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: isRec ? "#4A90E2" : "#E8A020", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>
                    {isRec ? <Target size={14} /> : <Sparkles size={14} />} {plan.badge}
                  </div>
                  <h3 className="font-display" style={{ fontSize: "2rem", color: "white", marginBottom: 8 }}>{plan.name}</h3>
                  <div style={{ color: "rgba(255,255,255,0.4)", textDecoration: "line-through", fontSize: "0.9rem", marginBottom: 4 }}>
                    Regular: {plan.regularPrice}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                    <span className="font-display" style={{ fontSize: "2.5rem", color: "white" }}>{plan.price}</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>{plan.period}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Collapsible toggle button */}
                <button
                  onClick={() => setExpandedPlans(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                  style={{
                    width: "100%",
                    backgroundColor: isExpanded ? "rgba(255,255,255,0.06)" : "#C4522A",
                    border: "none",
                    color: "white",
                    padding: "14px 20px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginBottom: isExpanded ? 24 : 0,
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => {
                    if (!isExpanded) {
                      e.currentTarget.style.backgroundColor = "#E8A020";
                    } else {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isExpanded) {
                      e.currentTarget.style.backgroundColor = "#C4522A";
                    } else {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                    }
                  }}
                >
                  {isExpanded ? "Hide Details ▴" : "See Details & ROI ▾"}
                </button>

                {isExpanded && (
                  <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Divider */}
                    <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", marginBottom: 24, marginTop: 8 }} />

                    {/* Features */}
                    <ul style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32, flex: 1 }}>
                      {plan.features.map((feat, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <Check size={16} color="#4CAF50" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", lineHeight: 1.45 }}>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* AI Features Badge */}
                    <div style={{ marginBottom: 28 }}>
                      <span className="font-heading" style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, display: "block" }}>
                        AI in this plan
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {plan.aiFeatures.map(ai => (
                          <span key={ai} style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", padding: "5px 8px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: 5 }}>
                            <Sparkles size={10} /> {ai}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Optional ROI Box for Growth Plan */}
                    {plan.roi && (
                      <div style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "14px", marginBottom: 28, fontSize: "0.8rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, color: "rgba(255,255,255,0.8)" }}>
                          <span>Monthly retainer</span>
                          <strong>{plan.roi.retainer}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, color: "#4CAF50" }}>
                          <span style={{ maxWidth: "70%" }}>1 extra booking/mo (est. ₹8K ADR)</span>
                          <span>{plan.roi.extraBooking}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, color: "#4CAF50" }}>
                          <span style={{ maxWidth: "70%" }}>2 direct bookings (no OTA - 18% cut)</span>
                          <span>{plan.roi.directBookings}</span>
                        </div>
                        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", margin: "10px 0" }} />
                        <div style={{ display: "flex", justifyContent: "space-between", color: "white", fontWeight: 700 }}>
                          <span>Net cost after conversions</span>
                          <span>{plan.roi.netCost}</span>
                        </div>
                      </div>
                    )}

                    {/* Guarantee */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#4CAF50", fontSize: "0.8rem", lineHeight: 1.45, marginTop: "auto" }}>
                      <ShieldCheck size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{plan.guarantee}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
