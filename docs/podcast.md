---
layout: page
title: Podcast
eyebrow: "Listen"
subtitle: "Where women meet God before the world gets loud."
---

Latte & Lounge is designed for short, honest, faith-filled conversations you can carry into your morning.

{% for episode in site.podcast %}
<article class="listing-card">
  <p class="eyebrow">Podcast Episode</p>
  <h2><a href="{{ episode.url | relative_url }}">{{ episode.title }}</a></h2>
  <p>{{ episode.excerpt | strip_html | truncate: 160 }}</p>
</article>
{% endfor %}
