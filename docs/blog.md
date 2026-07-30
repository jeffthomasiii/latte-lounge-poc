---
layout: page
title: Reflections
eyebrow: "The Latte & Lounge Journal"
subtitle: "Scripture, honest conversation, and practical wisdom for faith, work, leadership, and everyday life."
hero_image: "/assets/images/latte-lounge-reflection-feature.webp"
hero_image_alt: "Open morning reflection journal with a latte and gold pen"
hero_badge: "Faith that speaks to what you carry"
page_class: "blog-editorial-page"
content_width: wide
---

{% assign featured_post = site.posts | first %}

{% if featured_post %}
<section class="blog-featured-story">
  <div class="blog-featured-story__media">
    <img src="{{ '/assets/images/latte-lounge-reflection-feature.webp' | relative_url }}" alt="Morning journal and latte in warm sunlight">
  </div>
  <div class="blog-featured-story__copy">
    <p class="ll-section-label">Featured reflection</p>
    <p class="editorial-content-card__kicker">{{ featured_post.category | default: "Set Your Day" }}</p>
    <h2>{{ featured_post.title }}</h2>
    <p>{{ featured_post.excerpt | strip_html | truncate: 220 }}</p>
    <a class="button primary" href="{{ featured_post.url | relative_url }}">Read the Reflection</a>
  </div>
</section>
{% endif %}

<section class="blog-intro-band">
  <div>
    <p class="ll-section-label">Come as you are</p>
    <h2>Faith that speaks to what you actually carry.</h2>
  </div>
  <div>
    <p>These reflections are for the woman whose mind wakes up with a list: work to do, people to care for, decisions to make, and responsibilities to carry.</p>
    <p>You do not need a perfect morning or polished words. Start with one honest conversation with God.</p>
  </div>
</section>

<section class="blog-library-section">
  <div class="editorial-section-heading editorial-section-heading--row">
    <div>
      <p class="ll-section-label">Recent conversations</p>
      <h2>Read what meets you where you are.</h2>
    </div>
    <p>Explore Scripture-rooted reflections for mornings, emotional weight, work, leadership, relationships, and everyday decisions.</p>
  </div>

  <div class="editorial-card-grid">
    {% for post in site.posts %}
      {% unless forloop.first %}
        {% assign image_index = forloop.index | modulo: 3 %}
        {% if image_index == 1 %}
          {% assign card_image = '/assets/images/latte-lounge-hero.webp' %}
          {% assign card_alt = 'Latte and linen journals in warm morning light' %}
        {% elsif image_index == 2 %}
          {% assign card_image = '/assets/images/latte-lounge-podcast-feature.webp' %}
          {% assign card_alt = 'Latte and Lounge podcast with coffee and earbuds' %}
        {% else %}
          {% assign card_image = '/assets/images/latte-lounge-reflection-feature.webp' %}
          {% assign card_alt = 'Open reflection journal beside a latte' %}
        {% endif %}

        {% include editorial-content-card.html
          url=post.url
          image=card_image
          image_alt=card_alt
          kicker=post.category
          title=post.title
          excerpt=post.excerpt
          action="Read More"
        %}
      {% endunless %}
    {% endfor %}
  </div>
</section>

<section class="editorial-newsletter-panel">
  <div>
    <p class="ll-section-label">A sacred pause in your inbox</p>
    <h2>Stay connected to the conversation.</h2>
    <p>Receive new reflections, prayer, podcast episodes, and practical encouragement for the day ahead.</p>
  </div>
  <a class="button primary" href="{{ '/subscribe/' | relative_url }}">Join the Lounge</a>
</section>
