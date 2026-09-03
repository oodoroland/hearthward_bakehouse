export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low py-section-padding hidden md:block">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant text-body-sm">
        <div className="font-headline text-headline-sm text-on-surface font-bold">
          Hearthward Bakehouse
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
