export default function Butterfly({ className = "" }) {
  const upper = "M50 50 C 30 10, 0 8, 6 36 C 10 56, 34 62, 50 52 Z";
  const lower = "M50 52 C 34 62, 14 78, 28 90 C 42 98, 50 70, 50 52 Z";
  const paint = { fill: "url(#bf)", fillOpacity: ".88", stroke: "#fff3c4", strokeWidth: ".6" };
  return (
    <div className={`butterfly pointer-events-none ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="shimmer h-full w-full overflow-visible">
        <defs>
          <linearGradient id="bf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff3c4" /><stop offset=".5" stopColor="#e9bd62" /><stop offset="1" stopColor="#b8812c" />
          </linearGradient>
        </defs>
        <g className="wing" {...paint}><path d={upper} /><path d={lower} /></g>
        <g transform="translate(100 0) scale(-1 1)"><g className="wing" {...paint}><path d={upper} /><path d={lower} /></g></g>
        <ellipse cx="50" cy="54" rx="1.8" ry="14" fill="#7a4a10" />
        <path d="M50 40 C 46 28, 42 24, 38 22 M50 40 C 54 28, 58 24, 62 22" stroke="#e9bd62" strokeWidth=".8" fill="none" />
      </svg>
    </div>
  );
}
