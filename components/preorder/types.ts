export type WizardStep = 1 | 2 | 3 | 4;

export type BasketItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageAlt: string;
  imageSrc: string;
};

export type CollectionSlot = {
  id: string;
  timeRange: string;
  subtitle: string;
  status: "available" | "sold-out";
};

export const INITIAL_BASKET: BasketItem[] = [
  {
    id: "country-sourdough",
    name: "Country Sourdough",
    description: "Naturally fermented, 36-hour slow rise",
    price: 6.5,
    quantity: 1,
    imageAlt:
      "Golden Country Sourdough loaf dusted with white flour, rustic scoring on top, resting on a wooden board.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwnFsxXljuk4dzqpUdliEpLpeIzJtVcqZFDDyQKF8H9trCFOYoMzFYS9w2eHug6bawVGxD6Hg1lAtdNuAQh1ddG1t3h3YBLMI1aCzLxwyGCyKPVwvM684OFZ67FyQgieg89jSItgggrrpJjfatrZxyeiiINUtbBfrL91Fj993aEG0yPbMZYrfBxUzgoCfUG67GHgUguCLhw51aZzZMhBe6ZRcKLDNNobDWTOBnJIsAdvE2TJJM6zOqA",
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Filled with rich frangipane, twice baked",
    price: 4.2,
    quantity: 2,
    imageAlt:
      "Flaky golden almond croissant dusted with powdered sugar and toasted almond flakes on top.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9mu03hJtubg_bxrfad5nxtIWayHFlr8ywuqtQF9LIRJIa12l-qrgVaAYidsCFRUUt24-azpq6ixbv33If6r-EuHrEZSEo8weU_PN6y6z3XY3hYSW2YKpj2ZWo-mwFRomegi8dSHMbmYw0OOFO_VGHI6unRE30mS3kcVURt2AzHeSBdToSPgAeJC1OcBpBKgwKi1edvPcE601Q9iUa1s0Br-gKfCt88ksAyYWBclTwOE9NVswIs5q4Ag",
  },
  {
    id: "cinnamon-bun",
    name: "Cinnamon Bun",
    description: "Brioche dough, Korintje cinnamon, cream cheese icing",
    price: 3.8,
    quantity: 2,
    imageAlt:
      "Warm cinnamon bun with cream cheese glaze dripping down the sides, resting on parchment paper.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXbVePeuQdT5lMGwXlWj21oOoXJvKxjq9PJvFJPN1uNuCeA77anQloIuVZhEE5TtmhrAo_EQAhPzZu9R9Bm3QoXEyyOy5PSW9AC_JGCZeJOTNE0FyGkAAlT_CruS8dYZ46xwuLbEHJvOkPhiTMvXEOoUuo0gbeXxndtejjYpzddo4m6E7zuFTONxSYV7MTApjj-d3pcmNjJ6HE-vKAuS2XC9JGv4iv2Ty0bXV2ATnHrTvCyC0i1Tr3eA",
  },
];

export const COLLECTION_SLOTS: CollectionSlot[] = [
  {
    id: "10:30-11:00",
    timeRange: "10:30 – 11:00",
    subtitle: "8 slots remaining",
    status: "available",
  },
  {
    id: "11:00-11:30",
    timeRange: "11:00 – 11:30",
    subtitle: "Peak Freshness Window",
    status: "available",
  },
  {
    id: "11:30-12:00",
    timeRange: "11:30 – 12:00",
    subtitle: "3 slots remaining",
    status: "available",
  },
  {
    id: "12:00-12:30",
    timeRange: "12:00 – 12:30",
    subtitle: "Fully Booked",
    status: "sold-out",
  },
];
