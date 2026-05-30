---
layout: page
title: Podcast
eyebrow: "Listen"
subtitle: "Where women meet God before the world gets loud."
---

The Latte & Lounge podcast is being created as a short-form morning companion for professional women who want Scripture, prayer, honest reflection, and practical encouragement before the demands of the day begin.

Episodes may include devotionals, sacred pause prayers, Scripture reflections, and lounge-style conversations about faith, work, leadership, emotional health, and spiritual formation.

## Recent Episodes

{% for episode in site.podcast %}
<article class="listing-card">
  <p class="eyebrow">Podcast Episode</p>
  <h2><a href="{{ episode.url | relative_url }}">{{ episode.title }}</a></h2>
  <p>{{ episode.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
