import { ArrowRight } from "lucide-react";

export type Gathering = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageAlt: string;
  imageSrc: string;
};

export function GatheringCard({ gathering }: { gathering: Gathering }) {
  const { eyebrow, title, description, ctaLabel, imageAlt, imageSrc } =
    gathering;

  return (
    <div className="relative rounded-3xl overflow-hidden group aspect-[16/10] flex flex-col justify-end p-space-lg lg:p-space-2xl">
      {/* TODO: replace with owned asset */}
      <img
        alt={imageAlt}
        src={imageSrc}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent" />

      <div className="relative z-10 text-inverse-on-surface">
        <span className="text-label-md uppercase tracking-widest text-secondary-fixed font-semibold">
          {eyebrow}
        </span>
        <h3 className="font-headline text-headline-lg text-white mt-1 mb-2">
          {title}
        </h3>
        <p className="font-body text-body-md text-inverse-on-surface/90 max-w-md mb-space-md">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white text-label-md uppercase tracking-wider hover:underline"
        >
          <span>{ctaLabel}</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
