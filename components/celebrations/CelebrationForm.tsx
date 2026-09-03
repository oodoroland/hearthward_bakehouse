"use client";

import { useState } from "react";
import { PartyPopper } from "lucide-react";

const FIELD_CLASSES =
  "w-full bg-surface-container-lowest text-on-surface px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary";
const LABEL_CLASSES = "block text-label-md uppercase text-on-surface-variant mb-space-2xs";

export function CelebrationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        id="celebrations-form"
        className="bg-surface-container-low rounded-xl p-8 lg:p-12 shadow-sm flex flex-col items-center text-center gap-space-md"
      >
        <PartyPopper className="text-primary" size={32} />
        <h3 className="text-headline-md font-headline text-on-surface">
          Celebration inquiry sent successfully!
        </h3>
        <p className="text-body-md text-on-surface-variant">
          We will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-primary hover:text-on-surface text-label-md uppercase tracking-wider transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div
      id="celebrations-form"
      className="bg-surface-container-low rounded-xl p-8 lg:p-12 shadow-sm relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
      <div className="flex items-center gap-space-xs mb-space-md">
        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
          <PartyPopper size={20} />
        </div>
        <span className="text-label-md uppercase tracking-wider text-primary font-bold">
          Personal &amp; Milestones
        </span>
      </div>
      <h3 className="text-headline-md font-headline text-on-surface mb-space-sm">
        Celebrations &amp; Special Occasions
      </h3>
      <p className="text-body-md text-on-surface-variant mb-space-lg">
        Birthday cakes, tiered sourdough celebration cakes, pastry boxes, and
        custom dessert spreads.
      </p>

      <form
        className="space-y-space-lg"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
          <div>
            <label className={LABEL_CLASSES}>Occasion Type</label>
            <select className={FIELD_CLASSES}>
              <option>Birthday Celebration</option>
              <option>Wedding / Engagement</option>
              <option>Anniversary</option>
              <option>Intimate Gathering</option>
              <option>Other Special Event</option>
            </select>
          </div>
          <div>
            <label className={LABEL_CLASSES}>Event Date</label>
            <input className={FIELD_CLASSES} type="date" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
          <div>
            <label className={LABEL_CLASSES}>Estimated Guest Count</label>
            <input
              className={FIELD_CLASSES}
              placeholder="e.g. 25"
              type="number"
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Interested In</label>
            <select className={FIELD_CLASSES}>
              <option>Tiered Sourdough Cake</option>
              <option>Assorted Pastry Box</option>
              <option>Artisan Bread Spread</option>
              <option>Custom Mix</option>
            </select>
          </div>
        </div>

        <div>
          <label className={LABEL_CLASSES}>Your Vision &amp; Message</label>
          <textarea
            className={FIELD_CLASSES}
            placeholder="Tell us about your theme, dietary requirements, or flavor preferences..."
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
          <div>
            <label className={LABEL_CLASSES}>Your Name</label>
            <input
              className={FIELD_CLASSES}
              placeholder="Jane Doe"
              type="text"
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Email or Phone</label>
            <input
              className={FIELD_CLASSES}
              placeholder="jane@example.com"
              type="text"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary py-4 rounded-xl text-label-md uppercase tracking-wider transition-colors font-bold shadow-sm"
        >
          Send Celebration Enquiry
        </button>
      </form>
    </div>
  );
}
