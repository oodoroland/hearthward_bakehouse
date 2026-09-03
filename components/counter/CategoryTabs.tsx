import { CATEGORIES, type ProductCategory } from "./products";

type Category = "All Items" | ProductCategory;

export function CategoryTabs({
  active,
  onChange,
}: {
  active: Category;
  onChange: (category: Category) => void;
}) {
  return (
    <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={
              isActive
                ? "px-space-md py-space-2xs rounded-full bg-primary-container text-on-primary-container text-label-md uppercase tracking-wider transition-all shadow-sm whitespace-nowrap"
                : "px-space-md py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest text-label-md uppercase tracking-wider transition-all whitespace-nowrap"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
