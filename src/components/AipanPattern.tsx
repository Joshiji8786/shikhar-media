/* ── Richer AipanPattern with more linework ── */
export const AipanPattern = ({
  className = "",
  color = "#C4522A",
  opacity = 0.12,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g fill="none" stroke={color} strokeWidth="0.8" opacity={opacity}>
      {/* Concentric circles */}
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="58" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="22" />
      <circle cx="100" cy="100" r="8" fill={color} fillOpacity={opacity * 1.5} stroke="none" />

      {/* Cross & diagonals */}
      <line x1="10" y1="100" x2="190" y2="100" />
      <line x1="100" y1="10" x2="100" y2="190" />
      <line x1="36" y1="36" x2="164" y2="164" />
      <line x1="164" y1="36" x2="36" y2="164" />

      {/* Cardinal lotus petals */}
      <path d="M100,10 C115,45 115,65 100,75 C85,65 85,45 100,10" />
      <path d="M100,190 C115,155 115,135 100,125 C85,135 85,155 100,190" />
      <path d="M10,100 C45,115 65,115 75,100 C65,85 45,85 10,100" />
      <path d="M190,100 C155,115 135,115 125,100 C135,85 155,85 190,100" />

      {/* Diagonal petals */}
      <path d="M36,36 C62,62 68,78 60,88 C50,80 44,64 36,36" />
      <path d="M164,36 C138,62 132,78 140,88 C150,80 156,64 164,36" />
      <path d="M36,164 C62,138 68,122 60,112 C50,120 44,136 36,164" />
      <path d="M164,164 C138,138 132,122 140,112 C150,120 156,136 164,164" />

      {/* Inner petal ring */}
      <path d="M100,42 C108,58 108,68 100,75 C92,68 92,58 100,42" />
      <path d="M100,158 C108,142 108,132 100,125 C92,132 92,142 100,158" />
      <path d="M42,100 C58,108 68,108 75,100 C68,92 58,92 42,100" />
      <path d="M158,100 C142,108 132,108 125,100 C132,92 142,92 158,100" />

      {/* Dot ring */}
      <circle cx="100" cy="28" r="3" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="100" cy="172" r="3" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="28" cy="100" r="3" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="172" cy="100" r="3" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="56" cy="56" r="2.5" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="144" cy="56" r="2.5" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="56" cy="144" r="2.5" fill={color} fillOpacity={opacity * 2} stroke="none" />
      <circle cx="144" cy="144" r="2.5" fill={color} fillOpacity={opacity * 2} stroke="none" />

      {/* Outer corner flourishes */}
      <path d="M10,10 Q30,25 25,40" strokeWidth="0.6" />
      <path d="M190,10 Q170,25 175,40" strokeWidth="0.6" />
      <path d="M10,190 Q30,175 25,160" strokeWidth="0.6" />
      <path d="M190,190 Q170,175 175,160" strokeWidth="0.6" />

      {/* Fine tick marks on outermost circle */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 100 + 88 * Math.cos(angle);
        const y1 = 100 + 88 * Math.sin(angle);
        const x2 = 100 + 92 * Math.cos(angle);
        const y2 = 100 + 92 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.6" />;
      })}
    </g>
  </svg>
);

/* ── Richer AipanBorderPattern ── */
export const AipanBorderPattern = ({ color = "#C4522A", opacity = 0.4 }: { color?: string; opacity?: number }) => (
  <svg
    viewBox="0 0 800 60"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    style={{ width: "100%", display: "block" }}
  >
    <g fill="none" stroke={color} strokeWidth="0.8" opacity={opacity}>
      {/* Horizontal baseline */}
      <line x1="0" y1="30" x2="800" y2="30" strokeWidth="0.4" opacity="0.4" />

      {[0, 80, 160, 240, 320, 400, 480, 560, 640, 720].map((x) => (
        <g key={x} transform={`translate(${x + 40}, 30)`}>
          {/* Mandala motif */}
          <circle cx="0" cy="0" r="14" />
          <circle cx="0" cy="0" r="9" />
          <circle cx="0" cy="0" r="3" fill={color} fillOpacity={opacity} stroke="none" />
          <line x1="-14" y1="0" x2="14" y2="0" />
          <line x1="0" y1="-14" x2="0" y2="14" />
          <line x1="-10" y1="-10" x2="10" y2="10" />
          <line x1="10" y1="-10" x2="-10" y2="10" />
          {/* Petal tips */}
          <path d="M0,-14 C3,-10 3,-7 0,-5 C-3,-7 -3,-10 0,-14" />
          <path d="M0,14 C3,10 3,7 0,5 C-3,7 -3,10 0,14" />
          <path d="M-14,0 C-10,3 -7,3 -5,0 C-7,-3 -10,-3 -14,0" />
          <path d="M14,0 C10,3 7,3 5,0 C7,-3 10,-3 14,0" />
          {/* Dots */}
          <circle cx="0" cy="-14" r="1.5" fill={color} fillOpacity={opacity * 1.5} stroke="none" />
          <circle cx="0" cy="14" r="1.5" fill={color} fillOpacity={opacity * 1.5} stroke="none" />
          <circle cx="-14" cy="0" r="1.5" fill={color} fillOpacity={opacity * 1.5} stroke="none" />
          <circle cx="14" cy="0" r="1.5" fill={color} fillOpacity={opacity * 1.5} stroke="none" />
        </g>
      ))}
    </g>
  </svg>
);
