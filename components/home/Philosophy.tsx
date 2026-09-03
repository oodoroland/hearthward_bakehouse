import { Clock, Leaf } from "lucide-react";

const PILLARS = [
  {
    icon: Leaf,
    title: "Local Grains",
    description:
      "Sourced directly from independent regenerative millers within 50 miles.",
  },
  {
    icon: Clock,
    title: "Slow Ferment",
    description:
      "Minimum 36 hours cold fermentation for superior flavor and digestibility.",
  },
] as const;

export function Philosophy() {
  return (
    <section className="py-section-padding px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              {/* TODO: replace with owned asset */}
              <img
                alt="A baker's hands gently shaping a soft, fermented sourdough loaf on a worn oak table dusted with organic flour."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-nl13BqVzkmdxpanvi345DOALpx1STxVk6bRRjMgSS2JhQr_7EvIi4x7Qp5HjN_C4hUZVHDHPylS3i6tK6EgRKRnfauIdvNnfTix5ZE1y4PdgJ4EJ3YOnB7k0gtf4X74VaLMh0JxXV2jzdKgrwcMMyeCKhMzjebUBUMhnZSP-rSlfROeN-2qRr2U8eK55JimXEWsva-jtVWofQKSIUTuS4sNBdMelipCDIccPnU1CX1Y1U55N1islQ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 pt-12 rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
              {/* TODO: replace with owned asset */}
              <img
                alt="Close up of stone-milled flour sacks stacked neatly inside a sunlit daylight artisan bakehouse."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC5LiZnNWgQ4Z62pwblC4f60q3b5y9LzAYDbwy4VUdrwjQ_FrqNVGlvQz4ALxzdboImy0M8URlA03e07c1q1SMfFh8ZDrTfCAzQXfdao98f1h5EMpKLChm7It0MVKRx6hjcFAgLjenLzRmk7FwLYWpgxjnx3WjLy7hCS8m9sFIjmhkZl4Jk0H3JZV3zUMdffDf_HWawVglaswicny0CW_uW3a69JwRnonuwS7KZ6nLgLAGQiS8YBNluA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
          <span className="text-label-md uppercase text-secondary font-bold tracking-widest">
            Our Philosophy
          </span>
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-on-surface">
            Craft, freshness, and true locality
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            We believe bread should be uncomplicated, honest, and deeply
            nourishing. Every loaf we bake starts with wild cultures
            nurtured daily, stone-milled grains sourced from regional
            farmers, and time—our quietest ingredient.
          </p>

          <div className="grid grid-cols-2 gap-space-md w-full pt-space-xs">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <Icon size={20} />
                </div>
                <h4 className="font-headline text-headline-sm font-bold text-on-surface">
                  {title}
                </h4>
                <p className="font-body text-body-sm text-on-surface-variant">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
