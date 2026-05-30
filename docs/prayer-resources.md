---
layout: page
title: Prayer Resources
eyebrow: "Pray"
subtitle: "Short prayers for real mornings, real pressure, and real peace."
---

{% for prayer in site.prayers %}
<article class="listing-card">
  <p class="eyebrow">Prayer Resource</p>
  <h2><a href="{{ prayer.url | relative_url }}">{{ prayer.title }}</a></h2>
  <p>{{ prayer.excerpt | strip_html | truncate: 160 }}</p>
</article>
{% endfor %}
