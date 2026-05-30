---
layout: page
title: Blog
eyebrow: "Read"
subtitle: "Devotionals, reflections, and honest conversations for the morning before the world gets loud."
---

{% for post in site.posts %}
<article class="listing-card">
  <p class="eyebrow">{{ post.category }}</p>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
</article>
{% endfor %}
