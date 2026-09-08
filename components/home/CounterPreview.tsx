import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard, type Product } from "./ProductCard";

const PRODUCTS: Product[] = [
  {
    category: "Signature Loaf",
    name: "Country Sourdough",
    description:
      "36-hour slow fermented organic wheat with a custard-like crumb and crackling caramelized crust.",
    price: "£6.50",
    badgeLabel: "4 left in batch",
    badgeTone: "emerald",
    imageAlt:
      "A round artisan country sourdough loaf with a beautifully scored blistered dark crust resting on a rustic wooden board with a dusting of flour.",
    imageSrc:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "Reserve Loaf",
  },
  {
    category: "Viennoiserie",
    name: "Almond Croissant",
    description:
      "Laminated pure butter pastry filled with rich almond frangipane and toasted flakes.",
    price: "£4.20",
    badgeLabel: "Fresh batch",
    badgeTone: "emerald",
    imageAlt:
      "Flaky golden double-baked almond croissant sprinkled with sliced almonds and powdered sugar, resting on parchment paper.",
    imageSrc:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "Reserve Pastry",
  },
  {
    category: "Sweet Treat",
    name: "Cinnamon Bun",
    description:
      "Soft brioche dough swirled with Ceylon cinnamon and finished with tangy cream cheese icing.",
    price: "£3.80",
    badgeLabel: "Selling fast",
    badgeTone: "amber",
    imageAlt:
      "Warm sticky cinnamon roll topped with cream cheese glaze, showing soft spirals of dark cinnamon sugar filling.",
    imageSrc:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80",
    ctaLabel: "Reserve Bun",
  },
];

export function CounterPreview() {
  return (
    <section className="py-section-padding px-6 lg:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
          <div>
            <span className="text-label-md uppercase text-secondary font-bold tracking-widest">
              Fresh Today
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-on-surface mt-2">
              Today&apos;s Counter Preview
            </h2>
          </div>
          <Link
            href="/todays-counter"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-label-md uppercase tracking-wider text-primary hover:text-on-surface transition-colors group"
          >
            <span>View today&apos;s full counter</span>
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
