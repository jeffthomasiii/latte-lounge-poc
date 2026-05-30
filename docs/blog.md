---
layout: page
title: Blog
eyebrow: "Read"
subtitle: "Devotionals, reflections, and honest conversations for the morning before the world gets loud."
---

The Latte & Lounge blog is designed for the woman who wants faith that meets her in real life.

Here you will find Scripture-centered reflections, morning devotionals, honest conversations, and practical encouragement for professional women learning to live anchored instead of anxious.

## Recent Reflections

{% for post in site.posts %}
<article class="listing-card">
  <p class="eyebrow">{{ post.category }}</p>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
</article>
{% endfor %}
