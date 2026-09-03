import { CounterHero } from "@/components/counter/CounterHero";
import { CounterSection } from "@/components/counter/CounterSection";
import { StatusBanner } from "@/components/counter/StatusBanner";

export const dynamic = "force-dynamic";

export default function TodaysCounter() {
  return (
    <div className="flex flex-col">
      <CounterHero />
      <CounterSection />
      <StatusBanner />
    </div>
  );
}
