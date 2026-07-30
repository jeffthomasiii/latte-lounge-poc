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
    <h2>Real conversations for the day ahead.</h2>
    <p>The Latte & Lounge podcast is being created for professional women who love God and carry a lot. Expect short morning reflections, honest prayers, practical conversations about faith and leadership, and interviews with women willing to share what they have learned.</p>
  </div>

  <div class="collection-feature-note">
    <strong>Listen before the world gets loud.</strong>
    <span>Come for Scripture, prayer, raw conversation, and wisdom for work, leadership, relationships, and everyday life.</span>
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
