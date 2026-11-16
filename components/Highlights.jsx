import { Gem, Shirt, Scissors, Crown, Truck } from "lucide-react";
const items = [[Gem, "Exclusive Designs"], [Shirt, "Handloom Heritage"], [Scissors, "Custom Tailoring"], [Crown, "Limited Editions"], [Truck, "Pan India Delivery"]];

export default function Highlights() {
  return (
    <section aria-label="Collection highlights" className="relative z-10 -mt-8 bg-cream pb-8 pt-9 text-maroon shadow-[0_-8px_40px_rgba(217,169,79,.35)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-4 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-gold/40">
        {items.map(([Icon, label]) => (
          <li key={label} className="flex flex-col items-center gap-2 px-2 text-center">
            <Icon className="h-9 w-9 stroke-[1.2]" />
            <span className="text-lg font-semibold sm:text-xl">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
