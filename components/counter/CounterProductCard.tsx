import { CalendarX, Plus } from "lucide-react";
import type { CounterProduct } from "./products";

const BADGE_TONE_CLASSES: Record<
  NonNullable<CounterProduct["cornerBadge"]>["tone"],
  string
> = {
  secondary: "bg-secondary text-on-secondary",
  primary: "bg-primary text-on-primary",
  "secondary-container": "bg-secondary-container text-on-secondary-container",
};

const STATUS_DOT_CLASSES: Record<CounterProduct["status"], string> = {
  available: "bg-emerald-600",
  "selling-fast": "bg-amber-600",
  "sold-out": "",
};

const STATUS_TEXT_CLASSES: Record<CounterProduct["status"], string> = {
  available: "text-emerald-700",
  "selling-fast": "text-amber-700",
  "sold-out": "text-error",
};

export function CounterProductCard({
  product,
  onSelect,
}: {
  product: CounterProduct;
  onSelect: (product: CounterProduct) => void;
}) {
  const isSoldOut = product.status === "sold-out";

  return (
    <div
      className={
        isSoldOut
          ? "group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm opacity-80 relative"
          : "group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative"
      }
    >
      <div
        className={
          isSoldOut
            ? "relative h-64 w-full overflow-hidden bg-surface-container grayscale"
            : "relative h-64 w-full overflow-hidden bg-surface-container cursor-pointer"
        }
        onClick={isSoldOut ? undefined : () => onSelect(product)}
      >
        {/* TODO: replace with owned asset */}
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isSoldOut ? (
          <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-xl text-label-md uppercase tracking-wider font-bold shadow-lg">
              Sold out today
            </span>
          </div>
        ) : (
          product.cornerBadge && (
            <div
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-label-md uppercase tracking-wider font-bold ${BADGE_TONE_CLASSES[product.cornerBadge.tone]}`}
            >
              {product.cornerBadge.label}
            </div>
          )
        )}
      </div>

      <div className="p-space-md flex flex-col flex-grow justify-between gap-space-md">
        <div className="flex flex-col gap-space-3xs">
          <div className="flex justify-between items-baseline">
            <h3
              className={
                isSoldOut
                  ? "font-headline text-headline-md text-on-surface line-through opacity-70"
                  : "font-headline text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer"
              }
              onClick={isSoldOut ? undefined : () => onSelect(product)}
            >
              {product.name}
            </h3>
            <span
              className={`font-headline text-headline-md font-bold ${isSoldOut ? "text-on-surface-variant" : "text-secondary"}`}
            >
              {product.price}
            </span>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between pt-space-2xs">
          <span
            className={`text-label-md font-bold uppercase tracking-wider flex items-center gap-1 ${STATUS_TEXT_CLASSES[product.status]}`}
          >
            {isSoldOut ? (
              <CalendarX size={14} />
            ) : (
              <span
                className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT_CLASSES[product.status]}`}
              />
            )}
            {product.statusLabel}
          </span>

          {isSoldOut ? (
            <button
              type="button"
              disabled
              className="bg-surface-container-highest text-on-surface-variant/50 px-space-sm py-space-2xs rounded-xl text-label-md uppercase tracking-wider cursor-not-allowed"
            >
              Sold out
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-sm py-space-2xs rounded-xl text-label-md uppercase tracking-wider transition-colors flex items-center gap-1"
            >
              <Plus size={16} />
              {product.ctaLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
