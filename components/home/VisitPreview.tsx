import { Navigation, Phone } from "lucide-react";
import { MapEmbed } from "@/components/shared/MapEmbed";

export function VisitPreview() {
  return (
    <section className="py-section-padding px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
          <span className="text-label-md uppercase text-secondary font-bold tracking-widest">
            Find Us
          </span>
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-on-surface">
            Come by the bakery
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            We&apos;re tucked away in the corner of the old market square.
            Drop in for a warm loaf or stay for a flat white and pastry on
            the bench.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md w-full pt-2">
            <div className="bg-surface-container-low p-space-md rounded-2xl">
              <h4 className="font-headline text-headline-sm font-bold text-on-surface mb-1">
                Hours
              </h4>
              <p className="font-body text-body-sm text-on-surface-variant">
                Wed – Sun: 7:30 AM – 4:00 PM
              </p>
              <p className="font-body text-body-sm text-on-surface-variant">
                Mon – Tue: Resting / Baking prep
              </p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-2xl">
              <h4 className="font-headline text-headline-sm font-bold text-on-surface mb-1">
                Location
              </h4>
              <p className="font-body text-body-sm text-on-surface-variant">
                14 Baker Street, Market Quarter
              </p>
              <p className="font-body text-body-sm text-on-surface-variant">
                Free street parking available
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-md py-space-xs rounded-xl text-label-md uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <Navigation size={16} />
              <span>Get directions</span>
            </a>
            <a
              href="tel:5550192834"
              className="border border-outline hover:border-on-surface text-on-surface px-space-md py-space-xs rounded-xl text-label-md uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call the bakery</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <MapEmbed heightClassName="h-[400px]" />
        </div>
      </div>
    </section>
  );
}
