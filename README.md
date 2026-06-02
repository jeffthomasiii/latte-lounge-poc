# Latte & Lounge POC

A GitHub Pages proof-of-concept website for **Latte & Lounge**, a faith-based lifestyle platform and morning faith ritual for professional Christian women.

**Live site:** https://jeffthomasiii.github.io/latte-lounge-poc/

## Project Snapshot

**Latte & Lounge** exists to help professional women intentionally begin their day anchored in God through honest conversation, Scripture, prayer, and reflection before the demands of life begin.

- **Primary tagline:** A sacred pause before the world gets loud.
- **Secondary tagline:** Where women meet God before the world gets loud.
- **Brand promise:** Anchored instead of anxious.
- **Primary audience:** Professional Christian women
- **Content focus:** Devotionals, prayer, honest conversations, professional faith encouragement, and practical morning rhythms

This repository is currently a **proof-of-concept**, not the final production version of the brand website. Its purpose is to test the website structure, visual direction, content model, navigation, and early launch experience.

## Current Site Structure

The site is organized as a small Jekyll website published through GitHub Pages from the `docs/` folder.

| Section | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Main brand landing page and first impression |
| About | `/about/` | Founder/brand positioning and purpose |
| Blog | `/blog/` | Morning reflections, devotionals, and faith-based articles |
| Podcast | `/podcast/` | Short faith-filled conversations and prayer episodes |
| Prayer Resources | `/prayer-resources/` | Practical prayers for real mornings and real responsibilities |
| Contact | `/contact/` | Basic contact pathway |
| Subscribe | `/subscribe/` | Email community / future signup page |

## Tech Stack

- **GitHub Pages** for hosting
- **Jekyll** for static site generation
- **Markdown** for page, post, podcast, and prayer content
- **Liquid** for layouts, includes, and reusable content patterns
- **CSS** for the custom Latte & Lounge visual system
- **Google Fonts** for the current free font implementation

## Repository Structure

```text
README.md

docs/
  _config.yml              # Site title, tagline, description, collections, and permalink settings
  _data/
    brand.yml              # Central brand values used across the site
    navigation.yml         # Main navigation links
  _includes/               # Reusable HTML sections such as header, footer, and brand dividers
  _layouts/                # Page templates for home, posts, podcast episodes, and resources
  _posts/                  # Blog posts using Jekyll date-based filenames
  _podcast/                # Podcast episode collection
  _prayers/                # Prayer resource collection
  assets/
    css/main.css           # Main visual styling, colors, fonts, spacing, and components
    images/                # Logo, hero, lifestyle, and supporting site imagery
  index.md                 # Homepage content
  about.md                 # About page
  blog.md                  # Blog landing page
  podcast.md               # Podcast landing page
  prayer-resources.md      # Prayer Resources landing page
  contact.md               # Contact page
  subscribe.md             # Subscribe page
```

## Brand System Notes

The current visual system should continue to follow the Latte & Lounge brand identity.

### Official Color Palette

| Color | HEX | Typical Use |
| --- | --- | --- |
| Cream | `#F6F2ED` | Primary background and spacious layouts |
| Latte Beige | `#E7D6C2` | Warm neutral sections and cards |
| Soft Mocha | `#8B6E5A` | Primary text, icons, structure, and grounding |
| Warm Taupe | `#8B7D6B` | Secondary text and muted contrast |
| Muted Gold | `#C8A668` | Fine accents, separators, and premium details |
| Terracotta | `#D36A5C` | CTA buttons, highlights, and signature personality moments |
| Sage | `#A4B59B` | Optional supporting calm accent |

### Color Ratio Guidance

Use the palette with the approved ratio system:

- **70%** Cream + Latte Beige
- **20%** Soft Mocha + Warm Taupe
- **8%** Terracotta
- **2%** Muted Gold
- Sage may be used as a supporting accent, but it should not become dominant.

### Current Font Implementation

The current proof-of-concept uses free Google Fonts as practical alternatives for the official brand typography direction:

| Brand Role | Current Free Font | Purpose |
| --- | --- | --- |
| Display / Headlines | Cormorant Garamond | Elegant editorial serif alternative |
| Body / Navigation / UI | Montserrat | Clean modern sans-serif |
| Accent Script | Sacramento | Script accent used sparingly |

Font imports and CSS variables are managed in:

```text
docs/assets/css/main.css
```

## Content Direction

Latte & Lounge content should feel like **coffee with a trusted friend**: warm, wise, grounded, conversational, faith-filled, practical, and emotionally honest.

Preferred content formula:

```text
Story → Scripture → Shift → Action → Prayer
```

Primary content pillars:

1. **Before the World Wakes** — morning devotionals and Scripture-centered content
2. **Lounge Conversations** — honest conversations about life, leadership, burnout, boundaries, and faith
3. **Faith in the Boardroom** — faith-centered encouragement for professional women
4. **Sacred Pause** — short prayer-centered resets
5. **Anchored Living** — practical spiritual formation, routines, journaling, Sabbath, and rest

Avoid content that feels preachy, performative, overly polished, shame-based, productivity-obsessed, or disconnected from the life of a professional Christian woman.

## Making Common Updates

### Update Site Metadata

Edit:

```text
docs/_config.yml
```

Use this for the site title, tagline, description, URL, base URL, permalink structure, and collection settings.

### Update Core Brand Values

Edit:

```text
docs/_data/brand.yml
```

Use this for reusable brand language such as the name, primary tagline, secondary tagline, promise, audience, and description.

### Update Navigation

Edit:

```text
docs/_data/navigation.yml
```

To hide a page from the main navigation, remove or comment out its entry in this file. The page may still exist and remain accessible by direct URL unless the page file itself is removed, renamed, or unpublished.

### Update Homepage Copy

Edit:

```text
docs/index.md
```

Use this for the main editable homepage message.

Some homepage structure, hero content, buttons, imagery, and layout sections are controlled in:

```text
docs/_layouts/home.html
```

### Update Styles, Colors, Fonts, and Components

Edit:

```text
docs/assets/css/main.css
```

This file controls the visual design system, including CSS variables, color palette, typography, buttons, cards, dividers, homepage sections, footer styling, and responsive behavior.

### Add a Blog Post

Create a new Markdown file in:

```text
docs/_posts/
```

Use the Jekyll naming format:

```text
YYYY-MM-DD-post-title.md
```

Example:

```text
2026-05-30-meeting-god-before-checking-your-phone.md
```

### Add a Podcast Episode

Create a new Markdown file in:

```text
docs/_podcast/
```

Podcast episode pages are generated from the `podcast` collection configured in `docs/_config.yml`.

### Add a Prayer Resource

Create a new Markdown file in:

```text
docs/_prayers/
```

Prayer resource pages are generated from the `prayers` collection configured in `docs/_config.yml`.

### Add or Replace Images

Place images in:

```text
docs/assets/images/
```

When replacing images, keep filenames consistent when possible so existing page references do not need to be updated.

## Local Preview

This site is designed for GitHub Pages. Basic edits can be made directly in GitHub and previewed after GitHub Pages rebuilds.

For local preview, use a Ruby/Jekyll environment and run from the `docs/` folder:

```bash
cd docs
jekyll serve --baseurl ""
```

Then open the local URL shown in the terminal.

> Note: This repository may need a `Gemfile` later if the project needs a more controlled local development setup.

## Publishing Workflow

1. Make edits in the appropriate file.
2. Commit changes to the `main` branch.
3. GitHub Pages rebuilds the site from the `docs/` folder.
4. Review the live site.
5. Refine copy, styling, spacing, images, and responsive behavior as needed.

## Current POC Priorities

Recommended next refinements:

- Finalize which pages should be public for the first launch.
- Remove hidden or future pages from navigation until they are ready.
- Continue refining the homepage visual hierarchy.
- Replace placeholder imagery with final brand-aligned images.
- Confirm blog, podcast, and prayer resource card styles.
- Add a working email signup or connect the Subscribe page to the chosen email platform.
- Review mobile spacing, accessibility, alt text, and color contrast.
- Keep all design updates aligned with the approved color ratio system.

## Brand Guardrails

Latte & Lounge should remain:

- Warm
- Elevated
- Peaceful
- Feminine
- Modern
- Grounded
- Sophisticated
- Faith-centered
- Emotionally intelligent
- Professional

Avoid drifting into designs or messaging that feel:

- Rustic farmhouse
- Overly floral
- Busy or cluttered
- Cold corporate
- Trendy for trend’s sake
- Overly churchy
- Productivity-first instead of peace-first

## Working Definition

**Latte & Lounge helps professional Christian women meet with God in the quiet of the morning so they can lead, live, and love from a place of peace instead of pressure.**
