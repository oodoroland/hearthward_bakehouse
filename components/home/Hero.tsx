import Link from "next/link";

const STATS = [
  { value: "100%", label: "Wild Ferment" },
  { value: "04:00", label: "Daily Bake Time" },
  { value: "Local", label: "Organic Grains" },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-24 px-6 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-secondary-fixed/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
          <div className="inline-flex items-center gap-space-2xs bg-surface-container-high px-space-sm py-space-3xs rounded-full border border-outline-variant/30 text-on-surface-variant text-label-md">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-semibold text-on-surface">
              OPEN TODAY · UNTIL 4:00 PM
            </span>
            <span className="text-outline mx-1">·</span>
            <span>Next collection: 10:30–11:00</span>
          </div>

          <h1 className="font-headline text-headline-xl-mobile lg:text-headline-xl text-on-surface tracking-tight">
            Fresh from the oven. <br />
            <span className="italic font-normal text-primary">
              Ready when you are.
            </span>
          </h1>

          <p className="font-body text-body-lg text-on-surface-variant w-full">
            Sourdough, pastries and good coffee, baked in small batches every
            morning.
          </p>

          <div className="flex flex-wrap items-center gap-space-sm pt-space-2xs">
            <Link
              href="/todays-counter"
              className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-lg py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              See today&apos;s counter
            </Link>
            <Link
              href="/pre-order"
              className="border border-outline hover:border-on-surface text-on-surface px-space-lg py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-all duration-200"
            >
              Pre-order for collection
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-space-md pt-space-lg w-full border-t border-outline-variant/20 mt-space-sm">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-headline text-headline-md font-bold text-primary">
                  {stat.value}
                </div>
                <div className="font-body text-body-sm text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-surface-container-high">
            {/* TODO: replace with owned asset */}
            <img
              alt="A rustic artisan bakery counter laden with freshly baked artisan sourdough loaves, golden croissants dusted with powdered sugar, and warm cinnamon buns under soft morning light."
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwyEQuUljH07Jqeeswwj_fCA2PeNTSd9JtSgWBYGY9Z8R26yehXTMnZGY6Ylwbw1Ss_CBzjPKtvkrnwYBHTK-PiYuI_jMQ-F5VN8zJ5pwnqtxIliYOCqaN3rhnzuJaNJe-u9yfv-UL-k5BDuTxuFW-Uu0D6xJr4Bg46K7pf17cEYoK4UOZYYbOS_7KRlNkt7HHO8K_zqEO6xceKns1-Pz0XXQLBbVHKjlYoYceV5v35Wmx_FgfTbmlzQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-on-primary">
              <span className="bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-label-md uppercase tracking-widest">
                Morning Batch #01
              </span>
              <p className="font-headline text-headline-sm mt-2 text-white">
                Country Sourdough just pulled from the hearth deck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
