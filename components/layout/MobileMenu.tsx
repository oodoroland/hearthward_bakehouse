"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./nav-links";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed top-32 left-0 right-0 bottom-16 md:bottom-0 z-40 bg-surface flex flex-col px-6 py-space-lg gap-space-2xs overflow-y-auto">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.path}
            href={link.href}
            onClick={onClose}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "py-space-sm text-headline-sm font-headline text-primary font-semibold border-b border-outline-variant/20"
                : "py-space-sm text-headline-sm font-headline text-on-surface border-b border-outline-variant/20"
            }
          >
            {link.label}
          </Link>
        );
      })}

      <Link
        href="/pre-order"
        onClick={onClose}
        className="mt-space-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-md py-space-sm rounded-xl text-label-md uppercase tracking-wider transition-colors text-center"
      >
        Pre-order
      </Link>
    </div>
  );
}
