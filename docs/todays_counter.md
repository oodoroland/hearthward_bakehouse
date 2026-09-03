<!DOCTYPE html>

<html lang="en"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><style>@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }</style><script src="https://cdn.tailwindcss.com"></script><script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "on-secondary-container": "#795422", "on-error-container": "#93000a", "on-tertiary-fixed": "#211b09", "on-primary-fixed": "#3d0317", "on-tertiary-container": "#b6aa90", "secondary-fixed": "#ffddb7", "surface-container-low": "#fff1ea", "inverse-on-surface": "#fceee7", "on-surface": "#211a16", "primary-fixed": "#ffd9df", "surface-container": "#f9ebe4", "secondary-fixed-dim": "#efbe81", "secondary-container": "#fecb8e", "secondary": "#7c5725", "primary-fixed-dim": "#ffb1c1", "tertiary-container": "#473f2a", "tertiary-fixed-dim": "#d2c5a9", "primary-container": "#6d283b", "error": "#ba1a1a", "on-secondary": "#ffffff", "surface-bright": "#fff8f5", "surface-container-highest": "#eee0d9", "outline": "#867275", "inverse-surface": "#372f2b", "on-primary-container": "#ee91a5", "primary": "#511226", "on-surface-variant": "#534345", "background": "#fff8f5", "surface-tint": "#934659", "inverse-primary": "#ffb1c1", "on-background": "#211a16", "on-secondary-fixed-variant": "#61400f", "tertiary": "#302916", "on-tertiary-fixed-variant": "#4f4631", "on-primary-fixed-variant": "#762f42", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#efe1c4", "on-primary": "#ffffff", "error-container": "#ffdad6", "on-secondary-fixed": "#2a1700", "on-error": "#ffffff", "outline-variant": "#d8c1c4", "surface-variant": "#eee0d9", "on-tertiary": "#ffffff", "surface": "#fff8f5", "surface-container-high": "#f3e5df", "surface-dim": "#e5d7d1" }, "borderRadius": { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, "spacing": { "space-3xl": "96px", "space-xs": "12px", "space-sm": "16px", "space-md": "24px", "space-xl": "48px", "space-2xs": "8px", "space-lg": "32px", "section-padding": "80px", "space-3xs": "4px", "grid-gutter": "24px", "space-2xl": "64px" }, "fontFamily": { "headline-lg-mobile": ["playfairDisplay"], "label-md": ["inter"], "body-sm": ["inter"], "headline-xl": ["playfairDisplay"], "headline-md": ["playfairDisplay"], "body-lg": ["inter"], "headline-lg": ["playfairDisplay"], "body-md": ["inter"], "headline-sm": ["playfairDisplay"], "headline-xl-mobile": ["playfairDisplay"] }, "fontSize": { "headline-lg-mobile": ["26px", { "lineHeight": "32px", "letterSpacing": "0em", "fontWeight": "600" }], "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }], "body-sm": ["13px", { "lineHeight": "20px", "fontWeight": "400" }], "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "600" }], "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "500" }], "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }], "headline-lg": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "600" }], "body-md": ["15px", { "lineHeight": "24px", "fontWeight": "400" }], "headline-sm": ["20px", { "lineHeight": "28px", "fontWeight": "500" }], "headline-xl-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }] } } } }</script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=inter:wght@100..900&family=playfairDisplay:wght@100..900&display=swap" rel="stylesheet"/></head><body class="bg-surface font-body text-on-surface pb-20 md:pb-0"><header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="bg-primary-container text-on-primary-container px-6 py-2 text-center text-label-md flex items-center justify-center gap-2"><span class="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span><span>OPEN TODAY · UNTIL 4:00 PM</span></div><div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between"><div class="flex items-center gap-3"><img alt="Hearthward Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWFv6X54hPwNPQvJYTikGFsjiCGejcIw6D8Tlp-82_12k2dUpvWYUOY8cQHa4EyqRc7-SYZpTfPDqGpGZApTL5PiuQixH5gofUOwFX3TTYZ5ud1ZMvYj2Ly4Z_Ipklg6UWL34Q7v58xPsGEogLUDC2coraSfnUMsoI3Eo3Kn4i0RHQYT1zkzn010oVVV7dAtYvOtvy8q8AtRez-4nuq3auzHfpxPmkuH-sZ6-sHSL4X8zBUVzf0AFA1w"/><span class="font-headline-sm font-bold text-on-surface tracking-wide uppercase">Hearthward</span></div><nav class="hidden lg:flex items-center gap-8" data-active-classes="text-primary font-semibold"><a class="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#">Home</a><a aria-current="page" class="transition-colors text-primary font-semibold" data-path="todays-counter" href="#">Today's Counter</a><a class="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="pre-order" href="#">Pre-order</a><a class="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="visit" href="#">Visit</a><a class="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="celebrations-office" href="#">Celebrations & Office</a><a class="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="our-story" href="#">Our Story</a></nav><div class="flex items-center gap-4"><a class="hidden sm:inline-flex bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-md py-space-xs rounded-xl font-label-md uppercase tracking-wider transition-colors" data-path="pre-order" href="#">Pre-order</a><div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main class="w-full pt-32 bg-surface"><div class="flex flex-col w-full bg-surface text-on-surface">
<!-- Hero / Header Section -->
<section class="w-full px-6 lg:px-12 pt-space-xl pb-space-lg max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div class="flex flex-col gap-space-2xs">
<div class="flex items-center gap-space-xs text-secondary font-label-md uppercase tracking-wider">
<span class="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span>Thursday · September 3</span>
</div>
<h1 class="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">Today's Counter</h1>
<p class="text-body-lg text-on-surface-variant max-w-xl">Baked this morning in small batches. Once they are gone, they are gone until tomorrow.</p>
</div>
<!-- Quick Status Badge -->
<div class="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-xs rounded-xl self-start md:self-auto shadow-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">bakery_dining</span>
<div class="flex flex-col">
<span class="font-label-md text-on-surface font-bold uppercase tracking-wider">Oven Status</span>
<span class="text-body-sm text-on-surface-variant">Batch 3 of 4 currently cooling</span>
</div>
</div>
</section>
<!-- Category Filter Tabs -->
<section class="w-full px-6 lg:px-12 max-w-7xl mx-auto mb-space-lg">
<div class="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
<button class="px-space-md py-space-2xs rounded-full bg-primary-container text-on-primary-container font-label-md uppercase tracking-wider transition-all shadow-sm whitespace-nowrap">All Items</button>
<button class="px-space-md py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-label-md uppercase tracking-wider transition-all whitespace-nowrap">Bread</button>
<button class="px-space-md py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-label-md uppercase tracking-wider transition-all whitespace-nowrap">Pastries</button>
<button class="px-space-md py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-label-md uppercase tracking-wider transition-all whitespace-nowrap">Sweet</button>
<button class="px-space-md py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest font-label-md uppercase tracking-wider transition-all whitespace-nowrap">Coffee & Drinks</button>
</div>
</section>
<!-- Main Product Grid -->
<section class="w-full px-6 lg:px-12 max-w-7xl mx-auto pb-section-padding">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
<!-- Item 1: Country Sourdough -->
<div class="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative">
<div class="relative h-64 w-full overflow-hidden bg-surface-container cursor-pointer" onclick="openProductModal('Country Sourdough', '£6.50', 'Naturally fermented artisan country loaf with a caramelized crust and open, tender crumb. 900g.')">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A rustic artisan loaf of country sourdough bread resting on a dark wood flour-dusted workbench, morning sunlight casting warm editorial shadows across the scored crust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWBR4d2ihqPmv_eogYMG5mupw5Gj1MszeqaumOfrIbQzcLdiDw-BpRv1RcU4hc9_qrIQq-FaHEJvb83dOAomxOVF8qvwQcHpDQOsHocJjTMao3B2nzZJMtjI_47c82NAC7qjhqmGHWb6j7lx4TDc_gWN4dk01dNJVp5_GXcdDAuXmVyj-9uVI5PDxHOFGLoPeAPwjOgxG5ThDcoAimOpYIhoKHPUfP1WAb4peNlp28FhOF1lB_h53isQ"/>
<div class="absolute top-3 left-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-md uppercase tracking-wider font-bold">4 left in batch</div>
</div>
<div class="p-space-md flex flex-col flex-grow justify-between gap-space-md">
<div class="flex flex-col gap-space-3xs">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer" onclick="openProductModal('Country Sourdough', '£6.50', 'Naturally fermented artisan country loaf with a caramelized crust and open, tender crumb. 900g.')">Country Sourdough</h3>
<span class="font-headline-md font-bold text-secondary">£6.50</span>
</div>
<p class="text-body-sm text-on-surface-variant line-clamp-2">Naturally fermented · 900g, Available today in small morning batches.</p>
</div>
<div class="flex items-center justify-between pt-space-2xs">
<span class="text-label-md text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Available today
            </span>
<button class="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-sm py-space-2xs rounded-xl font-label-md uppercase tracking-wider transition-colors flex items-center gap-1" onclick="openProductModal('Country Sourdough', '£6.50', 'Naturally fermented artisan country loaf with a caramelized crust and open, tender crumb. 900g.')">
<span class="material-symbols-outlined text-[16px]">add</span> Pre-order
            </button>
</div>
</div>
</div>
<!-- Item 2: Almond Croissant -->
<div class="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative">
<div class="relative h-64 w-full overflow-hidden bg-surface-container cursor-pointer" onclick="openProductModal('Almond Croissant', '£4.20', 'Laminated pure butter pastry filled with rich almond frangipane, double-baked to golden perfection.')">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A flaky, golden-brown twice-baked almond croissant dusted with powdered sugar and toasted sliced almonds, set against a warm linen background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0R-RHMEI8Zd4J6L7BymFTN_CpAByaoZ3o5MesJPlNODlgXvu95yxO_f9M4h-PCxib3oQxMLjCz2chUqvxImtosGPLstw1UMz4jDUPIZsIZInRR-dIry5OUyAq2DcTSV2JpNMlnVS8xPXkpV0zhaHcvf4llrHuy4wAZhuzu_-ILJS3UTZfyX_qmTtaanAtq4udeTSI-qhHAb-KtilLgc43h0PDbgaBE7kjBN0hmSV7zQSFtJj01ajqPA"/>
<div class="absolute top-3 left-3 bg-primary text-on-primary px-3 py-1 rounded-full text-label-md uppercase tracking-wider font-bold">Fresh batch</div>
</div>
<div class="p-space-md flex flex-col flex-grow justify-between gap-space-md">
<div class="flex flex-col gap-space-3xs">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer" onclick="openProductModal('Almond Croissant', '£4.20', 'Laminated pure butter pastry filled with rich almond frangipane, double-baked to golden perfection.')">Almond Croissant</h3>
<span class="font-headline-md font-bold text-secondary">£4.20</span>
</div>
<p class="text-body-sm text-on-surface-variant line-clamp-2">Laminated pure butter pastry filled with almond frangipane.</p>
</div>
<div class="flex items-center justify-between pt-space-2xs">
<span class="text-label-md text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Just pulled
            </span>
<button class="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-sm py-space-2xs rounded-xl font-label-md uppercase tracking-wider transition-colors flex items-center gap-1" onclick="openProductModal('Almond Croissant', '£4.20', 'Laminated pure butter pastry filled with rich almond frangipane, double-baked to golden perfection.')">
<span class="material-symbols-outlined text-[16px]">add</span> Pre-order
            </button>
</div>
</div>
</div>
<!-- Item 3: Cinnamon Bun -->
<div class="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative">
<div class="relative h-64 w-full overflow-hidden bg-surface-container cursor-pointer">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A soft brioche cinnamon roll drizzled with rich cream cheese icing, glistening under soft morning bakery light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyq22RhnEQwoOXDlVf4qY3ahGr0ck508XWT1Z4MgfxGVZLqOgHo2HWlov886JL42WXOoqSL34jE1yX54dsPeX19j-a1MnXKFDEboovUXU4fZ3EPaxaVY19HQsKuzyXKACjksQExGe980PSXxzMZjOIg_puqVjp2igSDYg5V1dixMRoh_7AFX3R1A51MLHAxWy_kt1SEbY99poJbKwYPbDxWbd_NRGv-uNYt9PKfnRv9ddi21A6V6w_ew"/>
<div class="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md uppercase tracking-wider font-bold">Selling fast</div>
</div>
<div class="p-space-md flex flex-col flex-grow justify-between gap-space-md">
<div class="flex flex-col gap-space-3xs">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-md text-on-surface">Cinnamon Bun</h3>
<span class="font-headline-md font-bold text-secondary">£3.80</span>
</div>
<p class="text-body-sm text-on-surface-variant line-clamp-2">Soft brioche swirl with Ceylon cinnamon and cream cheese icing.</p>
</div>
<div class="flex items-center justify-between pt-space-2xs">
<span class="text-label-md text-amber-700 font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span> Selling fast
            </span>
<button class="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-sm py-space-2xs rounded-xl font-label-md uppercase tracking-wider transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">add</span> Pre-order
            </button>
</div>
</div>
</div>
<!-- Item 4: Cardamom Bun -->
<div class="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative">
<div class="relative h-64 w-full overflow-hidden bg-surface-container cursor-pointer">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Swedish style twisted cardamom bun studded with pearl sugar crystals on a dark stoneware plate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZvINJYuZh9RbB5z5nk9gZrCvfiI42GMxjudEhRGSyHuRcE9KIw2tfApCSZvy9n3wDWACMzMeyulSqKZJ1Ecme1rtSOXNUbUyO4mdu2GTz_GuuQvnVfoQPeWw6QQNrcfMMnCCPxLliRcZX5WD_8C3PKp5oQiHYf5ZQScDOi8AN7Sxf53yE_e2T0IXgarXYwLl7XVcCpnzl-hw5H9NKKxjaxM4A8KtKaPzLflScIbgInPWQFvochxjkTw"/>
</div>
<div class="p-space-md flex flex-col flex-grow justify-between gap-space-md">
<div class="flex flex-col gap-space-3xs">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-md text-on-surface">Cardamom Bun</h3>
<span class="font-headline-md font-bold text-secondary">£3.80</span>
</div>
<p class="text-body-sm text-on-surface-variant line-clamp-2">Freshly ground green cardamom pods, twisted dough, pearl sugar crunch.</p>
</div>
<div class="flex items-center justify-between pt-space-2xs">
<span class="text-label-md text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Available today
            </span>
<button class="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-sm py-space-2xs rounded-xl font-label-md uppercase tracking-wider transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">add</span> Pre-order
            </button>
</div>
</div>
</div>
<!-- Item 5: Seeded Rye Loaf (Sold Out State) -->
<div class="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm opacity-80 relative">
<div class="relative h-64 w-full overflow-hidden bg-surface-container grayscale">
<img class="w-full h-full object-cover" data-alt="A dark dense seeded rye loaf sliced on a wooden board, showing sunflower, pumpkin, and flax seeds throughout the crumb." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-4-WYcw4px4dEYFTIdf_gPfLYFgwNJhz3x_xMDBZt81zjMHYsR2XV3f3bs-76Zh8D3slQzRR9jBwmRMvKAUbxe8xkBPkcS3urQjC_jUPLWHpiMeNSDiuxCL02MEsZBifk1Jr8YF-abBuEkxpRDLbFkXQonydPbJQMyb32wBnNc-hMG-BoGK80RyKm5xW2r28A1G02tvc8reXqHrQtL052HtVvL-t2fPykh-bMBHC9z2u5PSpmUK3OzQ"/>
<div class="absolute inset-0 bg-surface/40 backdrop-blur-[2px] flex items-center justify-center">
<span class="bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded-xl font-label-md uppercase tracking-wider font-bold shadow-lg">Sold out today</span>
</div>
</div>
<div class="p-space-md flex flex-col flex-grow justify-between gap-space-md">
<div class="flex flex-col gap-space-3xs">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-md text-on-surface line-through opacity-70">Seeded Rye Loaf</h3>
<span class="font-headline-md font-bold text-on-surface-variant">£7.00</span>
</div>
<p class="text-body-sm text-on-surface-variant line-clamp-2">Dark rye, sunflower, pumpkin and flax seeds. Sold out today - check tomorrow.</p>
</div>
<div class="flex items-center justify-between pt-space-2xs">
<span class="text-label-md text-error font-bold uppercase tracking-wider flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">event_busy</span> Check tomorrow
            </span>
<button class="bg-surface-container-highest text-on-surface-variant/50 px-space-sm py-space-2xs rounded-xl font-label-md uppercase tracking-wider cursor-not-allowed" disabled="">
              Sold out
            </button>
</div>
</div>
</div>
<!-- Item 6: House Filter Coffee -->
<div class="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative">
<div class="relative h-64 w-full overflow-hidden bg-surface-container cursor-pointer">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A ceramic mug of pour-over filter coffee steaming gently on a wooden counter with soft morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAta6r-A8IN5T1jom1P4rMIR5JeN878Sxs-YRAFXVhtlWeb1-VkAiobJb7LMCz5qC9cvezDZPvdqIoNt8xL_UtR7I_kae6b4BfhmDHsQr4SubnLPVgLVjnxF_cr-SsDg3DkLlsgZVvMzmuoGaS5FJjiKiIMpIj_lk5HhXHt_P7NuHu83lUvc4zdnOymWW3mKEUVn75IOjoli0sDST9tm9YPtCXR_VyySyPpdqr2HhEVrWZ05zUbTWvJbQ"/>
</div>
<div class="p-space-md flex flex-col flex-grow justify-between gap-space-md">
<div class="flex flex-col gap-space-3xs">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-md text-on-surface">House Filter Coffee</h3>
<span class="font-headline-md font-bold text-secondary">£3.60</span>
</div>
<p class="text-body-sm text-on-surface-variant line-clamp-2">Single origin Ethiopian beans, brewed fresh by the cup.</p>
</div>
<div class="flex items-center justify-between pt-space-2xs">
<span class="text-label-md text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Brewed fresh
            </span>
<button class="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-space-sm py-space-2xs rounded-xl font-label-md uppercase tracking-wider transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">add</span> Add to order
            </button>
</div>
</div>
</div>
</div>
</section>
<!-- Bakery Status Demonstration Banner Section -->
<section class="w-full bg-surface-container-high py-space-xl px-6 lg:px-12">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
<div class="flex items-center gap-space-md">
<div class="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-[24px]">info</span>
</div>
<div class="flex flex-col">
<h4 class="font-headline-sm text-on-surface font-bold">Closed Sunday & Monday</h4>
<p class="text-body-sm text-on-surface-variant">Our bakers rest and prep fresh sourdough starters for the upcoming week. Pre-orders for Wednesday pickup open Tuesday morning.</p>
</div>
</div>
<a class="bg-primary text-on-primary px-space-md py-space-xs rounded-xl font-label-md uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors whitespace-nowrap" href="#">View Weekly Schedule</a>
</div>
</section>
<!-- Interactive Product Detail Modal / Bottom Sheet Simulation -->
<div class="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300" id="product-modal">
<div class="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300 flex flex-col">
<!-- Modal Header Image -->
<div class="relative h-72 w-full bg-surface-container">
<img class="w-full h-full object-cover" data-alt="Detailed close-up of a golden double-baked almond croissant with crisp pastry layers and powdered sugar dusting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvL1M-7OnBBTQyQXMlltCredHqfhX4fzHkqFEHz8RxjM8mSLqdSqZCopTsqMaxGpykmXo3ez7RJg5NhXYKs0nPD604sFOkhPdhZhqXc0FF5VZl5_QmdAyaVBd0yrN_ELDSulfLS2teqD60MsvAP664bMgCD4CkPEnG1hIbdnW8Sn8ox2em2IIp8QYD7XxyEgxrzBOw7K4p6UsKgiDYAEzOqkbylf45KHJgqt-10BPzG4btFc7jNL6wCg"/>
<button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/90 text-on-surface flex items-center justify-center hover:bg-surface transition-colors shadow-md" onclick="closeProductModal()">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
<div class="absolute bottom-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-label-md uppercase tracking-wider font-bold">Fresh Batch</div>
</div>
<!-- Modal Content -->
<div class="p-space-lg flex flex-col gap-space-md">
<div class="flex justify-between items-baseline">
<h3 class="font-headline-lg text-on-surface" id="modal-title">Almond Croissant</h3>
<span class="font-headline-lg font-bold text-secondary" id="modal-price">£4.20</span>
</div>
<p class="text-body-md text-on-surface-variant" id="modal-desc">Laminated pure butter pastry filled with rich almond frangipane, double-baked to golden perfection.</p>
<!-- Ingredients & Allergens -->
<div class="flex flex-col gap-space-2xs pt-space-2xs border-t border-outline-variant/30">
<div class="text-label-md uppercase tracking-wider text-on-surface font-bold">Ingredients</div>
<p class="text-body-sm text-on-surface-variant">Organic stoneground wheat flour, European cultured butter, almond meal, sugar, eggs, sea salt.</p>
</div>
<div class="flex flex-col gap-space-2xs">
<div class="text-label-md uppercase tracking-wider text-on-surface font-bold">Allergens</div>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container px-3 py-1 rounded-full text-body-sm text-on-surface">Wheat</span>
<span class="bg-surface-container px-3 py-1 rounded-full text-body-sm text-on-surface">Milk</span>
<span class="bg-surface-container px-3 py-1 rounded-full text-body-sm text-on-surface">Eggs</span>
<span class="bg-surface-container px-3 py-1 rounded-full text-body-sm text-on-surface">Almonds (Tree Nuts)</span>
</div>
</div>
<!-- Quantity Selector & Action -->
<div class="flex items-center justify-between pt-space-md border-t border-outline-variant/30">
<div class="flex items-center gap-space-xs bg-surface-container px-space-xs py-2 rounded-xl">
<button class="w-8 h-8 rounded-lg bg-surface flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface" onclick="decrementQty()">
<span class="material-symbols-outlined text-[16px]">remove</span>
</button>
<span class="font-headline-sm font-bold w-8 text-center text-on-surface" id="qty-display">1</span>
<button class="w-8 h-8 rounded-lg bg-surface flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface" onclick="incrementQty()">
<span class="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
<button class="flex-1 ml-space-md bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container py-3 rounded-xl font-label-md uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md" onclick="closeProductModal(); showToast();">
<span class="material-symbols-outlined text-[18px]">shopping_bag</span> Add to Pre-order
          </button>
</div>
</div>
</div>
</div>
<!-- Toast Notification -->
<div class="fixed bottom-20 md:bottom-8 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-xs transform translate-y-24 opacity-0 transition-all duration-300" id="toast">
<span class="material-symbols-outlined text-emerald-400" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-body-md font-medium">Added to your pre-order counter list.</span>
</div>
<!-- Interactive Script -->
<script>
    let currentQty = 1;
    function openProductModal(title, price, desc) {
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-price').innerText = price;
      document.getElementById('modal-desc').innerText = desc;
      currentQty = 1;
      document.getElementById('qty-display').innerText = currentQty;
      const modal = document.getElementById('product-modal');
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.children[0].classList.remove('scale-95');
      modal.children[0].classList.add('scale-100');
    }

    function closeProductModal() {
      const modal = document.getElementById('product-modal');
      modal.classList.add('opacity-0', 'pointer-events-none');
      modal.children[0].classList.remove('scale-100');
      modal.children[0].classList.add('scale-95');
    }

    function incrementQty() {
      currentQty++;
      document.getElementById('qty-display').innerText = currentQty;
    }

    function decrementQty() {
      if (currentQty > 1) {
        currentQty--;
        document.getElementById('qty-display').innerText = currentQty;
      }
    }

    function showToast() {
      const toast = document.getElementById('toast');
      toast.classList.remove('translate-y-24', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 3500);
    }
  </script>
</div></main><footer class="w-full bg-surface-container-low py-section-padding hidden md:block"><div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant text-body-sm"><div class="font-headline-sm text-on-surface font-bold">Hearthward Bakehouse</div><div>© 2024 Hearthward Bakehouse. All rights reserved.</div><div class="flex gap-space-md"><a class="hover:text-on-surface transition-colors" href="#">Instagram</a><a class="hover:text-on-surface transition-colors" href="#">Newsletter</a></div></div></footer><div class="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.06)] z-50 flex items-center justify-around px-space-2xs"><a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface py-2 px-4" data-path="home" href="#"><span class="material-symbols-outlined text-[20px]">home</span><span class="text-[10px] tracking-wider uppercase font-medium">Home</span></a><a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface py-2 px-4" data-path="todays-counter" href="#"><span class="material-symbols-outlined text-[20px]">bakery_dining</span><span class="text-[10px] tracking-wider uppercase font-medium">Counter</span></a><a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl py-2 px-4" data-path="pre-order" href="#"><span class="material-symbols-outlined text-[20px]">shopping_bag</span><span class="text-[10px] tracking-wider uppercase font-bold">Order</span></a><a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface py-2 px-4" data-path="visit" href="#"><span class="material-symbols-outlined text-[20px]">location_on</span><span class="text-[10px] tracking-wider uppercase font-medium">Visit</span></a></div></body></html>
