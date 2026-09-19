---
layout: page
title: More
description: "Saved reflections, Latte & Lounge information, and app settings."
eyebrow: "Latte & Lounge"
subtitle: "Saved reflections, settings, and more."
content_width: wide
page_class: app-more-page
---

<div class="ll-more-screen">
  <header class="ll-more-header">
    <p>Latte &amp; Lounge</p>
    <h1>More</h1>
    <span>Saved reflections, information about Latte &amp; Lounge, and settings for your reading experience.</span>
  </header>

  <section class="ll-more-group" aria-labelledby="more-saved-title">
    <h2 class="ll-more-group-title" id="more-saved-title">Saved</h2>
    <div class="ll-more-card">
      <div class="ll-saved-list" data-saved-list>
        <p class="ll-saved-empty">Reflections you save will appear here on this device.</p>
      </div>
    </div>
  </section>

  <section class="ll-more-group" aria-labelledby="more-about-title">
    <h2 class="ll-more-group-title" id="more-about-title">About</h2>
    <div class="ll-more-card">
      <a class="ll-more-row" href="{{ '/about/' | relative_url }}">
        <span class="ll-more-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.25"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg></span>
        <span class="ll-more-row-copy"><strong>About Samatra</strong><small>Her story and the heart behind Latte &amp; Lounge</small></span>
        <span class="ll-more-row-end" aria-hidden="true">›</span>
      </a>
      <a class="ll-more-row" href="{{ '/' | relative_url }}">
        <span class="ll-more-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 5.5h14v13H5z"/><path d="M8 9h8M8 12h8M8 15h5"/></svg></span>
        <span class="ll-more-row-copy"><strong>Latte &amp; Lounge</strong><small>A sacred pause before the world gets loud</small></span>
        <span class="ll-more-row-end" aria-hidden="true">›</span>
      </a>
    </div>
  </section>

  <section class="ll-more-group" aria-labelledby="more-settings-title">
    <h2 class="ll-more-group-title" id="more-settings-title">Settings</h2>
    <div class="ll-more-card">
      <div class="ll-more-row">
        <span class="ll-more-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 6h14M8 6v12M5 18h6M15 10h4M17 8v10"/></svg></span>
        <span class="ll-more-row-copy"><strong>Reading Size</strong><small>Adjust reflection text on this device</small></span>
        <span class="ll-reading-size-control" aria-label="Reading size">
          <button type="button" data-reading-size="standard" aria-label="Standard reading size">A</button>
          <button type="button" data-reading-size="large" aria-label="Large reading size">A+</button>
          <button type="button" data-reading-size="xl" aria-label="Extra large reading size">A++</button>
        </span>
      </div>
      <button class="ll-more-row" type="button" data-refresh-app>
        <span class="ll-more-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M19 8a7.5 7.5 0 1 0 .6 7"/><path d="M19 4v4h-4"/></svg></span>
        <span class="ll-more-row-copy"><strong data-refresh-label>Refresh App Content</strong><small>Check for the latest Latte &amp; Lounge update</small></span>
        <span class="ll-more-row-end" aria-hidden="true">›</span>
      </button>
      <button class="ll-more-row" type="button" data-clear-saved>
        <span class="ll-more-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 7h10l-.7 13H7.7L7 7Z"/><path d="M5 7h14M9 7V4h6v3"/></svg></span>
        <span class="ll-more-row-copy"><strong>Clear Saved Reflections</strong><small>Remove bookmarks stored on this device</small></span>
        <span class="ll-more-row-end" aria-hidden="true">›</span>
      </button>
    </div>
  </section>

  <section class="ll-more-group" aria-labelledby="more-support-title">
    <h2 class="ll-more-group-title" id="more-support-title">Support</h2>
    <div class="ll-more-card">
      <a class="ll-more-row" href="{{ '/contact/' | relative_url }}">
        <span class="ll-more-row-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg></span>
        <span class="ll-more-row-copy"><strong>Contact</strong><small>Get in touch with Latte &amp; Lounge</small></span>
        <span class="ll-more-row-end" aria-hidden="true">›</span>
      </a>
    </div>
  </section>
</div>
