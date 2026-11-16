"use client";
import { useEffect, useState } from "react";

const TARGET = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE || "2026-12-16T10:00:00+05:30").getTime();
const units = ["Days", "Hours", "Minutes", "Seconds"];

export default function Countdown() {
  const [t, setT] = useState(null); // null until mounted → no hydration mismatch
  useEffect(() => {
    const tick = () => {
      const d = Math.max(0, TARGET - Date.now());
      setT({ Days: Math.floor(d / 864e5), Hours: Math.floor(d / 36e5) % 24, Minutes: Math.floor(d / 6e4) % 60, Seconds: Math.floor(d / 1e3) % 60 });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return (
    <div className="text-center" role="timer" aria-label="Time until launch">
      <p className="mb-3 flex items-center justify-center gap-3 text-xl italic text-gold-light sm:text-2xl">
        <span className="h-px w-8 bg-gold/70" />Launching In<span className="h-px w-8 bg-gold/70" />
      </p>
      <div className="flex justify-center gap-2 sm:gap-3">
        {units.map((u) => (
          <div key={u} className="gold-border glass flex w-[4.2rem] flex-col items-center rounded-2xl py-2 sm:w-[4.6rem]">
            <span className="gold-text text-3xl font-semibold tabular-nums sm:text-4xl">{t ? String(t[u]).padStart(2, "0") : "--"}</span>
            <span className="font-body text-[.7rem] tracking-wide text-cream/85 sm:text-xs">{u}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
