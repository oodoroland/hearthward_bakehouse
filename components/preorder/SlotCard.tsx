import { Ban, Check, Clock } from "lucide-react";
import type { CollectionSlot } from "./types";

export function SlotCard({
  slot,
  isSelected,
  onSelect,
}: {
  slot: CollectionSlot;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  if (slot.status === "sold-out") {
    return (
      <div className="p-space-md rounded-xl bg-surface-container opacity-50 cursor-not-allowed flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <Ban className="text-on-surface-variant" size={20} />
          <div>
            <span className="font-headline text-headline-sm text-on-surface line-through block">
              {slot.timeRange}
            </span>
            <span className="font-body text-body-sm text-error">
              {slot.subtitle}
            </span>
          </div>
        </div>
        <span className="text-label-md text-error uppercase font-bold">
          Sold Out
        </span>
      </div>
    );
  }

  if (isSelected) {
    return (
      <button
        type="button"
        onClick={() => onSelect(slot.id)}
        className="slot-card selected p-space-md rounded-xl bg-primary-container text-on-primary-container cursor-pointer transition-all flex items-center justify-between shadow-md text-left"
      >
        <div className="flex items-center gap-space-sm">
          <Clock className="text-on-primary-container" size={20} />
          <div>
            <span className="font-headline text-headline-sm font-bold block">
              {slot.timeRange}
            </span>
            <span className="font-body text-body-sm opacity-90">
              {slot.subtitle}
            </span>
          </div>
        </div>
        <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center">
          <Check size={12} />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(slot.id)}
      className="slot-card p-space-md rounded-xl border border-outline-variant bg-surface cursor-pointer hover:border-primary transition-all flex items-center justify-between text-left"
    >
      <div className="flex items-center gap-space-sm">
        <Clock className="text-on-surface-variant" size={20} />
        <div>
          <span className="font-headline text-headline-sm text-on-surface block">
            {slot.timeRange}
          </span>
          <span className="font-body text-body-sm text-on-surface-variant">
            {slot.subtitle}
          </span>
        </div>
      </div>
      <span className="w-5 h-5 rounded-full border border-outline flex items-center justify-center" />
    </button>
  );
}
