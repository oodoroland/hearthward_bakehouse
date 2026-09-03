import Link from "next/link";

export type Product = {
  category: string;
  name: string;
  description: string;
  price: string;
  badgeLabel: string;
  badgeTone: "emerald" | "amber";
  imageAlt: string;
  imageSrc: string;
  ctaLabel: string;
};

const BADGE_TONE_CLASSES: Record<Product["badgeTone"], string> = {
  emerald: "text-emerald-700 bg-emerald-50",
  amber: "text-amber-700 bg-amber-50",
};

export function ProductCard({ product }: { product: Product }) {
  const {
    category,
    name,
    description,
    price,
    badgeLabel,
    badgeTone,
    imageAlt,
    imageSrc,
    ctaLabel,
  } = product;

  return (
    <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="relative aspect-[4/3] bg-surface-container">
        {/* TODO: replace with owned asset */}
        <img
          alt={imageAlt}
          src={imageSrc}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-label-md font-bold text-on-surface">
          {price}
        </div>
      </div>

      <div className="p-space-md flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-label-md text-secondary uppercase font-semibold">
              {category}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${BADGE_TONE_CLASSES[badgeTone]}`}
            >
              {badgeLabel}
            </span>
          </div>
          <h3 className="font-headline text-headline-md text-on-surface">
            {name}
          </h3>
          <p className="font-body text-body-sm text-on-surface-variant mt-2">
            {description}
          </p>
        </div>

        <Link
          href="/pre-order"
          className="mt-space-md w-full py-2.5 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface rounded-xl text-center text-label-md uppercase tracking-wider transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
