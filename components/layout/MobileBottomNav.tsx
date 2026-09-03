import { Croissant, Home, MapPin, ShoppingBag } from "lucide-react";

const MOBILE_LINKS = [
  { path: "home", label: "Home", icon: Home },
  { path: "todays-counter", label: "Counter", icon: Croissant },
  { path: "visit", label: "Visit", icon: MapPin },
] as const;

export function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.06)] z-50 flex items-center justify-around px-space-2xs">
      {MOBILE_LINKS.slice(0, 2).map(({ path, label, icon: Icon }) => (
        <a
          key={path}
          href="#"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface py-2 px-4"
        >
          <Icon size={20} />
          <span className="text-[10px] tracking-wider uppercase font-medium">
            {label}
          </span>
        </a>
      ))}

      <a
        href="#"
        className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl py-2 px-4"
      >
        <ShoppingBag size={20} />
        <span className="text-[10px] tracking-wider uppercase font-bold">
          Order
        </span>
      </a>

      {MOBILE_LINKS.slice(2).map(({ path, label, icon: Icon }) => (
        <a
          key={path}
          href="#"
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface py-2 px-4"
        >
          <Icon size={20} />
          <span className="text-[10px] tracking-wider uppercase font-medium">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
