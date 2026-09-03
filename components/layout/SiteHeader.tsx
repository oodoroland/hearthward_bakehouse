"use client";

import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./nav-links";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="bg-primary-container text-on-primary-container px-6 py-2 text-center text-label-md flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
        <span>OPEN TODAY · UNTIL 4:00 PM</span>
      </div>

      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
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

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.path}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "transition-colors text-primary font-semibold"
                    : "text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/pre-order"
            className="hidden sm:inline-flex bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-md py-space-xs rounded-xl text-label-md uppercase tracking-wider transition-colors"
          >
            Pre-order
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="text-on-primary" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
