if (/(^|\.)usos(web)?(\.|$)/i.test(location.hostname)) window.__usosDarkThemeCss = String.raw`
:root, :host {
  color-scheme: dark;
  accent-color: #dda94f;

  --ud-canvas: #0b0d11;
  --ud-surface: #12151b;
  --ud-surface-2: #171b22;
  --ud-surface-3: #1e232c;
  --ud-surface-4: #252b36;
  --ud-border: #272c36;
  --ud-border-soft: #1f242c;
  --ud-text: #c7ccd6;
  --ud-text-dim: #8f96a4;
  --ud-gold: #dda94f;

  --font-color: var(--ud-text);
  --background: var(--ud-surface);
  --on-background: var(--ud-text);
  --background-secondary: var(--ud-surface-2);
  --on-background-secondary: var(--ud-text);
  --primary: var(--ud-surface-3);
  --on-primary: #e4e9f1;
  --secondary: var(--ud-gold);
  --secondary-variant: #eec27b;
  --grey: var(--ud-text-dim);
  --border: var(--ud-border);
  --ok-status: #5fae7f;
  --error: #dd8181;
  --warning: #d6a34d;
  --accent-red: #c98080;
  --accent-blue: #85acdf;
  --accent-green: #6cbb99;
  --accent-violet: #b18fc6;
  --accent-context: var(--accent-blue);
  --accent1: var(--accent-red);
  --accent2: var(--accent-blue);
  --accent3: var(--accent-green);
  --accent4: var(--accent-violet);
  --font-color-reverse: var(--ud-canvas);
  --background-reverse: var(--ud-text);
}

html, body { background: var(--ud-canvas); }
main-panel { background: var(--ud-surface); }
menu-left { background: transparent; }
menu-left li li :is(a, span) {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M2.5 8h8.5M8 4.5 11.5 8 8 11.5' fill='none' stroke='%23dda94f' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
menu-left li li li :is(a, span) {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='3' fill='%23dda94f'/%3E%3C/svg%3E");
}

::selection { background: #2f5c8a; color: #eef2f8; }

usos-frame {
  background: var(--ud-surface-2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}
usos-frame.student { --primary: #17251f; --on-primary: #82cdaa; }
usos-frame.extras  { --primary: #182031; --on-primary: #93b8e8; }
:host(usos-frame) #header { border-bottom: 1px solid rgba(255, 255, 255, 0.05); }

:host(info-box) > div:first-child,
:host(notice-box) > div:first-child { background-color: #e8edf5; }
:host(info-box) > div:nth-child(2) {
  background-color: var(--ud-surface-2);
  background-image: linear-gradient(to right, #3a5c86 50px, var(--ud-surface-2) 50px);
  color: var(--ud-text);
}
:host(notice-box) > div:nth-child(2) {
  background-color: var(--ud-surface-2);
  background-image: linear-gradient(to right, #a35d2c 50px, var(--ud-surface-2) 50px);
  color: var(--ud-text);
}

:host(usos-dialog) dialog {
  background: var(--ud-surface-2);
  color: var(--ud-text);
  border-color: var(--ud-border);
}

:host(app-header) > div {
  background-color: #1c222e;
  background-blend-mode: multiply;
}

usos-link[bordered] {
  border-width: 1px !important;
  border-color: var(--ud-border) !important;
  background: var(--ud-surface-3);
  transition: background 0.12s ease, border-color 0.12s ease;
}
usos-link[bordered]:hover {
  background: var(--ud-surface-4);
  border-color: #39404d !important;
}

usos-module-link-tile, module-link-tile { box-shadow: none !important; }
usos-module-link-tile:hover, module-link-tile:hover {
  background-color: transparent !important;
  box-shadow: none !important;
  outline: 1px solid var(--ud-gold);
  outline-offset: -1px;
}

:host(text-field) #input {
  background: var(--ud-surface-3);
  border-color: var(--ud-border);
  color: var(--ud-text);
}
:host(text-field) #input:focus { border-color: #3d4757; }
:host(text-field) label,
:host(text-field) #showPassword,
:host(text-field) #supporting-text { color: var(--ud-text-dim); }

timetable-day { background: var(--ud-surface-2); }

.wrtext, .usos-ui { color: var(--ud-text); }

.usos-ui table:not([role=presentation]) tbody > tr > td,
.usos-ui table:not([role=presentation]) tbody > tr > th { background-color: transparent; }
.usos-ui table:not([role=presentation]) tbody > tr:nth-child(2n+1) > td,
.usos-ui table:not([role=presentation]) tbody > tr.odd > td { background-color: transparent; }
.usos-ui table:not([role=presentation]) tbody > tr:nth-child(2n) > td,
.usos-ui table:not([role=presentation]) tbody > tr.even > td { background-color: #161a21; }
.usos-ui div.odd { background-color: #161a21; }
.usos-ui usos-frame .inline-infobox { background-color: var(--ud-surface-3); }

.usos-ui table td, .usos-ui table th,
.wrtext table td, .wrtext table th { border-color: var(--ud-border) !important; }
.usos-ui thead td, .usos-ui thead th,
.wrtext thead td, .wrtext thead th { background-color: var(--ud-surface-3); color: var(--ud-text); }
.usos-ui table > * > tr > td.sqltableheader,
.wrtext table.grey > * > tr > td.sqltableheader { background-color: var(--ud-surface-3); color: var(--ud-text); }

tr.odd_row > td, tr.footnote > td,
.wrtext table.grey > * > tr > td,
.wrtext .layout-table.grey > .layout-row > .layout-cell,
.wrtext table.wrnav tr.odd_row td { background-color: transparent !important; }
tr.even_row > td,
.wrtext table.grey > * > :is(tr.even, tr.strong) > td,
.wrtext .layout-table.grey > * > :is(.layout-row.even, .layout-row.strong) > .layout-cell,
.wrtext table.wrnav tr.even_row td { background-color: #161a21 !important; }
.wrtext table.wrnav tr.wrgrey td, .wrtext table.wrnav td.wrgrey { background-color: var(--ud-surface-3) !important; }

.wrtext div.wrDropDownMenu, .wrtext div.wrDropDownMenu a,
.wrtext .greenforms table.selektor_popup, .wrtext .redforms table.selektor_popup,
.wrtext .greenforms table.selektor_popup tr td, .wrtext .redforms table.selektor_popup tr td,
.uwb-panel, .uwb-button.uwb-button-light {
  background-color: var(--ud-surface-3);
  color: var(--ud-text);
}

/* Strona osoby: tło kolumn rysuje img/layout2/panels-bg.png (biała treść + szara kolumna boczna 318px). */
.uwb-panels-layout { background: var(--ud-surface) !important; border-right-color: var(--ud-border) !important; }
.uwb-panels-layout:has(#uwb-side-column) {
  background: linear-gradient(to right,
    var(--ud-surface) calc(100% - 319px), var(--ud-border) calc(100% - 319px),
    var(--ud-border) calc(100% - 318px), var(--ud-surface-2) calc(100% - 318px)) !important;
}
.uwb-panels-layout .uwb-white-content { background-color: transparent !important; border-color: var(--ud-border) !important; color: var(--ud-text); }
.uwb-panel { border-color: var(--ud-border) !important; }
.uwb-panel.uwb-sidepanel > hr { background: var(--ud-border) !important; }
.uwb-panel.uwb-sidepanel p.uwb-grey-centered { color: var(--ud-text-dim) !important; }
.uwb-imgcover { background-color: var(--ud-surface-3) !important; }
.uwb-imgcover-inner { box-shadow: inset 0 0 0 2000px rgba(11, 13, 17, 0.35); }
.uwb-imgcover-photo-wrapper img { background-color: var(--ud-surface-3) !important; border-color: var(--ud-border) !important; }

/* Wnioski: tabele osiągnięć z katalogu (parametr wyborzkatalogu). */
table.parametr-wyborzkatalogu-tabela { background-color: var(--ud-surface-2) !important; border-color: var(--ud-border) !important; }
table.parametr-wyborzkatalogu-tabela > * > tr { border-color: var(--ud-border) !important; }
table.parametr-wyborzkatalogu-tabela > tbody > tr > td { background-color: var(--ud-surface) !important; }
table.parametr-wyborzkatalogu-tabela div.element {
  background-color: var(--ud-surface-3) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) !important;
}

:host(usos-copyright) p { color: var(--ud-text-dim) !important; }

.note, .wrnote, .midnote, .dim, .grey { color: var(--ud-text-dim) !important; }
.wrtext a.wrgrey, .wrtext a.wrgrey:visited, .wrtext a.wrgrey:active { color: #a3abb9 !important; }
.wrtext a.wrgrey:hover { color: #cdd3dd !important; }

#wrpopup, div#tooltip, .smarty-tip-wrapper-content,
.tooltipster-box, .tooltipster-content {
  background: var(--ud-surface-3) !important;
  color: var(--ud-text) !important;
  border-color: var(--ud-border) !important;
}

input:is([type=text], [type=search], [type=password], [type=email], [type=number],
         [type=date], [type=url], [type=tel]),
select, textarea {
  background-color: var(--ud-surface-3) !important;
  color: var(--ud-text) !important;
  border: 1px solid var(--ud-border) !important;
}
input.wrbtn, input[type=submit].wrbtn {
  background: var(--ud-surface-3) !important;
  color: var(--ud-text) !important;
  border: 1px solid var(--ud-border) !important;
}
hr { border-color: var(--ud-border-soft) !important; }

/* USOSweb rysuje radio/checkbox przez input::after z mask-image (js/usos-ui/css/base.css);
   kolor bierze z var(--primary) / currentColor - tu tylko przekolorowujemy "tusz". */
input[type=radio]::after, input[type=checkbox]::after {
  background-color: #9aa3b2 !important;
}
input[type=radio]:hover::after, input[type=checkbox]:hover::after {
  background-color: #c3cad6 !important;
}
input[type=radio]:checked::after, input[type=checkbox]:checked::after,
input[type=radio]:checked:hover::after, input[type=checkbox]:checked:hover::after,
input[type=checkbox]:indeterminate::after {
  background-color: var(--ud-gold) !important;
}
input[type=radio]:disabled::after, input[type=checkbox]:disabled::after {
  background-color: #565d69 !important;
}

.ua-table > thead > tr > td,
.ua-table > thead td.ua-sorted-by,
.ua-table > thead td.ua-sortable:hover {
  background: var(--ud-surface-3) !important;
  color: var(--ud-text) !important;
}
.ua-table > tbody > a.ua-tr > td,
.ua-table > tbody > a.ua-tr > td.ua-actions { background: transparent !important; color: var(--ud-text); }
.ua-table > tbody > a.ua-tr.ua-hovered > td { background: #1d222b !important; }
table.ua-form, table.ua-form > tbody > tr > td { background: transparent !important; }
table.ua-form > tbody > tr.ua-header > td { background: var(--ud-surface-3) !important; }
.ua-selector-popup, .ua-selector-popup .ua-close-button,
.text-core .text-wrap, .text-core .text-wrap .text-dropdown {
  background: var(--ud-surface-3) !important;
  color: var(--ud-text) !important;
  border-color: var(--ud-border) !important;
}
.text-core .text-wrap .text-dropdown .text-list .text-suggestion.text-selected,
.ua-inline-suggestion:focus { background: #2a3140 !important; color: var(--ud-text) !important; }
.ua-overlay-background { background: rgba(11, 13, 17, 0.65) !important; }

.ui-widget-content, .ui-widget-header, .ui-state-default,
.ui-widget.ui-widget-content, .ui-datepicker {
  background: var(--ud-surface-2) !important;
  color: var(--ud-text) !important;
  border-color: var(--ud-border) !important;
}
.ui-state-hover, .ui-state-active, .ui-state-focus {
  background: #2a3140 !important;
  color: #e4e9f1 !important;
}

[style*="background:#fff" i], [style*="background: #fff" i],
[style*="background-color:#fff" i], [style*="background-color: #fff" i],
[style*="background:white" i], [style*="background: white" i],
[style*="background-color:white" i], [style*="background-color: white" i] {
  background-color: var(--ud-surface-2) !important;
  color: var(--ud-text) !important;
}
[style*="background:#ee" i], [style*="background: #ee" i],
[style*="background:#f0" i], [style*="background: #f0" i],
[style*="background:#f5" i], [style*="background: #f5" i],
[style*="background:#f8" i], [style*="background: #f8" i],
[style*="background:#dd" i], [style*="background: #dd" i],
[style*="background-color:#ee" i], [style*="background-color: #ee" i],
[style*="background-color:#f0" i], [style*="background-color: #f0" i],
[style*="background-color:#f5" i], [style*="background-color: #f5" i],
[style*="background-color:#f8" i], [style*="background-color: #f8" i],
[style*="background-color:#dd" i], [style*="background-color: #dd" i] {
  background-color: var(--ud-surface-3) !important;
  color: var(--ud-text) !important;
}
[style*="solid #aaa" i], [style*="solid #bbb" i], [style*="solid #ccc" i],
[style*="solid #ddd" i], [style*="solid #eee" i], [style*="solid #999" i],
[style*="solid #888" i], [style*="solid gray" i], [style*="solid grey" i] {
  border-color: var(--ud-border) !important;
}

img.usos-dark-icon-invert { filter: invert(1) hue-rotate(180deg); }
`;
