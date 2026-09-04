# USOSweb Dark Mode

Ciemny motyw dla USOSweb - prawdziwa paleta kolorów zamiast filtra `invert()`.
&nbsp;&nbsp;·&nbsp;&nbsp;A dark theme for USOSweb - a real color palette instead of an `invert()` filter.

**[Polski](#polski) · [English](#english)**

---

## Polski

USOSweb 7 opiera kolory na zmiennych CSS, więc rozszerzenie podmienia całą paletę zamiast odwracać kolory strony. Efekt: spokojne, ciemne tło, czytelny tekst i zachowana hierarchia - bez wyblakłych zdjęć i wywróconych kolorów, które daje `filter: invert(1)`.

### Instalacja

1. Pobierz `usosweb-dark-mode-1.0.0.zip` z zakładki [Releases](https://github.com/pokjump/USOSweb-Dark-Mode/releases) i rozpakuj go do dowolnego folderu.
2. Otwórz `chrome://extensions`.
3. Włącz **Tryb dewelopera** (przełącznik w prawym górnym rogu).
4. Kliknij **Załaduj rozpakowane** i wskaż rozpakowany folder.
5. Odśwież kartę z USOSwebem.

Działa w Chrome, Edge, Brave, Operze i innych przeglądarkach opartych na Chromium.

### Obsługiwane strony

Każda instalacja USOSweba - rozpoznawana po nazwie hosta zawierającej `usos` lub `usosweb`, na przykład:

- `usosweb.ubb.edu.pl`
- `web.usos.agh.edu.pl`
- `www.usosweb.uj.edu.pl`
- `web.usos.pwr.edu.pl`
- `usosweb.polsl.pl`

### Włączanie i wyłączanie

Kliknij ikonę rozszerzenia i przestaw przełącznik. Ustawienie zapisuje się na stałe i obowiązuje we wszystkich kartach.

### Co obejmuje motyw

- Nowy interfejs USOSweb 7 (nagłówek, menu, ramki, plan zajęć, formularze) - przez podmianę zmiennych CSS, które dziedziczą się także wewnątrz Shadow DOM.
- Starsze ekrany (`.wrtext`, `.usos-ui`, `.ua-*`, jQuery UI, dymki) - osobną warstwą reguł.
- Stare ikonki rysowane pod biały interfejs - skrypt bada jasność i nasycenie pikseli i odwraca tylko te ciemne i bezbarwne, zostawiając kolorowe w spokoju.

### Licencja

[MIT](LICENSE)

---

## English

USOSweb 7 builds its colors on CSS custom properties, so this extension swaps the whole palette instead of inverting the page. The result is a calm dark background, readable text and an intact visual hierarchy - without the washed-out photos and flipped colors that `filter: invert(1)` produces.

### Installation

1. Download `usosweb-dark-mode-1.0.0.zip` from [Releases](https://github.com/pokjump/USOSweb-Dark-Mode/releases) and unpack it anywhere.
2. Open `chrome://extensions`.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the unpacked folder.
5. Reload your USOSweb tab.

Works in Chrome, Edge, Brave, Opera and other Chromium-based browsers.

### Supported sites

Any USOSweb deployment - matched by a hostname label of `usos` or `usosweb`, for example:

- `usosweb.ubb.edu.pl`
- `web.usos.agh.edu.pl`
- `www.usosweb.uj.edu.pl`
- `web.usos.pwr.edu.pl`
- `usosweb.polsl.pl`

### Turning it on and off

Click the extension icon and flip the switch. The setting is stored and applies to every tab.

### What the theme covers

- The modern USOSweb 7 interface (header, menus, frames, timetable, forms) - by overriding the CSS custom properties, which inherit across Shadow DOM boundaries.
- Legacy screens (`.wrtext`, `.usos-ui`, `.ua-*`, jQuery UI, tooltips) - through a separate layer of rules.
- Old icons drawn for a white interface - a script measures each icon's luminance and saturation and inverts only the dark, near-greyscale ones, leaving colorful icons untouched.

### License

[MIT](LICENSE)
