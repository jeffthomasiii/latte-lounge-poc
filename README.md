<p align="center">
  <img src="docs/assets/images/logo-latte-lounge-wordmark.png" alt="Latte & Lounge" width="460">
</p>

<p align="center"><strong>A sacred pause before the world gets loud.</strong></p>

# Latte & Lounge

A GitHub Pages website for **Latte & Lounge**, a faith-based platform created by **Samatra** for professional women who love God and carry a lot.

**Live site:** https://jeffthomasiii.github.io/latte-lounge-poc/

> The repository name retains `-poc` from the project’s original proof-of-concept phase. The project has moved beyond a basic POC and is now being developed as the active Latte & Lounge brand website and content platform.

## Project Snapshot

Latte & Lounge helps professional women set their day with God before responsibilities, pressure, decisions, and other people begin setting it for them.

The idea developed during a demanding transition in Samatra’s professional life. As she moved into greater leadership responsibility, she noticed that mornings spent talking honestly with God—often over coffee at her kitchen island—changed the trajectory of the day.

- **Founder:** Samatra
- **Primary tagline:** A sacred pause before the world gets loud.
- **Secondary tagline:** Where women meet God before the world gets loud.
- **Core message:** Set your day with God before your day begins setting you.
- **Brand promise:** Anchored instead of anxious.
- **Primary audience:** Professional women who love God and carry a lot
- **Content focus:** Scripture, prayer, honest conversations, faith at work, women in leadership, biblical decision-making, and wisdom passed forward

## Brand Guides

The current brand source of truth is maintained in [`brand-guides/`](brand-guides/README.md):

1. [Creative Foundation](brand-guides/CREATIVE_FOUNDATION.md) — who the brand is, who it serves, and how it should feel
2. [Brand Style Guide](brand-guides/BRAND_STYLE_GUIDE.md) — logo, color, typography, photography, and visual guardrails
3. [Website Design System](brand-guides/WEBSITE_DESIGN_SYSTEM.md) — layouts, components, responsive behavior, accessibility, and implementation rules
4. [Content Standards](brand-guides/CONTENT_STANDARDS.md) — Samatra’s voice, content pillars, writing structures, Scripture use, and editorial review

When earlier project notes conflict with these current guides, use the guides first.

## Current Site Structure

The site is a Jekyll website published through GitHub Pages from the `docs/` folder.

| Section | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Main brand invitation and first impression |
| About | `/about/` | Samatra’s founder story, audience, purpose, and future vision |
| Blog | `/blog/` | Scripture, honest conversations, leadership wisdom, and practical reflections |
| Podcast | `/podcast/` | Short reflections, prayers, interviews, and conversations |
| Prayer Resources | `/prayer-resources/` | Honest prayers for real mornings, pressure, decisions, and heavy moments |
| Contact | `/contact/` | Contact, story, interview, collaboration, and development inquiries |
| Subscribe | `/subscribe/` | Email community and morning encouragement signup |

## Current Content Pillars

1. **Set Your Day** — prayer, Scripture, reflection, and preparation before responsibilities begin
2. **Raw & Real Conversations** — honest conversations about emotional weight, transitions, relationships, boundaries, and real life
3. **Faith at Work** — biblical wisdom for integrity, decisions, conflict, boundaries, and responsibility
4. **Women Who Lead** — practical wisdom for growing responsibility and leadership situations women may not have been prepared for
5. **A Biblical View of Everyday Life** — faith applied to relationships, communication, money, character, service, and ordinary choices
6. **Wisdom Passed Forward** — interviews, personal lessons, and leadership conversations shared for another woman’s good

See the [Content Standards](brand-guides/CONTENT_STANDARDS.md) for definitions and editorial guidance.

## Tech Stack

- **GitHub Pages** for hosting
- **Jekyll** for static-site generation
- **Markdown** for pages, posts, podcast episodes, and prayer content
- **Liquid** for layouts, includes, and reusable content patterns
- **CSS** for the custom Latte & Lounge design system
- **Google Fonts** for the current free web-font implementation

## Repository Structure

```text
README.md
brand-guides/
  README.md
  CREATIVE_FOUNDATION.md
  BRAND_STYLE_GUIDE.md
  WEBSITE_DESIGN_SYSTEM.md
  CONTENT_STANDARDS.md

docs/
  _config.yml              # Site metadata, collections, and permalink settings
  _data/
    brand.yml              # Reusable public-facing brand values
    navigation.yml         # Main navigation links
  _includes/               # Reusable HTML sections such as header and footer
  _layouts/                # Templates for home, pages, posts, podcasts, and resources
  _posts/                  # Blog posts using Jekyll date-based filenames
  _podcast/                # Podcast episode collection
  _prayers/                # Prayer resource collection
  assets/
    css/                    # Global styles, components, and responsive refinements
    images/                 # Logo, favicon, hero, lifestyle, and supporting imagery
  index.md                 # Homepage source content
  about.md                 # About and founder story
  blog.md                  # Blog landing page
  podcast.md               # Podcast landing page
  prayer-resources.md      # Prayer Resources landing page
  contact.md               # Contact page
  subscribe.md             # Subscribe page
```

## Brand Implementation Summary

### Official Palette

| Color | HEX | Typical Use |
| --- | --- | --- |
| Cream | `#F6F2ED` | Primary backgrounds and spacious layouts |
| Latte Beige | `#E7D6C2` | Warm sections and cards |
| Soft Mocha | `#8B6E5A` | Brand brown, icons, and structure |
| Warm Taupe | `#8B7D6B` | Secondary text and muted contrast |
| Muted Gold | `#C8A668` | Fine accents and separators |
| Terracotta | `#D36A5C` | Calls to action and signature emphasis |
| Sage | `#A4B59B` | Optional calm supporting accent |

### Current Web Typography

| Brand Role | Current Web Font | Purpose |
| --- | --- | --- |
| Display / Headlines | Cormorant Garamond | Editorial serif alternative to Canela |
| Body / Navigation / UI | Montserrat | Modern sans-serif alternative to Avenir Next |
| Accent Script | Sacramento | Script alternative used sparingly |

See the [Brand Style Guide](brand-guides/BRAND_STYLE_GUIDE.md) for the official identity direction and usage rules.

## Central Brand Data

Reusable public brand language is maintained in:

```text
docs/_data/brand.yml
```

Current values include:

- Brand name
- Founder
- Primary and secondary taglines
- Brand promise
- Core message
- Audience line
- Short description

Use this file when the same language appears in multiple templates. Do not hard-code alternate versions without a deliberate reason.

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

### Update Navigation

Edit:

```text
docs/_data/navigation.yml
```

Removing a page from navigation does not delete or unpublish the page.

### Update Homepage Copy

Primary homepage layout and visible copy are controlled in:

```text
docs/_layouts/home.html
```

Supporting source content is in:

```text
docs/index.md
```

### Update Styles and Components

Styles are loaded through several files in `docs/assets/css/`. The final implemented result depends on their order in:

```text
docs/_layouts/default.html
```

Review the [Website Design System](brand-guides/WEBSITE_DESIGN_SYSTEM.md) before adding new global styles or components.

### Add a Blog Post

Create a Markdown file in:

```text
docs/_posts/
```

Use the Jekyll naming format:

```text
YYYY-MM-DD-post-title.md
```

### Add a Podcast Episode

Create a Markdown file in:

```text
docs/_podcast/
```

### Add a Prayer Resource

Create a Markdown file in:

```text
docs/_prayers/
```

### Add or Replace Images

Place images in:

```text
docs/assets/images/
```

Use descriptive filenames, preserve expected aspect ratios, optimize images for the web, and provide useful alt text where the image is meaningful.

## Local Preview

Run from the `docs/` folder in a Ruby/Jekyll environment:

```bash
cd docs
jekyll serve --baseurl ""
```

Then open the local URL shown in the terminal.

> The repository may need a `Gemfile` later if the project requires a more controlled local development setup.

## Publishing Workflow

1. Create a focused branch.
2. Make edits in the appropriate content, component, or data files.
3. Review the relevant brand guide.
4. Preview or validate the site when a local Jekyll environment is available.
5. Review desktop and mobile behavior.
6. Open a pull request.
7. Merge approved changes into `main`.
8. Allow GitHub Pages to rebuild the site from `docs/`.
9. Review the live site and refine if necessary.

## Current Development Priorities

- Continue refining Samatra’s voice and vision across all pages.
- Validate the current content-pillar hierarchy through real content.
- Decide which pages and features are ready for the first public launch.
- Replace remaining placeholder imagery with final brand-aligned images.
- Add a working email signup and official contact method.
- Replace podcast audio placeholders with actual episodes.
- Continue improving mobile spacing, accessibility, alt text, and color contrast.
- Reduce unnecessary CSS duplication as components stabilize.
- Keep visual polish balanced with Samatra’s raw, welcoming, and nonjudgmental voice.

## Current Product Scope

### Active Focus

- Website
- Blog and written reflections
- Prayer resources
- Short podcast episodes
- Interviews and conversations
- Email community development

### Future Possibilities

- Leadership resources
- Guided conversations
- Digital resources
- Workshops
- Community gatherings
- Mentorship
- Coaching
- Professional development
- Retreats and in-person experiences

Future offerings should not be presented as currently available until they have been developed and approved.

## Working Definition

**Latte & Lounge is a faith-based platform where professional women come to set their day with God, have honest conversations about what they carry, and receive spiritual and practical wisdom for work, leadership, relationships, and everyday life.**
