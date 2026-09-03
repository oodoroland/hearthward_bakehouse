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
      "A rustic artisan loaf of country sourdough bread resting on a dark wood flour-dusted workbench, morning sunlight casting warm editorial shadows across the scored crust.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWBR4d2ihqPmv_eogYMG5mupw5Gj1MszeqaumOfrIbQzcLdiDw-BpRv1RcU4hc9_qrIQq-FaHEJvb83dOAomxOVF8qvwQcHpDQOsHocJjTMao3B2nzZJMtjI_47c82NAC7qjhqmGHWb6j7lx4TDc_gWN4dk01dNJVp5_GXcdDAuXmVyj-9uVI5PDxHOFGLoPeAPwjOgxG5ThDcoAimOpYIhoKHPUfP1WAb4peNlp28FhOF1lB_h53isQ",
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
      "A flaky, golden-brown twice-baked almond croissant dusted with powdered sugar and toasted sliced almonds, set against a warm linen background.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0R-RHMEI8Zd4J6L7BymFTN_CpAByaoZ3o5MesJPlNODlgXvu95yxO_f9M4h-PCxib3oQxMLjCz2chUqvxImtosGPLstw1UMz4jDUPIZsIZInRR-dIry5OUyAq2DcTSV2JpNMlnVS8xPXkpV0zhaHcvf4llrHuy4wAZhuzu_-ILJS3UTZfyX_qmTtaanAtq4udeTSI-qhHAb-KtilLgc43h0PDbgaBE7kjBN0hmSV7zQSFtJj01ajqPA",
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
      "A soft brioche cinnamon roll drizzled with rich cream cheese icing, glistening under soft morning bakery light.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyq22RhnEQwoOXDlVf4qY3ahGr0ck508XWT1Z4MgfxGVZLqOgHo2HWlov886JL42WXOoqSL34jE1yX54dsPeX19j-a1MnXKFDEboovUXU4fZ3EPaxaVY19HQsKuzyXKACjksQExGe980PSXxzMZjOIg_puqVjp2igSDYg5V1dixMRoh_7AFX3R1A51MLHAxWy_kt1SEbY99poJbKwYPbDxWbd_NRGv-uNYt9PKfnRv9ddi21A6V6w_ew",
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
      "Swedish style twisted cardamom bun studded with pearl sugar crystals on a dark stoneware plate.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvINJYuZh9RbB5z5nk9gZrCvfiI42GMxjudEhRGSyHuRcE9KIw2tfApCSZvy9n3wDWACMzMeyulSqKZJ1Ecme1rtSOXNUbUyO4mdu2GTz_GuuQvnVfoQPeWw6QQNrcfMMnCCPxLliRcZX5WD_8C3PKp5oQiHYf5ZQScDOi8AN7Sxf53yE_e2T0IXgarXYwLl7XVcCpnzl-hw5H9NKKxjaxM4A8KtKaPzLflScIbgInPWQFvochxjkTw",
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
      "A dark dense seeded rye loaf sliced on a wooden board, showing sunflower, pumpkin, and flax seeds throughout the crumb.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-4-WYcw4px4dEYFTIdf_gPfLYFgwNJhz3x_xMDBZt81zjMHYsR2XV3f3bs-76Zh8D3slQzRR9jBwmRMvKAUbxe8xkBPkcS3urQjC_jUPLWHpiMeNSDiuxCL02MEsZBifk1Jr8YF-abBuEkxpRDLbFkXQonydPbJQMyb32wBnNc-hMG-BoGK80RyKm5xW2r28A1G02tvc8reXqHrQtL052HtVvL-t2fPykh-bMBHC9z2u5PSpmUK3OzQ",
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
      "A ceramic mug of pour-over filter coffee steaming gently on a wooden counter with soft morning light.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAta6r-A8IN5T1jom1P4rMIR5JeN878Sxs-YRAFXVhtlWeb1-VkAiobJb7LMCz5qC9cvezDZPvdqIoNt8xL_UtR7I_kae6b4BfhmDHsQr4SubnLPVgLVjnxF_cr-SsDg3DkLlsgZVvMzmuoGaS5FJjiKiIMpIj_lk5HhXHt_P7NuHu83lUvc4zdnOymWW3mKEUVn75IOjoli0sDST9tm9YPtCXR_VyySyPpdqr2HhEVrWZ05zUbTWvJbQ",
  },
];
