import { ArrowLeft, ArrowRight } from "lucide-react";
import { SlotCard } from "./SlotCard";
import type { CollectionSlot } from "./types";

export function SlotPanel({
  slots,
  selectedSlotId,
  onSelect,
  onBack,
  onContinue,
}: {
  slots: CollectionSlot[];
  selectedSlotId: string | null;
  onSelect: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="bg-surface-container-low p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
      <div>
        <h2 className="font-headline text-headline-md text-on-surface mb-space-3xs">
          When would you like to collect?
        </h2>
        <p className="font-body text-body-sm text-on-surface-variant">
          Slots are managed tightly to guarantee peak temperature and
          freshness.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {slots.map((slot) => (
          <SlotCard
            key={slot.id}
            slot={slot}
            isSelected={slot.id === selectedSlotId}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="flex justify-between pt-space-md">
        <button
          type="button"
          onClick={onBack}
          className="text-on-surface hover:text-primary px-space-md py-space-sm text-label-md uppercase tracking-wider transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        <button
          type="button"
          disabled={!selectedSlotId}
          onClick={onContinue}
          className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-container disabled:hover:text-on-primary-container px-space-xl py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors flex items-center gap-2"
        >
          <span>Continue to Details</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
