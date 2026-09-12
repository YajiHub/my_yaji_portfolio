---
name: Obsidian Terminal
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#19aee8'
  on-tertiary-container: '#003e55'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies a dark, technical minimalist aesthetic engineered for elite software artisans and independent builders. It balances the austere precision of an IDE terminal with high-craft editorial sensibility.

- **Personality:** Precision-engineered, intentional, intellectually rigorous, and quiet yet commanding.
- **Target Audience:** Engineering leaders, technical founders, design engineers, and discerning collaborators evaluating high-order craftsmanship.
- **Emotional Response:** A sense of focused immersion, architectural competence, absolute reliability, and understated technological mastery.
- **Design Movement:** Technical Minimalist with targeted Cyber-Tactile accents. It avoids decorative clutter in favor of crisp monospaced metadata, subtle hairline surface boundaries, ambient luminous halos, and dot-matrix visual anchors.

## Colors

The palette is rooted in an abyss of deep obsidian and cold carbon, allowing electric emerald and cyan signals to command micro-interactions and operational states.

- **Canvas & Surface Architecture:**
  - Base Canvas: `#0a0a0c` (deep obsidian void).
  - Raised Tier 1 (Card Base): `#111215` (recessed slate-black).
  - Raised Tier 2 (Hover/Active Shell): `#18191f`.
  - Surface Glass: `rgba(17, 18, 21, 0.75)` with backdrop filter.
- **Hairlines & Dividers:**
  - Default Structural Border: `rgba(255, 255, 255, 0.08)`.
  - Accent / Interactive Stroke: `#22242a`.
  - Focused Accent Border: `rgba(16, 185, 129, 0.4)`.
- **Text Tiers:**
  - Pure Focus Headings: `#f8fafc` (high-clarity off-white).
  - Primary Body & Metadata: `#94a3b8` (cool muted slate).
  - De-emphasized Code & Footers: `#64748b` (deep steel).
- **Accents:**
  - Emerald Primary (`#10b981`): Status signals, active production builds, key links.
  - Cyan Secondary (`#06b6d4`): Interactive states, repository stars, auxiliary metrics.
  - Emerald Glow Tint: `rgba(16, 185, 129, 0.12)` for radial spotlights behind spotlight cards.

## Typography

Typography functions as the primary visual architecture. We pair **Geist**—for its razor-sharp geometric neutrality and crisp low-contrast tracking—with **JetBrains Mono** for technical signifiers, file paths, telemetry, and taxonomy pills.

- Headings require tight negative letter-spacing (`-0.02em` to `-0.04em`) to establish high graphic density against dark ground.
- Technical subheaders, timestamps, status indicators, and git hashes strictly mandate `JetBrains Mono` transformed to uppercase or raw monospace strings.
- Long-form narrative blocks in `body-lg` use relaxed leading (`26px`) to ensure effortless scanning against deep charcoal surfaces.

## Layout & Spacing

The layout adopts a high-density, centralized single-column to 12-column adaptive fluid grid constrained to an ultra-disciplined max-width of `1040px` (or `720px` for technical writing/editorial layouts).

- **Grid Discipline:**
  - Mobile (<640px): Single-column stack with `margin: 1.25rem` and `gutter: 1.25rem`.
  - Tablet (640px - 1024px): 6-column grid with `margin: 2.5rem` and `gutter: 1.5rem`.
  - Desktop (>1024px): 12-column grid with `margin: 5rem` (centered auto) and `gutter: 2rem`.
- **Dot-Matrix Structural Canvases:**
  Background accent grids use subtle dotted matrix backgrounds (`radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)`) set on a `24px x 24px` grid, masked out smoothly with radial edge fades.
- **Rhythm:** Spacing between disparate thematic sections maintains a wide cadence (`space-3xl`), while intra-card telemetry sits tightly on `space-xs` and `space-sm` increments.

## Elevation & Depth

Depth in this system avoids heavy opaque drop shadows. Instead, it relies on light transmission, edge illumination, and layered luminous radiance.

- **Surface Layering:**
  - Level 0 (Base Canvas): Flat `#0a0a0c`.
  - Level 1 (Static Cards / Modules): `#111215` encased in a 1px border of `rgba(255, 255, 255, 0.07)`.
  - Level 2 (Interactive Hover / Modals): `rgba(24, 25, 31, 0.85)` augmented with `backdrop-filter: blur(12px)`.
- **Luminous Edge Highlights:**
  Elevated surfaces feature a subtle inset highlight to mimic precision chamfered glass: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`.
- **Ambient Halos:**
  Spotlight cards project a soft, cursor-following or anchored radial glow using `rgba(16, 185, 129, 0.08)` to `rgba(6, 182, 212, 0.04)` diffused over `80px` radius without hard cutoffs.

## Shapes

The geometric identity is calibrated to `1` (Soft), creating an intentional contrast between ultra-tight structural containers and organic pill-shaped telemetry badges.

- **Primary Containers & Project Cards:** Structured with `0.375rem` to `0.5rem` (`rounded-lg`) corner radii to maintain a chiseled, industrial slate feel.
- **Micro UI & Badges:** Tech stack chips, command palette triggers, and live status pulses use full pill rounds (`rounded-full` / `9999px`) to immediately separate operational tags from content architecture.
- **Form Inputs & Action Strips:** Grounded with uniform `0.375rem` corners matching code block containers.

## Components

### Buttons
- **Primary Action:** Solid `#10b981` background with deep `#052e16` text or crisp off-white text, font `JetBrains Mono` 13px weight 500, padded `space-sm` vertical by `space-md` horizontal. Hover elevates luminance and adds an emerald radial haze (`0 0 16px rgba(16, 185, 129, 0.35)`).
- **Ghost / Technical Secondary:** `#111215` background, 1px border of `rgba(255, 255, 255, 0.1)`. Slate text (`#94a3b8`) transitioning to `#ffffff` with border switching to `#22242a` on hover.

### Tech Stack Chips & Pills
- Monospaced badges styled with `label-badge` typography.
- Background: `rgba(255, 255, 255, 0.03)` paired with a 1px hair border `rgba(255, 255, 255, 0.08)`.
- Padding: `0.2rem 0.625rem`, shape fully pill-rounded (`9999px`).
- Interactive pills reflect an emerald/cyan terminal dot indicator (`4px x 4px`) flanking the leading label.

### Interactive Project Cards
- Substrate: `#111215` with `1px solid rgba(255, 255, 255, 0.07)`.
- Internal Layout: Card headers exhibit a monospace timestamp and active deployment indicator (pulsing emerald LED dot).
- Hover Behavior: Border transitions seamlessly to `rgba(16, 185, 129, 0.4)` while a faint gradient glow tracks cursor coordinates over the background.

### Input Fields & Terminal Emulators
- Inputs: Deep void background (`#0a0a0c`), 1px stroke (`#22242a`), text in `#f8fafc`, placeholder text in `#64748b`. Focus shifts border to `#06b6d4` with an inner halo.
- Monospace Terminal Prompts: Styled with a leading cyan `>` glyph and blinking rectangular cursor (`#10b981`).

### Lists & Activity Feeds
- Raw row dividers built with `1px solid rgba(255, 255, 255, 0.05)`.
- Left-aligned timestamp in `JetBrains Mono` (`#64748b`), center title in `#f8fafc`, right-aligned external arrow (`↗`) that shifts `2px` top-right on row hover.

### Dot-Matrix Grid Accents
- Framed decorative panels anchoring hero spaces and project thumbnails, framed with dashed hairline borders (`1px dashed #22242a`) containing low-opacity coordinate labels (e.g., `LOC: [37.7749, -122.4194]`).
