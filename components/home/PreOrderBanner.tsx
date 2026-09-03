import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PreOrderBanner() {
  return (
    <section className="py-section-padding px-6 lg:px-12 bg-primary-container text-on-primary-container relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-space-md">
        <span className="text-label-md uppercase tracking-widest text-on-primary-container/80 font-semibold">
          Skip the queue
        </span>
        <h2 className="font-headline text-headline-xl-mobile lg:text-headline-xl text-on-primary">
          Know what you want? We&apos;ll have it ready.
        </h2>
        <p className="font-body text-body-lg text-on-primary-container max-w-xl">
          Secure your favorite loaves and morning pastries ahead of time.
          Pick up directly from our counter without waiting in line.
        </p>
        <div className="pt-space-sm">
          <Link
            href="/pre-order"
            className="inline-flex items-center gap-2 bg-on-primary text-primary hover:bg-surface-bright px-space-xl py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors shadow-lg"
          >
            <span>Start a pre-order</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
