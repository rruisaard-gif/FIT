
# FIT Fysiotherapie — Design System

FIT Fysiotherapie is a physiotherapy practice group operating in **Haarlem, Rotterdam and
Utrecht** (fit-fysiotherapie.nl), founded June 2022 by Ruben Albers and Joffrey Alting.
Multiple locations per city, a broad treatment menu (general/sports/manual physiotherapy,
dry needling, shockwave, echografie, dietetics, pediatric physio, geriatrics/valpreventie),
and a growing footprint of gym/sportclub/hospital partnerships (Xpert Clinics, SportCity,
Personal Gym, Vopak, etc). One product surface today: the **public marketing website**.

## Sources

- `uploads/FIT Fysiotherapie - Brandbook-3.pdf` — the brand's own 17-page brandbook
  (updated 18 Jan 2026). **Primary source of truth** for identity, tone of voice, logo
  rules, exact colors, typography, photography and social guidelines. Quoted/paraphrased
  throughout this readme.
- `uploads/fit-fysiotherapie-merkassets-en-templates.md` — an earlier content-analysis
  document (page-template inventory, component list) inferred from browsing the live
  site. Useful for **page structure and recurring UI blocks**; its color/font guesses
  are superseded by the brandbook where they conflict (they were flagged as unverified
  in the doc itself).
- `https://www.fit-fysiotherapie.nl` (live site, fetched as text) — confirmed page
  copy, navigation structure, pricing table, insurer list, footer content. Fetched as
  rendered text only; no CSS/JS/image binaries were accessible this way (see
  "Missing assets" below).

## Content fundamentals

- **Voice:** informal `je/jij` (never `u`); friendly, accessible, motivating. The
  brandbook is explicit: *"Empathisch… Deskundig (Jip-en-Janneke taal)… Activerend."*
  Good: *"Heb jij ook last van je onderrug? Hier zijn 3 tips om de pijn te verlichten."*
  Bad: *"De patiënt rapporteerde lumbale klachten met beperkte flexie."*
- **The "FIT" wordplay:** the brand deliberately capitalizes **FIT** when a sentence
  puns on both the company name and physical fitness (e.g. "een **FITTER** Nederland",
  "weer **FIT** door het leven"). Use it as an accent, not every sentence.
- **Naming rule:** always "FIT Fysiotherapie" in full — the brandbook explicitly
  forbids "FIT Fysio" or other shorthand.
- **Two taglines, two jobs:** *"Samen werken aan een fit leven"* (relational/emotional
  — hero, mission sections) vs. *"FIT worden, FIT zijn en FIT blijven"* (procedural —
  describing the 3-phase treatment journey: herstel → resultaat → preventie). Don't
  mix both in one section.
- **Recurring content pillars** (hit 2–3 per new page, not all 6): persoonlijke aanpak
  op maat; snelheid/toegankelijkheid ("binnen 24 uur geholpen"); expertise & vertrouwen;
  ketendenken/holistisch; beweging als doel op zich; toegankelijk voor iedereen.
- **Fixed microcopy to reuse verbatim:** CTA button text is always **"Afspraak
  maken"** (never "Boek nu"); under every CTA: *"Op werkdagen binnen 24 uur
  geholpen"*; hero USP triplet: *"Zorg op maat" · "Toegankelijk, flexibel en
  persoonlijk" · "Jong, dynamisch en multidisciplinair"*.
- **Emoji:** used sparingly and functionally — 💛🖤 specifically represent the FIT
  brand colors (yellow/black) at the end of mission-style copy or social captions.
  Not used as generic decoration; brandbook: *"Gebruik beperkt en functioneel… Geen
  overmatig gebruik."*
- **Hashtags (social):** #FITfysiotherapie #FIT #pijnvrijbewegen #rugpijnvrij
  #fysiotips #SAMENWERKENAANEENFITLEVEN.

## Visual foundations

- **Color:** brandbook-exact palette is intentionally minimal — **white #FFFFFF,
  black #000000, yellow #FFFA00, gray #929292**. Yellow is the single accent (CTA
  buttons, highlights); black is the high-contrast/footer surface; gray is body/muted
  text. See `tokens/colors.css` — the 50–900 ramps around each swatch are our
  interpolation for hover/border/surface needs, the 4 base hexes themselves are exact
  and must not change.
- **Type:** brand typeface is **Urbanist** (Google Fonts), Bold for headings / Regular
  for body, Arial as a web fallback only if Urbanist fails to load. Headings are set
  in caps or title case; body text is left-aligned, never centered.
- **Backgrounds:** full-bleed photography behind hero sections with a dark scrim for
  white text legibility; flat white/light-gray content sections; solid black or yellow
  block sections for stats/trust bands. Brandbook confirms a recurring **dot pattern**
  ("bolletjes") SVG motif used as a decorative accent near heroes and section corners
  — recreated here as a CSS radial-dot pattern (`--pattern-dots`, see cards) since the
  original SVG files weren't retrievable (see Missing assets).
- **Photography:** natural light, real people (not stock), active/candid shots
  (exercises, hands-on treatment, guidance) — brandbook: *"Niet inzoomen maar
  croppen… Foto's met portret modus."* Warm, light, fresh color grade (a single
  consistent Lightroom preset is used for Instagram too). No real photography could be
  copied into this system (see below) — screens use labeled placeholder blocks.
  Video/reels are vertical (9:16) with subtitles.
  Social post canvas 1080×1080px, story canvas 1080×1920px.
- **Buttons / CTAs:** solid yellow fill, black text, pill or large-radius rounded
  corners; hover darkens the yellow slightly. Secondary actions are white/outline with
  a gray border.
  - **Corner radii:** generous rounding on cards and buttons (14–22px), pill shape
    (999px) on badges and the primary CTA — reads young/approachable rather than
    clinical.
  - **Shadows:** soft, low-contrast card shadows only (`--shadow-card`); no hard drop
    shadows or neumorphism.
- **Cards:** white surface, subtle shadow, rounded corners, no colored left-border
  accent (deliberately avoided — see anti-pattern note in `styles.css` comments).
- **Trust signals are a first-class, always-visible pattern**, not a one-off section:
  a 3-item trust-badge strip in the topbar, a live review-score widget (~9,2/10,
  500+ beoordelingen), a row of ~12 neutral-grayscale zorgverzekeraar logos repeated on
  nearly every page, and BIG-registration numbers on team profiles.
- **Animation:** brandbook doesn't specify motion; the live site shows no strong
  animation signature. Keep transitions minimal — short fades/opacity and gentle
  hover-darken on interactive elements, standard easing (`--ease-standard`), no
  bounces or elaborate choreography.
- **Layout:** sticky main navigation with a small trust-badge topbar above it; content
  sections alternate text/photo blocks; a floating "Heb je een vraag?" contact card
  recurs mid-page, not just at the top.

## Iconography

- The brandbook does not define a formal icon system, icon font, or SVG set. The live
  site uses small custom white-on-color glyphs (people, orthopedic, rating, shoulder)
  for its stats block, plus a Google-rating star icon and an NL/UK flag glyph — none
  of these binaries were retrievable through the sources available here (see below).
- **Substitution:** this system uses **Lucide** (MIT, CDN-loaded) for all interface
  icons — a similar clean, medium-stroke line style that reads as neutral/modern
  rather than introducing a new decorative language. Flagged for the user; swap for
  the brand's real icon set if/when it's supplied.
- Emoji are used only in copy (💛🖤 brand-color shorthand, sparing use elsewhere), never
  as interface icons.

## Missing assets — flagged for the user

None of the following binary assets could be pulled into this project (the brandbook
PDF's images weren't extractable as clean assets here, and the live site's images/CSS
aren't reachable from this environment as raw files — only page text was readable):

1. **Logo — icon-only mark now supplied** (`assets/logo-mark-white-on-black.jpg`, white line-art on black, used as a round badge). The **full text-lockup variant** (icon + "FIT Fysiotherapie" wordmark, per brandbook section 4) is still missing — until it's supplied, the wordmark is set alongside the mark in type (Urbanist), matching the brandbook's "logo met tekst" usage rule. Please attach the text-lockup file(s) and any monochrome-on-white variant (this one only works on dark surfaces).
2. **Real photography** — practice/treatment/team photos. Screens use plain labeled
   placeholder blocks instead of invented or stock imagery.
3. **The "bolletjes" dot-pattern SVGs, stat-block glyphs, star-rating icon, insurer
   logos, Qualiview review widget, Kwaliteitshuis keurmerk** — recreated as generic
   CSS/Lucide approximations where structurally necessary; swap for the real files
   when available.
4. Exact spacing/grid system and button hover/press pixel values weren't specified in
   either source — `tokens/spacing.css` is a reasonable 4px-based scale, not measured
   from a live stylesheet.

## Index

- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (real Urbanist
  @font-face rules from Google Fonts).
- `guidelines/` — foundation specimen cards (Design System tab): colors, type,
  spacing, dot-pattern motif, trust elements.
- `components/`
  - `core/` — Button, Badge
  - `cards/` — InfoCard, StatCard
  - `marketing/` — Hero, TrustBar, InsurerStrip, ReviewBadge
  - `navigation/` — SiteHeader, Footer, Breadcrumb
  - `feedback/` — FAQAccordion, QuestionCard
- `ui_kits/website/` — interactive click-through recreation of the marketing site
  (homepage, category page, detail page).
- `SKILL.md` — Claude-Code-portable skill wrapper for this design system.

### Intentional additions

No component library or Figma file defines FIT Fysiotherapie's UI primitives — this is
a brand-guidelines-only run. The component set above was authored from scratch, sized
to what the brandbook + site content actually need (trust/review widgets, insurer
strip, FAQ accordion) rather than a generic default kit.
