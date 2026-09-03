"use client";

import { Croissant, Home, MapPin, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MOBILE_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/todays-counter", label: "Counter", icon: Croissant },
  { href: "#", label: "Visit", icon: MapPin },
] as const;

function MobileNavLink({
  href,
  label,
  icon: Icon,
  isActive,
}: {
  href: string;
  label: string;
  icon: typeof Home;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        isActive
          ? "flex flex-col items-center justify-center text-primary py-2 px-4"
          : "flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface py-2 px-4"
      }
    >
      <Icon size={20} />
      <span className="text-[10px] tracking-wider uppercase font-medium">
        {label}
      </span>
    </Link>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.06)] z-50 flex items-center justify-around px-space-2xs">
      {MOBILE_LINKS.slice(0, 2).map((link) => (
        <MobileNavLink
          key={link.href}
          {...link}
          isActive={pathname === link.href}
        />
      ))}

      <Link
        href="/pre-order"
        className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl py-2 px-4"
      >
        <ShoppingBag size={20} />
        <span className="text-[10px] tracking-wider uppercase font-bold">
          Order
        </span>
      </Link>

      {MOBILE_LINKS.slice(2).map((link) => (
        <MobileNavLink
          key={link.href}
          {...link}
          isActive={pathname === link.href}
        />
      ))}
    </div>
  );
}
