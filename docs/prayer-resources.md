---
layout: page
title: Prayer Resources
eyebrow: "Pray"
subtitle: "Short prayers for real mornings, real pressure, and real peace."
content_width: wide
collection_style: true
---

<div class="collection-feature-strip">
  <div>
    <p class="eyebrow">Prayer Library</p>
    <h2>A sacred pause for full mornings.</h2>
    <p>Browse short resources for quiet moments, busy mornings, and the spaces before the day begins.</p>
  </div>

  <div class="collection-feature-note">
    <strong>Start here.</strong>
    <span>Choose one short resource and take a quiet moment before moving forward.</span>
  </div>
</div>

<p class="collection-section-label">Featured Prayers</p>

<div class="collection-grid prayer-grid">
  {% for prayer in site.prayers %}
    <a class="collection-card" href="{{ prayer.url | relative_url }}">
      <div class="prayer-card-topper">
        <span class="prayer-card-symbol">pause</span>
      </div>
      <div class="collection-card-body">
        <span class="collection-card-kicker">Prayer Resource</span>
        <h2>{{ prayer.title }}</h2>
        <p>{{ prayer.excerpt | strip_html | truncate: 150 }}</p>
        <span class="collection-card-link">Open Resource →</span>
      </div>
    </a>
  {% endfor %}
</div>
