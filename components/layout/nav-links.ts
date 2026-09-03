export type NavLink = {
  label: string;
  path: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "home", href: "/" },
  { label: "Today's Counter", path: "todays-counter", href: "/todays-counter" },
  // { label: "Pre-order", path: "pre-order", href: "/pre-order" },
  { label: "Visit", path: "visit", href: "/visit" },
  {
    label: "Celebrations & Office",
    path: "celebrations-office",
    href: "/celebrations-office",
  },
  // { label: "Our Story", path: "our-story", href: "#" },
];
