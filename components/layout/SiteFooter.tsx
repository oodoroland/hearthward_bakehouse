import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low py-section-padding hidden md:block">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant text-body-sm">
        <div className="font-headline text-headline-sm text-on-surface font-bold">
          <div className="flex items-center gap-3">
                    <Image
                      alt="Hearthward Logo"
                      className="h-8 w-auto object-contain"
                      src="/heartward_logo.png"
                      width={27}
                      height={32}
                      priority
                    />
                    <span className="font-headline text-headline-sm font-bold text-on-surface tracking-wide uppercase">
                      Hearthward
                    </span>
                  </div>
        </div>
        <div>© {new Date().getFullYear()} Hearthward Bakehouse. All rights reserved.</div>
        <div className="flex gap-space-md">
          <a className="hover:text-on-surface transition-colors" href="#">
            Instagram
          </a>
          <a className="hover:text-on-surface transition-colors" href="#">
            Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}
