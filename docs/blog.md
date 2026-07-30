---
layout: page
title: Blog
eyebrow: "Read"
subtitle: "Scripture, honest conversation, and practical wisdom for faith, work, leadership, and everyday life."
content_width: wide
collection_style: true
---

<div class="collection-feature-strip">
  <div>
    <p class="eyebrow">Latte &amp; Lounge Blog</p>
    <h2>Faith that speaks to what you actually carry.</h2>
    <p>These reflections are for the woman whose mind wakes up with a list: work to do, people to care for, decisions to make, and responsibilities to carry. Come as you are, bring God what is real, and find Scripture-rooted wisdom for the day ahead.</p>
  </div>

  <div class="collection-feature-note">
    <strong>Set your day before the list begins.</strong>
    <span>You do not need a perfect morning or polished words. Start with one honest conversation with God.</span>
  </div>
</div>

<p class="collection-section-label">Recent Conversations</p>

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
        <span class="collection-card-kicker">{{ post.category | default: "Set Your Day" }}</span>
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <span class="collection-card-link">Read More →</span>
      </div>
    </a>
  {% endfor %}
</div>
