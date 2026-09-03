const GALLERY_IMAGES = [
  {
    alt: "An expansive office breakfast table laid out with wooden boards of freshly baked croissants, pain au chocolat, sourdough slices, and jars of seasonal berry jam.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpTomGS5avzZiuxFiJPeEjgdcIOM0wz7QgKT7LaZ6cY_vh7kB7yYv3Oar0DNQDEdzeyV51ojEpK_RIydxYQDjZ3MgE79UmcU_tO0h6dKrcTHYDSF-Q7S9gAXuctYnQkXNUdsnlCLqWel2WLYBywOrCQYnAQd7BKYVGuQl3DEsejwmF_Kk9v6mo6EU93lsBoIpXCrU-1REcBRpN1tVqOJ4btcUqftz6lJ8tHh972Dtm8LxNtMCiKZR6AA",
  },
  {
    alt: "A minimalist two-tier birthday cake decorated with delicate cream ruffles, fresh figs, and rosemary sprigs, resting on a ceramic cake stand.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZER1OwbZpVo7cQSAa9dHLAWrUFSpa-RAMwEUHh8wKmKGdNo6MszoYpU7mC9MVEcaMnGpAsaeb97nl_qWhoFZD3ITTIWcRZO-CficyLEKsfjMcOHjh2Jo0MhWfCH8UT0ajMI2X1G_WMK8D8J2bkpRI0VGwKFulZBC8WFs4zE9AzEo18SFBhASQv98tM8wj_3x-jtY770xwM1jnik8vtESLHVoKfKetb9YgQWw0tAv3fEHGAtlrSYJ0DA",
  },
  {
    alt: "An assortment of artisan pastry boxes tied with natural twine and branded paper labels, ready for local morning delivery.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR8NuPDGC75_G_-809qjAlN-D8BlY1TFwun287fT5GUjEI1CycO6aFM0ZTLVZvKflsj11bmNugmC-w9VUg22I8UhUwlwnEeZFuVnK4Ng3vOV66td50-PfWZRGP_0Zp2HK2LyzwvSUnfC8QYBiDfWiXohW6djBgtiq8qcRu3JCMX6NW00gl0mByGUcEu9SmG5eh2TmJY5ez9QJV2x1AyzAOigieQhoKOfEFGV_MRBl-Mun7zkBKmViVqQ",
  },
];

export function GalleryStrip() {
  return (
    <section className="w-full py-16 bg-surface-container-high px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-2xl">
          <div>
            <span className="text-label-md uppercase tracking-wider text-primary mb-space-2xs block font-semibold">
              Visual Gallery
            </span>
            <h2 className="text-headline-md font-headline text-on-surface">
              Past Celebrations &amp; Office Spreads
            </h2>
          </div>
          <p className="text-body-sm text-on-surface-variant max-w-sm mt-space-md md:mt-0">
            Every order is baked fresh on the morning of delivery using
            stone-milled regional flours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-lg">
          {/* TODO: replace with owned assets */}
          {GALLERY_IMAGES.map(({ alt, src }) => (
            <div
              key={src}
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-md"
            >
              <img
                alt={alt}
                src={src}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
