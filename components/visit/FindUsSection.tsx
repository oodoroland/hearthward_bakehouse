import { MapPin, Navigation, SquareParking } from "lucide-react";
import { MapEmbed } from "@/components/shared/MapEmbed";

const INFO_ITEMS = [
  {
    icon: MapPin,
    title: "Address",
    description: "14 Baker Street, Market Quarter",
  },
  {
    icon: SquareParking,
    title: "Parking Information",
    description:
      "Free street parking available directly outside for 30 minutes for quick pickups.",
  },
];

export function FindUsSection() {
  return (
    <section
      id="find-us"
      className="w-full bg-surface-container-low py-section-padding px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="text-label-md uppercase tracking-wider text-primary font-semibold">
            Location &amp; Directions
          </div>
          <h2 className="font-headline text-headline-lg font-bold text-on-surface">
            Find your way to the warmth.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Located in the heart of Market Quarter, our doors open every
            Wednesday through Sunday at dawn. Stop by for your morning loaf
            or stay for a pour-over coffee.
          </p>

          <div className="bg-surface p-6 rounded-2xl shadow-sm flex flex-col gap-4 mt-2">
            {INFO_ITEMS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-headline text-headline-sm font-bold text-on-surface">
                    {title}
                  </div>
                  <div className="font-body text-body-md text-on-surface-variant">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-6 py-3 rounded-xl text-label-md uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Navigation size={18} />
              Get directions
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <MapEmbed heightClassName="h-[450px]" />
          <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-label-md font-medium text-on-surface">
            Market Quarter Map View
          </div>
        </div>
      </div>
    </section>
  );
}
