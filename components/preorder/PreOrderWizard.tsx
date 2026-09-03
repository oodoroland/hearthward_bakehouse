"use client";

import { useState } from "react";
import { StepIndicator } from "./StepIndicator";
import { BasketPanel } from "./BasketPanel";
import { SlotPanel } from "./SlotPanel";
import { DetailsPanel } from "./DetailsPanel";
import { ConfirmationPanel } from "./ConfirmationPanel";
import { OrderSummarySidebar } from "./OrderSummarySidebar";
import {
  COLLECTION_SLOTS,
  INITIAL_BASKET,
  type BasketItem,
  type WizardStep,
} from "./types";

export function PreOrderWizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [basketItems, setBasketItems] = useState<BasketItem[]>(INITIAL_BASKET);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const handleQuantityChange = (id: string, quantity: number) => {
    setBasketItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleReset = () => {
    setBasketItems(INITIAL_BASKET);
    setSelectedSlotId(null);
    setCurrentStep(1);
  };

  const selectedSlot =
    COLLECTION_SLOTS.find((slot) => slot.id === selectedSlotId) ?? null;

  return (
    <>
      <StepIndicator currentStep={currentStep} onStepChange={setCurrentStep} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        <div className="lg:col-span-8 flex flex-col gap-space-xl">
          {currentStep === 1 && (
            <BasketPanel
              items={basketItems}
              onQuantityChange={handleQuantityChange}
              onProceed={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 2 && (
            <SlotPanel
              slots={COLLECTION_SLOTS}
              selectedSlotId={selectedSlotId}
              onSelect={setSelectedSlotId}
              onBack={() => setCurrentStep(1)}
              onContinue={() => setCurrentStep(3)}
            />
          )}
          {currentStep === 3 && (
            <DetailsPanel
              onBack={() => setCurrentStep(2)}
              onConfirm={() => setCurrentStep(4)}
            />
          )}
          {currentStep === 4 && (
            <ConfirmationPanel slot={selectedSlot} onReset={handleReset} />
          )}
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <OrderSummarySidebar items={basketItems} />
        </div>
      </div>
    </>
  );
}
