---
layout: page
title: Podcast
eyebrow: "Listen"
subtitle: "Where women meet God before the world gets loud."
content_width: wide
collection_style: true
---

<div class="collection-feature-strip">
  <div>
    <p class="eyebrow">Latte &amp; Lounge Podcast</p>
    <h2>Short morning episodes for a quieter beginning.</h2>
    <p>The Latte & Lounge podcast is being created as a short-form morning companion for professional women who want Scripture, prayer, honest reflection, and practical encouragement before the demands of the day begin.</p>
  </div>

  <div class="collection-feature-note">
    <strong>Listen before the world gets loud.</strong>
    <span>Devotionals, sacred pause prayers, Scripture reflections, and lounge-style conversations for faith, work, leadership, and emotional health.</span>
  </div>
</div>

<p class="collection-section-label">Recent Episodes</p>

{% assign podcast_episodes = site.podcast | sort: "episode" | reverse %}

<div class="collection-grid podcast-grid">
  {% for episode in podcast_episodes %}
    <a class="collection-card podcast-collection-card" href="{{ episode.url | relative_url }}">
      <div class="collection-card-image-wrap">
        <img class="podcast-logo-card" src="{{ '/assets/images/logo-latte-lounge-full.png' | relative_url }}" alt="Latte & Lounge Podcast">
      </div>

      <div class="collection-card-body">
        <span class="collection-card-kicker">Podcast Episode</span>
        <h2>{{ episode.title }}</h2>
        <div class="collection-card-meta-row">
          <span>Episode {{ episode.episode }}</span>
          <span>5–15 minutes</span>
        </div>
        <p>{{ episode.excerpt | strip_html | truncate: 150 }}</p>
        <span class="collection-card-link">Listen Now →</span>
      </div>
    </a>
  {% endfor %}
</div>
