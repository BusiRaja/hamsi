"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// Drop your file at /public/videos/embroidery.mp4 — the poster shows until it plays.
export default function VideoPlayer({ src = "/videos/embroidery.mp4", poster = "/images/hero.png" }) {
  const v = useRef(null), box = useRef(null);
  const [playing, setPlaying] = useState(false), [muted, setMuted] = useState(false);
  const [cur, setCur] = useState(0), [dur, setDur] = useState(0), [started, setStarted] = useState(false);
  const toggle = () => { const el = v.current; if (el.paused) { el.play(); setStarted(true); } else el.pause(); };
  return (
    <div ref={box} className="gold-border group relative aspect-video w-full overflow-hidden rounded-3xl bg-wine-deep shadow-[0_0_50px_rgba(217,169,79,.25)]">
      {!started && <Image src={poster} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="scale-[2.2] object-cover object-[70%_60%]" />}
      <video ref={v} src={src} playsInline preload="metadata" muted={muted} className={`h-full w-full object-cover ${started ? "" : "opacity-0"}`}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)} onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <button onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}
        className={`absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-cream/90 bg-black/30 backdrop-blur transition hover:scale-110 sm:h-20 sm:w-20 ${playing ? "opacity-0 group-hover:opacity-100" : ""}`}>
        {playing ? <Pause className="h-7 w-7 fill-cream" /> : <Play className="ml-1 h-8 w-8 fill-cream" />}
      </button>
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 pb-3 font-body text-xs text-cream">
        <button onClick={toggle} aria-label="Toggle play">{playing ? <Pause className="h-4 w-4 fill-cream" /> : <Play className="h-4 w-4 fill-cream" />}</button>
        <span className="tabular-nums">{fmt(cur)} / {fmt(dur || 40)}</span>
        <input type="range" min="0" max={dur || 40} step=".1" value={cur} aria-label="Seek" onChange={(e) => { v.current.currentTime = +e.target.value; }} className="h-1 flex-1 accent-[#d9a94f]" />
        <button onClick={() => setMuted(!muted)} aria-label="Mute">{muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}</button>
        <button onClick={() => box.current.requestFullscreen?.()} aria-label="Fullscreen"><Maximize className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
