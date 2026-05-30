---
layout: page
title: Prayer Resources
eyebrow: "Pray"
subtitle: "Short prayers for real mornings, real pressure, and real peace."
---

Some mornings do not need more noise. They need a sacred pause.

These prayer resources are designed for the moments when your mind is already full, your responsibilities are already waiting, and your soul needs to meet with God before moving forward.

Use them before meetings, before hard conversations, during anxious mornings, or anytime you need to breathe and remember that you are not carrying the day alone.

## Featured Prayers

{% for prayer in site.prayers %}
<article class="listing-card">
  <p class="eyebrow">Prayer Resource</p>
  <h2><a href="{{ prayer.url | relative_url }}">{{ prayer.title }}</a></h2>
  <p>{{ prayer.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
