(function () {
  if (!/(^|\.)usos(web)?(\.|$)/i.test(location.hostname)) return;

  function applyState(enabled) {
    window.dispatchEvent(new CustomEvent('usos-dark-toggle', { detail: { enabled } }));
  }

  chrome.storage.local.get({ enabled: true }, (data) => {
    applyState(data.enabled);
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.enabled) {
      applyState(changes.enabled.newValue);
    }
  });
})();
