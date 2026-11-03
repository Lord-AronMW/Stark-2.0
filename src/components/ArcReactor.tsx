import './ArcReactor.css';

const SPOKE_ANGLES = Array.from({ length: 12 }, (_, i) => i * 30);

export function ArcReactor() {
  return (
    <svg className="arc-reactor" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="arc-reactor-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ecf9ff" />
          <stop offset="45%" stopColor="#9fd9f6" />
          <stop offset="100%" stopColor="#1a6fa8" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="#c8a26b" strokeWidth="0.8" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="#c8a26b" strokeWidth="1" />
      {SPOKE_ANGLES.map((angle) => (
        <rect
          key={angle}
          x="92"
          y="18"
          width="16"
          height="30"
          fill="#c8a26b"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="46" fill="none" stroke="rgba(200, 162, 107, 0.5)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="36" fill="none" stroke="rgba(159, 217, 246, 0.5)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="26" fill="url(#arc-reactor-core)" />
      <circle cx="100" cy="100" r="14" fill="#ecf9ff" />
    </svg>
  );
}
