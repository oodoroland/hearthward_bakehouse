import { ArrowRight, Play } from "lucide-react";

export function StoryTeaser() {
  return (
    <section className="py-section-padding px-6 lg:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-5 flex flex-col items-start gap-space-md">
          <span className="text-label-md uppercase text-secondary font-bold tracking-widest">
            Documentary Short
          </span>
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-on-surface">
            From first mix to first loaf
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Take a quiet visual journey behind the flour dust. See how our
            bakers start their mornings at 4:00 AM, tending the fires and
            folding dough by hand.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-label-md uppercase tracking-wider text-primary hover:text-on-surface transition-colors"
          >
            <span>Read our full story</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] bg-surface-container-high group cursor-pointer">
            {/* TODO: replace with owned asset */}
            <img
              alt="Cinematic frame of a baker scoring a raw sourdough boule with a razor blade in dramatic morning window light."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs8cpDGQfyGGkR62Qn6x9JfdFL_ZG5SPqwY7de0FKKbQp6QDqprynkVtRKlQDb2YOv7sMHc-0jXRamg4UGcs6cWITxY5MglNZEHNxmjo1Szy8eMMlERWf5iNqMl3hgp0uCJV2TKUjHtmi5o9aYakp_JAeduvkRiT-stDOhVm1t-y4BM3gZsoC12bnWIPlYYuthA9npLK2yRxCeiitKng4ROH5_ONrFdNjl8-jqUC7NGlLYzjbO3AvW6Q"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-inverse-surface/30 group-hover:bg-inverse-surface/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg transform group-hover:scale-110 transition-transform">
                <Play size={32} className="translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
