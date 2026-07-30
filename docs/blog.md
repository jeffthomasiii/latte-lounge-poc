---
layout: page
title: Reflections
description: "Scripture-rooted reflections and practical wisdom for faith, work, leadership, relationships, and everyday life."
eyebrow: "The Latte & Lounge Journal"
subtitle: "Scripture, honest conversation, and practical wisdom for faith, work, leadership, and everyday life."
hero_image: "/assets/images/latte-lounge-reflection-feature.webp"
hero_image_alt: "Open morning reflection journal with a latte and gold pen"
hero_badge: "Faith that meets you in what you carry"
page_class: "blog-editorial-page"
content_width: wide
---

{% assign featured_post = site.posts | first %}

{% if featured_post %}
  {% assign featured_image = featured_post.image | default: '/assets/images/latte-lounge-reflection-feature.webp' %}
  {% assign featured_image_alt = featured_post.image_alt | default: featured_post.title %}
<section class="blog-featured-story">
  <div class="blog-featured-story__media">
    <img src="{{ featured_image | relative_url }}" alt="{{ featured_image_alt }}">
  </div>
  <div class="blog-featured-story__copy">
    <p class="ll-section-label">Featured Reflection</p>
    <p class="editorial-content-card__kicker">{{ featured_post.pillar | default: featured_post.category | default: "Set Your Day" }}</p>
    <h2>{{ featured_post.title }}</h2>
    <p>{{ featured_post.excerpt | strip_html | truncate: 220 }}</p>
    <a class="button primary" href="{{ featured_post.url | relative_url }}">Read the Reflection</a>
  </div>
</section>
{% endif %}

<section class="blog-intro-band">
  <div>
    <p class="ll-section-label">Come as you are</p>
    <h2>Faith for the life you are actually living.</h2>
  </div>
  <div>
    <p>These reflections are for the woman whose mind wakes up with a list: work to do, people to care for, decisions to make, and responsibilities that cannot be ignored.</p>
    <p>You do not need a perfect morning or polished words. Start with one honest conversation with God.</p>
  </div>
</section>

<section class="blog-library-section">
  <div class="editorial-section-heading editorial-section-heading--row">
    <div>
      <p class="ll-section-label">Latest Reflections</p>
      <h2>Reflections for the mornings and moments you are living through.</h2>
    </div>
    <p>Explore Scripture-rooted reflections for emotional weight, work, leadership, relationships, decisions, and everyday life.</p>
  </div>

  <div class="editorial-card-grid">
    {% for post in site.posts %}
      {% unless forloop.first %}
        {% assign image_index = forloop.index | modulo: 3 %}
        {% if image_index == 1 %}
          {% assign fallback_image = '/assets/images/latte-lounge-hero.webp' %}
          {% assign fallback_alt = 'Latte and linen journals in warm morning light' %}
        {% elsif image_index == 2 %}
          {% assign fallback_image = '/assets/images/latte-lounge-podcast-feature.webp' %}
          {% assign fallback_alt = 'Latte and Lounge podcast artwork beside coffee and earbuds' %}
        {% else %}
          {% assign fallback_image = '/assets/images/latte-lounge-reflection-feature.webp' %}
          {% assign fallback_alt = 'Open reflection journal beside a latte' %}
        {% endif %}
        {% assign card_image = post.image | default: fallback_image %}
        {% assign card_alt = post.image_alt | default: fallback_alt %}
        {% assign card_kicker = post.pillar | default: post.category %}

        {% include editorial-content-card.html
          url=post.url
          image=card_image
          image_alt=card_alt
          kicker=card_kicker
          title=post.title
          excerpt=post.excerpt
          action="Read the Reflection"
        %}
      {% endunless %}
    {% endfor %}
  </div>
</section>

<section class="editorial-newsletter-panel">
  <div>
    <p class="ll-section-label">Continue the conversation</p>
    <h2>Bring the reflection into prayer.</h2>
    <p>Use a short prayer resource to name what you are carrying and place the next part of your day before God.</p>
  </div>
  <a class="button primary" href="{{ '/prayer-resources/' | relative_url }}">Explore Prayer Resources</a>
</section>
