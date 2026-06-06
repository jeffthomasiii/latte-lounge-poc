---
layout: page
title: Blog
eyebrow: "Read"
subtitle: "Devotionals, reflections, and honest conversations for the morning before the world gets loud."
content_width: wide
collection_style: true
---

<div class="collection-feature-strip">
  <div>
    <p class="eyebrow">Latte &amp; Lounge Blog</p>
    <h2>Faith that meets her in real life.</h2>
    <p>The Latte & Lounge blog is designed for the woman who wants Scripture-centered reflections, morning devotionals, honest conversations, and practical encouragement for learning to live anchored instead of anxious.</p>
  </div>

  <div class="collection-feature-note">
    <strong>Start with a sacred pause.</strong>
    <span>Read one reflection before the inbox, meetings, and responsibilities begin.</span>
  </div>
</div>

<p class="collection-section-label">Recent Reflections</p>

<div class="collection-grid blog-grid">
  {% for post in site.posts %}
    <a class="collection-card" href="{{ post.url | relative_url }}">
      {% assign image_index = forloop.index | modulo: 3 %}
      {% if image_index == 1 %}
        <img class="collection-card-image" src="{{ '/assets/images/home-photo-soft-mug.jpg' | relative_url }}" alt="Latte mug in soft morning light">
      {% elsif image_index == 2 %}
        <img class="collection-card-image" src="{{ '/assets/images/home-photo-brand-card.jpg' | relative_url }}" alt="Latte and Lounge brand card on a warm neutral surface">
      {% else %}
        <img class="collection-card-image" src="{{ '/assets/images/home-photo-candle-stillness.jpg' | relative_url }}" alt="Candle, coffee, and still morning atmosphere">
      {% endif %}

      <div class="collection-card-body">
        <span class="collection-card-kicker">{{ post.category | default: "Morning Reflection" }}</span>
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <span class="collection-card-link">Read More →</span>
      </div>
    </a>
  {% endfor %}
</div>
