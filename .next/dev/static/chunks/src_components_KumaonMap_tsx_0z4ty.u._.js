(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/KumaonMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KumaonMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/siteContent.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ── Fit the map to show all markers ── */ function FitBounds() {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FitBounds.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servedAreas"].map({
                "FitBounds.useEffect.bounds": (a)=>[
                        a.lat,
                        a.lng
                    ]
            }["FitBounds.useEffect.bounds"]));
            map.fitBounds(bounds, {
                padding: [
                    60,
                    60
                ]
            });
        }
    }["FitBounds.useEffect"], [
        map
    ]);
    return null;
}
_s(FitBounds, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = FitBounds;
/* ── Remove default leaflet attribution for cleaner look ── */ function RemoveAttrib() {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemoveAttrib.useEffect": ()=>{
            map.attributionControl.setPrefix("");
        }
    }["RemoveAttrib.useEffect"], [
        map
    ]);
    return null;
}
_s1(RemoveAttrib, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = RemoveAttrib;
function KumaonMap() {
    // Custom pulsing icon for locations
    const pulseIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "custom-pulse-icon",
        html: `
      <div class="pin"></div>
      <div class="pulse"></div>
      <div class="pulse-delayed"></div>
    `,
        iconSize: [
            24,
            24
        ],
        iconAnchor: [
            12,
            12
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: 520,
            position: "relative",
            borderRadius: 0,
            overflow: "hidden",
            borderTop: "1px solid rgba(196,82,42,0.15)",
            borderBottom: "1px solid rgba(196,82,42,0.15)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/components/KumaonMap.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: [
                    29.55,
                    79.45
                ],
                zoom: 9,
                style: {
                    width: "100%",
                    height: "100%"
                },
                zoomControl: true,
                scrollWheelZoom: false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
                        attribution: "Tiles © Esri — Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
                    }, void 0, false, {
                        fileName: "[project]/src/components/KumaonMap.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FitBounds, {}, void 0, false, {
                        fileName: "[project]/src/components/KumaonMap.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RemoveAttrib, {}, void 0, false, {
                        fileName: "[project]/src/components/KumaonMap.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$siteContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servedAreas"].map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: [
                                area.lat,
                                area.lng
                            ],
                            icon: pulseIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                direction: "top",
                                offset: [
                                    0,
                                    -18
                                ],
                                opacity: 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: "0.9rem",
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase",
                                                color: "#C4522A",
                                                marginBottom: 6
                                            },
                                            children: area.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KumaonMap.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "rgba(28,26,21,0.65)",
                                                fontSize: "0.75rem",
                                                letterSpacing: "0.02em",
                                                fontWeight: 600
                                            },
                                            children: area.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KumaonMap.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KumaonMap.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KumaonMap.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, area.name, false, {
                            fileName: "[project]/src/components/KumaonMap.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KumaonMap.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KumaonMap.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = KumaonMap;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FitBounds");
__turbopack_context__.k.register(_c1, "RemoveAttrib");
__turbopack_context__.k.register(_c2, "KumaonMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/KumaonMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/KumaonMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_KumaonMap_tsx_0z4ty.u._.js.map