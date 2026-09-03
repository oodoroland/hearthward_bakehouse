import { Minus, Plus } from "lucide-react";
import type { BasketItem } from "./types";

export function BasketItemRow({
  item,
  onQuantityChange,
}: {
  item: BasketItem;
  onQuantityChange: (id: string, quantity: number) => void;
}) {
  const lineTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center justify-between p-space-md bg-surface rounded-xl shadow-sm">
      <div className="flex items-center gap-space-md">
        {/* TODO: replace with owned asset */}
        <img
          alt={item.imageAlt}
          src={item.imageSrc}
          className="w-16 h-16 rounded-lg object-cover shrink-0"
        />
        <div>
          <h3 className="font-headline text-headline-sm text-on-surface">
            {item.name}
          </h3>
          <p className="font-body text-body-sm text-on-surface-variant">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-space-lg">
        <div className="flex items-center border border-outline-variant rounded-lg overflow-hidden bg-surface-container">
          <button
            type="button"
            onClick={() =>
              onQuantityChange(item.id, Math.max(1, item.quantity - 1))
            }
            className="px-3 py-1 text-on-surface hover:bg-surface-container-highest transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="px-3 py-1 font-semibold text-on-surface">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="px-3 py-1 text-on-surface hover:bg-surface-container-highest transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
        <span className="font-headline text-headline-sm text-on-surface font-bold">
          £{lineTotal}
        </span>
      </div>
    </div>
  );
}
