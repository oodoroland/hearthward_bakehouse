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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv2YwvD1PMKiQ_NsYjDS7inYp7f8j3rSdcHETcnGtdDI0v0dtdJ88WcXY3isQFtOs02Di-vcidulGWGJSzs3HYmq20EpSaZTgFpcb2BCeTGZf4HgbtqHFJhGnRDFqUN2mzTSXVDPO4pRRwYynLmNLFvGUJfalpsaJ_KQgStyZ1j0nLflniU_RFhzcCkzQ8VMrqTfyBLauuAD_XJfR8E_WPvvegN3tKWDdbJrupzJSz2kfhGHIC9kMTbA",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqkOWD3qTtqpANnehaAt0cuBXjHV2zjx0H75kXLAxKm16aejKtHQ6_1EVT9ukSIG7rwoYm0AsJT2-j0nIQ1MBlj51-vtxMnPXKJKl7VuDfZSA9zDU9OQJ8v89UNHpZLAWaMaguRkCYG5l0ybTGMME9dTMOIhHv91pIKbH78rlj2W9oGmYK_wXftl556Gy_S7PXleK3PK7DdnHToisKcDu15ZcF-xeFrU6gsRPUNQ6pqcbVK8IT4ghqUQ",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgpclilmm8PIXM2-GZo4SFQoCACCjwgbfqnI0iSqEiKTNUqnzLq8XDjkBl-GBIRPBNIBpNTpFvLb-enkZUB2Pd1OXOsDOncjYiC1xVqc8CGjB1lXls7PVfvSJz6CP1w10i4B9_PsPhSgI-1xCKgo6JJX1oG-eIr28Y6N_PncpC7GlKejxZOJVL6QmkRSgP6q72PS5_LGGHxtB6a8H2a7Q7uWwLXnNtLDWVpNPH7XZZv7kWWAHWfpcp7A",
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
