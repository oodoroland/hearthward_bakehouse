export type ProductCategory = "Bread" | "Pastries" | "Sweet" | "Coffee & Drinks";

export type ProductStatus = "available" | "selling-fast" | "sold-out";

export type CornerBadge = {
  label: string;
  tone: "secondary" | "primary" | "secondary-container";
};

export type CounterProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  shortDescription: string;
  modalDescription: string;
  ingredients: string;
  allergens: string[];
  statusLabel: string;
  status: ProductStatus;
  cornerBadge?: CornerBadge;
  ctaLabel: string;
  imageAlt: string;
  imageSrc: string;
};

export const CATEGORIES: readonly ("All Items" | ProductCategory)[] = [
  "All Items",
  "Bread",
  "Pastries",
  "Sweet",
  "Coffee & Drinks",
];

export const PRODUCTS: CounterProduct[] = [
  {
    id: "country-sourdough",
    name: "Country Sourdough",
    category: "Bread",
    price: "£6.50",
    shortDescription:
      "Naturally fermented · 900g, Available today in small morning batches.",
    modalDescription:
      "Naturally fermented artisan country loaf with a caramelized crust and open, tender crumb. 900g.",
    ingredients:
      "Organic stoneground wheat flour, water, sea salt, wild sourdough culture.",
    allergens: ["Wheat"],
    statusLabel: "Available today",
    status: "available",
    cornerBadge: { label: "4 left in batch", tone: "secondary" },
    ctaLabel: "Pre-order",
    imageAlt:
      "A rustic artisan loaf of country sourdough bread, scored and dusted with flour.",
    imageSrc:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    category: "Pastries",
    price: "£4.20",
    shortDescription:
      "Laminated pure butter pastry filled with almond frangipane.",
    modalDescription:
      "Laminated pure butter pastry filled with rich almond frangipane, double-baked to golden perfection.",
    ingredients:
      "Organic stoneground wheat flour, European cultured butter, almond meal, sugar, eggs, sea salt.",
    allergens: ["Wheat", "Milk", "Eggs", "Almonds (Tree Nuts)"],
    statusLabel: "Just pulled",
    status: "available",
    cornerBadge: { label: "Fresh batch", tone: "primary" },
    ctaLabel: "Pre-order",
    imageAlt:
      "A flaky, golden-brown twice-baked almond croissant, freshly baked and glossy.",
    imageSrc:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cinnamon-bun",
    name: "Cinnamon Bun",
    category: "Sweet",
    price: "£3.80",
    shortDescription:
      "Soft brioche swirl with Ceylon cinnamon and cream cheese icing.",
    modalDescription:
      "Soft brioche dough swirled with Ceylon cinnamon and finished with tangy cream cheese icing.",
    ingredients:
      "Wheat flour, butter, milk, eggs, Ceylon cinnamon, sugar, cream cheese icing.",
    allergens: ["Wheat", "Milk", "Eggs"],
    statusLabel: "Selling fast",
    status: "selling-fast",
    cornerBadge: { label: "Selling fast", tone: "secondary-container" },
    ctaLabel: "Pre-order",
    imageAlt:
      "Soft swirled cinnamon buns dusted with sugar, fresh from the oven.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9fcmvHQF1MABNxoVFgKxQ0KUQliwttUBRcKhcG7rIoKbpONguy2BoDGT&s=10",
  },
  {
    id: "cardamom-bun",
    name: "Cardamom Bun",
    category: "Sweet",
    price: "£3.80",
    shortDescription:
      "Freshly ground green cardamom pods, twisted dough, pearl sugar crunch.",
    modalDescription:
      "Swedish-style twisted bun made with freshly ground green cardamom, finished with a pearl sugar crunch.",
    ingredients:
      "Wheat flour, butter, milk, eggs, green cardamom, sugar, pearl sugar.",
    allergens: ["Wheat", "Milk", "Eggs"],
    statusLabel: "Available today",
    status: "available",
    ctaLabel: "Pre-order",
    imageAlt:
      "Swedish style twisted cardamom buns studded with pearl sugar crystals.",
    imageSrc:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cardamom-buns-f351755.jpg",
  },
  {
    id: "seeded-rye-loaf",
    name: "Seeded Rye Loaf",
    category: "Bread",
    price: "£7.00",
    shortDescription:
      "Dark rye, sunflower, pumpkin and flax seeds. Sold out today - check tomorrow.",
    modalDescription:
      "Dense dark rye loaf studded with sunflower, pumpkin and flax seeds throughout the crumb.",
    ingredients:
      "Organic rye flour, wheat flour, sunflower seeds, pumpkin seeds, flax seeds, sea salt, sourdough culture.",
    allergens: ["Wheat", "Rye"],
    statusLabel: "Check tomorrow",
    status: "sold-out",
    ctaLabel: "Sold out",
    imageAlt:
      "A seeded rye loaf sliced open on a wooden board, showing seeds throughout the crumb.",
    imageSrc:
      "https://live.staticflickr.com/3364/4628872585_4f3c00a044_b.jpg",
  },
  {
    id: "house-filter-coffee",
    name: "House Filter Coffee",
    category: "Coffee & Drinks",
    price: "£3.60",
    shortDescription: "Single origin Ethiopian beans, brewed fresh by the cup.",
    modalDescription:
      "Single origin Ethiopian beans, brewed fresh by the cup on our pour-over bar.",
    ingredients: "Single origin Ethiopian filter coffee beans, filtered water.",
    allergens: [],
    statusLabel: "Brewed fresh",
    status: "available",
    ctaLabel: "Add to order",
    imageAlt:
      "Pour-over filter coffee being brewed at a coffee bar, steam rising from the kettle.",
    imageSrc:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
  },
];
