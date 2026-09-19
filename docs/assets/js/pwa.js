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

  let serviceWorkerRegistration = null;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('{{ '/sw.js' | relative_url }}')
        .then((registration) => {
          serviceWorkerRegistration = registration;
          return registration.update();
        })
        .catch(() => {
          // The website remains fully functional if service-worker registration fails.
        });
    });
  }

  const readingSizeKey = 'latte-lounge:reading-size';
  const applyReadingSize = (value) => {
    document.documentElement.classList.remove('reading-size-large', 'reading-size-xl');
    if (value === 'large') document.documentElement.classList.add('reading-size-large');
    if (value === 'xl') document.documentElement.classList.add('reading-size-xl');
  };

  applyReadingSize(window.localStorage.getItem(readingSizeKey) || 'standard');

  const saveButton = document.querySelector('[data-pwa-save]');
  if (saveButton) {
    const key = `latte-lounge:saved:${window.location.pathname}`;
    const label = saveButton.querySelector('span');

    const getSavedEntry = () => {
      const raw = window.localStorage.getItem(key);
      if (!raw) return null;
      if (raw === 'true') {
        return {
          path: window.location.pathname,
          title: document.querySelector('h1')?.textContent?.trim() || document.title,
          savedAt: new Date().toISOString()
        };
      }
      try { return JSON.parse(raw); } catch { return null; }
    };

    const renderSavedState = () => {
      const saved = Boolean(getSavedEntry());
      saveButton.setAttribute('aria-pressed', String(saved));
      if (label) label.textContent = saved ? 'Saved' : 'Save';
    };

    renderSavedState();

    saveButton.addEventListener('click', () => {
      const saved = Boolean(getSavedEntry());
      if (saved) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify({
          path: window.location.pathname,
          title: document.querySelector('h1')?.textContent?.trim() || document.title,
          description: document.querySelector('meta[name="description"]')?.content || '',
          savedAt: new Date().toISOString()
        }));
      }
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

  const readingSizeButtons = document.querySelectorAll('[data-reading-size]');
  if (readingSizeButtons.length) {
    const current = window.localStorage.getItem(readingSizeKey) || 'standard';
    readingSizeButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.readingSize === current);
      button.addEventListener('click', () => {
        const value = button.dataset.readingSize || 'standard';
        window.localStorage.setItem(readingSizeKey, value);
        applyReadingSize(value);
        readingSizeButtons.forEach((item) => {
          item.classList.toggle('is-active', item === button);
        });
      });
    });
  }

  const escapeHtml = (value) => String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

  const savedList = document.querySelector('[data-saved-list]');
  if (savedList) {
    const entries = [];
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const storageKey = window.localStorage.key(index);
      if (!storageKey?.startsWith('latte-lounge:saved:')) continue;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) continue;

      if (raw === 'true') {
        entries.push({
          path: storageKey.replace('latte-lounge:saved:', ''),
          title: 'Saved reflection',
          savedAt: ''
        });
        continue;
      }

      try {
        const parsed = JSON.parse(raw);
        if (parsed?.path) entries.push(parsed);
      } catch {
        // Ignore stale or malformed saved entries.
      }
    }

    entries.sort((a, b) => String(b.savedAt || '').localeCompare(String(a.savedAt || '')));

    if (!entries.length) {
      savedList.innerHTML = '<p class="ll-saved-empty">Reflections you save will appear here on this device.</p>';
    } else {
      savedList.innerHTML = entries.map((entry) =>
        `<a class="ll-saved-link" href="${escapeHtml(entry.path || '#')}"><strong>${escapeHtml(entry.title || 'Saved reflection')}</strong><small>Saved reflection</small></a>`
      ).join('');
    }
  }

  const clearSaved = document.querySelector('[data-clear-saved]');
  if (clearSaved) {
    clearSaved.addEventListener('click', () => {
      const keys = [];
      for (let index = 0; index < window.localStorage.length; index += 1) {
        const storageKey = window.localStorage.key(index);
        if (storageKey?.startsWith('latte-lounge:saved:')) keys.push(storageKey);
      }
      keys.forEach((storageKey) => window.localStorage.removeItem(storageKey));
      window.location.reload();
    });
  }

  const refreshApp = document.querySelector('[data-refresh-app]');
  if (refreshApp) {
    refreshApp.addEventListener('click', async () => {
      refreshApp.disabled = true;
      const label = refreshApp.querySelector('[data-refresh-label]');
      if (label) label.textContent = 'Refreshing…';
      try {
        if (serviceWorkerRegistration) await serviceWorkerRegistration.update();
        if ('caches' in window) {
          const cacheKeys = await window.caches.keys();
          await Promise.all(cacheKeys
            .filter((cacheKey) => cacheKey.startsWith('latte-lounge-mobile-'))
            .map((cacheKey) => window.caches.delete(cacheKey)));
        }
      } catch {
        // Reload still provides a network-first document request.
      }
      window.location.reload();
    });
  }

})();
