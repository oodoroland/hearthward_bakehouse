"use client";

import { useState } from "react";
import { CalendarPlus, Croissant, Navigation } from "lucide-react";
import type { CollectionSlot } from "./types";

function generateOrderNumber() {
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `HW-${suffix}`;
}

export function ConfirmationPanel({
  slot,
  onReset,
}: {
  slot: CollectionSlot | null;
  onReset: () => void;
}) {
  const [orderNumber] = useState(generateOrderNumber);

  return (
    <div className="bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col gap-space-lg text-center items-center">
      <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-space-2xs">
        <Croissant size={32} />
      </div>

      <div>
        <span className="text-label-md text-primary tracking-widest uppercase mb-space-3xs block">
          Order Successful
        </span>
        <h2 className="font-headline text-headline-lg text-on-surface">
          Your bread is waiting
        </h2>
        <p className="font-body text-body-md text-on-surface-variant mt-space-2xs">
          Order #{orderNumber} has been safely registered in our bakehouse
          queue.
        </p>
      </div>

      <div className="w-full max-w-lg bg-surface p-space-lg rounded-xl shadow-sm text-left flex flex-col gap-space-md border border-outline-variant">
        <div className="flex justify-between items-center border-b border-outline-variant pb-space-sm">
          <div>
            <span className="text-label-md text-on-surface-variant uppercase block">
              Collection Slot
            </span>
            <span className="font-headline text-headline-sm text-on-surface font-bold">
              {slot ? `Today, ${slot.timeRange}` : "No slot selected"}
            </span>
          </div>
          <span className="bg-secondary-container text-on-secondary-container text-label-md px-space-xs py-space-3xs rounded-full font-bold">
            Ready Soon
          </span>
        </div>

        <div className="flex items-start gap-space-md">
          <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
            <Croissant size={20} />
          </div>
          <div>
            <span className="font-headline text-headline-sm text-on-surface block">
              Hearthward Bakehouse
            </span>
            <span className="font-body text-body-sm text-on-surface-variant block">
              42 Broad Street, Artisan Quarter
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
          <button
            type="button"
            className="flex-1 bg-surface-container text-on-surface hover:bg-surface-container-high py-space-xs px-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Navigation size={16} />
            <span>Get directions</span>
          </button>
          <button
            type="button"
            className="flex-1 bg-surface-container text-on-surface hover:bg-surface-container-high py-space-xs px-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <CalendarPlus size={16} />
            <span>Add to calendar</span>
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="font-body text-body-sm text-primary underline hover:text-on-surface transition-colors mt-space-md"
      >
        Place another pre-order
      </button>
    </div>
  );
}
