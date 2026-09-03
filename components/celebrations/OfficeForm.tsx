"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";

const FIELD_CLASSES =
  "w-full bg-surface-container-lowest text-on-surface px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary";
const LABEL_CLASSES = "block text-label-md uppercase text-on-surface-variant mb-space-2xs";

const PRODUCT_MIX_OPTIONS = [
  { label: "Morning Pastry Box (Croissants, Danishes)", defaultChecked: true },
  { label: "Artisan Loaves & Butter Spread", defaultChecked: false },
  { label: "Seasonal Fruit & Scone Platter", defaultChecked: false },
  { label: "Specialty Coffee Carafe Add-on", defaultChecked: false },
] as const;

export function OfficeForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        id="office-form"
        className="bg-surface-container-low rounded-xl p-8 lg:p-12 shadow-sm flex flex-col items-center text-center gap-space-md"
      >
        <Building2 className="text-primary" size={32} />
        <h3 className="text-headline-md font-headline text-on-surface">
          Office order request received!
        </h3>
        <p className="text-body-md text-on-surface-variant">
          We will send a confirmation and invoice soon.
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
      id="office-form"
      className="bg-surface-container-low rounded-xl p-8 lg:p-12 shadow-sm relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
      <div className="flex items-center gap-space-xs mb-space-md">
        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
          <Building2 size={20} />
        </div>
        <span className="text-label-md uppercase tracking-wider text-primary font-bold">
          Workplace &amp; Corporate
        </span>
      </div>
      <h3 className="text-headline-md font-headline text-on-surface mb-space-sm">
        Office &amp; Events
      </h3>
      <p className="text-body-md text-on-surface-variant mb-space-lg">
        Breakfast meetings, team mornings and larger pastry orders delivered
        fresh to your office desk.
      </p>

      <form
        className="space-y-space-lg"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-lg">
          <div>
            <label className={LABEL_CLASSES}>Group Size</label>
            <input
              className={FIELD_CLASSES}
              placeholder="e.g. 15"
              type="number"
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Delivery Date</label>
            <input className={FIELD_CLASSES} type="date" />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Collection Time</label>
            <select className={FIELD_CLASSES}>
              <option>8:30 AM</option>
              <option>9:00 AM</option>
              <option>9:30 AM</option>
              <option>10:00 AM</option>
            </select>
          </div>
        </div>

        <div>
          <label className={LABEL_CLASSES.replace("mb-space-2xs", "mb-space-sm")}>
            Product Mix Selection
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            {PRODUCT_MIX_OPTIONS.map(({ label, defaultChecked }) => (
              <label
                key={label}
                className="flex items-center gap-space-xs p-space-sm bg-surface-container-lowest rounded-xl cursor-pointer hover:bg-surface-container transition-colors"
              >
                <input
                  className="w-4 h-4 text-primary rounded focus:ring-primary"
                  type="checkbox"
                  defaultChecked={defaultChecked}
                />
                <span className="text-body-md text-on-surface">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
          <div>
            <label className={LABEL_CLASSES}>Company Name</label>
            <input
              className={FIELD_CLASSES}
              placeholder="Acme Studio"
              type="text"
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Delivery Address</label>
            <input
              className={FIELD_CLASSES}
              placeholder="123 Innovation Way, Suite 400"
              type="text"
            />
          </div>
        </div>

        <div>
          <label className={LABEL_CLASSES}>Contact Person &amp; Phone</label>
          <input
            className={FIELD_CLASSES}
            placeholder="Alex Smith (555-0192)"
            type="text"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary py-4 rounded-xl text-label-md uppercase tracking-wider transition-colors font-bold shadow-sm"
        >
          Request Office Order
        </button>
      </form>
    </div>
  );
}
