import { Info } from "lucide-react";

export function StatusBanner() {
  return (
    <section className="w-full bg-surface-container-high py-space-xl px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
            <Info size={24} />
          </div>
          <div className="flex flex-col">
            <h4 className="font-headline text-headline-sm text-on-surface font-bold">
              Closed Sunday &amp; Monday
            </h4>
            <p className="font-body text-body-sm text-on-surface-variant">
              Our bakers rest and prep fresh sourdough starters for the
              upcoming week. Pre-orders for Wednesday pickup open Tuesday
              morning.
            </p>
          </div>
        </div>

        <a
          href="#"
          className="bg-primary text-on-primary px-space-md py-space-xs rounded-xl text-label-md uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors whitespace-nowrap"
        >
          View Weekly Schedule
        </a>
      </div>
    </section>
  );
}
