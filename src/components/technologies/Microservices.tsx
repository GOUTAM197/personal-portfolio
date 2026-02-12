export default function Microservices() {
  return (
    <svg viewBox="0 0 128 128">
      {/* Central Orchestration Node */}
      <circle cx="64" cy="64" r="14" fill="#007acc" />
      
      {/* Interconnected Independent Services */}
      <g stroke="#007acc" strokeWidth="4">
        <line x1="64" y1="64" x2="64" y2="28" />
        <line x1="64" y1="64" x2="98" y2="82" />
        <line x1="64" y1="64" x2="30" y2="82" />
      </g>

      {/* Service Nodes (Hexagons/Circles) */}
      <circle cx="64" cy="22" r="10" fill="#6DB33F" /> {/* Service A */}
      <circle cx="104" cy="88" r="10" fill="#ea2d2e" /> {/* Service B */}
      <circle cx="24" cy="88" r="10" fill="#F29111" />  {/* Service C */}

      {/* Connection Paths to signify Mesh/Communication */}
      <path 
        d="M64 32 Q 100 40 104 78" 
        fill="none" 
        stroke="#59666C" 
        strokeWidth="2" 
        strokeDasharray="4 2" 
      />
      <path 
        d="M24 78 Q 30 40 64 32" 
        fill="none" 
        stroke="#59666C" 
        strokeWidth="2" 
        strokeDasharray="4 2" 
      />
    </svg>
  );
}
