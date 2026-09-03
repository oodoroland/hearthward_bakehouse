import { ArrowRight } from "lucide-react";
import { BasketItemRow } from "./BasketItemRow";
import type { BasketItem } from "./types";

export function BasketPanel({
  items,
  onQuantityChange,
  onProceed,
}: {
  items: BasketItem[];
  onQuantityChange: (id: string, quantity: number) => void;
  onProceed: () => void;
}) {
  return (
    <div className="bg-surface-container-low p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-headline text-headline-md text-on-surface">
          Your Artisan Selection
        </h2>
        <span className="text-label-md bg-surface-container-highest px-space-xs py-space-3xs rounded-full">
          {items.length} Items
        </span>
      </div>

      <div className="flex flex-col gap-space-md">
        {items.map((item) => (
          <BasketItemRow
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>

      <div className="flex justify-end pt-space-md">
        <button
          type="button"
          disabled={items.length === 0}
          onClick={onProceed}
          className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-container disabled:hover:text-on-primary-container px-space-xl py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors flex items-center gap-2"
        >
          <span>Proceed to Collection Slot</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
