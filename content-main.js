(function () {
  if (!/(^|\.)usos(web)?(\.|$)/i.test(location.hostname)) return;
  if (window.__usosDarkInstalled) return;
  window.__usosDarkInstalled = true;

  const darkSheet = new CSSStyleSheet();
  darkSheet.replaceSync(window.__usosDarkThemeCss || '');

  function setEnabled(value) {
    darkSheet.disabled = !value;
  }

  const iconVerdict = new Map();
  const seenIcons = new WeakSet();

  function shouldInvert(img) {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h || w > 64 || h > 64) return false;

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, w, h).data;

    let lumSum = 0;
    let satSum = 0;
    let visible = 0;
    let opaque = 0;
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a >= 250) opaque++;
      if (a < 32) continue;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      lumSum += 0.299 * r + 0.587 * g + 0.114 * b;
      satSum += Math.max(r, g, b) - Math.min(r, g, b);
      visible++;
    }
    if (!visible) return false;

    const lum = lumSum / visible;
    const sat = satSum / visible;
    const opaqueRatio = opaque / (w * h);

    if (sat > 45) return false;
    if (lum < 140) return true;
    return opaqueRatio > 0.85 && lum > 190;
  }

  function fixIcon(img) {
    if (seenIcons.has(img)) return;
    const src = img.currentSrc || img.src;
    if (!src) return;
    if (!img.complete) {
      img.addEventListener('load', () => fixIcon(img), { once: true });
      return;
    }
    seenIcons.add(img);

    if (!iconVerdict.has(src)) {
      let verdict = false;
      try {
        verdict = shouldInvert(img);
      } catch (e) {
        verdict = false;
      }
      iconVerdict.set(src, verdict);
    }
    img.classList.toggle('usos-dark-icon-invert', iconVerdict.get(src));
  }

  function scanIcons(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('img').forEach(fixIcon);
  }

  function watch(root) {
    scanIcons(root);
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      setTimeout(() => {
        scheduled = false;
        scanIcons(root);
        reapply();
      }, 300);
    });
    observer.observe(root, { childList: true, subtree: true });
  }

  const knownRoots = new Set();

  function patchSetter(proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, 'adoptedStyleSheets');
    if (!desc || !desc.get || !desc.set) return;
    Object.defineProperty(proto, 'adoptedStyleSheets', {
      configurable: true,
      enumerable: desc.enumerable,
      get() {
        return desc.get.call(this);
      },
      set(sheets) {
        const next = Array.from(sheets).filter((sheet) => sheet !== darkSheet);
        next.push(darkSheet);
        desc.set.call(this, next);
      },
    });
  }

  patchSetter(ShadowRoot.prototype);
  patchSetter(Document.prototype);

  function reapply() {
    knownRoots.forEach((root) => {
      try {
        if (!root.adoptedStyleSheets.includes(darkSheet)) {
          root.adoptedStyleSheets = [...root.adoptedStyleSheets, darkSheet];
        }
      } catch (e) {
        /* */
      }
    });
  }

  function adopt(root) {
    knownRoots.add(root);
    try {
      if (!root.adoptedStyleSheets.includes(darkSheet)) {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, darkSheet];
      }
    } catch (e) {
      /* */
    }
    watch(root === document ? document.documentElement : root);
  }

  const origAttachShadow = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function (init) {
    const shadowRoot = origAttachShadow.call(this, init);
    adopt(shadowRoot);
    return shadowRoot;
  };

  try {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, darkSheet];
  } catch (e) {
    /* */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => adopt(document));
  } else {
    adopt(document);
  }

  window.addEventListener('usos-dark-toggle', (e) => {
    setEnabled(!!(e.detail && e.detail.enabled));
  });
})();
