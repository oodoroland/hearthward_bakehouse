"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

const FIELD_CLASSES =
  "p-space-sm bg-surface rounded-xl border border-outline-variant text-on-surface focus:outline-none focus:border-primary transition-colors";

export function DetailsPanel({
  onBack,
  onConfirm,
}: {
  onBack: () => void;
  onConfirm: () => void;
}) {
  const [fullName, setFullName] = useState("Eleanor Vance");
  const [mobileNumber, setMobileNumber] = useState("+44 7700 900077");
  const [email, setEmail] = useState("eleanor.vance@atelier.co.uk");
  const [notes, setNotes] = useState(
    "Please slice the sourdough medium-thick if convenient.",
  );

  return (
    <form
      className="bg-surface-container-low p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg"
      onSubmit={(event) => {
        event.preventDefault();
        onConfirm();
      }}
    >
      <div>
        <h2 className="font-headline text-headline-md text-on-surface mb-space-3xs">
          Customer &amp; Collection Details
        </h2>
        <p className="font-body text-body-sm text-on-surface-variant">
          We will send your order confirmation and digital receipt here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-space-2xs">
          <label className="text-label-md text-on-surface uppercase">
            Full Name
          </label>
          <input
            className={FIELD_CLASSES}
            placeholder="Eleanor Vance"
            type="text"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-space-2xs">
          <label className="text-label-md text-on-surface uppercase">
            Mobile Number
          </label>
          <input
            className={FIELD_CLASSES}
            placeholder="+44 7700 900077"
            type="tel"
            required
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-space-2xs">
          <label className="text-label-md text-on-surface uppercase">
            Email Address
          </label>
          <input
            className={FIELD_CLASSES}
            placeholder="eleanor@example.com"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-space-2xs">
          <label className="text-label-md text-on-surface uppercase">
            Dietary Requirements / Collection Notes
          </label>
          <textarea
            className={FIELD_CLASSES}
            placeholder="Please pack the cinnamon buns in a separate box if possible..."
            rows={3}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between pt-space-md">
        <button
          type="button"
          onClick={onBack}
          className="text-on-surface hover:text-primary px-space-md py-space-sm text-label-md uppercase tracking-wider transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        <button
          type="submit"
          className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-space-2xl py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <span>Confirm pre-order</span>
          <CheckCircle size={16} />
        </button>
      </div>
    </form>
  );
}
