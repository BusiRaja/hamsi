"use client";
import { useEffect, useRef } from "react";

// Glowing golden dust drifting upward over the hero.
export default function Particles({ count = 70 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current, ctx = c.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w, h, raf;
    const resize = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize(); addEventListener("resize", resize);
    const ps = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2.2 + .4, vy: Math.random() * .35 + .08, vx: (Math.random() - .5) * .15, p: Math.random() * 6.28 }));
    const tick = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.vy; p.x += p.vx + Math.sin(t / 2000 + p.p) * .12;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        const a = .35 + .45 * Math.sin(t / 700 + p.p);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, `rgba(255,236,170,${a})`); g.addColorStop(1, "rgba(255,200,90,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 6, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [count]);
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 z-[5] h-full w-full bg-black/35" aria-hidden />;
}
