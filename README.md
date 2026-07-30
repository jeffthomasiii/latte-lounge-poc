# Latte & Lounge POC

A GitHub Pages proof-of-concept website for **Latte & Lounge**, a faith-based platform created by **Samatra** for professional women who love God and carry a lot.

**Live site:** https://jeffthomasiii.github.io/latte-lounge-poc/

## Project Snapshot

Latte & Lounge helps professional women set their day with God before responsibilities, pressure, decisions, and other people begin setting it for them.

The idea was born during a demanding transition in Samatra’s professional life. As she moved into regional leadership and carried greater responsibility, she noticed that the mornings she spent talking honestly with God—often over coffee at her kitchen island—changed the trajectory of her day.

- **Founder:** Samatra
- **Primary tagline:** A sacred pause before the world gets loud.
- **Secondary tagline:** Where women meet God before the world gets loud.
- **Core message:** Set your day with God before your day begins setting you.
- **Brand promise:** Anchored instead of anxious.
- **Primary audience:** Professional women who love God and carry a lot
- **Content focus:** Scripture, prayer, honest conversations, faith at work, women in leadership, biblical decision-making, and wisdom passed forward

This repository is currently a **proof of concept**, not the final production version of the brand website. Its purpose is to test the website structure, visual direction, content model, navigation, and early launch experience.

## Current Site Structure

The site is organized as a small Jekyll website published through GitHub Pages from the `docs/` folder.

| Section | Path | Purpose |
| --- | --- | --- |
| Home | `/` | Main brand invitation and first impression |
| About | `/about/` | Samatra’s founder story, audience, purpose, and future vision |
| Blog | `/blog/` | Scripture, honest conversations, leadership wisdom, and practical reflections |
| Podcast | `/podcast/` | Short reflections, prayers, interviews, and conversations |
| Prayer Resources | `/prayer-resources/` | Honest prayers for real mornings, pressure, decisions, and heavy moments |
| Contact | `/contact/` | Future contact, story, interview, collaboration, and development inquiries |
| Subscribe | `/subscribe/` | Future email community and morning encouragement signup |

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
  _includes/               # Reusable HTML sections such as header and footer
  _layouts/                # Page templates for home, posts, podcast episodes, and resources
  _posts/                  # Blog posts using Jekyll date-based filenames
  _podcast/                # Podcast episode collection
  _prayers/                # Prayer resource collection
  assets/
    css/main.css           # Main visual styling, colors, fonts, spacing, and components
    images/                # Logo, hero, lifestyle, and supporting site imagery
  index.md                 # Homepage source content
  about.md                 # About and founder story
  blog.md                  # Blog landing page
  podcast.md               # Podcast landing page
  prayer-resources.md      # Prayer Resources landing page
  contact.md               # Contact page
  subscribe.md             # Subscribe page
```

## Brand and Messaging Foundation

### Core Brand Idea

**Latte & Lounge helps professional women who love God set their day with Him before the work, people, decisions, and responsibilities ahead begin directing them.**

### Spiritual Invitation

Come to God honestly and bring Him what you are carrying.

Latte & Lounge should never imply that a woman needs:

- A perfect quiet-time routine
- A particular prayer posture
- A beautifully staged morning
- An uninterrupted hour
- The right Scripture already in mind
- Polished words before she speaks to God

Intentionality matters. Perfection is not required.

### Desired Transformation

A woman may arrive mentally overloaded, emotionally heavy, focused on everyone who needs her, or uncertain about what the day will require.

The content should help her leave:

- Having placed the day before God
- Believing He has heard her
- Spiritually grounded
- Emotionally steadier
- Prepared to make decisions
- Ready to respond through a biblical worldview
- Anchored instead of controlled by pressure

## Voice and Tone

Latte & Lounge should sound like **Samatra**.

The voice is:

- Warm
- Direct
- Honest
- Conversational
- Scripture-rooted
- Emotionally aware
- Practical
- Nonjudgmental
- Familiar
- Spiritually confident
- Unpretentious

Primary voice reference:

> A trusted auntie in the kitchen who loves God, tells the truth, listens without judgment, and shares what she has learned because she genuinely wants another woman to grow.

The voice is not:

- Condescending
- Performative
- Spiritually superior
- Overly polished
- Corporate
- Artificially inspirational
- Formulaic
- Detached
- Preachy
- Judgmental

Natural phrases and concepts to reinforce:

- Set your day before your day sets you.
- Bring God what you are carrying.
- Come as you are.
- No perfect routine. No pretense.
- Raw and real conversation.
- Faith for work, leadership, relationships, and everyday life.
- Anchored instead of anxious.

## Content Direction

Preferred content formula:

```text
Story → Scripture → Honest Reflection → Practical Wisdom → Action or Prayer
```

### 1. Set Your Day

Morning prayer, Scripture, reflection, and spiritual preparation before responsibilities begin.

### 2. Raw & Real Conversations

Nonjudgmental conversations about emotional heaviness, transitions, burnout, relationships, boundaries, disappointment, loneliness, and not having everything together.

### 3. Faith at Work

A biblical worldview applied to leadership, integrity, workplace relationships, decisions, conflict, responsibility, and professional life.

### 4. Women Who Lead

Wisdom for women entering greater responsibility, navigating unfamiliar rooms, making decisions, leading people, and growing without adequate preparation or mentorship.

Samatra has a particular concern for women of color who may enter leadership spaces without access to the guidance, preparation, sponsorship, or mentorship they deserve.

### 5. A Biblical View of Everyday Life

Faith applied to marriage, relationships, ethics, communication, emotional responses, service, money, character, and ordinary choices.

### 6. Wisdom Passed Forward

Interviews, personal lessons, leadership conversations, and future mentorship or development experiences that allow women to share what they have learned for another woman’s good.

## Current and Future Brand Expression

### Current Focus

- Website
- Blog and written reflections
- Prayer resources
- Short podcast episodes
- Interviews and conversations
- Email community development

### Developing Opportunities

- Leadership resources
- Guided conversations
- Digital resources
- Workshops
- Community gatherings

### Long-Term Vision

- Mentorship
- Coaching
- Professional development
- Leadership preparation
- Personal growth pathways
- Retreats or in-person experiences

These future offers should not be marketed as available until they exist, but they are part of Samatra’s core vision rather than unrelated possibilities.

## Brand System Notes

The visual system should remain warm, elevated, peaceful, feminine, modern, grounded, and professional.

The visual presentation may feel polished and premium, but it must not become so perfected that it contradicts the message of honest, accessible, non-prescriptive relationship with God.

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

- **70%** Cream + Latte Beige
- **20%** Soft Mocha + Warm Taupe
- **8%** Terracotta
- **2%** Muted Gold
- Sage may be used as a supporting accent, but it should not become dominant.

### Current Font Implementation

The proof of concept uses free Google Fonts as practical alternatives for the official typography direction:

| Brand Role | Current Free Font | Purpose |
| --- | --- | --- |
| Display / Headlines | Cormorant Garamond | Elegant editorial serif alternative |
| Body / Navigation / UI | Montserrat | Clean modern sans-serif |
| Accent Script | Sacramento | Script accent used sparingly |

Font imports and CSS variables are managed in:

```text
docs/assets/css/main.css
```

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

Use this for reusable brand language such as the name, founder, taglines, promise, core message, audience, and description.

### Update Navigation

Edit:

```text
docs/_data/navigation.yml
```

To hide a page from the main navigation, remove or comment out its entry. The page may still remain accessible by direct URL unless it is unpublished or removed.

### Update Homepage Copy

Primary visible homepage content is controlled in:

```text
docs/_layouts/home.html
```

Supporting homepage source content is in:

```text
docs/index.md
```

### Update Styles, Colors, Fonts, and Components

Edit:

```text
docs/assets/css/main.css
```

This file controls the visual design system, including CSS variables, color palette, typography, buttons, cards, dividers, homepage sections, footer styling, and responsive behavior.

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

Keep filenames consistent when possible so existing references do not need to be updated.

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
2. Make edits in the appropriate files.
3. Preview or validate the site when a local Jekyll environment is available.
4. Open a pull request for review.
5. Merge approved changes into `main`.
6. GitHub Pages rebuilds the site from the `docs/` folder.
7. Review the live site and refine as needed.

## Current POC Priorities

- Review the Samatra voice and vision copy across all pages.
- Confirm the new content-pillar names and hierarchy.
- Decide which pages should be public for the first launch.
- Replace placeholder imagery with final brand-aligned images.
- Add a working email signup and official contact method.
- Replace podcast audio placeholders with actual episodes.
- Continue refining mobile spacing, accessibility, alt text, and color contrast.
- Keep visual polish balanced with Samatra’s raw, welcoming, nonjudgmental voice.

## Brand Guardrails

Latte & Lounge should remain:

- Faith-centered
- Warm
- Elevated
- Peaceful
- Feminine
- Modern
- Grounded
- Emotionally intelligent
- Professional
- Honest
- Nonjudgmental
- Practical

Avoid messaging or design that feels:

- Pretentious
- Spiritually superior
- Overly churchy
- Prescriptive
- Shame-based
- Corporate sterile
- Productivity-first
- Rustic farmhouse
- Overly floral
- Busy or cluttered
- Trendy for trend’s sake

## Working Definition

**Latte & Lounge is a faith-based platform where professional women come to set their day with God, have honest conversations about what they carry, and receive spiritual and practical wisdom for work, leadership, relationships, and everyday life.**
