---
layout: page
title: Prayer Resources
eyebrow: "Pray"
subtitle: "Honest prayers for full mornings, heavy hearts, real pressure, and the day ahead."
content_width: wide
collection_style: true
---

<div class="collection-feature-strip">
  <div>
    <p class="eyebrow">Prayer Library</p>
    <h2>Bring God what you are carrying.</h2>
    <p>You do not need perfect words, the right Scripture already in mind, or a quiet, uninterrupted hour. These short prayers are here to help you talk honestly with God—whether your morning is quiet, rushed, emotionally heavy, or already underway.</p>
  </div>

  <div class="collection-feature-note">
    <strong>Start with what is true.</strong>
    <span>Tell God how you feel, place the day before Him, and trust Him for wisdom, peace, and steadiness.</span>
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
        <span class="collection-card-link">Read the Prayer →</span>
      </div>
    </a>
  {% endfor %}
</div>
