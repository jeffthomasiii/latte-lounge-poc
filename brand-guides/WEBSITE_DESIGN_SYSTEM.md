<p align="center">
  <img src="../docs/assets/images/logo-latte-lounge-wordmark.png" alt="Latte & Lounge" width="420">
</p>

<p align="center"><strong>A sacred pause before the world gets loud.</strong></p>

# Website Design System

**Purpose:** Define the reusable website patterns, visual behavior, responsive rules, and implementation expectations for the Latte & Lounge site.

---

## 1. Experience Goal

The website should feel like an editorial invitation into a quiet morning conversation with God.

Every page should be:

- Calm before it is impressive
- Readable before it is decorative
- Warm before it is polished
- Personal before it is promotional
- Scripture-rooted without looking like a generic ministry template
- Professional without looking corporate

The interface should help the visitor slow down, understand what Latte & Lounge offers, and choose one clear next step.

---

## 2. Current Technical Foundation

The site is a Jekyll website published through GitHub Pages from the `docs/` directory.

Core files include:

- `docs/_config.yml` — site metadata, collections, and permalinks
- `docs/_data/brand.yml` — reusable public brand language
- `docs/_data/navigation.yml` — navigation structure
- `docs/_includes/` — shared header, footer, and reusable sections
- `docs/_layouts/` — page, home, post, podcast, and resource templates
- `docs/assets/css/` — global tokens, component styles, and responsive refinements
- `docs/assets/images/` — logos, favicon, hero images, and editorial imagery

### Current CSS Cascade

`docs/_layouts/default.html` loads the styles in this order:

1. `main.css`
2. `luxury-refinement.css`
3. `homepage-phase2.css`
4. `homepage-hero-adjustments.css`
5. `homepage-lower-adjustments.css`
6. `collection-phase3.css`
7. `phase4-responsive.css`
8. `mobile-refinements.css`
9. `visual-refresh.css`
10. `production-assets-mobile-nav.css`
11. `editorial-components.css`

Later files may override earlier declarations. When evaluating the implemented design, inspect the full cascade rather than relying on `main.css` alone.

### Implementation Direction

- Reuse existing component classes where they fit.
- Prefer editing the component’s owning stylesheet over adding another global override layer.
- Avoid introducing page-specific styles for patterns that should be reusable.
- Consolidation of the existing CSS layers may be a future maintenance task, but it is not required before continuing content and page development.

---

## 3. Design Tokens

### Core Brand Tokens

```css
--cream: #F6F2ED;
--latte-beige: #E7D6C2;
--soft-mocha: #8B6E5A;
--warm-taupe: #8B7D6B;
--muted-gold: #C8A668;
--terracotta: #D36A5C;
--sage: #A4B59B;
```

### Current Refined UI Tokens

The visual refresh adds a deeper reading color and refined surface values:

```css
--ll-ink: #665044;
--ll-cream: #F8F4EF;
--ll-paper: #FFFDF9;
--ll-beige: #EADBCC;
--ll-line: rgba(139, 110, 90, 0.18);
--ll-shadow: 0 24px 70px rgba(91, 67, 52, 0.12);
--ll-shadow-soft: 0 12px 34px rgba(91, 67, 52, 0.08);
--ll-radius-lg: 30px;
--ll-radius-md: 20px;
```

Use the official brand colors for identity. The `--ll-*` values are practical interface refinements and should remain visually subordinate to the official palette.

### Typography Tokens

```css
--font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
--font-body: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-accent: "Sacramento", cursive;
```

### Layout Tokens

- Current primary container: up to approximately `1180px`
- Narrow reading container: approximately `760px`
- Desktop outer margin: approximately `24px` per side through `calc(100% - 48px)`
- Long-form reading width: keep primary article text near `760px`

---

## 4. Typography Hierarchy

### Display Headlines

- Use Cormorant Garamond.
- Use a tight but readable line height around `0.96–1.08` for large editorial headlines.
- Use negative tracking only at large sizes.
- Keep line breaks intentional; avoid orphaned one-word lines where possible.

Current examples:

- Homepage hero: `clamp(3.2rem, 5.7vw, 5.65rem)`
- Editorial page hero: `clamp(3.4rem, 6vw, 6rem)`
- Editorial post hero: `clamp(3.1rem, 5.5vw, 5.4rem)`
- Section headlines: commonly `clamp(2.15rem, 4vw, 3.8rem)`

### Body Copy

- Use Montserrat.
- Default line height should remain approximately `1.75`.
- Long-form editorial content may use `1.85–1.9`.
- Avoid very light font weights for paragraphs.
- Keep paragraph width comfortable and avoid full-width article text.

### Labels and Metadata

- Use Montserrat in uppercase.
- Typical size: `0.67–0.73rem`.
- Typical tracking: `0.12–0.22em`.
- Use for eyebrows, metadata, buttons, card actions, and section labels only.

### Script Accent

Use Sacramento only for a signature, ampersand, or brief decorative word. Never use it for navigation, body copy, forms, or essential information.

---

## 5. Global Layout Rules

- Use generous vertical spacing between major sections.
- Alternate open sections with contained editorial panels rather than boxing every section.
- Maintain one primary focal point in each viewport section.
- Use grids for alignment, not to fill all available space.
- Use photography as part of the hierarchy, not as decoration behind every block.
- Avoid unnecessary centered text; center only quotations, devotional moments, and deliberately ceremonial content.
- Use left alignment for most explanatory and action-oriented content.

---

## 6. Header and Navigation

### Desktop

- Sticky header with a translucent warm background and subtle blur or shadow.
- Use the approved wordmark image.
- Navigation labels are small uppercase sans serif with generous tracking.
- Active and hover states use restrained Terracotta or Muted Gold emphasis.
- The primary navigation call to action may use a compact Terracotta button.

### Mobile

- Use the existing accessible `<details>` menu pattern.
- The summary must retain an accessible label.
- Menu links must be large enough to tap comfortably.
- The wordmark and menu control must not compete for horizontal space.
- Do not reproduce the desktop navigation as a wrapped row on narrow screens.

### Navigation Principles

- Keep the main navigation concise.
- Use clear destination names.
- Do not expose future offerings as active services before they exist.
- One visually prominent navigation CTA is sufficient.

---

## 7. Button System

### Primary Button

Use for the main action in a section.

Current characteristics:

- Terracotta fill
- Cream or white text
- Approximate height: `50px`
- Approximate radius: `8px`
- Uppercase sans-serif label
- Subtle warm shadow
- Hover shifts to Soft Mocha

### Secondary Button

Use for a meaningful alternative action.

- Light paper background
- Warm Gold or Mocha border
- Soft Mocha text
- Same height and typography as primary
- Subtle warm hover fill

### Text Link

Use when the action is contextual rather than primary.

- Terracotta text
- Clear descriptive label
- Optional arrow for directional actions
- Must retain visible keyboard focus

### Button Rules

- Use sentence meaning, not vague labels such as “Learn More,” when a clearer action is possible.
- Avoid more than two competing buttons in one section.
- Do not use pill-shaped buttons as the default; current primary buttons use restrained `7–8px` corners.
- Preserve minimum touch-target size on mobile.

---

## 8. Hero Patterns

### Homepage Hero

The homepage uses `.ll-hero` and `.ll-hero-grid`.

Required hierarchy:

1. Audience eyebrow
2. Core message headline
3. Primary tagline
4. Short explanatory copy
5. Primary and secondary actions
6. Supporting image
7. Brand promise as a small supporting badge

The hero should not attempt to explain the entire brand. Its job is recognition, invitation, and one clear next step.

### Editorial Page Hero

Use `.editorial-page-hero` for About, Blog, and other editorial landing pages.

- Two-column editorial layout on desktop
- Single-column layout below approximately `980px`
- Large serif title
- Supporting paragraph in Warm Taupe
- Editorial image with restrained corner treatment and optional caption badge

### Post Hero

Use `.editorial-post-hero` for long-form articles.

- Title, deck, and metadata grouped together
- Featured image with consistent aspect ratio
- Do not crowd the hero with sharing controls or unrelated actions

---

## 9. Card System

### Pillar Cards

Use for the major content paths on the homepage.

- Four-column grid on large screens
- One clear icon, title, description, and action
- Restrained accent-color variation
- Minimum height should remain consistent within the row
- Hover may lift slightly, but motion should remain subtle

### Editorial Content Cards

Use `.editorial-content-card` for blog and resource collections.

- Consistent `4:3` image ratio
- Kicker, headline, short summary, and action
- Three columns on wide screens, two below approximately `980px`, one below approximately `700px`
- Do not overload cards with tags, metadata, and multiple buttons

### Featured Story

Use `.blog-featured-story` for one priority article.

- Strong image and editorial headline
- Clear visual distinction from the standard card grid
- One primary action

### Recognition, Founder, and Feature Cards

Use the established `.ll-recognition-card`, `.ll-founder-card`, and `.ll-feature-card` patterns for larger narrative sections. These should remain exceptional components, not the default for every section.

---

## 10. Scripture, Quote, and Prayer Blocks

- Use a quiet, warm field with subtle Gold or Mocha structure.
- Set the Scripture or quotation in the display serif.
- Keep the reference readable and visually separate.
- Centering is appropriate for short Scripture moments.
- Long prayers and reflections should remain left-aligned for readability.
- Do not overdecorate with crosses, quotation marks, coffee imagery, and multiple accents at the same time.
- Blockquotes must remain semantically correct in HTML.

---

## 11. Forms and Signup Areas

- Keep forms short and explain what the subscriber will receive.
- Always provide visible labels; placeholders are not labels.
- Use warm neutral fields with clear borders and focus states.
- Error messages must be specific and accessible.
- Do not imply an email experience is active until the integration works.
- Newsletter panels should support the page rather than interrupt reading repeatedly.

---

## 12. Footer

The current footer uses an editorial multi-column structure with a Terracotta base strip.

Include:

- Wordmark and short brand description
- Concise navigation
- Relevant content or resource links
- Signup invitation only when functional
- Copyright and project details in the Terracotta strip

The Terracotta strip should remain a strong closing contrast without turning the entire footer into a large saturated block.

---

## 13. Responsive Standards

The current styles use several breakpoints because the site evolved in phases. The most important component transitions occur near:

- `980px` — editorial two-column layouts and multi-column grids collapse
- `820px` — legacy header and general responsive adjustments
- `700px` — editorial cards become single-column and page spacing tightens
- `640px` / `620px` — small-screen typography, logo, footer, and image refinements

### Responsive Rules

- Test every page at desktop, tablet, and narrow mobile widths.
- Do not only shrink typography; reconsider layout order and information priority.
- Keep tap targets at least approximately `44px` high.
- Prevent horizontal scrolling.
- Ensure images crop intentionally at each breakpoint.
- Verify that large serif headlines do not collide with the viewport.
- Keep critical actions visible without forcing side-by-side buttons on narrow screens.

---

## 14. Accessibility Standards

Every new or updated component must include:

- Semantic heading order
- Descriptive link text
- Meaningful image alt text
- Visible keyboard focus
- Sufficient color contrast
- Usable keyboard navigation
- Form labels and understandable errors
- Reduced-motion consideration for transitions
- No information conveyed by color alone
- Readable type and line spacing

Decorative images should use empty alt text. Meaningful images should describe what matters in the context, not list every object in the scene.

---

## 15. Page Assembly Guidance

### Homepage

Recognition → invitation → core paths → founder credibility → Scripture pause → current content → connection.

### About

Founder story → why the brand exists → who it serves → what it believes → invitation to continue.

### Blog Landing

Editorial introduction → featured story → content library → newsletter or next step.

### Article

Editorial hero → readable article body → Scripture/quote moments → practical response or prayer → related content or gentle connection prompt.

### Podcast

Clear show promise → latest episode → episode library → platform or subscription action when available.

### Prayer Resources

Immediate recognition of need → accessible prayer/resource choices → gentle supporting context → no pressure-based conversion language.

---

## 16. Implementation Checklist

Before merging a website change, verify:

- Brand language comes from `brand.yml` where appropriate.
- Existing components were reused before creating a new one.
- The change works across the full CSS cascade.
- Desktop and mobile layouts were reviewed.
- The page has one clear primary action.
- Typography roles and brand colors are consistent.
- Images use intentional crops and useful alt text.
- Focus, hover, and active states are present.
- No future service is presented as currently available.
- The page still feels calm, honest, and recognizably Latte & Lounge.
