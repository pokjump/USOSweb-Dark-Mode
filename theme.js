if (/(^|\.)usos(web)?(\.|$)/i.test(location.hostname)) window.__usosDarkThemeCss = String.raw`
:root, :host {
  color-scheme: dark;

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
.uwb-panel, .uwb-panels-layout .uwb-white-content, .uwb-button.uwb-button-light {
  background-color: var(--ud-surface-3);
  color: var(--ud-text);
}

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

img.usos-dark-icon-invert { filter: invert(1) hue-rotate(180deg); }
`;
