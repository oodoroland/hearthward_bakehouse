import type { WizardStep } from "./types";

const STEPS: { step: WizardStep; label: string }[] = [
  { step: 1, label: "Basket & Items" },
  { step: 2, label: "Collection Slot" },
  { step: 3, label: "Customer Details" },
  { step: 4, label: "Confirmation" },
];

export function StepIndicator({
  currentStep,
  onStepChange,
}: {
  currentStep: WizardStep;
  onStepChange: (step: WizardStep) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs mb-space-2xl">
      {STEPS.map(({ step, label }) => {
        const isActive = step === currentStep;
        return (
          <button
            key={step}
            type="button"
            onClick={() => onStepChange(step)}
            className={
              isActive
                ? "p-space-md rounded-xl bg-primary-container text-on-primary-container transition-all cursor-pointer text-left"
                : "p-space-md rounded-xl bg-surface-container-high text-on-surface-variant transition-all cursor-pointer text-left"
            }
          >
            <span className="text-label-md uppercase block mb-space-3xs opacity-80">
              Step {String(step).padStart(2, "0")}
            </span>
            <span className="font-headline text-headline-sm font-bold">
              {step}. {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
