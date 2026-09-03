import { GatheringCard, type Gathering } from "./GatheringCard";

const GATHERINGS: Gathering[] = [
  {
    eyebrow: "Special Occasions",
    title: "Celebrations",
    description:
      "Cakes, pastry boxes and special occasions crafted to make your moments memorable.",
    ctaLabel: "Explore celebrations",
    imageAlt:
      "An elegant celebration layer cake decorated with fresh figs and seasonal florals, served on a rustic wooden table.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG2sVcUfrWku3dU8nsPKuM0En5OD2Nd6GWs7fC1Jf929G88TjcRIeOamnR9geJXoVm0dwjFmBEUoa7VYPWHvdF0TiUJ1n3BjmEw1qme_Y-z__Gekp6dMRxbpCBHe98uEqQXJQUGBRjh5ev0Frx0i7MqMYP4asYY-54EUK-NTDg2UtdxOnKewmYnNfd4I89RoWaOO-tVwqfWBf0F2W5Hf7jJMYxP67OUbbomb_p0IOp_ysOw0eemo3BsA",
  },
  {
    eyebrow: "Corporate & Teams",
    title: "Office & Events",
    description:
      "Breakfast meetings, team mornings and larger orders delivered fresh to your office.",
    ctaLabel: "View office menus",
    imageAlt:
      "A grand corporate breakfast meeting setup featuring tiered pastry platters, artisan sourdough sandwiches, and specialty coffee carafes.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAfO1Ug9lsBQhJc4dxao8qZoO_ueEGuws2s_z72miiVK3XzmVeY1S4UVpL6ezfKGtNtGRf2fzsGfW22f0YAbvwDuhMqbHppWZtrwFu2ka4iTxbn-831ZcgLuWSUazljFDhJVs3J609c-KyELoaUK7R0Nm9TocvA5mzu7hSdFHR5sUl7goXWoNpCbfpFZt7zEMp8AY0u_NOv4gqgbzCncDAknovbg9W_VNJX6sMfzMvw8vx6OslQgHwOA",
  },
];

export function GatheringsSection() {
  return (
    <section className="py-section-padding px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="text-label-md uppercase text-secondary font-bold tracking-widest">
            Gatherings
          </span>
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-on-surface mt-2">
            Baking for your moments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
          {GATHERINGS.map((gathering) => (
            <GatheringCard key={gathering.title} gathering={gathering} />
          ))}
        </div>
      </div>
    </section>
  );
}
