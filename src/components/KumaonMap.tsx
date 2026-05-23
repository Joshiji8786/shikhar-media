"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { servedAreas } from "@/content/siteContent";
import "leaflet/dist/leaflet.css";

/* ── Fit the map to show all markers ── */
function FitBounds() {
  const map = useMap();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const bounds = L.latLngBounds(servedAreas.map((a) => [a.lat, a.lng]));
    map.fitBounds(bounds, { padding: [60, 60] });
  }, [map]);
  return null;
}

/* ── Remove default leaflet attribution for cleaner look ── */
function RemoveAttrib() {
  const map = useMap();
  useEffect(() => {
    map.attributionControl.setPrefix("");
  }, [map]);
  return null;
}

export default function KumaonMap() {
  // Custom pulsing icon for locations
  const pulseIcon = L.divIcon({
    className: "custom-pulse-icon",
    html: `
      <div class="pin"></div>
      <div class="pulse"></div>
      <div class="pulse-delayed"></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <div
      style={{
        width: "100%",
        height: 520,
        position: "relative",
        borderRadius: 0,
        overflow: "hidden",
        borderTop: "1px solid rgba(196,82,42,0.15)",
        borderBottom: "1px solid rgba(196,82,42,0.15)",
      }}
    >
      {/* Custom CSS for leaflet markers to match brand */}
      <style>{`
        .leaflet-container {
          background: #F7F0E6 !important;
          font-family: 'Syne', sans-serif;
        }
        
        /* ── Subtle warm filter for Esri Topo to match brand cream ── */
        .leaflet-tile {
          filter: sepia(0.08) saturate(0.9) contrast(1.02);
        }

        /* ── Custom Pulsing Markers ── */
        .custom-pulse-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-pulse-icon .pin {
          width: 8px;
          height: 8px;
          background-color: #E8A020;
          border-radius: 50%;
          position: absolute;
          z-index: 3;
          box-shadow: 0 0 12px rgba(196,82,42,0.8);
        }
        .custom-pulse-icon .pulse,
        .custom-pulse-icon .pulse-delayed {
          width: 24px;
          height: 24px;
          background-color: rgba(196,82,42,0.6);
          border-radius: 50%;
          position: absolute;
          z-index: 1;
          animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        .custom-pulse-icon .pulse-delayed {
          animation-delay: 1.25s;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(3.5); opacity: 0; border: 1px solid rgba(196,82,42,0); }
        }

        /* ── Tooltips ── */
        .leaflet-tooltip {
          background: rgba(255,255,255,0.95) !important;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(196,82,42,0.2) !important;
          border-radius: 0 !important;
          color: #1C1A15 !important;
          font-family: 'Syne', sans-serif !important;
          font-size: 0.8rem !important;
          padding: 12px 18px !important;
          box-shadow: 0 8px 24px rgba(196,82,42,0.1) !important;
          white-space: nowrap;
          transition: opacity 0.3s ease;
        }
        .leaflet-tooltip::before {
          border-top-color: rgba(255,255,255,0.95) !important;
        }
        
        /* ── Controls ── */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 16px rgba(196,82,42,0.15) !important;
        }
        .leaflet-control-zoom a {
          background: rgba(255,255,255,0.9) !important;
          backdrop-filter: blur(4px);
          color: #C4522A !important;
          border: 1px solid rgba(196,82,42,0.15) !important;
          font-family: 'Syne', sans-serif !important;
          transition: all 0.3s ease;
        }
        .leaflet-control-zoom a:hover {
          background: #C4522A !important;
          color: white !important;
        }
        .leaflet-control-attribution {
          background: rgba(247,240,230,0.85) !important;
          color: rgba(28,26,21,0.5) !important;
          font-size: 0.55rem !important;
          padding: 4px 10px !important;
        }
        .leaflet-control-attribution a {
          color: rgba(196,82,42,0.8) !important;
          text-decoration: none;
        }
      `}</style>

      <MapContainer
        center={[29.55, 79.45]}
        zoom={9}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        {/* Esri World Topo Map for beautiful mountain terrain */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
        />

        <FitBounds />
        <RemoveAttrib />

        {/* Pulsing Markers */}
        {servedAreas.map((area) => (
          <Marker
            key={area.name}
            position={[area.lat, area.lng]}
            icon={pulseIcon}
          >
            <Tooltip
              direction="top"
              offset={[0, -18]}
              opacity={1}
            >
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4522A", marginBottom: 6 }}>
                  {area.name}
                </div>
                <div style={{ color: "rgba(28,26,21,0.65)", fontSize: "0.75rem", letterSpacing: "0.02em", fontWeight: 600 }}>
                  {area.desc}
                </div>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
