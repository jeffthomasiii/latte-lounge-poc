---
layout: null
---
(() => {
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (standalone) {
    document.documentElement.classList.add('pwa-standalone');
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('{{ '/sw.js' | relative_url }}').catch(() => {
        // The website remains fully functional if service-worker registration fails.
      });
    });
  }

  const saveButton = document.querySelector('[data-pwa-save]');
  if (saveButton) {
    const key = `latte-lounge:saved:${window.location.pathname}`;
    const label = saveButton.querySelector('span');

    const renderSavedState = () => {
      const saved = window.localStorage.getItem(key) === 'true';
      saveButton.setAttribute('aria-pressed', String(saved));
      if (label) label.textContent = saved ? 'Saved' : 'Save';
    };

    renderSavedState();

    saveButton.addEventListener('click', () => {
      const saved = window.localStorage.getItem(key) === 'true';
      window.localStorage.setItem(key, String(!saved));
      renderSavedState();
    });
  }

  const shareButton = document.querySelector('[data-pwa-share]');
  if (shareButton) {
    const label = shareButton.querySelector('span');
    const originalLabel = label ? label.textContent : 'Share';

    shareButton.addEventListener('click', async () => {
      const shareData = {
        title: document.title,
        text: document.querySelector('meta[name="description"]')?.content || '',
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }

        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          if (label) {
            label.textContent = 'Copied';
            window.setTimeout(() => { label.textContent = originalLabel; }, 1600);
          }
        }
      } catch (error) {
        // User cancellation or unavailable clipboard should not interrupt reading.
      }
    });
  }
})();
