"use client";

import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import type { CounterProduct } from "./products";

export function ProductModal({
  product,
  onClose,
  onAddToOrder,
}: {
  product: CounterProduct;
  onClose: () => void;
  onAddToOrder: (product: CounterProduct, quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const badgeLabel = product.cornerBadge?.label ?? product.statusLabel;

  return (
    <div
      className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-72 w-full bg-surface-container flex-shrink-0">
          {/* TODO: replace with owned asset */}
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/90 text-on-surface flex items-center justify-center hover:bg-surface transition-colors shadow-md"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-label-md uppercase tracking-wider font-bold">
            {badgeLabel}
          </div>
        </div>

        <div className="p-space-lg flex flex-col gap-space-md overflow-y-auto">
          <div className="flex justify-between items-baseline">
            <h3 className="font-headline text-headline-lg text-on-surface">
              {product.name}
            </h3>
            <span className="font-headline text-headline-lg font-bold text-secondary">
              {product.price}
            </span>
          </div>

          <p className="font-body text-body-md text-on-surface-variant">
            {product.modalDescription}
          </p>

          <div className="flex flex-col gap-space-2xs pt-space-2xs border-t border-outline-variant/30">
            <div className="text-label-md uppercase tracking-wider text-on-surface font-bold">
              Ingredients
            </div>
            <p className="font-body text-body-sm text-on-surface-variant">
              {product.ingredients}
            </p>
          </div>

          {product.allergens.length > 0 && (
            <div className="flex flex-col gap-space-2xs">
              <div className="text-label-md uppercase tracking-wider text-on-surface font-bold">
                Allergens
              </div>
              <div className="flex flex-wrap gap-2">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="bg-surface-container px-3 py-1 rounded-full font-body text-body-sm text-on-surface"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-space-md border-t border-outline-variant/30">
            <div className="flex items-center gap-space-xs bg-surface-container px-space-xs py-2 rounded-xl">
              <button
                type="button"
                onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
                className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <Minus size={16} />
              </button>
              <span className="font-headline text-headline-sm font-bold w-8 text-center text-on-surface">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((qty) => qty + 1)}
                className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onAddToOrder(product, quantity)}
              className="flex-1 ml-space-md bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container py-3 rounded-xl text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingBag size={18} />
              Add to Pre-order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
