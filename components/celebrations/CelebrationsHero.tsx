import { Briefcase, Cake, Truck } from "lucide-react";

export function CelebrationsHero() {
  return (
    <section className="relative w-full bg-surface-container-low py-section-padding px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-label-md uppercase tracking-wider text-primary mb-space-sm font-semibold">
            Bespoke Catering &amp; Events
          </span>
          <h1 className="text-headline-xl-mobile lg:text-headline-xl font-headline text-on-surface mb-space-md">
            Planning something?
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mb-space-lg">
            Bespoke celebration cakes, artisan pastry boxes, and office
            breakfast catering crafted with heritage grains and slow
            fermentation.
          </p>
          <div className="flex flex-wrap gap-space-sm">
            <a
              href="#celebrations-form"
              className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-md py-space-xs rounded-xl text-label-md uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <Cake size={18} />
              Plan Celebration
            </a>
            <a
              href="#office-form"
              className="bg-surface-container-highest text-on-surface hover:bg-surface-variant px-space-md py-space-xs rounded-xl text-label-md uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <Briefcase size={18} />
              Office Catering
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] w-full rounded-xl overflow-hidden shadow-xl bg-surface-container-highest">
            {/* TODO: replace with owned asset */}
            <img
              alt="An artfully composed tiered sourdough celebration cake adorned with fresh edible flowers, figs, and delicate dusting of powdered sugar, set against a warm sunlit wooden table in an artisan bakery."
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwaqjCW_6kQXyaLokOFYHyGLZbJcdYI-GNMs1jOH4JlM0oFi5Js0CcHuJvsbPiMKAgkJ9TGrlBxT99Xqq7ylnO1zi30wnlzWgqNeUE1VkJGJNKSG1wy2SG5Ni6E0VPK0S8mEjdUBMCvzj8JYXVJ8AzEEUSUd5gxQeC9hevHKYO53N3IRNhU25Shlgng-_2bGyvoLxSpoE_BN1-ZiDpbzlmxZIsYCvvng-AyOAtAxYvAS_6P4hZKHPgA"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-space-md rounded-xl shadow-lg hidden sm:block max-w-xs">
            <div className="flex items-center gap-space-xs mb-space-2xs">
              <Truck className="text-primary" size={24} />
              <span className="font-headline text-headline-sm font-bold text-on-surface">
                Fresh Daily Delivery
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              Available across the metropolitan area for morning meetings and
              weekend gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
