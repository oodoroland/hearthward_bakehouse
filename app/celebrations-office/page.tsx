import { CelebrationsHero } from "@/components/celebrations/CelebrationsHero";
import { DecisionPathsSection } from "@/components/celebrations/DecisionPathsSection";
import { GalleryStrip } from "@/components/celebrations/GalleryStrip";

export default function CelebrationsOffice() {
  return (
    <div className="flex flex-col">
      <CelebrationsHero />
      <DecisionPathsSection />
      <GalleryStrip />
    </div>
  );
}
