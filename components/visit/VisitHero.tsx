import { MapPin, Phone } from "lucide-react";

export function VisitHero() {
  return (
    <section className="relative px-6 lg:px-12 pt-16 pb-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full w-fit">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-label-md text-on-surface font-medium uppercase tracking-wider">
            OPEN NOW · Today · 7:30 AM – 4:00 PM
          </span>
        </div>

        <h1 className="font-headline text-headline-xl text-on-surface font-bold tracking-tight">
          Come by.
        </h1>

        <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
          Fresh bread, coffee and pastries in the neighbourhood. We bake
          daily from local grains with traditional hearth techniques.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#find-us"
            className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-6 py-3 rounded-xl text-label-md uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <MapPin size={18} />
            Find Us &amp; Map
          </a>
          <a
            href="tel:5550192834"
            className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-6 py-3 rounded-xl text-label-md uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <Phone size={18} />
            Call the bakery
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container">
          {/* TODO: replace with owned asset */}
          <img
            alt="A warm, sunlit bakery storefront with gold-lettered signage and large glass windows, seen from the street."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEUGS-TzudN3y9iG6ku6lvVwwNMOI_19RvzZOV6_HxZet9-kQShRR9qM&s=10"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md shadow-lg">
            <div className="text-label-md uppercase tracking-wider text-on-surface-variant">
              Location Highlight
            </div>
            <div className="font-headline text-headline-sm font-bold text-on-surface mt-1">
              14 Baker Street, Market Quarter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
