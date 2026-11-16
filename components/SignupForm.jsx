"use client";
import { useState } from "react";
import { Mail, ArrowRight, MessageCircle } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";

export default function SignupForm() {
  const [email, setEmail] = useState(""), [state, setState] = useState("idle"), [msg, setMsg] = useState("");
  async function submit(e) {
    e.preventDefault(); setState("loading");
    try {
      const r = await fetch("/api/notify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Something went wrong");
      setState("done"); setMsg("You're on the list — we'll write to you before launch ✨"); setEmail("");
    } catch (err) { setState("error"); setMsg(err.message); }
  }
  return (
    <div className="text-center">
      <h2 className="text-2xl italic text-gold-light sm:text-3xl">Be Part of Our Beginning</h2>
      <p className="mx-auto mt-1 max-w-xs font-body text-sm text-cream/90">Get early access, launch offers &amp; exclusive collections.</p>
      <form onSubmit={submit} className="mx-auto mt-4 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2">
        <label className="gold-border flex flex-1 items-center gap-2 rounded-full bg-black/20 px-4 py-3">
          <Mail className="h-4 w-4 shrink-0 text-gold" />
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address"
            className="w-full bg-transparent font-body text-sm text-cream outline-none placeholder:text-cream/60" />
        </label>
        <button disabled={state === "loading"} className="gold-btn flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base disabled:opacity-60">
          {state === "loading" ? "Sending…" : "Notify Me"} <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      <p role="status" className={`mt-2 min-h-5 font-body text-xs ${state === "error" ? "text-red-300" : "text-gold-light"}`}>{msg}</p>
      <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi House of Hamsi! Please add me to your launch alerts.")}`} target="_blank" rel="noopener noreferrer"
        className="gold-border mt-1 inline-flex items-center gap-2 rounded-full bg-black/20 px-6 py-3 font-body text-sm transition hover:bg-gold/15">
        <MessageCircle className="h-5 w-5 text-green-400" /> Join Our WhatsApp Alerts
      </a>
    </div>
  );
}
