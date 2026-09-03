"use client";

import { useEffect, useRef, useState } from "react";
import { CategoryTabs } from "./CategoryTabs";
import { ProductGrid } from "./ProductGrid";
import { ProductModal } from "./ProductModal";
import { OrderToast } from "./OrderToast";
import { CATEGORIES, PRODUCTS, type CounterProduct } from "./products";

type Category = (typeof CATEGORIES)[number];

const TOAST_DURATION_MS = 3500;

export function CounterSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Items");
  const [selectedProduct, setSelectedProduct] = useState<CounterProduct | null>(
    null,
  );
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const visibleProducts =
    activeCategory === "All Items"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  const handleAddToOrder = (_product: CounterProduct, _quantity: number) => {
    setSelectedProduct(null);
    setToastVisible(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(
      () => setToastVisible(false),
      TOAST_DURATION_MS,
    );
  };

  return (
    <>
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto mb-space-lg">
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      </section>

      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto pb-section-padding">
        <ProductGrid
          products={visibleProducts}
          onSelect={setSelectedProduct}
        />
      </section>

      {selectedProduct && (
        <ProductModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToOrder={handleAddToOrder}
        />
      )}

      <OrderToast
        visible={toastVisible}
        message="Added to your pre-order counter list."
      />
    </>
  );
}
