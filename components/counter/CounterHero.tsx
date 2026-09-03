import { Croissant } from "lucide-react";

function todayLabel() {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const month = now.toLocaleDateString("en-US", { month: "long" });
  return `${weekday} · ${month} ${now.getDate()}`;
}

export function CounterHero() {
  return (
    <section className="w-full px-6 lg:px-12 pt-space-xl pb-space-lg max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="flex flex-col gap-space-2xs">
        <div className="flex items-center gap-space-xs text-secondary text-label-md uppercase tracking-wider">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping" />
          <span>{todayLabel()}</span>
        </div>
        <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-on-surface">
          Today&apos;s Counter
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
          Baked this morning in small batches. Once they are gone, they are
          gone until tomorrow.
        </p>
      </div>

      <div className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-xs rounded-xl self-start md:self-auto shadow-sm">
        <Croissant className="text-secondary" size={24} />
        <div className="flex flex-col">
          <span className="text-label-md text-on-surface font-bold uppercase tracking-wider">
            Oven Status
          </span>
          <span className="font-body text-body-sm text-on-surface-variant">
            Batch 3 of 4 currently cooling
          </span>
        </div>
      </div>
    </section>
  );
}
