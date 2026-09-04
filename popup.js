const toggle = document.getElementById('toggle');
const hint = document.getElementById('hint');

chrome.storage.local.get({ enabled: true }, (data) => {
  toggle.checked = data.enabled;
});

toggle.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: toggle.checked });
});

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  const host = tab && tab.url ? new URL(tab.url).hostname : '';
  if (!/(^|\.)usos(web)?(\.|$)/i.test(host)) {
    hint.textContent = 'Ta karta nie wyglada na USOSweb - przelacznik zadziala na kartach USOSweb.';
  } else {
    hint.textContent = 'Przelacz i odswiez karte USOSweb, jesli zmiana nie jest widoczna od razu.';
  }
});
