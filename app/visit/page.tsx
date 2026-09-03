import { VisitHero } from "@/components/visit/VisitHero";
import { FindUsSection } from "@/components/visit/FindUsSection";
import { HoursAndNotices } from "@/components/visit/HoursAndNotices";

export default function Visit() {
  return (
    <div className="flex flex-col">
      <VisitHero />
      <FindUsSection />
      <HoursAndNotices />
    </div>
  );
}
