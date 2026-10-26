# Hours — Design System

> **Get your time back.**

Hours is a calm, human-first AI consultancy for **small and traditional businesses** — the bakery chain, the regional logistics firm, the 40-person practice. The category is loud and full of FOMO; Hours is *the calm one in a panicking room*. We hand clients clarity and a plan, carry the heavy lifting alongside them, and give them back their scarcest asset: **time**.

This design system encodes that promise visually and verbally. Beauty is the brand's marketing — every report, deck, and template is meant to be so useful and so beautiful that clients share it. Craft is the entire go-to-market, so this system holds a high bar.

---

## Sources

This system was built from the brand identity kit and the materials below. If you have access, explore them to design with higher fidelity:

- **GitHub (this system's source):** [`dusankolenovic/the-hours-design-system`](https://github.com/dusankolenovic/the-hours-design-system) — the compiled Hours design system. This project is a direct import of that repo (`main`); see `github.md` for the sync record and screen map. Explore the repo to design at higher fidelity.
- **Brand kit:** "Hours — Brand Kit v3" (`uploads/v3.html` in the source repo) — the origin of the palette, sunrise logo mark, typography, surface language, and brand essence.
- **GitHub (brand origin):** [`dusankolenovic/branding`](https://github.com/dusankolenovic/branding) — contains the same brand kit HTML.

> The brand is a **consultancy**, not a software product — its "products" are beautiful documents, decks, reports, and a marketing presence. The UI kits here reflect that: a marketing site and a client report/document template, not an app.

---

## What's in here

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point. Consumers link this one file; it `@import`s every token + font file. |
| `tokens/` | CSS custom properties — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`. |
| `fonts/` | Self-hosted Figtree (variable + static cuts). |
| `assets/` | Logo marks & lockups (SVG), in gradient / navy / white. |
| `cards/` | Foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab. |
| `components/core/` | Reusable React primitives — `Button`, `Badge`, `Card`, `Input`, `Logo`, `Stat`, `Quote`, `Band`. |
| `templates/marketing-site/` | The Hours marketing website recreation. |
| `templates/report/` | A client report / document template ("AI Transformation Plan"). |
| `templates/slides/` | Sample deck — title, sections, phases, stats, big message, closing. |
| `templates/data-slides/` | Number-heavy deck — KPI scorecards, P&L and variance tables, bar/line/waterfall charts, revenue mix, cohort matrix, scenarios, guidance ranges. |
| `SKILL.md` | Agent-Skill manifest so this system is usable in Claude Code. |
| `github.md` | Source-repo association + last-sync record. |

---

## Content fundamentals

**The one rule:** *if a stranger on the street wouldn't understand it, rewrite it.* Plain, warm, human words — always.

- **Person & address.** Talk to **one person**, like a friend who happens to be an expert. Use "you" and "we"; never "organizations", "stakeholders", "users", "leverage your assets".
- **Casing.** Sentence case everywhere — headlines, buttons, labels. The only uppercase is the tiny tracked **eyebrow label** (`UPPERCASE`, 0.12em tracking, 10px). Never Title Case Headlines, never ALL-CAPS shouting.
- **Sentence length.** Short. One idea per sentence. Generous full stops. The tagline is three words: *Get your time back.*
- **Tone flexes by moment:** anxious client → slower, softer, reassuring ("You're in good hands."). Technical → patient and plain, translate don't lecture. Wins → genuine and warm but understated. Selling → generous, no-pressure ("Want to see if we can help? Let's have a chat — no pressure.").
- **No emoji** in product copy or UI. (Emoji appear only as informal annotation in internal brand docs, never in client-facing surfaces.) No exclamation-point hype.

**Vocabulary**

| We reach for | We avoid |
| --- | --- |
| calm, clear, simple, human, time, hand, steady, help, alongside, useful, beautiful, breathe, easy | leverage, synergy, disrupt, cutting-edge, supercharge, unlock, game-changing, paradigm, revolutionary, "adapt or die" |

**Before & after**

- ❌ "We leverage cutting-edge generative AI to unlock exponential value." → ✅ "We help you use AI to save real time — without the headache."
- ❌ "Book a demo now to supercharge your ROI!" → ✅ "Want to see if we can help? Let's have a chat — no pressure."
- ❌ "Don't get left behind. Adapt or die." → ✅ "There's no rush. We'll find the few things worth doing, and do them well."

---

## Visual foundations

The whole system is **warm, calm, and unhurried** — like late-afternoon light. Warmth dominates; cool colors only support.

**Color.** The brand is the **sunrise**: coral `#F27059` is primary, surrounded by a warm family of peach `#FFB088`, peach-soft `#FFDCC8`, and amber `#F29E4C`. Cool voices — teal `#3DB8B0` (positive), sky `#6BA3E8` (info), lavender `#9B8FD4` (accent) — appear in support, never leading. Ink is a warm **navy** `#1E2A3A`; surfaces are warm creams (`#FFF9F3`, `#FFF5EB`) on a warm-grey **canvas** `#DDD8CF`. There are *no cold greys* anywhere. Text on light is navy at decreasing opacity (the `--ink-*` scale); text on dark is white at decreasing opacity (`--light-*`).

**Brand essence accents.** The phrase "never the other way around." uses three solid-color spans (not gradient-clip): `--essence-red` `#D95A42` for "never", `--essence-pink` `#C05882` for "the other way", `--essence-violet` `#8B7FC7` for "around."

**Type.** One family, **Figtree**, self-hosted. The signature voice is **Light (300)** for headlines and display — large, with gentle negative tracking (`-0.02em`). Body is Regular (400), UI labels Medium (500), buttons & accents SemiBold (600). Bold (700) is rare. Display sizes run 48–64px; body 15px; the tiny tracked eyebrow label is 10px uppercase. Generous line-height (1.5 body, 1.05 display).

**Backgrounds.** Three signature gradients, always softened with a **grain film** (`--grain`, a fractal-noise SVG at ~4% opacity): `--gradient-warm` (cream → peach → coral → lavender, the hero), `--gradient-dawn` (deep navy night breaking into coral dawn → cream, for dark heroes), and `--gradient-strip` (a simple peach→coral→lavender band). Flat warm surfaces also carry the grain. Soft radial color "shapes" (blurred coral/lavender/sky/teal glows) float behind content as ambient texture.

**Surfaces (v2).** Page body is a near-white warm grey `--surface-light` `#F5F3F0` — airy and elegant. Cards are **pure white** `#FFFFFF` with diffuse shadows, sitting on the light surface. The cream tones (`#FFF5EB`, `#FFF9F3`) are reserved for special accent panels. On **gradient surfaces**, text is always **white** (not navy) — titles at 100%, body at ~72% opacity. The logo mark switches to white on gradients, gradient (coral→pink→lavender) on light surfaces.

**Glass (v2.1, official).** Content floating ON a gradient sits on **glass**: 22% white fill (`--glass-fill`), 24px backdrop blur (`--glass-blur`), a 35% white hairline (`--glass-border`), 18px radius. In React, `Card tone="glass"`. The hard rule: **everything on glass or gradient is white** — headlines 100%, body ~72%, labels ~50%. Never coral, navy, or any palette color as text on a gradient; it disappears into the sunrise. For metrics use `Stat tone="light"`.

**Quote & Band.** Two signature brand moments, both components. `Quote` — one big Figtree-Light white line resting bottom-left on a warm grained gradient card; taglines, client words, closing slides. `Band` — the calm pill strip (peach→coral→lavender) with the logo whispering at 65% on the left, one light message centered, and the URL at 20% on the right; pre-footers, deck closers, document sign-offs.

**Radii.** 8 / 14 / 18 / 20 / 28px, plus full **pills** (`999px`) for buttons and tags. Rounded is the default mood.

**Air.** The system breathes. Sections get 96–128px of vertical padding, cards 28–32px inside, grids 28–40px of gap. When in doubt, add space rather than content — emptiness is part of the calm.

**Motion.** Calm and unhurried — never bouncy. Gentle ease-out (`--ease-calm`), 140–420ms. Fades and soft slides; no spring overshoot, no infinite decorative loops on content.

**Interaction states.** Hover: primary coral darkens to `--coral-deep` `#D95A3F`; outlines fill with a faint ink tint. Press: a small `scale(0.97)` — a gentle physical press, no color flash. Focus: a soft **coral glow** (`--shadow-glow`) rather than a hard outline ring.

**Imagery vibe.** Warm, soft, optimistic — sunrise tones. If photography is used it leans warm and bright. Decorative geometry is limited to the sunrise arc, the horizon line, and blurred radial glows. **Never** hard geometric patterns, neon, or cold tech imagery.

**Things to avoid:** bluish-purple "tech" gradients, neon, hard drop shadows, sharp corners, cold greys, emoji in UI, dense dashboards / stat-slop, exclamation hype, busy patterns.

---

## Iconography

The brand kit is **icon-light by design** — calm means few marks on the page. There is no proprietary icon font. The one bespoke mark is the **sunrise logo** (a half-sun arc over a horizon line), provided in `assets/` as SVG in gradient, navy, and white.

**Approach & substitution.** For interface icons, use **[Lucide](https://lucide.dev)** (link from CDN: `https://unpkg.com/lucide@latest`) — its thin, rounded, open stroke (1.5–2px, round caps) matches Hours's soft, unhurried feel better than filled or sharp icon sets. This is a **flagged substitution**: the brand kit ships no interface-icon set, so Lucide is the recommended stand-in. Keep icon stroke light, sizes modest, and color them with `--ink-500`/`--ink-700` or a single accent — never multicolor.

**Emoji / unicode.** Not used in client-facing surfaces. Avoid emoji entirely in UI and documents.

---

## Using this system

1. Link `styles.css` — that's the whole token + font layer.
2. Reach for **semantic aliases** (`--text-body`, `--surface-card`, `--color-primary`) in product code; the base tokens (`--coral`, `--navy`) sit underneath them.
3. Compose with the `components/core/` primitives; don't re-implement them.
4. Read the UI kits to see the primitives composed into real Hours surfaces.
5. Write copy by the content rules above — plain, warm, one person, no hype.

*Hours — AI in service of the human experience, never the other way around.*
