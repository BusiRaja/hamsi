import Image from "next/image";
import { Bell, Menu } from "lucide-react";
import Particles from "@/components/Particles";
import Butterfly from "@/components/Butterfly";
import Countdown from "@/components/Countdown";
import VideoPlayer from "@/components/VideoPlayer";
import SignupForm from "@/components/SignupForm";
import Highlights from "@/components/Highlights";

const Ig = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>;
const Yt = (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8ZM10 15V9l5.2 3Z" /></svg>;
const Fb = (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M14 8V6.5c0-.7.2-1 1.1-1H17V2h-2.8C11 2 10 3.8 10 6v2H7.5v3.5H10V22h4V11.5h2.8L17.3 8Z" /></svg>;

const social = [
  [Ig, process.env.NEXT_PUBLIC_INSTAGRAM || "#", "Instagram"],
  [Yt, process.env.NEXT_PUBLIC_YOUTUBE || "#", "YouTube"],
  [Fb, process.env.NEXT_PUBLIC_FACEBOOK || "#", "Facebook"],
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center relative isolate overflow-hidden bg-wine pb-14 min-h-[75vh]">
        {/* Bridal model background — on mobile she sits on top and fades into wine */}
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero.png" alt="Bride in a maroon and gold embroidered lehenga" fill priority sizes="100vw"
            className="kenburns object-cover object-left lg:object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-wine/10 via-wine/70 to-wine lg:bg-gradient-to-r lg:from-transparent lg:via-wine/35 lg:to-wine/60" />
        </div>
        <Particles />
        <Butterfly className="absolute right-[6%] top-[22%] z-[6] h-20 w-20 lg:right-[10%] lg:top-[18%] lg:h-32 lg:w-32" /> 

        <div className="flex flex-col justify-center min-h-[75vh] relative z-10 mx-auto max-w-7xl px-5 pt-6 lg:pl-[34%] py-5">
          <div className="rise text-center [animation-delay:.2s]">
            <p className="text-3xl italic sm:text-4xl pb-3">Our Online Store is</p>
            <h1 className="gold-text font-script text-6xl leading-[1.15] sm:text-7xl lg:text-8xl">Coming Soon</h1>
            <p className="mx-auto mt-2 max-w-xl text-lg italic text-cream/95 sm:text-xl">A Curated World of Handloom, Designer &amp; Custom-Made Fashion for Women and Kids</p>
            <div className="mx-auto mt-3 flex items-center justify-center gap-2 text-gold"><span className="h-px w-24 bg-gold/70" />❖<span className="h-px w-24 bg-gold/70" /></div>
          </div>
          <div id="notify" className="rise space-y-6 [animation-delay:.8s]"><Countdown /> </div>
        </div>
      </main>
      <Highlights />
    </>
  );
}
