export function WizardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
      <div>
        <span className="text-label-md text-primary tracking-widest uppercase mb-space-2xs block">
          Frictionless Artisan Acquisition
        </span>
        <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-on-surface">
          Pre-order &amp; Collection
        </h1>
      </div>
      <p className="font-body text-body-lg text-on-surface-variant max-w-md">
        Secure your morning bake ahead of time. Freshly out of the
        stone-deck oven, waiting at our oak counter.
      </p>
    </div>
  );
}
