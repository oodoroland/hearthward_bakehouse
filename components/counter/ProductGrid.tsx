import { CounterProductCard } from "./CounterProductCard";
import type { CounterProduct } from "./products";

export function ProductGrid({
  products,
  onSelect,
}: {
  products: CounterProduct[];
  onSelect: (product: CounterProduct) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
      {products.map((product) => (
        <CounterProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
