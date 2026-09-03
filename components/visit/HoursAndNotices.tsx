import { CalendarX, Phone } from "lucide-react";

const WEEKLY_HOURS = [
  { days: "Wednesday – Sunday", time: "7:30 AM – 4:00 PM", closed: false },
  {
    days: "Monday – Tuesday",
    time: "Resting / Baking prep (Closed)",
    closed: true,
  },
];

const HOLIDAY_HOURS = [
  { date: "Dec 24 (Christmas Eve)", time: "7:30 AM – 2:00 PM", closed: false },
  { date: "Dec 25 – Dec 26", time: "Closed", closed: true },
];

export function HoursAndNotices() {
  return (
    <section className="w-full py-section-padding px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="text-label-md uppercase tracking-wider text-primary font-semibold">
            Schedule
          </div>
          <h2 className="font-headline text-headline-lg font-bold text-on-surface">
            Opening Hours
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Our ovens burn hot Wednesday through Sunday. Mondays and
            Tuesdays are dedicated to sourdough fermentation, dough
            resting, and baking preparation.
          </p>

          <div className="bg-surface-container-low rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            {WEEKLY_HOURS.map(({ days, time, closed }) => (
              <div
                key={days}
                className="flex justify-between items-center py-3 border-b border-outline-variant/20 last:border-b-0"
              >
                <span className="font-body text-body-md font-medium text-on-surface">
                  {days}
                </span>
                <span
                  className={
                    closed
                      ? "font-body text-body-md text-on-surface-variant italic"
                      : "font-body text-body-md text-primary font-semibold"
                  }
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="text-label-md uppercase tracking-wider text-primary font-semibold">
            Important Notes
          </div>
          <h2 className="font-headline text-headline-lg font-bold text-on-surface">
            Seasonal &amp; Holiday Hours
          </h2>

          <div className="bg-primary-container/10 p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <CalendarX className="text-primary" size={24} />
              <div>
                <h3 className="font-headline text-headline-sm font-bold text-on-surface">
                  Holiday Hours Notice
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant mt-1">
                  Holiday hours may differ. Please check before travelling
                  during festive weeks.
                </p>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl flex flex-col gap-3 mt-2">
              {HOLIDAY_HOURS.map(({ date, time, closed }, index) => (
                <div
                  key={date}
                  className={
                    index === 0
                      ? "flex justify-between items-center text-body-sm"
                      : "flex justify-between items-center text-body-sm pt-2 border-t border-outline-variant/20"
                  }
                >
                  <span className="font-body font-medium text-on-surface">
                    {date}
                  </span>
                  <span
                    className={
                      closed
                        ? "font-body text-on-surface-variant font-medium"
                        : "font-body text-primary font-semibold"
                    }
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-high p-6 rounded-2xl flex items-center justify-between mt-2">
            <div>
              <div className="font-headline text-headline-sm font-bold text-on-surface">
                Need a custom pickup?
              </div>
              <div className="font-body text-body-sm text-on-surface-variant mt-1">
                Call us directly to arrange special orders.
              </div>
            </div>
            <a
              href="tel:5550192834"
              className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-4 py-2.5 rounded-xl text-label-md uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0"
            >
              <Phone size={16} />
              Call bakery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
