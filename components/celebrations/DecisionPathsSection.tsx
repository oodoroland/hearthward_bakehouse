import { CelebrationForm } from "@/components/celebrations/CelebrationForm";
import { OfficeForm } from "@/components/celebrations/OfficeForm";

export function DecisionPathsSection() {
  return (
    <section className="w-full py-section-padding px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="text-label-md uppercase tracking-wider text-primary mb-space-2xs block font-semibold">
            Tailored Offerings
          </span>
          <h2 className="text-headline-lg font-headline text-on-surface mb-space-sm">
            How can we feed your group?
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Select your path below to customize your inquiry or order
            directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-start">
          <CelebrationForm />
          <OfficeForm />
        </div>
      </div>
    </section>
  );
}
