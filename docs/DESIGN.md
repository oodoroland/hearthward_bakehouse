---
name: Hearthward Bakehouse
colors:
  surface: '#fff8f5'
  surface-dim: '#e5d7d1'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ea'
  surface-container: '#f9ebe4'
  surface-container-high: '#f3e5df'
  surface-container-highest: '#eee0d9'
  on-surface: '#211a16'
  on-surface-variant: '#534345'
  inverse-surface: '#372f2b'
  inverse-on-surface: '#fceee7'
  outline: '#867275'
  outline-variant: '#d8c1c4'
  surface-tint: '#934659'
  primary: '#511226'
  on-primary: '#ffffff'
  primary-container: '#6d283b'
  on-primary-container: '#ee91a5'
  inverse-primary: '#ffb1c1'
  secondary: '#7c5725'
  on-secondary: '#ffffff'
  secondary-container: '#fecb8e'
  on-secondary-container: '#795422'
  tertiary: '#302916'
  on-tertiary: '#ffffff'
  tertiary-container: '#473f2a'
  on-tertiary-container: '#b6aa90'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c1'
  on-primary-fixed: '#3d0317'
  on-primary-fixed-variant: '#762f42'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#efbe81'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#61400f'
  tertiary-fixed: '#efe1c4'
  tertiary-fixed-dim: '#d2c5a9'
  on-tertiary-fixed: '#211b09'
  on-tertiary-fixed-variant: '#4f4631'
  background: '#fff8f5'
  on-background: '#211a16'
  surface-variant: '#eee0d9'
typography:
  headline-xl:
    fontFamily: playfairDisplay
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: playfairDisplay
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: playfairDisplay
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: playfairDisplay
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  headline-md:
    fontFamily: playfairDisplay
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: playfairDisplay
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-3xs: 4px
  space-2xs: 8px
  space-xs: 12px
  space-sm: 16px
  space-md: 24px
  space-lg: 32px
  space-xl: 48px
  space-2xl: 64px
  space-3xl: 96px
  grid-gutter: 24px
  section-padding: 80px
---

## Brand & Style

This design system embodies a sophisticated independent bakery aesthetic, bridging the tactile warmth of a neighborhood artisan bakehouse with the restraint of high-end editorial design. The brand personality is rooted in craft, heritage, and modern culinary appreciation. 

The UI evokes an emotional response of comfort, anticipation, and quiet luxury. It feels like stepping into a sunlit morning bakery where flour-dusted oak counters meet impeccably curated typography and rich, tactile imagery.

We employ an editorial design style characterized by generous whitespace, restrained architectural lines, high-contrast typography pairings, and a deep reverence for organic textures. The interface rejects sterile corporate patterns in favor of a warm, human-centric digital experience.

## Colors

The color palette is inspired by raw baking ingredients, warm ovens, and rich autumnal fruits. It creates an enveloping, organic atmosphere while maintaining strict legibility and modern digital contrast standards.

- **Cream (`#F2E4C7`):** The primary warm background. Serves as the main canvas for large editorial sections, cards, and soft surfaces, wrapping the user in a soft, welcoming glow.
- **Burnt Fig (`#6D283B`):** The primary brand color. Used with intention for high-impact CTAs, active navigation states, key buttons, selected collection slots, and essential focal accents.
- **Crumb (`#C99B62`):** The secondary warm accent. Ideal for prices, small categorical labels, real-time availability indicators, and subtle interactive hover details.
- **Char (`#28211D`):** The primary text and dark structural color. Provides crisp legibility for headings and body copy, anchors icons, and defines high-contrast structural dividers.

## Typography

Typography bridges timeless artisanal heritage with contemporary digital precision. High-end editorial serif headlines command attention with literary grace, while clean, highly legible modern sans-serif body text ensures effortless scanning across menus, item descriptions, and checkout flows.

- **Headlines:** Set in Playfair Display, lending an authoritative, refined, and appetising character to section titles and product names.
- **Body & Labels:** Set in Inter, providing neutral, systematic support that keeps the focus entirely on content and imagery.

Maintain generous line-heights and allow ample whitespace around all text blocks to preserve the airy, unhurried atmosphere of an independent boutique.

## Layout & Spacing

The layout philosophy relies on a fluid grid system combined with generous editorial pacing. Content breathes through wide margins and intentional whitespace, avoiding dense, cluttered layouts.

- **Grid Model:** A responsive 12-column fluid grid governed by 24px gutters on desktop, scaling down to 16px on tablet and mobile viewports.
- **Vertical Rhythm:** Spacing is anchored to an 8px base grid, utilizing larger interval jumps (`space-xl` through `space-3xl`) between distinct editorial modules to replicate the feel of a printed culinary journal.
- **Breakpoints:** Mobile (< 768px) utilizes single-column stacking with edge-to-edge photography; Tablet (768px – 1024px) introduces two-column product grids; Desktop (> 1024px) unlocks three-to-four column editorial spreads with asymmetric focal imagery.

## Elevation & Depth

Depth is conveyed through subtle tonal layering and low-contrast outlines rather than heavy drop shadows. This maintains the clean, flat editorial aesthetic while establishing clear interactive hierarchy.

- **Surface Tiers:** Backgrounds transition gracefully between Cream (`#F2E4C7`) and slightly tinted surface cards, creating a tactile paper-like stack.
- **Low-Contrast Outlines:** Interactive containers and card boundaries utilize soft, low-opacity strokes drawn from the Char (`#28211D`) palette at 10% to 15% opacity. 
- **Shadow Treatment:** When shadows are strictly necessary (e.g., floating navigation bars or dropdown menus), they utilize extremely diffused, low-opacity ambient tints of Burnt Fig (`#6D283B`) rather than harsh black drop shadows to preserve warmth.

## Shapes

A soft, restrained roundedness level (`1`) is employed across all UI components. This provides a welcoming, organic feel without sacrificing the architectural dignity of the brand.

- **Base Radius:** Standard UI elements (inputs, secondary buttons) feature a `0.25rem` (4px) corner radius.
- **Large Containers:** Cards, image containers, and modal surfaces utilize `rounded-lg` (`0.5rem`) or `rounded-xl` (`0.75rem`) to soften boundaries.
- **Pills & Badges:** Category filters, dietary tags (e.g., "Sourdough", "Gluten-Free"), and availability pills use full pill-shaped rounding (`9999px`) to create friendly, distinct focal points against the structured layouts.

## Components

All components must reflect the boutique, artisan character of Hearthward Bakehouse. Every interactive element should feel deliberate, warm, and tactile.

- **Buttons:** Primary actions use Burnt Fig (`#6D283B`) backgrounds with Cream text, featuring soft rounded corners and subtle color shifts on hover. Secondary actions use transparent backgrounds with Char text and a restrained Char outline.
- **Chips & Tags:** Small status indicators and category filters use Crumb (`#C99B62`) at low opacities or solid backgrounds with dark text, keeping labels compact and scannable.
- **Lists:** Clean typographic lists separated by hairline Char dividers at 15% opacity. Ideal for daily menus, ingredients lists, and allergen information.
- **Checkboxes & Radio Buttons:** Custom-styled with clean square/circular boundaries in Char, filling with Burnt Fig when selected. Avoid native browser defaults.
- **Input Fields:** Generously padded text inputs set against soft surface backgrounds, featuring a subtle Char border that deepens to Burnt Fig on focus.
- **Cards:** Product and story cards feature edge-to-edge editorial food photography, followed by generous padding for the item title (Playfair Display), description (Inter), and price (Crumb).
- **Additional Components:**
  - *Daily Loaf Tracker:* A specialized availability widget utilizing Crumb accents to display real-time stock levels (e.g., "4 loaves left in batch").
  - *Collection Slot Selector:* Interactive time-slot cards that highlight in Burnt Fig when selected for local pickup or delivery orders.