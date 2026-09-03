import { Hero } from "@/components/home/Hero";
import { CounterPreview } from "@/components/home/CounterPreview";
import { Philosophy } from "@/components/home/Philosophy";
import { PreOrderBanner } from "@/components/home/PreOrderBanner";
import { GatheringsSection } from "@/components/home/GatheringsSection";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { VisitPreview } from "@/components/home/VisitPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CounterPreview />
      <Philosophy />
      <PreOrderBanner />
      <GatheringsSection />
      <StoryTeaser />
      <VisitPreview />
    </div>
  );
}
