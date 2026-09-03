import { Leaf } from "lucide-react";
import type { BasketItem } from "./types";

export function OrderSummarySidebar({ items }: { items: BasketItem[] }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md sticky top-32">
      <h3 className="font-headline text-headline-sm font-bold text-on-surface border-b border-outline-variant pb-space-sm">
        Order Summary
      </h3>

      <div className="flex flex-col gap-space-xs font-body text-body-md text-on-surface-variant">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span className="text-on-surface">
              £{(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-outline-variant pt-space-sm flex flex-col gap-space-2xs">
        <div className="flex justify-between font-body text-body-sm text-on-surface-variant">
          <span>Subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-body text-body-sm text-on-surface-variant">
          <span>Packaging &amp; Craft Tax</span>
          <span>Included</span>
        </div>
        <div className="flex justify-between font-headline text-headline-sm font-bold text-on-surface pt-space-2xs">
          <span>Total Due</span>
          <span className="text-primary">£{subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="bg-surface p-space-sm rounded-lg flex items-center gap-space-sm mt-space-xs">
        <Leaf className="text-primary" size={20} />
        <span className="font-body text-body-sm text-on-surface-variant">
          Organic stone-ground flours exclusively sourced from regional
          heritage mills.
        </span>
      </div>
    </div>
  );
}
