/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}
  img[id*='weather-icon'][src='#'],
  img[id*='weather-icon'][src=''] {
  display: none;
}

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-3 {
  bottom: 0.75rem;
}
.bottom-3\\.5 {
  bottom: 0.875rem;
}
.bottom-6 {
  bottom: 1.5rem;
}
.end-3 {
  right: 0.75rem;
}
.end-3\\.5 {
  right: 0.875rem;
}
.left-1\\/2 {
  left: 50%;
}
.left-2 {
  left: 0.5rem;
}
.right-2 {
  right: 0.5rem;
}
.start-0 {
  left: 0px;
}
.top-1\\/2 {
  top: 50%;
}
.top-6 {
  top: 1.5rem;
}
.z-50 {
  z-index: 50;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.m-8 {
  margin: 2rem;
}
.mx-12 {
  margin-left: 3rem;
  margin-right: 3rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-20 {
  margin-bottom: 5rem;
}
.ml-0 {
  margin-left: 0px;
}
.ml-0\\.5 {
  margin-left: 0.125rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-8 {
  margin-left: 2rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-0 {
  margin-right: 0px;
}
.mr-0\\.5 {
  margin-right: 0.125rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.ms-3 {
  margin-left: 0.75rem;
}
.ms-auto {
  margin-left: auto;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-4 {
  margin-top: 1rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.size-10 {
  width: 2.5rem;
  height: 2.5rem;
}
.size-12 {
  width: 3rem;
  height: 3rem;
}
.size-16 {
  width: 4rem;
  height: 4rem;
}
.size-4 {
  width: 1rem;
  height: 1rem;
}
.size-5 {
  width: 1.25rem;
  height: 1.25rem;
}
.size-6 {
  width: 1.5rem;
  height: 1.5rem;
}
.size-8 {
  width: 2rem;
  height: 2rem;
}
.size-\\[200px\\] {
  width: 200px;
  height: 200px;
}
.h-8 {
  height: 2rem;
}
.max-h-full {
  max-height: 100%;
}
.w-\\[250px\\] {
  width: 250px;
}
.w-\\[500px\\] {
  width: 500px;
}
.w-full {
  width: 100%;
}
.max-w-\\[150px\\] {
  max-width: 150px;
}
.max-w-screen-lg {
  max-width: 1024px;
}
.max-w-xl {
  max-width: 36rem;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.flex-grow {
  flex-grow: 1;
}
.grow {
  flex-grow: 1;
}
.basis-\\[250px\\] {
  flex-basis: 250px;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}
.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}
.snap-start {
  scroll-snap-align: start;
}
.scroll-px-4 {
  scroll-padding-left: 1rem;
  scroll-padding-right: 1rem;
}
.list-none {
  list-style-type: none;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.flex-col {
  flex-direction: column;
}
.place-items-center {
  align-items: center;
  justify-items: center;
  place-items: center;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-x-0 {
  -moz-column-gap: 0px;
       column-gap: 0px;
}
.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}
.gap-x-3 {
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}
.gap-y-4 {
  row-gap: 1rem;
}
.gap-y-8 {
  row-gap: 2rem;
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * 0);
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * (1 - 0));
  margin-left: calc(1rem * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(1rem * calc(1 - 0));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * (1 - 0));
  margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0.5rem * calc(1 - 0));
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * 0);
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * (1 - 0));
  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(1rem * calc(1 - 0));
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * 0);
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * (1 - 0));
  margin-top: calc(1.5rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(1.5rem * calc(1 - 0));
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * 0);
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * (1 - 0));
  margin-top: calc(2rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(2rem * calc(1 - 0));
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * 0);
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.scroll-smooth {
  scroll-behavior: smooth;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-3xl {
  border-radius: 1.5rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.border {
  border-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-\\[\\#1da1f2\\] {
  --tw-border-opacity: 1;
  border-color: rgba(29, 161, 242, 1);
  border-color: rgba(29, 161, 242, var(--tw-border-opacity));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, 1);
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}
.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgba(226, 232, 240, 1);
  border-color: rgba(226, 232, 240, var(--tw-border-opacity));
}
.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgba(203, 213, 225, 1);
  border-color: rgba(203, 213, 225, var(--tw-border-opacity));
}
.bg-\\[\\#1da1f2\\] {
  --tw-bg-opacity: 1;
  background-color: rgba(29, 161, 242, 1);
  background-color: rgba(29, 161, 242, var(--tw-bg-opacity));
}
.bg-amber-200\\/40 {
  background-color: rgba(253, 230, 138, 0.4);
}
.bg-blue-300\\/40 {
  background-color: rgba(147, 197, 253, 0.4);
}
.bg-blue-500\\/40 {
  background-color: rgba(59, 130, 246, 0.4);
}
.bg-blue-600\\/40 {
  background-color: rgba(37, 99, 235, 0.4);
}
.bg-blue-700\\/40 {
  background-color: rgba(29, 78, 216, 0.4);
}
.bg-blue-900\\/40 {
  background-color: rgba(30, 58, 138, 0.4);
}
.bg-sky-200\\/40 {
  background-color: rgba(186, 230, 253, 0.4);
}
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgba(226, 232, 240, 1);
  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}
.bg-slate-200\\/40 {
  background-color: rgba(226, 232, 240, 0.4);
}
.bg-slate-300\\/40 {
  background-color: rgba(203, 213, 225, 0.4);
}
.bg-slate-400\\/40 {
  background-color: rgba(148, 163, 184, 0.4);
}
.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 250, 252, 1);
  background-color: rgba(248, 250, 252, var(--tw-bg-opacity));
}
.bg-slate-500\\/40 {
  background-color: rgba(100, 116, 139, 0.4);
}
.bg-transparent {
  background-color: transparent;
}
.bg-violet-400\\/40 {
  background-color: rgba(167, 139, 250, 0.4);
}
.bg-violet-800\\/40 {
  background-color: rgba(91, 33, 182, 0.4);
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.fill-\\[\\#1da1f2\\] {
  fill: #1da1f2;
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.p-5 {
  padding: 1.25rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-3\\.5 {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pr-5 {
  padding-right: 1.25rem;
}
.pr-8 {
  padding-right: 2rem;
}
.ps-10 {
  padding-left: 2.5rem;
}
.ps-3 {
  padding-left: 0.75rem;
}
.pt-8 {
  padding-top: 2rem;
}
.text-center {
  text-align: center;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.text-\\[\\#1da1f2\\] {
  --tw-text-opacity: 1;
  color: rgba(29, 161, 242, 1);
  color: rgba(29, 161, 242, var(--tw-text-opacity));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, 1);
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, 1);
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, 1);
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, 1);
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}
.text-slate-200 {
  --tw-text-opacity: 1;
  color: rgba(226, 232, 240, 1);
  color: rgba(226, 232, 240, var(--tw-text-opacity));
}
.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgba(148, 163, 184, 1);
  color: rgba(148, 163, 184, var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.no-underline {
  text-decoration-line: none;
}
.opacity-60 {
  opacity: 0.6;
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.blur {
  --tw-blur: blur(8px);
  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: blur(8px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: blur(8px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-brightness-75 {
  --tw-backdrop-brightness: brightness(.75);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) brightness(.75) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) brightness(.75) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-700 {
  transition-duration: 700ms;
}
.font-small-caps {
  font-variant: small-caps;
}
.font-variant-normal {
  font-variant: normal;
}

.hover\\:bg-\\[\\#1da1f2\\]\\/80:hover {
  background-color: rgba(29, 161, 242, 0.8);
}

.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, 1);
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}

.hover\\:bg-slate-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}

.hover\\:text-\\[\\#1da1f2\\]:hover {
  --tw-text-opacity: 1;
  color: rgba(29, 161, 242, 1);
  color: rgba(29, 161, 242, var(--tw-text-opacity));
}

.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, 1);
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}

.focus\\:z-10:focus {
  z-index: 10;
}

.focus\\:border-\\[\\#1da1f2\\]:focus {
  --tw-border-opacity: 1;
  border-color: rgba(29, 161, 242, 1);
  border-color: rgba(29, 161, 242, var(--tw-border-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
}

.focus\\:ring-\\[\\#1da1f2\\]:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(29, 161, 242, var(--tw-ring-opacity));
}

.focus\\:ring-\\[\\#1da1f2\\]\\/50:focus {
  --tw-ring-color: rgba(29, 161, 242, 0.5);
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:hover\\:bg-white:hover:disabled {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.disabled\\:hover\\:text-gray-800:hover:disabled {
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, 1);
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}

.disabled\\:focus\\:border-slate-200:focus:disabled {
  --tw-border-opacity: 1;
  border-color: rgba(226, 232, 240, 1);
  border-color: rgba(226, 232, 240, var(--tw-border-opacity));
}

.group:focus-within .group-focus-within\\:text-\\[\\#1da1f2\\] {
  --tw-text-opacity: 1;
  color: rgba(29, 161, 242, 1);
  color: rgba(29, 161, 242, var(--tw-text-opacity));
}

.group:hover .group-hover\\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:border-\\[\\#1da1f2\\] {
  --tw-border-opacity: 1;
  border-color: rgba(29, 161, 242, 1);
  border-color: rgba(29, 161, 242, var(--tw-border-opacity));
}

.group:disabled .group-disabled\\:opacity-50 {
  opacity: 0.5;
}

@media (min-width: 640px) {

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {

  .md\\:inset-0 {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:p-5 {
    padding: 1.25rem;
  }
}

@media (min-width: 1024px) {

  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  img[id*='weather-icon'][src='#'],\n  img[id*='weather-icon'][src=''] {\n    @apply hidden;\n  }\n\n  input[type='search']::-webkit-search-decoration,\n  input[type='search']::-webkit-search-cancel-button,\n  input[type='search']::-webkit-search-results-button,\n  input[type='search']::-webkit-search-results-decoration {\n    @apply hidden;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/background-class.js":
/*!*********************************!*\
  !*** ./src/background-class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backgroundClass)
/* harmony export */ });
function backgroundClass(conditionCode) {
  const bgClasses = {
    1000: 'bg-amber-200/40', // Sunny
    1003: 'bg-slate-300/40', // Partly cloudy
    1006: 'bg-slate-400/40', // Cloudy
    1009: 'bg-slate-500/40', // Overcast
    1030: 'bg-slate-200/40', // Mist
    1063: 'bg-blue-300/40', // Patchy rain possible
    1066: 'bg-blue-300/40', // Patchy snow possible
    1069: 'bg-blue-300/40', // Patchy sleet possible
    1072: 'bg-blue-300/40', // Patchy freezing drizzle possible
    1087: 'bg-violet-800/40', // Thundery outbreaks possible
    1114: 'bg-blue-500/40', // Blowing snow
    1117: 'bg-blue-700/40', // Blizzard
    1135: 'bg-slate-300/40', // Fog
    1147: 'bg-slate-500/40', // Freezing fog
    1150: 'bg-blue-300/40', // Patchy light drizzle
    1153: 'bg-blue-300/40', // Light drizzle
    1168: 'bg-blue-500/40', // Freezing drizzle
    1171: 'bg-blue-900/40', // Heavy freezing drizzle
    1180: 'bg-blue-300/40', // Patchy light rain
    1183: 'bg-blue-300/40', // Light rain
    1186: 'bg-blue-600/40', // Moderate rain at times
    1189: 'bg-blue-600/40', // Moderate rain
    1192: 'bg-blue-900/40', // Heavy rain at times
    1195: 'bg-blue-900/40', // Heavy rain
    1198: 'bg-blue-300/40', // Light freezing rain
    1201: 'bg-blue-700/40', // Moderate or heavy freezing rain
    1204: 'bg-blue-300/40', // Light sleet
    1207: 'bg-blue-700/40', // Moderate or heavy sleet
    1210: 'bg-blue-300/40', // Patchy light snow
    1213: 'bg-blue-300/40', // Light snow
    1216: 'bg-blue-600/40', // Patchy moderate snow
    1219: 'bg-blue-600/40', // Moderate snow
    1222: 'bg-blue-900/40', // Patchy heavy snow
    1225: 'bg-blue-900/40', // Heavy snow
    1237: 'bg-blue-600/40', // Ice pellets
    1240: 'bg-blue-300/40', // Light rain shower
    1243: 'bg-blue-700/40', // Moderate or heavy rain shower
    1246: 'bg-blue-900/40', // Torrential rain shower
    1249: 'bg-blue-300/40', // Light sleet showers
    1252: 'bg-blue-700/40', // Moderate or heavy sleet showers
    1255: 'bg-blue-300/40', // Light snow showers
    1258: 'bg-blue-700/40', // Moderate or heavy snow showers
    1261: 'bg-blue-300/40', // Light showers of ice pellets
    1264: 'bg-blue-700/40', // Moderate or heavy showers of ice pellets
    1273: 'bg-violet-400/40', // Patchy light rain with thunder
    1276: 'bg-violet-800/40', // Moderate or heavy rain with thunder
    1279: 'bg-violet-400/40', // Patchy light snow with thunder
    1282: 'bg-violet-800/40', // Moderate or heavy snow with thunder
  };

  return bgClasses[conditionCode] || 'bg-white';
}


/***/ }),

/***/ "./src/fetch-weather-data.js":
/*!***********************************!*\
  !*** ./src/fetch-weather-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DAYS: () => (/* binding */ DAYS),
/* harmony export */   "default": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _save_last_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-last-location */ "./src/save-last-location.js");


const API_KEY = '3b5e7413d81949a3b17232658242103';
const DAYS = 3;

async function fetchWeatherData(search) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&aqi=yes&days=${DAYS}`,
    { mode: 'cors' },
  );
  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log(data);

  (0,_save_last_location__WEBPACK_IMPORTED_MODULE_0__["default"])(data.location);
  localStorage.setItem('weatherData', JSON.stringify(data));

  return data;
}


/***/ }),

/***/ "./src/format-time.js":
/*!****************************!*\
  !*** ./src/format-time.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatTime)
/* harmony export */ });
function formatTime(date) {
  const time = new Date(date);
  let format = '{h}:{m}{ap}';

  let h = time.getHours();

  const ap = h > 11 ? 'pm' : 'am';

  if (h > 12) h -= 12;

  let m = time.getMinutes();
  if (m < 10) m = `0${m}`;

  format = format.replace(/\{ap\}/g, ap);
  format = format.replace(/\{h\}/g, h);
  format = format.replace(/\{m\}/g, m);

  return format;
}


/***/ }),

/***/ "./src/generate-daily-forecast-list.js":
/*!*********************************************!*\
  !*** ./src/generate-daily-forecast-list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateDailyForecastList)
/* harmony export */ });
function getDayName(daysInFuture) {
  if (daysInFuture === 0) return 'Today';

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const futureDay = (new Date().getDay() + daysInFuture) % 7;

  return days[futureDay];
}

function generateDailyForecastList(day) {
  const forecastList = document.createElement('ul');
  forecastList.id = `forecast-${day}`;
  forecastList.classList.add(
    'rounded-2xl',
    'text-center',
    'border',
    'border-gray-300',
    'p-6',
    'basis-[250px]',
    'flex-shrink-0',
    'flex-grow',
    'grid',
    'grid-cols-2',
    'gap-x-2',
    'gap-y-8',
  );

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('col-span-2');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('flex', 'items-center', 'justify-center');

  const weatherIcon = document.createElement('img');
  weatherIcon.src = '#';
  weatherIcon.id = `forecast-weather-icon-${day}`;
  weatherIcon.classList.add('mr-2', 'aspect-square', 'size-8');

  const dayTitle = document.createElement('h3');
  dayTitle.classList.add('font-bold', 'text-center', 'text-lg');
  dayTitle.textContent = getDayName(day);

  titleContainer.append(weatherIcon, dayTitle);
  headerDiv.appendChild(titleContainer);
  forecastList.appendChild(headerDiv);

  const forecastItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'max-temp', title: 'High' },
    { id: 'min-temp', title: 'Low' },
    { id: 'sunrise', title: 'Sunrise' },
    { id: 'sunset', title: 'Sunset' },
    { id: 'precipitation-chance', title: 'Chance of Precipitation' },
  ];

  forecastItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = `${item.id}-${day}`;
    listItem.classList.add('list-none');
    if (item.id === 'precipitation-chance') {
      listItem.classList.add('col-span-2');
    }

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sr-only';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col');

    const dataSpan = document.createElement('span');
    dataSpan.id = `${item.id}-data-${day}`;
    if (item.id === 'condition') dataSpan.classList.add('text-lg');
    else dataSpan.classList.add('text-2xl');

    const notesSpan = document.createElement('span');
    notesSpan.id = `${item.id}-notes-${day}`;
    notesSpan.classList.add('text-sm', 'opacity-60');

    containerDiv.append(dataSpan, notesSpan);
    listItem.append(titleSpan, containerDiv);
    if (item.id === 'condition') headerDiv.appendChild(listItem);
    else forecastList.appendChild(listItem);
  });

  return forecastList;
}


/***/ }),

/***/ "./src/generate-hourly-forecast-list.js":
/*!**********************************************!*\
  !*** ./src/generate-hourly-forecast-list.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHourlyForecastList)
/* harmony export */ });
function generateHourlyForecastList(hour) {
  const hourlyList = document.createElement('ul');
  hourlyList.id = `hourly-${hour}`;
  hourlyList.classList.add(
    'rounded-2xl',
    'text-center',
    'bg-white',
    'border',
    'border-gray-300',
    'p-6',
    'w-[250px]',
    'flex-shrink-0',
    'flex',
    'flex-col',
    'gap-8',
    'snap-start',
  );

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('flex', 'flex-col', 'items-center');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('flex', 'items-center', 'justify-center');

  const weatherIcon = document.createElement('img');
  weatherIcon.src = '#';
  weatherIcon.id = `hourly-weather-icon-${hour}`;
  weatherIcon.classList.add('mr-2', 'aspect-square', 'size-8');

  const hourTitle = document.createElement('h3');
  hourTitle.id = `hour-${hour}`;
  hourTitle.classList.add(
    'font-bold',
    'text-center',
    'text-lg',
    'font-small-caps',
  );

  titleContainer.append(weatherIcon, hourTitle);
  headerDiv.appendChild(titleContainer);
  hourlyList.appendChild(headerDiv);

  const forecastItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'temperature', title: 'Temperature' },
    { id: 'precipitation', title: 'Precipitation' },
    { id: 'humidity', title: 'Humidity' },
    { id: 'uv-index', title: 'UV Index' },
    { id: 'wind', title: 'Wind' },
  ];

  forecastItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = `hourly-${item.id}-${hour}`;
    listItem.classList.add('list-none');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sr-only';
    titleSpan.textContent = item.title;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col');

    const dataSpan = document.createElement('span');
    dataSpan.id = `hourly-${item.id}-data-${hour}`;
    if (item.id === 'condition') dataSpan.classList.add('text-lg');
    else dataSpan.classList.add('text-2xl');

    const notesSpan = document.createElement('span');
    notesSpan.id = `hourly-${item.id}-notes-${hour}`;
    notesSpan.classList.add('text-sm', 'opacity-60');

    containerDiv.append(dataSpan, notesSpan);
    listItem.append(titleSpan, containerDiv);

    if (item.id === 'condition') headerDiv.appendChild(listItem);
    else hourlyList.appendChild(listItem);
  });

  return hourlyList;
}


/***/ }),

/***/ "./src/generate-weather-list.js":
/*!**************************************!*\
  !*** ./src/generate-weather-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateWeatherList)
/* harmony export */ });
function generateWeatherList() {
  const weatherList = document.createElement('ul');
  weatherList.classList.add(
    'grid',
    'grid-cols-1',
    'sm:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4',
    'gap-y-4',
    'gap-x-0',
    'place-items-center',
  );

  const dataItems = [
    { id: 'condition', title: 'Conditions' },
    { id: 'temperature', title: 'Temperature' },
    { id: 'precipitation', title: 'Precipitation' },
    { id: 'humidity', title: 'Humidity' },
    { id: 'visibility', title: 'Visibility' },
    { id: 'air-quality', title: 'Air Quality' },
    { id: 'uv-index', title: 'UV Index' },
    { id: 'wind', title: 'Wind' },
  ];

  dataItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = item.id;
    listItem.classList.add(
      'relative',
      'list-none',
      'rounded-2xl',
      'text-center',
      'bg-sky-200/40',
      'border',
      'border-gray-300',
      'p-6',
      'size-[200px]',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
    );

    const titleSpan = document.createElement('span');
    titleSpan.textContent = item.title;
    titleSpan.classList.add(
      'font-bold',
      'text-lg',
      'absolute',
      'top-6',
      'max-w-[150px]',
    );

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex', 'flex-col', 'items-center', 'gap-4');

    const dataParagraph = document.createElement('p');
    dataParagraph.id = `${item.id}-data`;
    dataParagraph.classList.add('text-2xl');

    const notesParagraph = document.createElement('p');
    notesParagraph.id = `${item.id}-notes`;
    notesParagraph.classList.add(
      'text-sm',
      'opacity-60',
      'absolute',
      'bottom-6',
      'max-w-[150px]',
    );

    containerDiv.append(dataParagraph, notesParagraph);
    listItem.appendChild(titleSpan);
    listItem.appendChild(containerDiv);
    weatherList.appendChild(listItem);
  });

  return weatherList;
}


/***/ }),

/***/ "./src/geolocation.js":
/*!****************************!*\
  !*** ./src/geolocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geoLocate)
/* harmony export */ });
/* eslint-disable no-console */

function geoLocate() {
  return new Promise((resolve, reject) => {
    // Check if geolocation is supported by the browser
    if ('geolocation' in navigator) {
      // Prompt user for permission to access their location
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Resolve promise with location data
          resolve({ lat, lng });
        },
        // Error callback function
        (error) => {
          // Reject promise with error
          reject(new Error(`Error getting user location: ${error.message}`));
        },
      );
    } else {
      // Geolocation is not supported by the browser
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}


/***/ }),

/***/ "./src/get-city-title.js":
/*!*******************************!*\
  !*** ./src/get-city-title.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCityTitle)
/* harmony export */ });
const regionAbbreviations = {
  'United States of America': {
    Alabama: 'AL',
    Alaska: 'AK',
    Arizona: 'AZ',
    Arkansas: 'AR',
    California: 'CA',
    Colorado: 'CO',
    Connecticut: 'CT',
    Delaware: 'DE',
    Florida: 'FL',
    Georgia: 'GA',
    Hawaii: 'HI',
    Idaho: 'ID',
    Illinois: 'IL',
    Indiana: 'IN',
    Iowa: 'IA',
    Kansas: 'KS',
    Kentucky: 'KY',
    Louisiana: 'LA',
    Maine: 'ME',
    Maryland: 'MD',
    Massachusetts: 'MA',
    Michigan: 'MI',
    Minnesota: 'MN',
    Mississippi: 'MS',
    Missouri: 'MO',
    Montana: 'MT',
    Nebraska: 'NE',
    Nevada: 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    Ohio: 'OH',
    Oklahoma: 'OK',
    Oregon: 'OR',
    Pennsylvania: 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    Tennessee: 'TN',
    Texas: 'TX',
    Utah: 'UT',
    Vermont: 'VT',
    Virginia: 'VA',
    Washington: 'WA',
    'West Virginia': 'WV',
    Wisconsin: 'WI',
    Wyoming: 'WY',
    'District of Columbia': 'DC',
  },
  Canada: {
    Alberta: 'AB',
    'British Columbia': 'BC',
    Manitoba: 'MB',
    'New Brunswick': 'NB',
    'Newfoundland and Labrador': 'NL',
    'Nova Scotia': 'NS',
    Ontario: 'ON',
    'Prince Edward Island': 'PE',
    Quebec: 'QC',
    Saskatchewan: 'SK',
    'Northwest Territories': 'NT',
    Nunavut: 'NU',
    Yukon: 'YT',
  },
};

const countryAbbreviations = {
  'United States of America': 'USA',
  Australia: 'AU',
  'United Kingdom': 'UK',
};

function formattedRegionAndCountry(region, country) {
  const countryAbbr = countryAbbreviations[country] || country;
  const regionAbbr = regionAbbreviations?.[country]?.[region];

  if (regionAbbr) return `${regionAbbr}, ${countryAbbr}`;
  return countryAbbr;
}

function getCityTitle(location) {
  const city = location.name;
  const { region } = location;
  const { country } = location;

  return `${city}, ${formattedRegionAndCountry(region, country)}`;
}


/***/ }),

/***/ "./src/get-distance-unit.js":
/*!**********************************!*\
  !*** ./src/get-distance-unit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDistanceUnit)
/* harmony export */ });
function getDistanceUnit() {
  return localStorage.getItem('distanceUnit') || 'mi';
}


/***/ }),

/***/ "./src/get-last-location.js":
/*!**********************************!*\
  !*** ./src/get-last-location.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLastLocation)
/* harmony export */ });
function getLastLocation() {
  return localStorage.getItem('lastLocation') || 'Tampa';
}


/***/ }),

/***/ "./src/get-measurement-unit.js":
/*!*************************************!*\
  !*** ./src/get-measurement-unit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMeasurementUnit)
/* harmony export */ });
function getMeasurementUnit() {
  return localStorage.getItem('measurementUnit') || 'in';
}


/***/ }),

/***/ "./src/get-speed-unit.js":
/*!*******************************!*\
  !*** ./src/get-speed-unit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSpeedUnit)
/* harmony export */ });
function getSpeedUnit() {
  return localStorage.getItem('distanceUnit') === 'km' ? 'kph' : 'mph';
}


/***/ }),

/***/ "./src/get-temperature-unit.js":
/*!*************************************!*\
  !*** ./src/get-temperature-unit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTemperatureUnit)
/* harmony export */ });
function getTemperatureUnit() {
  return localStorage.getItem('temperatureUnit') || 'F';
}


/***/ }),

/***/ "./src/location-btn.js":
/*!*****************************!*\
  !*** ./src/location-btn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation */ "./src/geolocation.js");
/* harmony import */ var _fetch_weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-weather-data */ "./src/fetch-weather-data.js");
/* harmony import */ var _update_weather_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-weather-data */ "./src/update-weather-data.js");
/* harmony import */ var _update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-daily-forecast-data */ "./src/update-daily-forecast-data.js");
/* harmony import */ var _update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-hourly-forecast-data */ "./src/update-hourly-forecast-data.js");
/* harmony import */ var _scroll_to_current_hour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to-current-hour */ "./src/scroll-to-current-hour.js");







const locationBtn = document.getElementById('location-btn');
const locationBtnText = document.getElementById('location-btn-text');
const locationIcon = document.getElementById('location-icon');
const spinnerIcon = document.getElementById('spinner-icon');

locationBtn.onclick = async () => {
  locationBtn.disabled = true;
  const prevLocationBtnText = locationBtnText.textContent;
  locationBtnText.textContent = 'Getting Your Location';
  locationIcon.classList.add('hidden');
  spinnerIcon.classList.remove('hidden');

  try {
    const location = await (0,_geolocation__WEBPACK_IMPORTED_MODULE_0__["default"])();
    locationBtnText.textContent = 'Updating Weather Information';

    const currentLocation = [location.lat, location.lng].join();
    const data = await (0,_fetch_weather_data__WEBPACK_IMPORTED_MODULE_1__["default"])(currentLocation);

    (0,_update_weather_data__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    (0,_update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
    (0,_update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_4__["default"])(data);
    (0,_scroll_to_current_hour__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    locationBtn.disabled = false;
    locationBtnText.textContent = prevLocationBtnText;
    locationIcon.classList.remove('hidden');
    spinnerIcon.classList.add('hidden');
  }
};


/***/ }),

/***/ "./src/save-last-location.js":
/*!***********************************!*\
  !*** ./src/save-last-location.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveLastLocation)
/* harmony export */ });
function saveLastLocation(location) {
  localStorage.setItem('lastLocation', [location.lat, location.lon].join());
}


/***/ }),

/***/ "./src/save-settings.js":
/*!******************************!*\
  !*** ./src/save-settings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-weather-data */ "./src/update-weather-data.js");
/* harmony import */ var _update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-daily-forecast-data */ "./src/update-daily-forecast-data.js");
/* harmony import */ var _update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-hourly-forecast-data */ "./src/update-hourly-forecast-data.js");
/* harmony import */ var _get_temperature_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-temperature-unit */ "./src/get-temperature-unit.js");
/* harmony import */ var _get_distance_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-distance-unit */ "./src/get-distance-unit.js");
/* harmony import */ var _get_measurement_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-measurement-unit */ "./src/get-measurement-unit.js");







function preselectChosenSettings() {
  const temperatureUnit = (0,_get_temperature_unit__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const distanceUnit = (0,_get_distance_unit__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const measurementUnit = (0,_get_measurement_unit__WEBPACK_IMPORTED_MODULE_5__["default"])();

  document.getElementById(temperatureUnit).checked = true;
  document.getElementById(distanceUnit).checked = true;
  document.getElementById(measurementUnit).checked = true;
}

const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const settingsForm = document.getElementById('settings-form');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
const saveSettingsBtn = document.getElementById('save-settings-btn');

function closeSettingsModal() {
  settingsModal.classList.add('hidden');
  settingsForm.reset();
}

function showSettingsModal() {
  preselectChosenSettings();
  settingsModal.classList.remove('hidden');
}

function saveSettings() {
  const celsiusRadio = document.getElementById('C');
  if (celsiusRadio.checked) localStorage.setItem('temperatureUnit', 'C');
  else localStorage.setItem('temperatureUnit', 'F');

  const kmRadio = document.getElementById('km');
  if (kmRadio.checked) localStorage.setItem('distanceUnit', 'km');
  else localStorage.setItem('distanceUnit', 'mi');

  const mmRadio = document.getElementById('mm');
  if (mmRadio.checked) localStorage.setItem('measurementUnit', 'mm');
  else localStorage.setItem('measurementUnit', 'in');

  closeSettingsModal();

  const data = JSON.parse(localStorage.getItem('weatherData'));
  (0,_update_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  (0,_update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
  (0,_update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
}

settingsBtn.onclick = showSettingsModal;
closeSettingsBtn.onclick = closeSettingsModal;
cancelSettingsBtn.onclick = closeSettingsModal;
saveSettingsBtn.onclick = saveSettings;


/***/ }),

/***/ "./src/scroll-buttons.js":
/*!*******************************!*\
  !*** ./src/scroll-buttons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupScrollButtons)
/* harmony export */ });
function setupScrollButtons() {
  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  document.getElementById('hourly-scroll-left').onclick = () => {
    hourlyContainer.scrollLeft -= exampleWidth;
  };

  document.getElementById('hourly-scroll-right').onclick = () => {
    hourlyContainer.scrollLeft += exampleWidth;
  };
}


/***/ }),

/***/ "./src/scroll-to-beginning.js":
/*!************************************!*\
  !*** ./src/scroll-to-beginning.js ***!
  \************************************/
/***/ (() => {

document.getElementById('scroll-to-beginning').onclick = () => {
  const hourlyContainer = document.getElementById('hourly-forecast');

  hourlyContainer.scrollLeft = 0;
};


/***/ }),

/***/ "./src/scroll-to-current-hour.js":
/*!***************************************!*\
  !*** ./src/scroll-to-current-hour.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrollToCurrentHour)
/* harmony export */ });
function scrollToCurrentHour(data) {
  const hourlyContainer = document.getElementById('hourly-forecast');
  const exampleWidth = document.getElementById('hourly-0').clientWidth;

  const currentHour = new Date(data.location.localtime).getHours();
  hourlyContainer.scrollLeft = (exampleWidth + 18) * currentHour;
}

document.getElementById('scroll-to-current-hour').onclick = () => {
  const data = JSON.parse(localStorage.getItem('weatherData'));
  scrollToCurrentHour(data);
};


/***/ }),

/***/ "./src/scroll-to-end.js":
/*!******************************!*\
  !*** ./src/scroll-to-end.js ***!
  \******************************/
/***/ (() => {

document.getElementById('scroll-to-end').onclick = () => {
  const hourlyContainer = document.getElementById('hourly-forecast');

  hourlyContainer.scrollLeft = hourlyContainer.scrollWidth;
};


/***/ }),

/***/ "./src/search-form.js":
/*!****************************!*\
  !*** ./src/search-form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather-data */ "./src/fetch-weather-data.js");
/* harmony import */ var _update_weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-weather-data */ "./src/update-weather-data.js");
/* harmony import */ var _update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-daily-forecast-data */ "./src/update-daily-forecast-data.js");
/* harmony import */ var _update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-hourly-forecast-data */ "./src/update-hourly-forecast-data.js");
/* harmony import */ var _scroll_to_current_hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-to-current-hour */ "./src/scroll-to-current-hour.js");






const form = document.getElementById('search-form');
const searchField = document.getElementById('search');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchField.value;

  (0,_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then((data) => {
    (0,_update_weather_data__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
    (0,_update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    (0,_update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
    (0,_scroll_to_current_hour__WEBPACK_IMPORTED_MODULE_4__["default"])(data);
  });
  form.reset();
});


/***/ }),

/***/ "./src/search-keyboard-shortcuts.js":
/*!******************************************!*\
  !*** ./src/search-keyboard-shortcuts.js ***!
  \******************************************/
/***/ (() => {

const searchField = document.getElementById('search');
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault(); // avoid triggering browser shortcuts
    searchField.focus();
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    searchField.blur();
  }
});


/***/ }),

/***/ "./src/update-daily-forecast-data-point.js":
/*!*************************************************!*\
  !*** ./src/update-daily-forecast-data-point.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDailyForecastDataPoint)
/* harmony export */ });
/* harmony import */ var _background_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-class */ "./src/background-class.js");


function updateDailyForecastDataPoint({
  day,
  dataPoint,
  conditionCode,
  text,
  notes = '',
}) {
  const forecastData = document.getElementById(`${dataPoint}-data-${day}`);
  forecastData.textContent = text;

  if (conditionCode) {
    const forecastContainer = document.getElementById(`forecast-${day}`);

    // removes previous background color
    [...forecastContainer.classList].forEach((element) => {
      if (element.startsWith('bg-')) {
        forecastContainer.classList.remove(element);
      }
    });

    // adds new background color
    forecastContainer.classList.add((0,_background_class__WEBPACK_IMPORTED_MODULE_0__["default"])(conditionCode));
  }

  const forecastNotes = document.getElementById(`${dataPoint}-notes-${day}`);
  forecastNotes.textContent = notes;

  if (notes === '') forecastNotes.classList.add('hidden');
  else forecastNotes.classList.remove('hidden');
}


/***/ }),

/***/ "./src/update-daily-forecast-data.js":
/*!*******************************************!*\
  !*** ./src/update-daily-forecast-data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDailyForecastData)
/* harmony export */ });
/* harmony import */ var _update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-daily-forecast-data-point */ "./src/update-daily-forecast-data-point.js");
/* harmony import */ var _fetch_weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-weather-data */ "./src/fetch-weather-data.js");
/* harmony import */ var _get_temperature_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-temperature-unit */ "./src/get-temperature-unit.js");




function formatTime(time) {
  const [sunsetHours, sunsetMinutes] = time.split(/:|\s/);

  const date = new Date();
  date.setHours(sunsetHours);
  date.setMinutes(sunsetMinutes);

  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
}

function updateDailyForecastData(data) {
  for (let day = 0; day < _fetch_weather_data__WEBPACK_IMPORTED_MODULE_1__.DAYS; day++) {
    const forecastData = data.forecast.forecastday[day];

    const weatherIcon = document.getElementById(`forecast-weather-icon-${day}`);
    weatherIcon.src = `https:${forecastData.day.condition.icon}`;

    const tempUnit = (0,_get_temperature_unit__WEBPACK_IMPORTED_MODULE_2__["default"])();
    let maxTempData;
    let minTempData;
    if (tempUnit === 'C') {
      maxTempData = forecastData.day.maxtemp_c;
      minTempData = forecastData.day.mintemp_c;
    } else {
      maxTempData = forecastData.day.maxtemp_f;
      minTempData = forecastData.day.mintemp_f;
    }

    (0,_update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
      day,
      dataPoint: 'condition',
      conditionCode: forecastData.day.condition.code,
      text: forecastData.day.condition.text,
    });

    (0,_update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
      day,
      dataPoint: 'max-temp',
      text: `${maxTempData}°${tempUnit}`,
      notes: 'High',
    });

    (0,_update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
      day,
      dataPoint: 'min-temp',
      text: `${minTempData}°${tempUnit}`,
      notes: 'Low',
    });

    (0,_update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
      day,
      dataPoint: 'precipitation-chance',
      text: `${forecastData.day.daily_chance_of_rain}%`,
      notes: 'Chance of precipitation',
    });

    (0,_update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
      day,
      dataPoint: 'sunrise',
      text: formatTime(forecastData.astro.sunrise),
      notes: 'Sunrise',
    });

    (0,_update_daily_forecast_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
      day,
      dataPoint: 'sunset',
      text: formatTime(forecastData.astro.sunset),
      notes: 'Sunset',
    });
  }
}


/***/ }),

/***/ "./src/update-hourly-forecast-data-point.js":
/*!**************************************************!*\
  !*** ./src/update-hourly-forecast-data-point.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateHourlyForecastDataPoint)
/* harmony export */ });
/* harmony import */ var _background_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-class */ "./src/background-class.js");


function updateHourlyForecastDataPoint({
  hour,
  dataPoint,
  conditionCode,
  isDay,
  text,
  notes = '',
}) {
  const hourlyData = document.getElementById(
    `hourly-${dataPoint}-data-${hour}`,
  );
  hourlyData.textContent = text;

  if (conditionCode) {
    const hourlyContainer = document.getElementById(`hourly-${hour}`);

    // removes previous background color
    [...hourlyContainer.classList].forEach((element) => {
      if (element.startsWith('bg-')) {
        hourlyContainer.classList.remove(element);
      }
    });

    // adds new background color
    let bgClass = (0,_background_class__WEBPACK_IMPORTED_MODULE_0__["default"])(conditionCode);
    if (conditionCode === 1000 && !isDay) bgClass = 'bg-sky-200/40'; // changes background color if it is nighttime
    hourlyContainer.classList.add(bgClass);
  }

  const hourlyNotes = document.getElementById(
    `hourly-${dataPoint}-notes-${hour}`,
  );
  hourlyNotes.textContent = notes;

  if (notes === '') hourlyNotes.classList.add('hidden');
  else hourlyNotes.classList.remove('hidden');
}


/***/ }),

/***/ "./src/update-hourly-forecast-data.js":
/*!********************************************!*\
  !*** ./src/update-hourly-forecast-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateHourlyForecastData)
/* harmony export */ });
/* harmony import */ var _get_distance_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-distance-unit */ "./src/get-distance-unit.js");
/* harmony import */ var _get_speed_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-speed-unit */ "./src/get-speed-unit.js");
/* harmony import */ var _get_temperature_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-temperature-unit */ "./src/get-temperature-unit.js");
/* harmony import */ var _update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-hourly-forecast-data-point */ "./src/update-hourly-forecast-data-point.js");





function getHour(hour, now) {
  if (hour === now) return 'Now';
  if (hour === 0) return '12am';
  if (hour <= 12) return `${hour}am`;
  return `${hour - 12}pm`;
}

function updateCurrentHourForecastData(data) {
  const hour = new Date(data.location.localtime).getHours();

  const weatherIcon = document.getElementById(`hourly-weather-icon-${hour}`);
  weatherIcon.src = `https:${data.current.condition.icon}`;

  const hourContainer = document.getElementById(`hourly-${hour}`);
  [...hourContainer.classList].forEach((element) => {
    if (element.startsWith('border-')) {
      hourContainer.classList.remove(element);
    }
  });
  hourContainer.classList.add('border-[#1da1f2]');

  const tempUnit = (0,_get_temperature_unit__WEBPACK_IMPORTED_MODULE_2__["default"])();
  let tempData;
  let feelslikeData;
  if (tempUnit === 'C') {
    tempData = data.current.temp_c;
    feelslikeData = data.current.feelslike_c;
  } else {
    tempData = data.current.temp_f;
    feelslikeData = data.current.feelslike_f;
  }

  const distanceUnit = (0,_get_distance_unit__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let windData;
  let gustData;
  const speedUnit = (0,_get_speed_unit__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (distanceUnit === 'km') {
    windData = data.current.wind_kph;
    gustData = data.current.gust_kph;
  } else {
    windData = data.current.wind_mph;
    gustData = data.current.gust_mph;
  }

  (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hour,
    dataPoint: 'condition',
    conditionCode: data.current.condition.code,
    isDay: data.current.is_day,
    text: data.current.condition.text.trim(),
    notes: `${data.current.cloud}% cloud cover`,
  });

  (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hour,
    dataPoint: 'temperature',
    text: `${tempData}°${tempUnit}`,
    notes: `Feels like ${feelslikeData}°${tempUnit}`,
  });
  (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hour,
    dataPoint: 'precipitation',
    text: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    notes: 'Chance of precipitation',
  });

  (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hour,
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
    notes: 'Humidity',
  });

  (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hour,
    dataPoint: 'uv-index',
    text: data.current.uv,
    notes: 'UV index',
  });

  (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
    hour,
    dataPoint: 'wind',
    text: `${windData} ${speedUnit} ${data.current.wind_dir}`,
    notes: `Gusts up to ${gustData} ${speedUnit}`,
  });
}

function updateHourlyForecastData(data) {
  for (let hour = 0; hour < 24; hour++) {
    const now = new Date(data.location.localtime).getHours();

    document.getElementById(`hour-${hour}`).textContent = getHour(hour, now);

    if (hour === now) {
      updateCurrentHourForecastData(data);
    } else {
      const hourlyData = data.forecast.forecastday[0].hour[hour];

      const weatherIcon = document.getElementById(
        `hourly-weather-icon-${hour}`,
      );
      weatherIcon.src = `https:${hourlyData.condition.icon}`;

      const hourContainer = document.getElementById(`hourly-${hour}`);
      [...hourContainer.classList].forEach((element) => {
        if (element.startsWith('border-')) {
          hourContainer.classList.remove(element);
        }
      });
      hourContainer.classList.add('border-gray-300');

      const tempUnit = (0,_get_temperature_unit__WEBPACK_IMPORTED_MODULE_2__["default"])();
      let tempData;
      let feelslikeData;
      if (tempUnit === 'C') {
        tempData = hourlyData.temp_c;
        feelslikeData = hourlyData.feelslike_c;
      } else {
        tempData = hourlyData.temp_f;
        feelslikeData = hourlyData.feelslike_f;
      }

      const distanceUnit = (0,_get_distance_unit__WEBPACK_IMPORTED_MODULE_0__["default"])();
      let windData;
      let gustData;
      const speedUnit = (0,_get_speed_unit__WEBPACK_IMPORTED_MODULE_1__["default"])();
      if (distanceUnit === 'km') {
        windData = hourlyData.wind_kph;
        gustData = hourlyData.gust_kph;
      } else {
        windData = hourlyData.wind_mph;
        gustData = hourlyData.gust_mph;
      }

      (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
        hour,
        dataPoint: 'condition',
        isDay: hourlyData.is_day,
        conditionCode: hourlyData.condition.code,
        text: hourlyData.condition.text.trim(),
        notes: `${hourlyData.cloud}% cloud cover`,
      });

      (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
        hour,
        dataPoint: 'temperature',
        text: `${tempData}°${tempUnit}`,
        notes: `Feels like ${feelslikeData}°${tempUnit}`,
      });
      (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
        hour,
        dataPoint: 'precipitation',
        text: `${hourlyData.chance_of_rain}%`,
        notes: 'Chance of precipitation',
      });

      (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
        hour,
        dataPoint: 'humidity',
        text: `${hourlyData.humidity}%`,
        notes: 'Humidity',
      });

      (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
        hour,
        dataPoint: 'uv-index',
        text: hourlyData.uv,
        notes: 'UV index',
      });

      (0,_update_hourly_forecast_data_point__WEBPACK_IMPORTED_MODULE_3__["default"])({
        hour,
        dataPoint: 'wind',
        text: `${windData} ${speedUnit} ${hourlyData.wind_dir}`,
        notes: `Gusts up to ${gustData} ${speedUnit}`,
      });
    }
  }
}


/***/ }),

/***/ "./src/update-weather-data-point.js":
/*!******************************************!*\
  !*** ./src/update-weather-data-point.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateWeatherDataPoint)
/* harmony export */ });
function updateWeatherDataPoint({
  dataPoint,
  text,
  notes = '',
}) {
  const weatherData = document.getElementById(`${dataPoint}-data`);
  weatherData.textContent = text;

  const weatherNotes = document.getElementById(`${dataPoint}-notes`);
  weatherNotes.textContent = notes;

  if (notes === '') weatherNotes.classList.add('hidden');
  else weatherNotes.classList.remove('hidden');
}


/***/ }),

/***/ "./src/update-weather-data.js":
/*!************************************!*\
  !*** ./src/update-weather-data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateWeatherData)
/* harmony export */ });
/* harmony import */ var _update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-weather-data-point */ "./src/update-weather-data-point.js");
/* harmony import */ var _get_city_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-city-title */ "./src/get-city-title.js");
/* harmony import */ var _format_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-time */ "./src/format-time.js");
/* harmony import */ var _get_temperature_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-temperature-unit */ "./src/get-temperature-unit.js");
/* harmony import */ var _get_distance_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-distance-unit */ "./src/get-distance-unit.js");
/* harmony import */ var _get_measurement_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-measurement-unit */ "./src/get-measurement-unit.js");
/* harmony import */ var _get_speed_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-speed-unit */ "./src/get-speed-unit.js");








function aqiDescription(num) {
  // aqi values from https://www.weatherapi.com/docs/#intro-aqi

  const aqiDictionary = {
    1: 'Good',
    2: 'Moderate',
    3: 'Unhealthy for sensitive groups',
    4: 'Unhealthy',
    5: 'Very unhealthy',
    6: 'Hazardous',
  };

  if (num >= 1 && num <= 6) return aqiDictionary[num];
  return 'Unavailable';
}

function uvIndexDescription(num) {
  // exposure categories from https://www.epa.gov/enviro/uv-index-description

  if (num <= 2) return 'Low';
  if (num <= 5) return 'Moderate';
  if (num <= 7) return 'High';
  if (num <= 10) return 'Very High';
  return 'Extreme';
}

function visiblityDescription(num) {
  // visiblity categories from https://www.star.nesdis.noaa.gov/portfolio/detail_Visibility.php#:~:text=Fog%20droplets%20and%20haze%20particles,V%20%3C%202%20km)%20visibilities.

  if (num <= 2) return 'Visibility is poor.';
  if (num <= 10) return 'Visibility is low.';
  if (num <= 30) return 'Visibility is moderate.';
  return 'Visibility is clear.';
}

function humidityDescription(num) {
  if (num < 30) return 'It should be dry and comfortable outside.';
  if (num < 60) return 'It should be moderately comfortable outside.';
  return 'It might be humid and uncomfortable outside.';
}

function updateWeatherData(data) {
  const currentTime = document.getElementById('current-time');
  currentTime.textContent = (0,_format_time__WEBPACK_IMPORTED_MODULE_2__["default"])(data.location.localtime);

  const city = document.getElementById('city');
  city.textContent = `${(0,_get_city_title__WEBPACK_IMPORTED_MODULE_1__["default"])(data.location)}`;

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.src = `https:${data.current.condition.icon}`;

  const tempUnit = (0,_get_temperature_unit__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let tempData;
  let feelslikeData;
  if (tempUnit === 'C') {
    tempData = data.current.temp_c;
    feelslikeData = data.current.feelslike_c;
  } else {
    tempData = data.current.temp_f;
    feelslikeData = data.current.feelslike_f;
  }

  const distanceUnit = (0,_get_distance_unit__WEBPACK_IMPORTED_MODULE_4__["default"])();
  let visibilityData;
  let windData;
  let gustData;
  const speedUnit = (0,_get_speed_unit__WEBPACK_IMPORTED_MODULE_6__["default"])();
  if (distanceUnit === 'km') {
    visibilityData = data.current.vis_km;
    windData = data.current.wind_kph;
    gustData = data.current.gust_kph;
  } else {
    visibilityData = data.current.vis_miles;
    windData = data.current.wind_mph;
    gustData = data.current.gust_mph;
  }

  const measurementUnit = (0,_get_measurement_unit__WEBPACK_IMPORTED_MODULE_5__["default"])();
  let precipitationData;
  if (measurementUnit === 'mm') precipitationData = data.current.precip_mm;
  else precipitationData = data.current.precip_in;

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'condition',
    conditionCode: data.current.condition.code,
    text: data.current.condition.text.trim(),
    notes: `Cloud cover is ${data.current.cloud}%.`,
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'temperature',
    text: `${tempData}°${tempUnit}`,
    notes: `It feels like ${feelslikeData}°${tempUnit}.`,
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'precipitation',
    text: `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    notes: `Expect ${precipitationData} ${measurementUnit} of precipitation today.`,
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'humidity',
    text: `${data.current.humidity}%`,
    notes: humidityDescription(data.current.humidity),
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'visibility',
    text: `${visibilityData} ${distanceUnit}`,
    notes: visiblityDescription(data.current.vis_km),
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'air-quality',
    text: data.current.air_quality['us-epa-index'],
    notes: aqiDescription(data.current.air_quality['us-epa-index']),
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'uv-index',
    text: data.current.uv,
    notes: uvIndexDescription(data.current.uv),
  });

  (0,_update_weather_data_point__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dataPoint: 'wind',
    text: `${windData} ${speedUnit} ${data.current.wind_dir}`,
    notes: `Gusts of wind up to ${gustData} ${speedUnit} today.`,
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather-data */ "./src/fetch-weather-data.js");
/* harmony import */ var _generate_daily_forecast_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-daily-forecast-list */ "./src/generate-daily-forecast-list.js");
/* harmony import */ var _generate_hourly_forecast_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-hourly-forecast-list */ "./src/generate-hourly-forecast-list.js");
/* harmony import */ var _generate_weather_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-weather-list */ "./src/generate-weather-list.js");
/* harmony import */ var _get_last_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-last-location */ "./src/get-last-location.js");
/* harmony import */ var _scroll_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-buttons */ "./src/scroll-buttons.js");
/* harmony import */ var _scroll_to_current_hour__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll-to-current-hour */ "./src/scroll-to-current-hour.js");
/* harmony import */ var _update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-daily-forecast-data */ "./src/update-daily-forecast-data.js");
/* harmony import */ var _update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-hourly-forecast-data */ "./src/update-hourly-forecast-data.js");
/* harmony import */ var _update_weather_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-weather-data */ "./src/update-weather-data.js");
/* harmony import */ var _location_btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location-btn */ "./src/location-btn.js");
/* harmony import */ var _save_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./save-settings */ "./src/save-settings.js");
/* harmony import */ var _scroll_to_beginning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scroll-to-beginning */ "./src/scroll-to-beginning.js");
/* harmony import */ var _scroll_to_beginning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scroll_to_beginning__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scroll_to_end__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scroll-to-end */ "./src/scroll-to-end.js");
/* harmony import */ var _scroll_to_end__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scroll_to_end__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _search_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-form */ "./src/search-form.js");
/* harmony import */ var _search_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-keyboard-shortcuts */ "./src/search-keyboard-shortcuts.js");
/* harmony import */ var _search_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_search_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



















window.onload = () => {
  const weatherContainer = document.getElementById('current-weather');
  const weatherList = (0,_generate_weather_list__WEBPACK_IMPORTED_MODULE_3__["default"])();
  weatherContainer.appendChild(weatherList);

  const forecastContainer = document.getElementById('daily-forecast');
  for (let i = 0; i < _fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__.DAYS; i++) {
    const forecastList = (0,_generate_daily_forecast_list__WEBPACK_IMPORTED_MODULE_1__["default"])(i);
    forecastContainer.appendChild(forecastList);
  }

  const hourlyContainer = document.getElementById('hourly-forecast');
  for (let i = 0; i < 24; i++) {
    const hourlyList = (0,_generate_hourly_forecast_list__WEBPACK_IMPORTED_MODULE_2__["default"])(i);
    hourlyContainer.appendChild(hourlyList);
  }

  const lastLocation = (0,_get_last_location__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_fetch_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(lastLocation).then((data) => {
    (0,_update_weather_data__WEBPACK_IMPORTED_MODULE_9__["default"])(data);
    (0,_update_daily_forecast_data__WEBPACK_IMPORTED_MODULE_7__["default"])(data);
    (0,_update_hourly_forecast_data__WEBPACK_IMPORTED_MODULE_8__["default"])(data);

    setTimeout(() => (0,_scroll_to_current_hour__WEBPACK_IMPORTED_MODULE_6__["default"])(data), 500);
  });
  (0,_scroll_buttons__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxNQUFNLFFBQVEsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0s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QUNTO0FBQ1E7QUFDRTtBQUNmOztBQUU5QjtBQUNDO0FBQ007QUFDTjtBQUNGO0FBQ2M7QUFDaEI7O0FBRXJCO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQW1CO0FBQ3pDOztBQUVBO0FBQ0Esa0JBQWtCLElBQUkscURBQUksRUFBRTtBQUM1Qix5QkFBeUIseUVBQXlCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQix1QkFBdUIsMEVBQTBCO0FBQ2pEO0FBQ0E7O0FBRUEsdUJBQXVCLDhEQUFlO0FBQ3RDLEVBQUUsK0RBQWdCO0FBQ2xCLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksdUVBQXVCO0FBQzNCLElBQUksd0VBQXdCOztBQUU1QixxQkFBcUIsbUVBQW1CO0FBQ3hDLEdBQUc7QUFDSCxFQUFFLDJEQUFrQjtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2JhY2tncm91bmQtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Zvcm1hdC10aW1lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlbmVyYXRlLWRhaWx5LWZvcmVjYXN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2VuZXJhdGUtaG91cmx5LWZvcmVjYXN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2VuZXJhdGUtd2VhdGhlci1saXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlb2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC1jaXR5LXRpdGxlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC1kaXN0YW5jZS11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC1sYXN0LWxvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC1tZWFzdXJlbWVudC11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC1zcGVlZC11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC10ZW1wZXJhdHVyZS11bml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLWJ0bi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zYXZlLWxhc3QtbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2F2ZS1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JvbGwtYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JvbGwtdG8tYmVnaW5uaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Njcm9sbC10by1jdXJyZW50LWhvdXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2Nyb2xsLXRvLWVuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2gta2V5Ym9hcmQtc2hvcnRjdXRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VwZGF0ZS1kYWlseS1mb3JlY2FzdC1kYXRhLXBvaW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VwZGF0ZS1kYWlseS1mb3JlY2FzdC1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VwZGF0ZS1ob3VybHktZm9yZWNhc3QtZGF0YS1wb2ludC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91cGRhdGUtaG91cmx5LWZvcmVjYXN0LWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXBkYXRlLXdlYXRoZXItZGF0YS1wb2ludC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91cGRhdGUtd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My40LjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiAgaW1nW2lkKj0nd2VhdGhlci1pY29uJ11bc3JjPScjJ10sXG4gIGltZ1tpZCo9J3dlYXRoZXItaWNvbiddW3NyYz0nJ10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4gIGlucHV0W3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuICBpbnB1dFt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuICBpbnB1dFt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4uc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnNldC15LTAge1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG4uYm90dG9tLTAge1xuICBib3R0b206IDBweDtcbn1cbi5ib3R0b20tMyB7XG4gIGJvdHRvbTogMC43NXJlbTtcbn1cbi5ib3R0b20tM1xcXFwuNSB7XG4gIGJvdHRvbTogMC44NzVyZW07XG59XG4uYm90dG9tLTYge1xuICBib3R0b206IDEuNXJlbTtcbn1cbi5lbmQtMyB7XG4gIHJpZ2h0OiAwLjc1cmVtO1xufVxuLmVuZC0zXFxcXC41IHtcbiAgcmlnaHQ6IDAuODc1cmVtO1xufVxuLmxlZnQtMVxcXFwvMiB7XG4gIGxlZnQ6IDUwJTtcbn1cbi5sZWZ0LTIge1xuICBsZWZ0OiAwLjVyZW07XG59XG4ucmlnaHQtMiB7XG4gIHJpZ2h0OiAwLjVyZW07XG59XG4uc3RhcnQtMCB7XG4gIGxlZnQ6IDBweDtcbn1cbi50b3AtMVxcXFwvMiB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC02IHtcbiAgdG9wOiAxLjVyZW07XG59XG4uei01MCB7XG4gIHotaW5kZXg6IDUwO1xufVxuLmNvbC1zcGFuLTIge1xuICBncmlkLWNvbHVtbjogc3BhbiAyIC8gc3BhbiAyO1xufVxuLm0tOCB7XG4gIG1hcmdpbjogMnJlbTtcbn1cbi5teC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG4ubXgtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5tYi0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4ubWwtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWwtMFxcXFwuNSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjEyNXJlbTtcbn1cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5tbC04IHtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4ubWwtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLm1yLTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbi5tci0wXFxcXC41IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTtcbn1cbi5tci0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ubXMtMyB7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuLm1zLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5tdC0xIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi5tdC00IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hc3BlY3Qtc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cbi5zaXplLTEwIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4uc2l6ZS0xMiB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uc2l6ZS0xNiB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG4uc2l6ZS00IHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbn1cbi5zaXplLTUge1xuICB3aWR0aDogMS4yNXJlbTtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnNpemUtNiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuLnNpemUtOCB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uc2l6ZS1cXFxcWzIwMHB4XFxcXF0ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uaC04IHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLm1heC1oLWZ1bGwge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLnctXFxcXFsyNTBweFxcXFxdIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLnctXFxcXFs1MDBweFxcXFxdIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1heC13LVxcXFxbMTUwcHhcXFxcXSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG4ubWF4LXctc2NyZWVuLWxnIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG59XG4ubWF4LXcteGwge1xuICBtYXgtd2lkdGg6IDM2cmVtO1xufVxuLmZsZXgtc2hyaW5rLTAge1xuICBmbGV4LXNocmluazogMDtcbn1cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5iYXNpcy1cXFxcWzI1MHB4XFxcXF0ge1xuICBmbGV4LWJhc2lzOiAyNTBweDtcbn1cbi4tdHJhbnNsYXRlLXgtMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXRyYW5zbGF0ZS15LTFcXFxcLzIge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQGtleWZyYW1lcyBzcGluIHtcblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmFuaW1hdGUtc3BpbiB7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG4uc25hcC14IHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCB2YXIoLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzKTtcbn1cbi5zbmFwLW1hbmRhdG9yeSB7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogbWFuZGF0b3J5O1xufVxuLnNuYXAtc3RhcnQge1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG59XG4uc2Nyb2xsLXB4LTQge1xuICBzY3JvbGwtcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBzY3JvbGwtcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbi5saXN0LW5vbmUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZ3JpZC1jb2xzLTEge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XG59XG4uZ3JpZC1jb2xzLTIge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBsYWNlLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC00IHtcbiAgZ2FwOiAxcmVtO1xufVxuLmdhcC04IHtcbiAgZ2FwOiAycmVtO1xufVxuLmdhcC14LTAge1xuICAtbW96LWNvbHVtbi1nYXA6IDBweDtcbiAgICAgICBjb2x1bW4tZ2FwOiAwcHg7XG59XG4uZ2FwLXgtMiB7XG4gIC1tb3otY29sdW1uLWdhcDogMC41cmVtO1xuICAgICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcbn1cbi5nYXAteC0zIHtcbiAgLW1vei1jb2x1bW4tZ2FwOiAwLjc1cmVtO1xuICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XG59XG4uZ2FwLXktNCB7XG4gIHJvdy1nYXA6IDFyZW07XG59XG4uZ2FwLXktOCB7XG4gIHJvdy1nYXA6IDJyZW07XG59XG4uc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XG4gIC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMXJlbSAqIDApO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xuICBtYXJnaW4tbGVmdDogY2FsYygxcmVtICogKDEgLSAwKSk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDFyZW0gKiAoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIDApKTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcbn1cbi5zcGFjZS15LTIgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcbiAgLS10dy1zcGFjZS15LXJldmVyc2U6IDA7XG4gIG1hcmdpbi10b3A6IGNhbGMoMC41cmVtICogKDEgLSAwKSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMC41cmVtICogKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMC41cmVtICogY2FsYygxIC0gMCkpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDAuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjVyZW0gKiAwKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjVyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcbn1cbi5zcGFjZS15LTQgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcbiAgLS10dy1zcGFjZS15LXJldmVyc2U6IDA7XG4gIG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqICgxIC0gMCkpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDFyZW0gKiAoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcbiAgbWFyZ2luLXRvcDogY2FsYygxcmVtICogY2FsYygxIC0gMCkpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDFyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMXJlbSAqIDApO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcbn1cbi5zcGFjZS15LTYgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcbiAgLS10dy1zcGFjZS15LXJldmVyc2U6IDA7XG4gIG1hcmdpbi10b3A6IGNhbGMoMS41cmVtICogKDEgLSAwKSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMS41cmVtICogKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMS41cmVtICogY2FsYygxIC0gMCkpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDEuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjVyZW0gKiAwKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjVyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcbn1cbi5zcGFjZS15LTggPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcbiAgLS10dy1zcGFjZS15LXJldmVyc2U6IDA7XG4gIG1hcmdpbi10b3A6IGNhbGMoMnJlbSAqICgxIC0gMCkpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKiAoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcbiAgbWFyZ2luLXRvcDogY2FsYygycmVtICogY2FsYygxIC0gMCkpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMnJlbSAqIDApO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKDJyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcbn1cbi5vdmVyZmxvdy14LWF1dG8ge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLm92ZXJmbG93LXktYXV0byB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ub3ZlcmZsb3cteC1oaWRkZW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uc2Nyb2xsLXNtb290aCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnJvdW5kZWQtMnhsIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5yb3VuZGVkLTN4bCB7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbn1cbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4ucm91bmRlZC1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXhsIHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbn1cbi5yb3VuZGVkLWIge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbn1cbi5yb3VuZGVkLXQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5ib3JkZXItYiB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbn1cbi5ib3JkZXItdCB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbn1cbi5ib3JkZXItXFxcXFtcXFxcIzFkYTFmMlxcXFxdIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYm9yZGVyLWdyYXktMzAwIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItc2xhdGUtMjAwIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItc2xhdGUtMzAwIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMywgMjEzLCAyMjUsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAzLCAyMTMsIDIyNSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5iZy1cXFxcW1xcXFwjMWRhMWYyXFxcXF0ge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDE2MSwgMjQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1hbWJlci0yMDBcXFxcLzQwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDIzMCwgMTM4LCAwLjQpO1xufVxuLmJnLWJsdWUtMzAwXFxcXC80MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ3LCAxOTcsIDI1MywgMC40KTtcbn1cbi5iZy1ibHVlLTUwMFxcXFwvNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC40KTtcbn1cbi5iZy1ibHVlLTYwMFxcXFwvNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjQpO1xufVxuLmJnLWJsdWUtNzAwXFxcXC80MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDc4LCAyMTYsIDAuNCk7XG59XG4uYmctYmx1ZS05MDBcXFxcLzQwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgNTgsIDEzOCwgMC40KTtcbn1cbi5iZy1za3ktMjAwXFxcXC80MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAyMzAsIDI1MywgMC40KTtcbn1cbi5iZy1zbGF0ZS0yMDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTIwMFxcXFwvNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuNCk7XG59XG4uYmctc2xhdGUtMzAwXFxcXC80MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAzLCAyMTMsIDIyNSwgMC40KTtcbn1cbi5iZy1zbGF0ZS00MDBcXFxcLzQwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAwLjQpO1xufVxuLmJnLXNsYXRlLTUwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjUwLCAyNTIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjUwLCAyNTIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS01MDBcXFxcLzQwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCAwLjQpO1xufVxuLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYmctdmlvbGV0LTQwMFxcXFwvNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NywgMTM5LCAyNTAsIDAuNCk7XG59XG4uYmctdmlvbGV0LTgwMFxcXFwvNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLCAzMywgMTgyLCAwLjQpO1xufVxuLmJnLXdoaXRlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5maWxsLVxcXFxbXFxcXCMxZGExZjJcXFxcXSB7XG4gIGZpbGw6ICMxZGExZjI7XG59XG4ucC0yIHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnAtNCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ucC01IHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cbi5wLTYge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG4ucHgtMyB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cbi5weC0zXFxcXC41IHtcbiAgcGFkZGluZy1sZWZ0OiAwLjg3NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC44NzVyZW07XG59XG4ucHgtNSB7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcbn1cbi5weC04IHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLnB5LTEge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59XG4ucHktMVxcXFwuNSB7XG4gIHBhZGRpbmctdG9wOiAwLjM3NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMzc1cmVtO1xufVxuLnB5LTIge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuLnB5LTJcXFxcLjUge1xuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcbn1cbi5wYi04IHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4ucGwtNCB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5wci01IHtcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcbn1cbi5wci04IHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbi5wcy0xMCB7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xufVxuLnBzLTMge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59XG4ucHQtOCB7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvbnQtc2FucyB7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbn1cbi50ZXh0LTJ4bCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50ZXh0LTR4bCB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnRleHQteGwge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC1tZWRpdW0ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRleHQtXFxcXFtcXFxcIzFkYTFmMlxcXFxdIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1ncmF5LTQwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCAxKTtcbiAgY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1ncmF5LTUwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCAxKTtcbiAgY29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1ncmF5LTYwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSg3NSwgODUsIDk5LCAxKTtcbiAgY29sb3I6IHJnYmEoNzUsIDg1LCA5OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1ncmF5LTkwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNywgMjQsIDM5LCAxKTtcbiAgY29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1zbGF0ZS0yMDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtc2xhdGUtNDAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDEpO1xuICBjb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXdoaXRlIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5uby11bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbn1cbi5vcGFjaXR5LTYwIHtcbiAgb3BhY2l0eTogMC42O1xufVxuLnNoYWRvdy0yeGwge1xuICAtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAyNXB4IDUwcHggLTEycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCksIDAgMCByZ2JhKDAsMCwwLDApLCAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cbi5ibHVyIHtcbiAgLS10dy1ibHVyOiBibHVyKDhweCk7XG4gIGZpbHRlcjogYmx1cig4cHgpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcbn1cbi5iYWNrZHJvcC1ibHVyIHtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiBibHVyKDhweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCkgdmFyKC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzcykgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbn1cbi5iYWNrZHJvcC1icmlnaHRuZXNzLTc1IHtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiBicmlnaHRuZXNzKC43NSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS10dy1iYWNrZHJvcC1ibHVyKSBicmlnaHRuZXNzKC43NSkgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdHctYmFja2Ryb3AtYmx1cikgYnJpZ2h0bmVzcyguNzUpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbn1cbi50cmFuc2l0aW9uLWNvbG9ycyB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG4udHJhbnNpdGlvbi10cmFuc2Zvcm0ge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cbi5kdXJhdGlvbi03MDAge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcbn1cbi5mb250LXNtYWxsLWNhcHMge1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG59XG4uZm9udC12YXJpYW50LW5vcm1hbCB7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xufVxuXG4uaG92ZXJcXFxcOmJnLVxcXFxbXFxcXCMxZGExZjJcXFxcXVxcXFwvODA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMC44KTtcbn1cblxuLmhvdmVyXFxcXDpiZy1ncmF5LTIwMDpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6Ymctc2xhdGUtMTAwOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDp0ZXh0LVxcXFxbXFxcXCMxZGExZjJcXFxcXTpob3ZlciB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIDEpO1xuICBjb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOnRleHQtZ3JheS05MDA6aG92ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgMSk7XG4gIGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uZm9jdXNcXFxcOnotMTA6Zm9jdXMge1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmZvY3VzXFxcXDpib3JkZXItXFxcXFtcXFxcIzFkYTFmMlxcXFxdOmZvY3VzIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG5cbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uZm9jdXNcXFxcOnJpbmctMTpmb2N1cyB7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDFweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvciksIHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKSwgMCAwIHJnYmEoMCwwLDAsMCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSk7XG59XG5cbi5mb2N1c1xcXFw6cmluZy0yOmZvY3VzIHtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKSwgdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygycHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpLCAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKTtcbn1cblxuLmZvY3VzXFxcXDpyaW5nLVxcXFxbXFxcXCMxZGExZjJcXFxcXTpmb2N1cyB7XG4gIC0tdHctcmluZy1vcGFjaXR5OiAxO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoMjksIDE2MSwgMjQyLCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcbn1cblxuLmZvY3VzXFxcXDpyaW5nLVxcXFxbXFxcXCMxZGExZjJcXFxcXVxcXFwvNTA6Zm9jdXMge1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoMjksIDE2MSwgMjQyLCAwLjUpO1xufVxuXG4uZGlzYWJsZWRcXFxcOmN1cnNvci1ub3QtYWxsb3dlZDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5kaXNhYmxlZFxcXFw6aG92ZXJcXFxcOmJnLXdoaXRlOmhvdmVyOmRpc2FibGVkIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmRpc2FibGVkXFxcXDpob3ZlclxcXFw6dGV4dC1ncmF5LTgwMDpob3ZlcjpkaXNhYmxlZCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzMSwgNDEsIDU1LCAxKTtcbiAgY29sb3I6IHJnYmEoMzEsIDQxLCA1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5kaXNhYmxlZFxcXFw6Zm9jdXNcXFxcOmJvcmRlci1zbGF0ZS0yMDA6Zm9jdXM6ZGlzYWJsZWQge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuXG4uZ3JvdXA6Zm9jdXMtd2l0aGluIC5ncm91cC1mb2N1cy13aXRoaW5cXFxcOnRleHQtXFxcXFtcXFxcIzFkYTFmMlxcXFxdIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgMSk7XG4gIGNvbG9yOiByZ2JhKDI5LCAxNjEsIDI0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOnJvdGF0ZS0xODAge1xuICAtLXR3LXJvdGF0ZTogMTgwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDE4MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6Ym9yZGVyLVxcXFxbXFxcXCMxZGExZjJcXFxcXSB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyOSwgMTYxLCAyNDIsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjksIDE2MSwgMjQyLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuXG4uZ3JvdXA6ZGlzYWJsZWQgLmdyb3VwLWRpc2FibGVkXFxcXDpvcGFjaXR5LTUwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuc21cXFxcOmdyaWQtY29scy0yIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLm1kXFxcXDppbnNldC0wIHtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuXG4gIC5tZFxcXFw6Z3JpZC1jb2xzLTMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxuXG4gIC5tZFxcXFw6cC01IHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAubGdcXFxcOmdyaWQtY29scy00IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztF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QW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsYUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxXQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLFdBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsV0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxjQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGFBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsV0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxZQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FB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QkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw0QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiwwQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsMEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtEQUFtQjtFQUFuQiw2REFBbUI7RUFBbkIsdUZBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDRLQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDZCQUFtQjtFQUFuQixpUUFBbUI7VUFBbkIseVBBQW1CO0VBQW5CLCtRQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHlDQUFtQjtFQUFuQixpUUFBbUI7VUFBbkIseVBBQW1CO0VBQW5CLCtRQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBLCtGQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1COztBQUZuQjtFQUFBO0FBaUJBOztBQWpCQTtFQUFBLGtCQWlCQTtFQWpCQSx3Q0FpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUEsa0JBaUJBO0VBakJBLHdDQWlCQTtFQWpCQTtBQWlCQTs7QUFqQkE7RUFBQSxvQkFpQkE7RUFqQkEsNEJBaUJBO0VBakJBO0FBaUJBOztBQWpCQTtFQUFBLG9CQWlCQTtFQWpCQSwwQkFpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUE7QUFpQkE7O0FBakJBO0VBQUEsc0JBaUJBO0VBakJBLG1DQWlCQTtFQWpCQTtBQWlCQTs7QUFqQkE7RUFBQSw4QkFpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUEsMkdBaUJBO0VBakJBLHlHQWlCQTtFQWpCQSwwTUFpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUEsMkdBaUJBO0VBakJBLHlHQWlCQTtFQWpCQSwwTUFpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUEsb0JBaUJBO0VBakJBO0FBaUJBOztBQWpCQTtFQUFBO0FBaUJBOztBQWpCQTtFQUFBO0FBaUJBOztBQWpCQTtFQUFBLGtCQWlCQTtFQWpCQSx3Q0FpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUEsb0JBaUJBO0VBakJBLDBCQWlCQTtFQWpCQTtBQWlCQTs7QUFqQkE7RUFBQSxzQkFpQkE7RUFqQkEsb0NBaUJBO0VBakJBO0FBaUJBOztBQWpCQTtFQUFBLG9CQWlCQTtFQWpCQSw0QkFpQkE7RUFqQkE7QUFpQkE7O0FBakJBO0VBQUEsbUJBaUJBO0VBakJBLHFMQWlCQTtFQWpCQTtBQWlCQTs7QUFqQkE7RUFBQSxzQkFpQkE7RUFqQkEsbUNBaUJBO0VBakJBO0FBaUJBOztBQWpCQTtFQUFBO0FBaUJBOztBQWpCQTs7RUFBQTtJQUFBO0VBaUJBO0FBQUE7O0FBakJBOztFQUFBO0lBQUEsUUFpQkE7SUFqQkEsVUFpQkE7SUFqQkEsV0FpQkE7SUFqQkE7RUFpQkE7O0VBakJBO0lBQUE7RUFpQkE7O0VBakJBO0lBQUE7RUFpQkE7QUFBQTs7QUFqQkE7O0VBQUE7SUFBQTtFQWlCQTtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuQGxheWVyIGJhc2Uge1xcbiAgaW1nW2lkKj0nd2VhdGhlci1pY29uJ11bc3JjPScjJ10sXFxuICBpbWdbaWQqPSd3ZWF0aGVyLWljb24nXVtzcmM9JyddIHtcXG4gICAgQGFwcGx5IGhpZGRlbjtcXG4gIH1cXG5cXG4gIGlucHV0W3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbiAgaW5wdXRbdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuICBpbnB1dFt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuICBpbnB1dFt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gICAgQGFwcGx5IGhpZGRlbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFja2dyb3VuZENsYXNzKGNvbmRpdGlvbkNvZGUpIHtcbiAgY29uc3QgYmdDbGFzc2VzID0ge1xuICAgIDEwMDA6ICdiZy1hbWJlci0yMDAvNDAnLCAvLyBTdW5ueVxuICAgIDEwMDM6ICdiZy1zbGF0ZS0zMDAvNDAnLCAvLyBQYXJ0bHkgY2xvdWR5XG4gICAgMTAwNjogJ2JnLXNsYXRlLTQwMC80MCcsIC8vIENsb3VkeVxuICAgIDEwMDk6ICdiZy1zbGF0ZS01MDAvNDAnLCAvLyBPdmVyY2FzdFxuICAgIDEwMzA6ICdiZy1zbGF0ZS0yMDAvNDAnLCAvLyBNaXN0XG4gICAgMTA2MzogJ2JnLWJsdWUtMzAwLzQwJywgLy8gUGF0Y2h5IHJhaW4gcG9zc2libGVcbiAgICAxMDY2OiAnYmctYmx1ZS0zMDAvNDAnLCAvLyBQYXRjaHkgc25vdyBwb3NzaWJsZVxuICAgIDEwNjk6ICdiZy1ibHVlLTMwMC80MCcsIC8vIFBhdGNoeSBzbGVldCBwb3NzaWJsZVxuICAgIDEwNzI6ICdiZy1ibHVlLTMwMC80MCcsIC8vIFBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXG4gICAgMTA4NzogJ2JnLXZpb2xldC04MDAvNDAnLCAvLyBUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcbiAgICAxMTE0OiAnYmctYmx1ZS01MDAvNDAnLCAvLyBCbG93aW5nIHNub3dcbiAgICAxMTE3OiAnYmctYmx1ZS03MDAvNDAnLCAvLyBCbGl6emFyZFxuICAgIDExMzU6ICdiZy1zbGF0ZS0zMDAvNDAnLCAvLyBGb2dcbiAgICAxMTQ3OiAnYmctc2xhdGUtNTAwLzQwJywgLy8gRnJlZXppbmcgZm9nXG4gICAgMTE1MDogJ2JnLWJsdWUtMzAwLzQwJywgLy8gUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcbiAgICAxMTUzOiAnYmctYmx1ZS0zMDAvNDAnLCAvLyBMaWdodCBkcml6emxlXG4gICAgMTE2ODogJ2JnLWJsdWUtNTAwLzQwJywgLy8gRnJlZXppbmcgZHJpenpsZVxuICAgIDExNzE6ICdiZy1ibHVlLTkwMC80MCcsIC8vIEhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcbiAgICAxMTgwOiAnYmctYmx1ZS0zMDAvNDAnLCAvLyBQYXRjaHkgbGlnaHQgcmFpblxuICAgIDExODM6ICdiZy1ibHVlLTMwMC80MCcsIC8vIExpZ2h0IHJhaW5cbiAgICAxMTg2OiAnYmctYmx1ZS02MDAvNDAnLCAvLyBNb2RlcmF0ZSByYWluIGF0IHRpbWVzXG4gICAgMTE4OTogJ2JnLWJsdWUtNjAwLzQwJywgLy8gTW9kZXJhdGUgcmFpblxuICAgIDExOTI6ICdiZy1ibHVlLTkwMC80MCcsIC8vIEhlYXZ5IHJhaW4gYXQgdGltZXNcbiAgICAxMTk1OiAnYmctYmx1ZS05MDAvNDAnLCAvLyBIZWF2eSByYWluXG4gICAgMTE5ODogJ2JnLWJsdWUtMzAwLzQwJywgLy8gTGlnaHQgZnJlZXppbmcgcmFpblxuICAgIDEyMDE6ICdiZy1ibHVlLTcwMC80MCcsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cbiAgICAxMjA0OiAnYmctYmx1ZS0zMDAvNDAnLCAvLyBMaWdodCBzbGVldFxuICAgIDEyMDc6ICdiZy1ibHVlLTcwMC80MCcsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XG4gICAgMTIxMDogJ2JnLWJsdWUtMzAwLzQwJywgLy8gUGF0Y2h5IGxpZ2h0IHNub3dcbiAgICAxMjEzOiAnYmctYmx1ZS0zMDAvNDAnLCAvLyBMaWdodCBzbm93XG4gICAgMTIxNjogJ2JnLWJsdWUtNjAwLzQwJywgLy8gUGF0Y2h5IG1vZGVyYXRlIHNub3dcbiAgICAxMjE5OiAnYmctYmx1ZS02MDAvNDAnLCAvLyBNb2RlcmF0ZSBzbm93XG4gICAgMTIyMjogJ2JnLWJsdWUtOTAwLzQwJywgLy8gUGF0Y2h5IGhlYXZ5IHNub3dcbiAgICAxMjI1OiAnYmctYmx1ZS05MDAvNDAnLCAvLyBIZWF2eSBzbm93XG4gICAgMTIzNzogJ2JnLWJsdWUtNjAwLzQwJywgLy8gSWNlIHBlbGxldHNcbiAgICAxMjQwOiAnYmctYmx1ZS0zMDAvNDAnLCAvLyBMaWdodCByYWluIHNob3dlclxuICAgIDEyNDM6ICdiZy1ibHVlLTcwMC80MCcsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXG4gICAgMTI0NjogJ2JnLWJsdWUtOTAwLzQwJywgLy8gVG9ycmVudGlhbCByYWluIHNob3dlclxuICAgIDEyNDk6ICdiZy1ibHVlLTMwMC80MCcsIC8vIExpZ2h0IHNsZWV0IHNob3dlcnNcbiAgICAxMjUyOiAnYmctYmx1ZS03MDAvNDAnLCAvLyBNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXG4gICAgMTI1NTogJ2JnLWJsdWUtMzAwLzQwJywgLy8gTGlnaHQgc25vdyBzaG93ZXJzXG4gICAgMTI1ODogJ2JnLWJsdWUtNzAwLzQwJywgLy8gTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXG4gICAgMTI2MTogJ2JnLWJsdWUtMzAwLzQwJywgLy8gTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1xuICAgIDEyNjQ6ICdiZy1ibHVlLTcwMC80MCcsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcbiAgICAxMjczOiAnYmctdmlvbGV0LTQwMC80MCcsIC8vIFBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclxuICAgIDEyNzY6ICdiZy12aW9sZXQtODAwLzQwJywgLy8gTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcbiAgICAxMjc5OiAnYmctdmlvbGV0LTQwMC80MCcsIC8vIFBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclxuICAgIDEyODI6ICdiZy12aW9sZXQtODAwLzQwJywgLy8gTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcbiAgfTtcblxuICByZXR1cm4gYmdDbGFzc2VzW2NvbmRpdGlvbkNvZGVdIHx8ICdiZy13aGl0ZSc7XG59XG4iLCJpbXBvcnQgc2F2ZUxhc3RMb2NhdGlvbiBmcm9tICcuL3NhdmUtbGFzdC1sb2NhdGlvbic7XG5cbmNvbnN0IEFQSV9LRVkgPSAnM2I1ZTc0MTNkODE5NDlhM2IxNzIzMjY1ODI0MjEwMyc7XG5leHBvcnQgY29uc3QgREFZUyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoc2VhcmNoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke3NlYXJjaH0mYXFpPXllcyZkYXlzPSR7REFZU31gLFxuICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHNhdmVMYXN0TG9jYXRpb24oZGF0YS5sb2NhdGlvbik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3ZWF0aGVyRGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZSkge1xuICBjb25zdCB0aW1lID0gbmV3IERhdGUoZGF0ZSk7XG4gIGxldCBmb3JtYXQgPSAne2h9OnttfXthcH0nO1xuXG4gIGxldCBoID0gdGltZS5nZXRIb3VycygpO1xuXG4gIGNvbnN0IGFwID0gaCA+IDExID8gJ3BtJyA6ICdhbSc7XG5cbiAgaWYgKGggPiAxMikgaCAtPSAxMjtcblxuICBsZXQgbSA9IHRpbWUuZ2V0TWludXRlcygpO1xuICBpZiAobSA8IDEwKSBtID0gYDAke219YDtcblxuICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFx7YXBcXH0vZywgYXApO1xuICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFx7aFxcfS9nLCBoKTtcbiAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xce21cXH0vZywgbSk7XG5cbiAgcmV0dXJuIGZvcm1hdDtcbn1cbiIsImZ1bmN0aW9uIGdldERheU5hbWUoZGF5c0luRnV0dXJlKSB7XG4gIGlmIChkYXlzSW5GdXR1cmUgPT09IDApIHJldHVybiAnVG9kYXknO1xuXG4gIGNvbnN0IGRheXMgPSBbXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheScsXG4gICAgJ1R1ZXNkYXknLFxuICAgICdXZWRuZXNkYXknLFxuICAgICdUaHVyc2RheScsXG4gICAgJ0ZyaWRheScsXG4gICAgJ1NhdHVyZGF5JyxcbiAgXTtcblxuICBjb25zdCBmdXR1cmVEYXkgPSAobmV3IERhdGUoKS5nZXREYXkoKSArIGRheXNJbkZ1dHVyZSkgJSA3O1xuXG4gIHJldHVybiBkYXlzW2Z1dHVyZURheV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRGFpbHlGb3JlY2FzdExpc3QoZGF5KSB7XG4gIGNvbnN0IGZvcmVjYXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGZvcmVjYXN0TGlzdC5pZCA9IGBmb3JlY2FzdC0ke2RheX1gO1xuICBmb3JlY2FzdExpc3QuY2xhc3NMaXN0LmFkZChcbiAgICAncm91bmRlZC0yeGwnLFxuICAgICd0ZXh0LWNlbnRlcicsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvcmRlci1ncmF5LTMwMCcsXG4gICAgJ3AtNicsXG4gICAgJ2Jhc2lzLVsyNTBweF0nLFxuICAgICdmbGV4LXNocmluay0wJyxcbiAgICAnZmxleC1ncm93JyxcbiAgICAnZ3JpZCcsXG4gICAgJ2dyaWQtY29scy0yJyxcbiAgICAnZ2FwLXgtMicsXG4gICAgJ2dhcC15LTgnLFxuICApO1xuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29sLXNwYW4tMicpO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnaXRlbXMtY2VudGVyJywgJ2p1c3RpZnktY2VudGVyJyk7XG5cbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgd2VhdGhlckljb24uc3JjID0gJyMnO1xuICB3ZWF0aGVySWNvbi5pZCA9IGBmb3JlY2FzdC13ZWF0aGVyLWljb24tJHtkYXl9YDtcbiAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnbXItMicsICdhc3BlY3Qtc3F1YXJlJywgJ3NpemUtOCcpO1xuXG4gIGNvbnN0IGRheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZGF5VGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9udC1ib2xkJywgJ3RleHQtY2VudGVyJywgJ3RleHQtbGcnKTtcbiAgZGF5VGl0bGUudGV4dENvbnRlbnQgPSBnZXREYXlOYW1lKGRheSk7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kKHdlYXRoZXJJY29uLCBkYXlUaXRsZSk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gIGNvbnN0IGZvcmVjYXN0SXRlbXMgPSBbXG4gICAgeyBpZDogJ2NvbmRpdGlvbicsIHRpdGxlOiAnQ29uZGl0aW9ucycgfSxcbiAgICB7IGlkOiAnbWF4LXRlbXAnLCB0aXRsZTogJ0hpZ2gnIH0sXG4gICAgeyBpZDogJ21pbi10ZW1wJywgdGl0bGU6ICdMb3cnIH0sXG4gICAgeyBpZDogJ3N1bnJpc2UnLCB0aXRsZTogJ1N1bnJpc2UnIH0sXG4gICAgeyBpZDogJ3N1bnNldCcsIHRpdGxlOiAnU3Vuc2V0JyB9LFxuICAgIHsgaWQ6ICdwcmVjaXBpdGF0aW9uLWNoYW5jZScsIHRpdGxlOiAnQ2hhbmNlIG9mIFByZWNpcGl0YXRpb24nIH0sXG4gIF07XG5cbiAgZm9yZWNhc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLmlkID0gYCR7aXRlbS5pZH0tJHtkYXl9YDtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LW5vbmUnKTtcbiAgICBpZiAoaXRlbS5pZCA9PT0gJ3ByZWNpcGl0YXRpb24tY2hhbmNlJykge1xuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29sLXNwYW4tMicpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gJ3NyLW9ubHknO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG5cbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcpO1xuXG4gICAgY29uc3QgZGF0YVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGF0YVNwYW4uaWQgPSBgJHtpdGVtLmlkfS1kYXRhLSR7ZGF5fWA7XG4gICAgaWYgKGl0ZW0uaWQgPT09ICdjb25kaXRpb24nKSBkYXRhU3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWxnJyk7XG4gICAgZWxzZSBkYXRhU3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LTJ4bCcpO1xuXG4gICAgY29uc3Qgbm90ZXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5vdGVzU3Bhbi5pZCA9IGAke2l0ZW0uaWR9LW5vdGVzLSR7ZGF5fWA7XG4gICAgbm90ZXNTcGFuLmNsYXNzTGlzdC5hZGQoJ3RleHQtc20nLCAnb3BhY2l0eS02MCcpO1xuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZChkYXRhU3Bhbiwgbm90ZXNTcGFuKTtcbiAgICBsaXN0SXRlbS5hcHBlbmQodGl0bGVTcGFuLCBjb250YWluZXJEaXYpO1xuICAgIGlmIChpdGVtLmlkID09PSAnY29uZGl0aW9uJykgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICBlbHNlIGZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb3JlY2FzdExpc3Q7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUhvdXJseUZvcmVjYXN0TGlzdChob3VyKSB7XG4gIGNvbnN0IGhvdXJseUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBob3VybHlMaXN0LmlkID0gYGhvdXJseS0ke2hvdXJ9YDtcbiAgaG91cmx5TGlzdC5jbGFzc0xpc3QuYWRkKFxuICAgICdyb3VuZGVkLTJ4bCcsXG4gICAgJ3RleHQtY2VudGVyJyxcbiAgICAnYmctd2hpdGUnLFxuICAgICdib3JkZXInLFxuICAgICdib3JkZXItZ3JheS0zMDAnLFxuICAgICdwLTYnLFxuICAgICd3LVsyNTBweF0nLFxuICAgICdmbGV4LXNocmluay0wJyxcbiAgICAnZmxleCcsXG4gICAgJ2ZsZXgtY29sJyxcbiAgICAnZ2FwLTgnLFxuICAgICdzbmFwLXN0YXJ0JyxcbiAgKTtcblxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1jb2wnLCAnaXRlbXMtY2VudGVyJyk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdpdGVtcy1jZW50ZXInLCAnanVzdGlmeS1jZW50ZXInKTtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB3ZWF0aGVySWNvbi5zcmMgPSAnIyc7XG4gIHdlYXRoZXJJY29uLmlkID0gYGhvdXJseS13ZWF0aGVyLWljb24tJHtob3VyfWA7XG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ21yLTInLCAnYXNwZWN0LXNxdWFyZScsICdzaXplLTgnKTtcblxuICBjb25zdCBob3VyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBob3VyVGl0bGUuaWQgPSBgaG91ci0ke2hvdXJ9YDtcbiAgaG91clRpdGxlLmNsYXNzTGlzdC5hZGQoXG4gICAgJ2ZvbnQtYm9sZCcsXG4gICAgJ3RleHQtY2VudGVyJyxcbiAgICAndGV4dC1sZycsXG4gICAgJ2ZvbnQtc21hbGwtY2FwcycsXG4gICk7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kKHdlYXRoZXJJY29uLCBob3VyVGl0bGUpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBob3VybHlMaXN0LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgY29uc3QgZm9yZWNhc3RJdGVtcyA9IFtcbiAgICB7IGlkOiAnY29uZGl0aW9uJywgdGl0bGU6ICdDb25kaXRpb25zJyB9LFxuICAgIHsgaWQ6ICd0ZW1wZXJhdHVyZScsIHRpdGxlOiAnVGVtcGVyYXR1cmUnIH0sXG4gICAgeyBpZDogJ3ByZWNpcGl0YXRpb24nLCB0aXRsZTogJ1ByZWNpcGl0YXRpb24nIH0sXG4gICAgeyBpZDogJ2h1bWlkaXR5JywgdGl0bGU6ICdIdW1pZGl0eScgfSxcbiAgICB7IGlkOiAndXYtaW5kZXgnLCB0aXRsZTogJ1VWIEluZGV4JyB9LFxuICAgIHsgaWQ6ICd3aW5kJywgdGl0bGU6ICdXaW5kJyB9LFxuICBdO1xuXG4gIGZvcmVjYXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pZCA9IGBob3VybHktJHtpdGVtLmlkfS0ke2hvdXJ9YDtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LW5vbmUnKTtcblxuICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gJ3NyLW9ubHknO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG5cbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcpO1xuXG4gICAgY29uc3QgZGF0YVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGF0YVNwYW4uaWQgPSBgaG91cmx5LSR7aXRlbS5pZH0tZGF0YS0ke2hvdXJ9YDtcbiAgICBpZiAoaXRlbS5pZCA9PT0gJ2NvbmRpdGlvbicpIGRhdGFTcGFuLmNsYXNzTGlzdC5hZGQoJ3RleHQtbGcnKTtcbiAgICBlbHNlIGRhdGFTcGFuLmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJyk7XG5cbiAgICBjb25zdCBub3Rlc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbm90ZXNTcGFuLmlkID0gYGhvdXJseS0ke2l0ZW0uaWR9LW5vdGVzLSR7aG91cn1gO1xuICAgIG5vdGVzU3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LXNtJywgJ29wYWNpdHktNjAnKTtcblxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmQoZGF0YVNwYW4sIG5vdGVzU3Bhbik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kKHRpdGxlU3BhbiwgY29udGFpbmVyRGl2KTtcblxuICAgIGlmIChpdGVtLmlkID09PSAnY29uZGl0aW9uJykgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICBlbHNlIGhvdXJseUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gaG91cmx5TGlzdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlV2VhdGhlckxpc3QoKSB7XG4gIGNvbnN0IHdlYXRoZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgd2VhdGhlckxpc3QuY2xhc3NMaXN0LmFkZChcbiAgICAnZ3JpZCcsXG4gICAgJ2dyaWQtY29scy0xJyxcbiAgICAnc206Z3JpZC1jb2xzLTInLFxuICAgICdtZDpncmlkLWNvbHMtMycsXG4gICAgJ2xnOmdyaWQtY29scy00JyxcbiAgICAnZ2FwLXktNCcsXG4gICAgJ2dhcC14LTAnLFxuICAgICdwbGFjZS1pdGVtcy1jZW50ZXInLFxuICApO1xuXG4gIGNvbnN0IGRhdGFJdGVtcyA9IFtcbiAgICB7IGlkOiAnY29uZGl0aW9uJywgdGl0bGU6ICdDb25kaXRpb25zJyB9LFxuICAgIHsgaWQ6ICd0ZW1wZXJhdHVyZScsIHRpdGxlOiAnVGVtcGVyYXR1cmUnIH0sXG4gICAgeyBpZDogJ3ByZWNpcGl0YXRpb24nLCB0aXRsZTogJ1ByZWNpcGl0YXRpb24nIH0sXG4gICAgeyBpZDogJ2h1bWlkaXR5JywgdGl0bGU6ICdIdW1pZGl0eScgfSxcbiAgICB7IGlkOiAndmlzaWJpbGl0eScsIHRpdGxlOiAnVmlzaWJpbGl0eScgfSxcbiAgICB7IGlkOiAnYWlyLXF1YWxpdHknLCB0aXRsZTogJ0FpciBRdWFsaXR5JyB9LFxuICAgIHsgaWQ6ICd1di1pbmRleCcsIHRpdGxlOiAnVVYgSW5kZXgnIH0sXG4gICAgeyBpZDogJ3dpbmQnLCB0aXRsZTogJ1dpbmQnIH0sXG4gIF07XG5cbiAgZGF0YUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaWQgPSBpdGVtLmlkO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXG4gICAgICAncmVsYXRpdmUnLFxuICAgICAgJ2xpc3Qtbm9uZScsXG4gICAgICAncm91bmRlZC0yeGwnLFxuICAgICAgJ3RleHQtY2VudGVyJyxcbiAgICAgICdiZy1za3ktMjAwLzQwJyxcbiAgICAgICdib3JkZXInLFxuICAgICAgJ2JvcmRlci1ncmF5LTMwMCcsXG4gICAgICAncC02JyxcbiAgICAgICdzaXplLVsyMDBweF0nLFxuICAgICAgJ2ZsZXgnLFxuICAgICAgJ2ZsZXgtY29sJyxcbiAgICAgICdpdGVtcy1jZW50ZXInLFxuICAgICAgJ2p1c3RpZnktY2VudGVyJyxcbiAgICApO1xuXG4gICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoXG4gICAgICAnZm9udC1ib2xkJyxcbiAgICAgICd0ZXh0LWxnJyxcbiAgICAgICdhYnNvbHV0ZScsXG4gICAgICAndG9wLTYnLFxuICAgICAgJ21heC13LVsxNTBweF0nLFxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICdpdGVtcy1jZW50ZXInLCAnZ2FwLTQnKTtcblxuICAgIGNvbnN0IGRhdGFQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0YVBhcmFncmFwaC5pZCA9IGAke2l0ZW0uaWR9LWRhdGFgO1xuICAgIGRhdGFQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnKTtcblxuICAgIGNvbnN0IG5vdGVzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vdGVzUGFyYWdyYXBoLmlkID0gYCR7aXRlbS5pZH0tbm90ZXNgO1xuICAgIG5vdGVzUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXG4gICAgICAndGV4dC1zbScsXG4gICAgICAnb3BhY2l0eS02MCcsXG4gICAgICAnYWJzb2x1dGUnLFxuICAgICAgJ2JvdHRvbS02JyxcbiAgICAgICdtYXgtdy1bMTUwcHhdJyxcbiAgICApO1xuXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZChkYXRhUGFyYWdyYXBoLCBub3Rlc1BhcmFncmFwaCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xuICAgIHdlYXRoZXJMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdlYXRoZXJMaXN0O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW9Mb2NhdGUoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgZ2VvbG9jYXRpb24gaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXG4gICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAvLyBQcm9tcHQgdXNlciBmb3IgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhlaXIgbG9jYXRpb25cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIC8vIFN1Y2Nlc3MgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICAgIGNvbnN0IGxuZyA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG5cbiAgICAgICAgICAvLyBSZXNvbHZlIHByb21pc2Ugd2l0aCBsb2NhdGlvbiBkYXRhXG4gICAgICAgICAgcmVzb2x2ZSh7IGxhdCwgbG5nIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBFcnJvciBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAvLyBSZWplY3QgcHJvbWlzZSB3aXRoIGVycm9yXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRXJyb3IgZ2V0dGluZyB1c2VyIGxvY2F0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCkpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuJykpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJjb25zdCByZWdpb25BYmJyZXZpYXRpb25zID0ge1xuICAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJzoge1xuICAgIEFsYWJhbWE6ICdBTCcsXG4gICAgQWxhc2thOiAnQUsnLFxuICAgIEFyaXpvbmE6ICdBWicsXG4gICAgQXJrYW5zYXM6ICdBUicsXG4gICAgQ2FsaWZvcm5pYTogJ0NBJyxcbiAgICBDb2xvcmFkbzogJ0NPJyxcbiAgICBDb25uZWN0aWN1dDogJ0NUJyxcbiAgICBEZWxhd2FyZTogJ0RFJyxcbiAgICBGbG9yaWRhOiAnRkwnLFxuICAgIEdlb3JnaWE6ICdHQScsXG4gICAgSGF3YWlpOiAnSEknLFxuICAgIElkYWhvOiAnSUQnLFxuICAgIElsbGlub2lzOiAnSUwnLFxuICAgIEluZGlhbmE6ICdJTicsXG4gICAgSW93YTogJ0lBJyxcbiAgICBLYW5zYXM6ICdLUycsXG4gICAgS2VudHVja3k6ICdLWScsXG4gICAgTG91aXNpYW5hOiAnTEEnLFxuICAgIE1haW5lOiAnTUUnLFxuICAgIE1hcnlsYW5kOiAnTUQnLFxuICAgIE1hc3NhY2h1c2V0dHM6ICdNQScsXG4gICAgTWljaGlnYW46ICdNSScsXG4gICAgTWlubmVzb3RhOiAnTU4nLFxuICAgIE1pc3Npc3NpcHBpOiAnTVMnLFxuICAgIE1pc3NvdXJpOiAnTU8nLFxuICAgIE1vbnRhbmE6ICdNVCcsXG4gICAgTmVicmFza2E6ICdORScsXG4gICAgTmV2YWRhOiAnTlYnLFxuICAgICdOZXcgSGFtcHNoaXJlJzogJ05IJyxcbiAgICAnTmV3IEplcnNleSc6ICdOSicsXG4gICAgJ05ldyBNZXhpY28nOiAnTk0nLFxuICAgICdOZXcgWW9yayc6ICdOWScsXG4gICAgJ05vcnRoIENhcm9saW5hJzogJ05DJyxcbiAgICAnTm9ydGggRGFrb3RhJzogJ05EJyxcbiAgICBPaGlvOiAnT0gnLFxuICAgIE9rbGFob21hOiAnT0snLFxuICAgIE9yZWdvbjogJ09SJyxcbiAgICBQZW5uc3lsdmFuaWE6ICdQQScsXG4gICAgJ1Job2RlIElzbGFuZCc6ICdSSScsXG4gICAgJ1NvdXRoIENhcm9saW5hJzogJ1NDJyxcbiAgICAnU291dGggRGFrb3RhJzogJ1NEJyxcbiAgICBUZW5uZXNzZWU6ICdUTicsXG4gICAgVGV4YXM6ICdUWCcsXG4gICAgVXRhaDogJ1VUJyxcbiAgICBWZXJtb250OiAnVlQnLFxuICAgIFZpcmdpbmlhOiAnVkEnLFxuICAgIFdhc2hpbmd0b246ICdXQScsXG4gICAgJ1dlc3QgVmlyZ2luaWEnOiAnV1YnLFxuICAgIFdpc2NvbnNpbjogJ1dJJyxcbiAgICBXeW9taW5nOiAnV1knLFxuICAgICdEaXN0cmljdCBvZiBDb2x1bWJpYSc6ICdEQycsXG4gIH0sXG4gIENhbmFkYToge1xuICAgIEFsYmVydGE6ICdBQicsXG4gICAgJ0JyaXRpc2ggQ29sdW1iaWEnOiAnQkMnLFxuICAgIE1hbml0b2JhOiAnTUInLFxuICAgICdOZXcgQnJ1bnN3aWNrJzogJ05CJyxcbiAgICAnTmV3Zm91bmRsYW5kIGFuZCBMYWJyYWRvcic6ICdOTCcsXG4gICAgJ05vdmEgU2NvdGlhJzogJ05TJyxcbiAgICBPbnRhcmlvOiAnT04nLFxuICAgICdQcmluY2UgRWR3YXJkIElzbGFuZCc6ICdQRScsXG4gICAgUXVlYmVjOiAnUUMnLFxuICAgIFNhc2thdGNoZXdhbjogJ1NLJyxcbiAgICAnTm9ydGh3ZXN0IFRlcnJpdG9yaWVzJzogJ05UJyxcbiAgICBOdW5hdnV0OiAnTlUnLFxuICAgIFl1a29uOiAnWVQnLFxuICB9LFxufTtcblxuY29uc3QgY291bnRyeUFiYnJldmlhdGlvbnMgPSB7XG4gICdVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnOiAnVVNBJyxcbiAgQXVzdHJhbGlhOiAnQVUnLFxuICAnVW5pdGVkIEtpbmdkb20nOiAnVUsnLFxufTtcblxuZnVuY3Rpb24gZm9ybWF0dGVkUmVnaW9uQW5kQ291bnRyeShyZWdpb24sIGNvdW50cnkpIHtcbiAgY29uc3QgY291bnRyeUFiYnIgPSBjb3VudHJ5QWJicmV2aWF0aW9uc1tjb3VudHJ5XSB8fCBjb3VudHJ5O1xuICBjb25zdCByZWdpb25BYmJyID0gcmVnaW9uQWJicmV2aWF0aW9ucz8uW2NvdW50cnldPy5bcmVnaW9uXTtcblxuICBpZiAocmVnaW9uQWJicikgcmV0dXJuIGAke3JlZ2lvbkFiYnJ9LCAke2NvdW50cnlBYmJyfWA7XG4gIHJldHVybiBjb3VudHJ5QWJicjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2l0eVRpdGxlKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lO1xuICBjb25zdCB7IHJlZ2lvbiB9ID0gbG9jYXRpb247XG4gIGNvbnN0IHsgY291bnRyeSB9ID0gbG9jYXRpb247XG5cbiAgcmV0dXJuIGAke2NpdHl9LCAke2Zvcm1hdHRlZFJlZ2lvbkFuZENvdW50cnkocmVnaW9uLCBjb3VudHJ5KX1gO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGlzdGFuY2VVbml0KCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rpc3RhbmNlVW5pdCcpIHx8ICdtaSc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXN0TG9jYXRpb24oKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdExvY2F0aW9uJykgfHwgJ1RhbXBhJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lYXN1cmVtZW50VW5pdCgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZWFzdXJlbWVudFVuaXQnKSB8fCAnaW4nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3BlZWRVbml0KCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rpc3RhbmNlVW5pdCcpID09PSAna20nID8gJ2twaCcgOiAnbXBoJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRlbXBlcmF0dXJlVW5pdCgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW1wZXJhdHVyZVVuaXQnKSB8fCAnRic7XG59XG4iLCJpbXBvcnQgZ2VvTG9jYXRlIGZyb20gJy4vZ2VvbG9jYXRpb24nO1xuaW1wb3J0IGZldGNoV2VhdGhlckRhdGEgZnJvbSAnLi9mZXRjaC13ZWF0aGVyLWRhdGEnO1xuaW1wb3J0IHVwZGF0ZVdlYXRoZXJEYXRhIGZyb20gJy4vdXBkYXRlLXdlYXRoZXItZGF0YSc7XG5pbXBvcnQgdXBkYXRlRGFpbHlGb3JlY2FzdERhdGEgZnJvbSAnLi91cGRhdGUtZGFpbHktZm9yZWNhc3QtZGF0YSc7XG5pbXBvcnQgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhIGZyb20gJy4vdXBkYXRlLWhvdXJseS1mb3JlY2FzdC1kYXRhJztcbmltcG9ydCBzY3JvbGxUb0N1cnJlbnRIb3VyIGZyb20gJy4vc2Nyb2xsLXRvLWN1cnJlbnQtaG91cic7XG5cbmNvbnN0IGxvY2F0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWJ0bicpO1xuY29uc3QgbG9jYXRpb25CdG5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWJ0bi10ZXh0Jyk7XG5jb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24taWNvbicpO1xuY29uc3Qgc3Bpbm5lckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lci1pY29uJyk7XG5cbmxvY2F0aW9uQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gIGxvY2F0aW9uQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgY29uc3QgcHJldkxvY2F0aW9uQnRuVGV4dCA9IGxvY2F0aW9uQnRuVGV4dC50ZXh0Q29udGVudDtcbiAgbG9jYXRpb25CdG5UZXh0LnRleHRDb250ZW50ID0gJ0dldHRpbmcgWW91ciBMb2NhdGlvbic7XG4gIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc3Bpbm5lckljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IGdlb0xvY2F0ZSgpO1xuICAgIGxvY2F0aW9uQnRuVGV4dC50ZXh0Q29udGVudCA9ICdVcGRhdGluZyBXZWF0aGVyIEluZm9ybWF0aW9uJztcblxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IFtsb2NhdGlvbi5sYXQsIGxvY2F0aW9uLmxuZ10uam9pbigpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgICB1cGRhdGVXZWF0aGVyRGF0YShkYXRhKTtcbiAgICB1cGRhdGVEYWlseUZvcmVjYXN0RGF0YShkYXRhKTtcbiAgICB1cGRhdGVIb3VybHlGb3JlY2FzdERhdGEoZGF0YSk7XG4gICAgc2Nyb2xsVG9DdXJyZW50SG91cihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9IGZpbmFsbHkge1xuICAgIGxvY2F0aW9uQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbG9jYXRpb25CdG5UZXh0LnRleHRDb250ZW50ID0gcHJldkxvY2F0aW9uQnRuVGV4dDtcbiAgICBsb2NhdGlvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgc3Bpbm5lckljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlTGFzdExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TG9jYXRpb24nLCBbbG9jYXRpb24ubGF0LCBsb2NhdGlvbi5sb25dLmpvaW4oKSk7XG59XG4iLCJpbXBvcnQgdXBkYXRlV2VhdGhlckRhdGEgZnJvbSAnLi91cGRhdGUtd2VhdGhlci1kYXRhJztcbmltcG9ydCB1cGRhdGVEYWlseUZvcmVjYXN0RGF0YSBmcm9tICcuL3VwZGF0ZS1kYWlseS1mb3JlY2FzdC1kYXRhJztcbmltcG9ydCB1cGRhdGVIb3VybHlGb3JlY2FzdERhdGEgZnJvbSAnLi91cGRhdGUtaG91cmx5LWZvcmVjYXN0LWRhdGEnO1xuaW1wb3J0IGdldFRlbXBlcmF0dXJlVW5pdCBmcm9tICcuL2dldC10ZW1wZXJhdHVyZS11bml0JztcbmltcG9ydCBnZXREaXN0YW5jZVVuaXQgZnJvbSAnLi9nZXQtZGlzdGFuY2UtdW5pdCc7XG5pbXBvcnQgZ2V0TWVhc3VyZW1lbnRVbml0IGZyb20gJy4vZ2V0LW1lYXN1cmVtZW50LXVuaXQnO1xuXG5mdW5jdGlvbiBwcmVzZWxlY3RDaG9zZW5TZXR0aW5ncygpIHtcbiAgY29uc3QgdGVtcGVyYXR1cmVVbml0ID0gZ2V0VGVtcGVyYXR1cmVVbml0KCk7XG4gIGNvbnN0IGRpc3RhbmNlVW5pdCA9IGdldERpc3RhbmNlVW5pdCgpO1xuICBjb25zdCBtZWFzdXJlbWVudFVuaXQgPSBnZXRNZWFzdXJlbWVudFVuaXQoKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wZXJhdHVyZVVuaXQpLmNoZWNrZWQgPSB0cnVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXN0YW5jZVVuaXQpLmNoZWNrZWQgPSB0cnVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZWFzdXJlbWVudFVuaXQpLmNoZWNrZWQgPSB0cnVlO1xufVxuXG5jb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1idG4nKTtcbmNvbnN0IHNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtbW9kYWwnKTtcbmNvbnN0IHNldHRpbmdzRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1mb3JtJyk7XG5jb25zdCBjbG9zZVNldHRpbmdzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNldHRpbmdzLWJ0bicpO1xuY29uc3QgY2FuY2VsU2V0dGluZ3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLXNldHRpbmdzLWJ0bicpO1xuY29uc3Qgc2F2ZVNldHRpbmdzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MtYnRuJyk7XG5cbmZ1bmN0aW9uIGNsb3NlU2V0dGluZ3NNb2RhbCgpIHtcbiAgc2V0dGluZ3NNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc2V0dGluZ3NGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dTZXR0aW5nc01vZGFsKCkge1xuICBwcmVzZWxlY3RDaG9zZW5TZXR0aW5ncygpO1xuICBzZXR0aW5nc01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBzYXZlU2V0dGluZ3MoKSB7XG4gIGNvbnN0IGNlbHNpdXNSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDJyk7XG4gIGlmIChjZWxzaXVzUmFkaW8uY2hlY2tlZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBlcmF0dXJlVW5pdCcsICdDJyk7XG4gIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBlcmF0dXJlVW5pdCcsICdGJyk7XG5cbiAgY29uc3Qga21SYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrbScpO1xuICBpZiAoa21SYWRpby5jaGVja2VkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzdGFuY2VVbml0JywgJ2ttJyk7XG4gIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rpc3RhbmNlVW5pdCcsICdtaScpO1xuXG4gIGNvbnN0IG1tUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW0nKTtcbiAgaWYgKG1tUmFkaW8uY2hlY2tlZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lYXN1cmVtZW50VW5pdCcsICdtbScpO1xuICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZWFzdXJlbWVudFVuaXQnLCAnaW4nKTtcblxuICBjbG9zZVNldHRpbmdzTW9kYWwoKTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckRhdGEnKSk7XG4gIHVwZGF0ZVdlYXRoZXJEYXRhKGRhdGEpO1xuICB1cGRhdGVEYWlseUZvcmVjYXN0RGF0YShkYXRhKTtcbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhKGRhdGEpO1xufVxuXG5zZXR0aW5nc0J0bi5vbmNsaWNrID0gc2hvd1NldHRpbmdzTW9kYWw7XG5jbG9zZVNldHRpbmdzQnRuLm9uY2xpY2sgPSBjbG9zZVNldHRpbmdzTW9kYWw7XG5jYW5jZWxTZXR0aW5nc0J0bi5vbmNsaWNrID0gY2xvc2VTZXR0aW5nc01vZGFsO1xuc2F2ZVNldHRpbmdzQnRuLm9uY2xpY2sgPSBzYXZlU2V0dGluZ3M7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cFNjcm9sbEJ1dHRvbnMoKSB7XG4gIGNvbnN0IGhvdXJseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHktZm9yZWNhc3QnKTtcbiAgY29uc3QgZXhhbXBsZVdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseS0wJykuY2xpZW50V2lkdGg7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseS1zY3JvbGwtbGVmdCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaG91cmx5Q29udGFpbmVyLnNjcm9sbExlZnQgLT0gZXhhbXBsZVdpZHRoO1xuICB9O1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHktc2Nyb2xsLXJpZ2h0Jykub25jbGljayA9ICgpID0+IHtcbiAgICBob3VybHlDb250YWluZXIuc2Nyb2xsTGVmdCArPSBleGFtcGxlV2lkdGg7XG4gIH07XG59XG4iLCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLXRvLWJlZ2lubmluZycpLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGhvdXJseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHktZm9yZWNhc3QnKTtcblxuICBob3VybHlDb250YWluZXIuc2Nyb2xsTGVmdCA9IDA7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9DdXJyZW50SG91cihkYXRhKSB7XG4gIGNvbnN0IGhvdXJseUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHktZm9yZWNhc3QnKTtcbiAgY29uc3QgZXhhbXBsZVdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseS0wJykuY2xpZW50V2lkdGg7XG5cbiAgY29uc3QgY3VycmVudEhvdXIgPSBuZXcgRGF0ZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkuZ2V0SG91cnMoKTtcbiAgaG91cmx5Q29udGFpbmVyLnNjcm9sbExlZnQgPSAoZXhhbXBsZVdpZHRoICsgMTgpICogY3VycmVudEhvdXI7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdG8tY3VycmVudC1ob3VyJykub25jbGljayA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJEYXRhJykpO1xuICBzY3JvbGxUb0N1cnJlbnRIb3VyKGRhdGEpO1xufTtcbiIsImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdG8tZW5kJykub25jbGljayA9ICgpID0+IHtcbiAgY29uc3QgaG91cmx5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseS1mb3JlY2FzdCcpO1xuXG4gIGhvdXJseUNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gaG91cmx5Q29udGFpbmVyLnNjcm9sbFdpZHRoO1xufTtcbiIsImltcG9ydCBmZXRjaFdlYXRoZXJEYXRhIGZyb20gJy4vZmV0Y2gtd2VhdGhlci1kYXRhJztcbmltcG9ydCB1cGRhdGVXZWF0aGVyRGF0YSBmcm9tICcuL3VwZGF0ZS13ZWF0aGVyLWRhdGEnO1xuaW1wb3J0IHVwZGF0ZURhaWx5Rm9yZWNhc3REYXRhIGZyb20gJy4vdXBkYXRlLWRhaWx5LWZvcmVjYXN0LWRhdGEnO1xuaW1wb3J0IHVwZGF0ZUhvdXJseUZvcmVjYXN0RGF0YSBmcm9tICcuL3VwZGF0ZS1ob3VybHktZm9yZWNhc3QtZGF0YSc7XG5pbXBvcnQgc2Nyb2xsVG9DdXJyZW50SG91ciBmcm9tICcuL3Njcm9sbC10by1jdXJyZW50LWhvdXInO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2hGaWVsZC52YWx1ZTtcblxuICBmZXRjaFdlYXRoZXJEYXRhKHNlYXJjaFRlcm0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICB1cGRhdGVXZWF0aGVyRGF0YShkYXRhKTtcbiAgICB1cGRhdGVEYWlseUZvcmVjYXN0RGF0YShkYXRhKTtcbiAgICB1cGRhdGVIb3VybHlGb3JlY2FzdERhdGEoZGF0YSk7XG4gICAgc2Nyb2xsVG9DdXJyZW50SG91cihkYXRhKTtcbiAgfSk7XG4gIGZvcm0ucmVzZXQoKTtcbn0pO1xuIiwiY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJ2snKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gYXZvaWQgdHJpZ2dlcmluZyBicm93c2VyIHNob3J0Y3V0c1xuICAgIHNlYXJjaEZpZWxkLmZvY3VzKCk7XG4gIH1cblxuICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VhcmNoRmllbGQuYmx1cigpO1xuICB9XG59KTtcbiIsImltcG9ydCBiYWNrZ3JvdW5kQ2xhc3MgZnJvbSAnLi9iYWNrZ3JvdW5kLWNsYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGFpbHlGb3JlY2FzdERhdGFQb2ludCh7XG4gIGRheSxcbiAgZGF0YVBvaW50LFxuICBjb25kaXRpb25Db2RlLFxuICB0ZXh0LFxuICBub3RlcyA9ICcnLFxufSkge1xuICBjb25zdCBmb3JlY2FzdERhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhUG9pbnR9LWRhdGEtJHtkYXl9YCk7XG4gIGZvcmVjYXN0RGF0YS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgaWYgKGNvbmRpdGlvbkNvZGUpIHtcbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmb3JlY2FzdC0ke2RheX1gKTtcblxuICAgIC8vIHJlbW92ZXMgcHJldmlvdXMgYmFja2dyb3VuZCBjb2xvclxuICAgIFsuLi5mb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3RdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnN0YXJ0c1dpdGgoJ2JnLScpKSB7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGRzIG5ldyBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChiYWNrZ3JvdW5kQ2xhc3MoY29uZGl0aW9uQ29kZSkpO1xuICB9XG5cbiAgY29uc3QgZm9yZWNhc3ROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2RhdGFQb2ludH0tbm90ZXMtJHtkYXl9YCk7XG4gIGZvcmVjYXN0Tm90ZXMudGV4dENvbnRlbnQgPSBub3RlcztcblxuICBpZiAobm90ZXMgPT09ICcnKSBmb3JlY2FzdE5vdGVzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBlbHNlIGZvcmVjYXN0Tm90ZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG4iLCJpbXBvcnQgdXBkYXRlRGFpbHlGb3JlY2FzdERhdGFQb2ludCBmcm9tICcuL3VwZGF0ZS1kYWlseS1mb3JlY2FzdC1kYXRhLXBvaW50JztcbmltcG9ydCB7IERBWVMgfSBmcm9tICcuL2ZldGNoLXdlYXRoZXItZGF0YSc7XG5pbXBvcnQgZ2V0VGVtcGVyYXR1cmVVbml0IGZyb20gJy4vZ2V0LXRlbXBlcmF0dXJlLXVuaXQnO1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgY29uc3QgW3N1bnNldEhvdXJzLCBzdW5zZXRNaW51dGVzXSA9IHRpbWUuc3BsaXQoLzp8XFxzLyk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0SG91cnMoc3Vuc2V0SG91cnMpO1xuICBkYXRlLnNldE1pbnV0ZXMoc3Vuc2V0TWludXRlcyk7XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGFpbHlGb3JlY2FzdERhdGEoZGF0YSkge1xuICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCBEQVlTOyBkYXkrKykge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XTtcblxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcmVjYXN0LXdlYXRoZXItaWNvbi0ke2RheX1gKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6JHtmb3JlY2FzdERhdGEuZGF5LmNvbmRpdGlvbi5pY29ufWA7XG5cbiAgICBjb25zdCB0ZW1wVW5pdCA9IGdldFRlbXBlcmF0dXJlVW5pdCgpO1xuICAgIGxldCBtYXhUZW1wRGF0YTtcbiAgICBsZXQgbWluVGVtcERhdGE7XG4gICAgaWYgKHRlbXBVbml0ID09PSAnQycpIHtcbiAgICAgIG1heFRlbXBEYXRhID0gZm9yZWNhc3REYXRhLmRheS5tYXh0ZW1wX2M7XG4gICAgICBtaW5UZW1wRGF0YSA9IGZvcmVjYXN0RGF0YS5kYXkubWludGVtcF9jO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXhUZW1wRGF0YSA9IGZvcmVjYXN0RGF0YS5kYXkubWF4dGVtcF9mO1xuICAgICAgbWluVGVtcERhdGEgPSBmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfZjtcbiAgICB9XG5cbiAgICB1cGRhdGVEYWlseUZvcmVjYXN0RGF0YVBvaW50KHtcbiAgICAgIGRheSxcbiAgICAgIGRhdGFQb2ludDogJ2NvbmRpdGlvbicsXG4gICAgICBjb25kaXRpb25Db2RlOiBmb3JlY2FzdERhdGEuZGF5LmNvbmRpdGlvbi5jb2RlLFxuICAgICAgdGV4dDogZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24udGV4dCxcbiAgICB9KTtcblxuICAgIHVwZGF0ZURhaWx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgICAgZGF5LFxuICAgICAgZGF0YVBvaW50OiAnbWF4LXRlbXAnLFxuICAgICAgdGV4dDogYCR7bWF4VGVtcERhdGF9wrAke3RlbXBVbml0fWAsXG4gICAgICBub3RlczogJ0hpZ2gnLFxuICAgIH0pO1xuXG4gICAgdXBkYXRlRGFpbHlGb3JlY2FzdERhdGFQb2ludCh7XG4gICAgICBkYXksXG4gICAgICBkYXRhUG9pbnQ6ICdtaW4tdGVtcCcsXG4gICAgICB0ZXh0OiBgJHttaW5UZW1wRGF0YX3CsCR7dGVtcFVuaXR9YCxcbiAgICAgIG5vdGVzOiAnTG93JyxcbiAgICB9KTtcblxuICAgIHVwZGF0ZURhaWx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgICAgZGF5LFxuICAgICAgZGF0YVBvaW50OiAncHJlY2lwaXRhdGlvbi1jaGFuY2UnLFxuICAgICAgdGV4dDogYCR7Zm9yZWNhc3REYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICAgIG5vdGVzOiAnQ2hhbmNlIG9mIHByZWNpcGl0YXRpb24nLFxuICAgIH0pO1xuXG4gICAgdXBkYXRlRGFpbHlGb3JlY2FzdERhdGFQb2ludCh7XG4gICAgICBkYXksXG4gICAgICBkYXRhUG9pbnQ6ICdzdW5yaXNlJyxcbiAgICAgIHRleHQ6IGZvcm1hdFRpbWUoZm9yZWNhc3REYXRhLmFzdHJvLnN1bnJpc2UpLFxuICAgICAgbm90ZXM6ICdTdW5yaXNlJyxcbiAgICB9KTtcblxuICAgIHVwZGF0ZURhaWx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgICAgZGF5LFxuICAgICAgZGF0YVBvaW50OiAnc3Vuc2V0JyxcbiAgICAgIHRleHQ6IGZvcm1hdFRpbWUoZm9yZWNhc3REYXRhLmFzdHJvLnN1bnNldCksXG4gICAgICBub3RlczogJ1N1bnNldCcsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBiYWNrZ3JvdW5kQ2xhc3MgZnJvbSAnLi9iYWNrZ3JvdW5kLWNsYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICBob3VyLFxuICBkYXRhUG9pbnQsXG4gIGNvbmRpdGlvbkNvZGUsXG4gIGlzRGF5LFxuICB0ZXh0LFxuICBub3RlcyA9ICcnLFxufSkge1xuICBjb25zdCBob3VybHlEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGhvdXJseS0ke2RhdGFQb2ludH0tZGF0YS0ke2hvdXJ9YCxcbiAgKTtcbiAgaG91cmx5RGF0YS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgaWYgKGNvbmRpdGlvbkNvZGUpIHtcbiAgICBjb25zdCBob3VybHlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaG91cmx5LSR7aG91cn1gKTtcblxuICAgIC8vIHJlbW92ZXMgcHJldmlvdXMgYmFja2dyb3VuZCBjb2xvclxuICAgIFsuLi5ob3VybHlDb250YWluZXIuY2xhc3NMaXN0XS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5zdGFydHNXaXRoKCdiZy0nKSkge1xuICAgICAgICBob3VybHlDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZHMgbmV3IGJhY2tncm91bmQgY29sb3JcbiAgICBsZXQgYmdDbGFzcyA9IGJhY2tncm91bmRDbGFzcyhjb25kaXRpb25Db2RlKTtcbiAgICBpZiAoY29uZGl0aW9uQ29kZSA9PT0gMTAwMCAmJiAhaXNEYXkpIGJnQ2xhc3MgPSAnYmctc2t5LTIwMC80MCc7IC8vIGNoYW5nZXMgYmFja2dyb3VuZCBjb2xvciBpZiBpdCBpcyBuaWdodHRpbWVcbiAgICBob3VybHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChiZ0NsYXNzKTtcbiAgfVxuXG4gIGNvbnN0IGhvdXJseU5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGhvdXJseS0ke2RhdGFQb2ludH0tbm90ZXMtJHtob3VyfWAsXG4gICk7XG4gIGhvdXJseU5vdGVzLnRleHRDb250ZW50ID0gbm90ZXM7XG5cbiAgaWYgKG5vdGVzID09PSAnJykgaG91cmx5Tm90ZXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGVsc2UgaG91cmx5Tm90ZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG4iLCJpbXBvcnQgZ2V0RGlzdGFuY2VVbml0IGZyb20gJy4vZ2V0LWRpc3RhbmNlLXVuaXQnO1xuaW1wb3J0IGdldFNwZWVkVW5pdCBmcm9tICcuL2dldC1zcGVlZC11bml0JztcbmltcG9ydCBnZXRUZW1wZXJhdHVyZVVuaXQgZnJvbSAnLi9nZXQtdGVtcGVyYXR1cmUtdW5pdCc7XG5pbXBvcnQgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQgZnJvbSAnLi91cGRhdGUtaG91cmx5LWZvcmVjYXN0LWRhdGEtcG9pbnQnO1xuXG5mdW5jdGlvbiBnZXRIb3VyKGhvdXIsIG5vdykge1xuICBpZiAoaG91ciA9PT0gbm93KSByZXR1cm4gJ05vdyc7XG4gIGlmIChob3VyID09PSAwKSByZXR1cm4gJzEyYW0nO1xuICBpZiAoaG91ciA8PSAxMikgcmV0dXJuIGAke2hvdXJ9YW1gO1xuICByZXR1cm4gYCR7aG91ciAtIDEyfXBtYDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudEhvdXJGb3JlY2FzdERhdGEoZGF0YSkge1xuICBjb25zdCBob3VyID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaG91cmx5LXdlYXRoZXItaWNvbi0ke2hvdXJ9YCk7XG4gIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczoke2RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gO1xuXG4gIGNvbnN0IGhvdXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaG91cmx5LSR7aG91cn1gKTtcbiAgWy4uLmhvdXJDb250YWluZXIuY2xhc3NMaXN0XS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuc3RhcnRzV2l0aCgnYm9yZGVyLScpKSB7XG4gICAgICBob3VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbiAgaG91ckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib3JkZXItWyMxZGExZjJdJyk7XG5cbiAgY29uc3QgdGVtcFVuaXQgPSBnZXRUZW1wZXJhdHVyZVVuaXQoKTtcbiAgbGV0IHRlbXBEYXRhO1xuICBsZXQgZmVlbHNsaWtlRGF0YTtcbiAgaWYgKHRlbXBVbml0ID09PSAnQycpIHtcbiAgICB0ZW1wRGF0YSA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gICAgZmVlbHNsaWtlRGF0YSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgfSBlbHNlIHtcbiAgICB0ZW1wRGF0YSA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgZmVlbHNsaWtlRGF0YSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgfVxuXG4gIGNvbnN0IGRpc3RhbmNlVW5pdCA9IGdldERpc3RhbmNlVW5pdCgpO1xuICBsZXQgd2luZERhdGE7XG4gIGxldCBndXN0RGF0YTtcbiAgY29uc3Qgc3BlZWRVbml0ID0gZ2V0U3BlZWRVbml0KCk7XG4gIGlmIChkaXN0YW5jZVVuaXQgPT09ICdrbScpIHtcbiAgICB3aW5kRGF0YSA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgICBndXN0RGF0YSA9IGRhdGEuY3VycmVudC5ndXN0X2twaDtcbiAgfSBlbHNlIHtcbiAgICB3aW5kRGF0YSA9IGRhdGEuY3VycmVudC53aW5kX21waDtcbiAgICBndXN0RGF0YSA9IGRhdGEuY3VycmVudC5ndXN0X21waDtcbiAgfVxuXG4gIHVwZGF0ZUhvdXJseUZvcmVjYXN0RGF0YVBvaW50KHtcbiAgICBob3VyLFxuICAgIGRhdGFQb2ludDogJ2NvbmRpdGlvbicsXG4gICAgY29uZGl0aW9uQ29kZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxuICAgIGlzRGF5OiBkYXRhLmN1cnJlbnQuaXNfZGF5LFxuICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dC50cmltKCksXG4gICAgbm90ZXM6IGAke2RhdGEuY3VycmVudC5jbG91ZH0lIGNsb3VkIGNvdmVyYCxcbiAgfSk7XG5cbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgIGhvdXIsXG4gICAgZGF0YVBvaW50OiAndGVtcGVyYXR1cmUnLFxuICAgIHRleHQ6IGAke3RlbXBEYXRhfcKwJHt0ZW1wVW5pdH1gLFxuICAgIG5vdGVzOiBgRmVlbHMgbGlrZSAke2ZlZWxzbGlrZURhdGF9wrAke3RlbXBVbml0fWAsXG4gIH0pO1xuICB1cGRhdGVIb3VybHlGb3JlY2FzdERhdGFQb2ludCh7XG4gICAgaG91cixcbiAgICBkYXRhUG9pbnQ6ICdwcmVjaXBpdGF0aW9uJyxcbiAgICB0ZXh0OiBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICBub3RlczogJ0NoYW5jZSBvZiBwcmVjaXBpdGF0aW9uJyxcbiAgfSk7XG5cbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgIGhvdXIsXG4gICAgZGF0YVBvaW50OiAnaHVtaWRpdHknLFxuICAgIHRleHQ6IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYCxcbiAgICBub3RlczogJ0h1bWlkaXR5JyxcbiAgfSk7XG5cbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgIGhvdXIsXG4gICAgZGF0YVBvaW50OiAndXYtaW5kZXgnLFxuICAgIHRleHQ6IGRhdGEuY3VycmVudC51dixcbiAgICBub3RlczogJ1VWIGluZGV4JyxcbiAgfSk7XG5cbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgIGhvdXIsXG4gICAgZGF0YVBvaW50OiAnd2luZCcsXG4gICAgdGV4dDogYCR7d2luZERhdGF9ICR7c3BlZWRVbml0fSAke2RhdGEuY3VycmVudC53aW5kX2Rpcn1gLFxuICAgIG5vdGVzOiBgR3VzdHMgdXAgdG8gJHtndXN0RGF0YX0gJHtzcGVlZFVuaXR9YCxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUhvdXJseUZvcmVjYXN0RGF0YShkYXRhKSB7XG4gIGZvciAobGV0IGhvdXIgPSAwOyBob3VyIDwgMjQ7IGhvdXIrKykge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lKS5nZXRIb3VycygpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGhvdXItJHtob3VyfWApLnRleHRDb250ZW50ID0gZ2V0SG91cihob3VyLCBub3cpO1xuXG4gICAgaWYgKGhvdXIgPT09IG5vdykge1xuICAgICAgdXBkYXRlQ3VycmVudEhvdXJGb3JlY2FzdERhdGEoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhvdXJseURhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91cl07XG5cbiAgICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGBob3VybHktd2VhdGhlci1pY29uLSR7aG91cn1gLFxuICAgICAgKTtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczoke2hvdXJseURhdGEuY29uZGl0aW9uLmljb259YDtcblxuICAgICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBob3VybHktJHtob3VyfWApO1xuICAgICAgWy4uLmhvdXJDb250YWluZXIuY2xhc3NMaXN0XS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0YXJ0c1dpdGgoJ2JvcmRlci0nKSkge1xuICAgICAgICAgIGhvdXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBob3VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1ncmF5LTMwMCcpO1xuXG4gICAgICBjb25zdCB0ZW1wVW5pdCA9IGdldFRlbXBlcmF0dXJlVW5pdCgpO1xuICAgICAgbGV0IHRlbXBEYXRhO1xuICAgICAgbGV0IGZlZWxzbGlrZURhdGE7XG4gICAgICBpZiAodGVtcFVuaXQgPT09ICdDJykge1xuICAgICAgICB0ZW1wRGF0YSA9IGhvdXJseURhdGEudGVtcF9jO1xuICAgICAgICBmZWVsc2xpa2VEYXRhID0gaG91cmx5RGF0YS5mZWVsc2xpa2VfYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBEYXRhID0gaG91cmx5RGF0YS50ZW1wX2Y7XG4gICAgICAgIGZlZWxzbGlrZURhdGEgPSBob3VybHlEYXRhLmZlZWxzbGlrZV9mO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXN0YW5jZVVuaXQgPSBnZXREaXN0YW5jZVVuaXQoKTtcbiAgICAgIGxldCB3aW5kRGF0YTtcbiAgICAgIGxldCBndXN0RGF0YTtcbiAgICAgIGNvbnN0IHNwZWVkVW5pdCA9IGdldFNwZWVkVW5pdCgpO1xuICAgICAgaWYgKGRpc3RhbmNlVW5pdCA9PT0gJ2ttJykge1xuICAgICAgICB3aW5kRGF0YSA9IGhvdXJseURhdGEud2luZF9rcGg7XG4gICAgICAgIGd1c3REYXRhID0gaG91cmx5RGF0YS5ndXN0X2twaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmREYXRhID0gaG91cmx5RGF0YS53aW5kX21waDtcbiAgICAgICAgZ3VzdERhdGEgPSBob3VybHlEYXRhLmd1c3RfbXBoO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVIb3VybHlGb3JlY2FzdERhdGFQb2ludCh7XG4gICAgICAgIGhvdXIsXG4gICAgICAgIGRhdGFQb2ludDogJ2NvbmRpdGlvbicsXG4gICAgICAgIGlzRGF5OiBob3VybHlEYXRhLmlzX2RheSxcbiAgICAgICAgY29uZGl0aW9uQ29kZTogaG91cmx5RGF0YS5jb25kaXRpb24uY29kZSxcbiAgICAgICAgdGV4dDogaG91cmx5RGF0YS5jb25kaXRpb24udGV4dC50cmltKCksXG4gICAgICAgIG5vdGVzOiBgJHtob3VybHlEYXRhLmNsb3VkfSUgY2xvdWQgY292ZXJgLFxuICAgICAgfSk7XG5cbiAgICAgIHVwZGF0ZUhvdXJseUZvcmVjYXN0RGF0YVBvaW50KHtcbiAgICAgICAgaG91cixcbiAgICAgICAgZGF0YVBvaW50OiAndGVtcGVyYXR1cmUnLFxuICAgICAgICB0ZXh0OiBgJHt0ZW1wRGF0YX3CsCR7dGVtcFVuaXR9YCxcbiAgICAgICAgbm90ZXM6IGBGZWVscyBsaWtlICR7ZmVlbHNsaWtlRGF0YX3CsCR7dGVtcFVuaXR9YCxcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgICAgICBob3VyLFxuICAgICAgICBkYXRhUG9pbnQ6ICdwcmVjaXBpdGF0aW9uJyxcbiAgICAgICAgdGV4dDogYCR7aG91cmx5RGF0YS5jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICAgICAgbm90ZXM6ICdDaGFuY2Ugb2YgcHJlY2lwaXRhdGlvbicsXG4gICAgICB9KTtcblxuICAgICAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhUG9pbnQoe1xuICAgICAgICBob3VyLFxuICAgICAgICBkYXRhUG9pbnQ6ICdodW1pZGl0eScsXG4gICAgICAgIHRleHQ6IGAke2hvdXJseURhdGEuaHVtaWRpdHl9JWAsXG4gICAgICAgIG5vdGVzOiAnSHVtaWRpdHknLFxuICAgICAgfSk7XG5cbiAgICAgIHVwZGF0ZUhvdXJseUZvcmVjYXN0RGF0YVBvaW50KHtcbiAgICAgICAgaG91cixcbiAgICAgICAgZGF0YVBvaW50OiAndXYtaW5kZXgnLFxuICAgICAgICB0ZXh0OiBob3VybHlEYXRhLnV2LFxuICAgICAgICBub3RlczogJ1VWIGluZGV4JyxcbiAgICAgIH0pO1xuXG4gICAgICB1cGRhdGVIb3VybHlGb3JlY2FzdERhdGFQb2ludCh7XG4gICAgICAgIGhvdXIsXG4gICAgICAgIGRhdGFQb2ludDogJ3dpbmQnLFxuICAgICAgICB0ZXh0OiBgJHt3aW5kRGF0YX0gJHtzcGVlZFVuaXR9ICR7aG91cmx5RGF0YS53aW5kX2Rpcn1gLFxuICAgICAgICBub3RlczogYEd1c3RzIHVwIHRvICR7Z3VzdERhdGF9ICR7c3BlZWRVbml0fWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJEYXRhUG9pbnQoe1xuICBkYXRhUG9pbnQsXG4gIHRleHQsXG4gIG5vdGVzID0gJycsXG59KSB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZGF0YVBvaW50fS1kYXRhYCk7XG4gIHdlYXRoZXJEYXRhLnRleHRDb250ZW50ID0gdGV4dDtcblxuICBjb25zdCB3ZWF0aGVyTm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtkYXRhUG9pbnR9LW5vdGVzYCk7XG4gIHdlYXRoZXJOb3Rlcy50ZXh0Q29udGVudCA9IG5vdGVzO1xuXG4gIGlmIChub3RlcyA9PT0gJycpIHdlYXRoZXJOb3Rlcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgZWxzZSB3ZWF0aGVyTm90ZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG4iLCJpbXBvcnQgdXBkYXRlV2VhdGhlckRhdGFQb2ludCBmcm9tICcuL3VwZGF0ZS13ZWF0aGVyLWRhdGEtcG9pbnQnO1xuaW1wb3J0IGdldENpdHlUaXRsZSBmcm9tICcuL2dldC1jaXR5LXRpdGxlJztcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gJy4vZm9ybWF0LXRpbWUnO1xuaW1wb3J0IGdldFRlbXBlcmF0dXJlVW5pdCBmcm9tICcuL2dldC10ZW1wZXJhdHVyZS11bml0JztcbmltcG9ydCBnZXREaXN0YW5jZVVuaXQgZnJvbSAnLi9nZXQtZGlzdGFuY2UtdW5pdCc7XG5pbXBvcnQgZ2V0TWVhc3VyZW1lbnRVbml0IGZyb20gJy4vZ2V0LW1lYXN1cmVtZW50LXVuaXQnO1xuaW1wb3J0IGdldFNwZWVkVW5pdCBmcm9tICcuL2dldC1zcGVlZC11bml0JztcblxuZnVuY3Rpb24gYXFpRGVzY3JpcHRpb24obnVtKSB7XG4gIC8vIGFxaSB2YWx1ZXMgZnJvbSBodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS9kb2NzLyNpbnRyby1hcWlcblxuICBjb25zdCBhcWlEaWN0aW9uYXJ5ID0ge1xuICAgIDE6ICdHb29kJyxcbiAgICAyOiAnTW9kZXJhdGUnLFxuICAgIDM6ICdVbmhlYWx0aHkgZm9yIHNlbnNpdGl2ZSBncm91cHMnLFxuICAgIDQ6ICdVbmhlYWx0aHknLFxuICAgIDU6ICdWZXJ5IHVuaGVhbHRoeScsXG4gICAgNjogJ0hhemFyZG91cycsXG4gIH07XG5cbiAgaWYgKG51bSA+PSAxICYmIG51bSA8PSA2KSByZXR1cm4gYXFpRGljdGlvbmFyeVtudW1dO1xuICByZXR1cm4gJ1VuYXZhaWxhYmxlJztcbn1cblxuZnVuY3Rpb24gdXZJbmRleERlc2NyaXB0aW9uKG51bSkge1xuICAvLyBleHBvc3VyZSBjYXRlZ29yaWVzIGZyb20gaHR0cHM6Ly93d3cuZXBhLmdvdi9lbnZpcm8vdXYtaW5kZXgtZGVzY3JpcHRpb25cblxuICBpZiAobnVtIDw9IDIpIHJldHVybiAnTG93JztcbiAgaWYgKG51bSA8PSA1KSByZXR1cm4gJ01vZGVyYXRlJztcbiAgaWYgKG51bSA8PSA3KSByZXR1cm4gJ0hpZ2gnO1xuICBpZiAobnVtIDw9IDEwKSByZXR1cm4gJ1ZlcnkgSGlnaCc7XG4gIHJldHVybiAnRXh0cmVtZSc7XG59XG5cbmZ1bmN0aW9uIHZpc2libGl0eURlc2NyaXB0aW9uKG51bSkge1xuICAvLyB2aXNpYmxpdHkgY2F0ZWdvcmllcyBmcm9tIGh0dHBzOi8vd3d3LnN0YXIubmVzZGlzLm5vYWEuZ292L3BvcnRmb2xpby9kZXRhaWxfVmlzaWJpbGl0eS5waHAjOn46dGV4dD1Gb2clMjBkcm9wbGV0cyUyMGFuZCUyMGhhemUlMjBwYXJ0aWNsZXMsViUyMCUzQyUyMDIlMjBrbSklMjB2aXNpYmlsaXRpZXMuXG5cbiAgaWYgKG51bSA8PSAyKSByZXR1cm4gJ1Zpc2liaWxpdHkgaXMgcG9vci4nO1xuICBpZiAobnVtIDw9IDEwKSByZXR1cm4gJ1Zpc2liaWxpdHkgaXMgbG93Lic7XG4gIGlmIChudW0gPD0gMzApIHJldHVybiAnVmlzaWJpbGl0eSBpcyBtb2RlcmF0ZS4nO1xuICByZXR1cm4gJ1Zpc2liaWxpdHkgaXMgY2xlYXIuJztcbn1cblxuZnVuY3Rpb24gaHVtaWRpdHlEZXNjcmlwdGlvbihudW0pIHtcbiAgaWYgKG51bSA8IDMwKSByZXR1cm4gJ0l0IHNob3VsZCBiZSBkcnkgYW5kIGNvbWZvcnRhYmxlIG91dHNpZGUuJztcbiAgaWYgKG51bSA8IDYwKSByZXR1cm4gJ0l0IHNob3VsZCBiZSBtb2RlcmF0ZWx5IGNvbWZvcnRhYmxlIG91dHNpZGUuJztcbiAgcmV0dXJuICdJdCBtaWdodCBiZSBodW1pZCBhbmQgdW5jb21mb3J0YWJsZSBvdXRzaWRlLic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10aW1lJyk7XG4gIGN1cnJlbnRUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0VGltZShkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG4gIGNpdHkudGV4dENvbnRlbnQgPSBgJHtnZXRDaXR5VGl0bGUoZGF0YS5sb2NhdGlvbil9YDtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWljb24nKTtcbiAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XG5cbiAgY29uc3QgdGVtcFVuaXQgPSBnZXRUZW1wZXJhdHVyZVVuaXQoKTtcbiAgbGV0IHRlbXBEYXRhO1xuICBsZXQgZmVlbHNsaWtlRGF0YTtcbiAgaWYgKHRlbXBVbml0ID09PSAnQycpIHtcbiAgICB0ZW1wRGF0YSA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gICAgZmVlbHNsaWtlRGF0YSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgfSBlbHNlIHtcbiAgICB0ZW1wRGF0YSA9IGRhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgZmVlbHNsaWtlRGF0YSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgfVxuXG4gIGNvbnN0IGRpc3RhbmNlVW5pdCA9IGdldERpc3RhbmNlVW5pdCgpO1xuICBsZXQgdmlzaWJpbGl0eURhdGE7XG4gIGxldCB3aW5kRGF0YTtcbiAgbGV0IGd1c3REYXRhO1xuICBjb25zdCBzcGVlZFVuaXQgPSBnZXRTcGVlZFVuaXQoKTtcbiAgaWYgKGRpc3RhbmNlVW5pdCA9PT0gJ2ttJykge1xuICAgIHZpc2liaWxpdHlEYXRhID0gZGF0YS5jdXJyZW50LnZpc19rbTtcbiAgICB3aW5kRGF0YSA9IGRhdGEuY3VycmVudC53aW5kX2twaDtcbiAgICBndXN0RGF0YSA9IGRhdGEuY3VycmVudC5ndXN0X2twaDtcbiAgfSBlbHNlIHtcbiAgICB2aXNpYmlsaXR5RGF0YSA9IGRhdGEuY3VycmVudC52aXNfbWlsZXM7XG4gICAgd2luZERhdGEgPSBkYXRhLmN1cnJlbnQud2luZF9tcGg7XG4gICAgZ3VzdERhdGEgPSBkYXRhLmN1cnJlbnQuZ3VzdF9tcGg7XG4gIH1cblxuICBjb25zdCBtZWFzdXJlbWVudFVuaXQgPSBnZXRNZWFzdXJlbWVudFVuaXQoKTtcbiAgbGV0IHByZWNpcGl0YXRpb25EYXRhO1xuICBpZiAobWVhc3VyZW1lbnRVbml0ID09PSAnbW0nKSBwcmVjaXBpdGF0aW9uRGF0YSA9IGRhdGEuY3VycmVudC5wcmVjaXBfbW07XG4gIGVsc2UgcHJlY2lwaXRhdGlvbkRhdGEgPSBkYXRhLmN1cnJlbnQucHJlY2lwX2luO1xuXG4gIHVwZGF0ZVdlYXRoZXJEYXRhUG9pbnQoe1xuICAgIGRhdGFQb2ludDogJ2NvbmRpdGlvbicsXG4gICAgY29uZGl0aW9uQ29kZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxuICAgIHRleHQ6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dC50cmltKCksXG4gICAgbm90ZXM6IGBDbG91ZCBjb3ZlciBpcyAke2RhdGEuY3VycmVudC5jbG91ZH0lLmAsXG4gIH0pO1xuXG4gIHVwZGF0ZVdlYXRoZXJEYXRhUG9pbnQoe1xuICAgIGRhdGFQb2ludDogJ3RlbXBlcmF0dXJlJyxcbiAgICB0ZXh0OiBgJHt0ZW1wRGF0YX3CsCR7dGVtcFVuaXR9YCxcbiAgICBub3RlczogYEl0IGZlZWxzIGxpa2UgJHtmZWVsc2xpa2VEYXRhfcKwJHt0ZW1wVW5pdH0uYCxcbiAgfSk7XG5cbiAgdXBkYXRlV2VhdGhlckRhdGFQb2ludCh7XG4gICAgZGF0YVBvaW50OiAncHJlY2lwaXRhdGlvbicsXG4gICAgdGV4dDogYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWAsXG4gICAgbm90ZXM6IGBFeHBlY3QgJHtwcmVjaXBpdGF0aW9uRGF0YX0gJHttZWFzdXJlbWVudFVuaXR9IG9mIHByZWNpcGl0YXRpb24gdG9kYXkuYCxcbiAgfSk7XG5cbiAgdXBkYXRlV2VhdGhlckRhdGFQb2ludCh7XG4gICAgZGF0YVBvaW50OiAnaHVtaWRpdHknLFxuICAgIHRleHQ6IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYCxcbiAgICBub3RlczogaHVtaWRpdHlEZXNjcmlwdGlvbihkYXRhLmN1cnJlbnQuaHVtaWRpdHkpLFxuICB9KTtcblxuICB1cGRhdGVXZWF0aGVyRGF0YVBvaW50KHtcbiAgICBkYXRhUG9pbnQ6ICd2aXNpYmlsaXR5JyxcbiAgICB0ZXh0OiBgJHt2aXNpYmlsaXR5RGF0YX0gJHtkaXN0YW5jZVVuaXR9YCxcbiAgICBub3RlczogdmlzaWJsaXR5RGVzY3JpcHRpb24oZGF0YS5jdXJyZW50LnZpc19rbSksXG4gIH0pO1xuXG4gIHVwZGF0ZVdlYXRoZXJEYXRhUG9pbnQoe1xuICAgIGRhdGFQb2ludDogJ2Fpci1xdWFsaXR5JyxcbiAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuYWlyX3F1YWxpdHlbJ3VzLWVwYS1pbmRleCddLFxuICAgIG5vdGVzOiBhcWlEZXNjcmlwdGlvbihkYXRhLmN1cnJlbnQuYWlyX3F1YWxpdHlbJ3VzLWVwYS1pbmRleCddKSxcbiAgfSk7XG5cbiAgdXBkYXRlV2VhdGhlckRhdGFQb2ludCh7XG4gICAgZGF0YVBvaW50OiAndXYtaW5kZXgnLFxuICAgIHRleHQ6IGRhdGEuY3VycmVudC51dixcbiAgICBub3RlczogdXZJbmRleERlc2NyaXB0aW9uKGRhdGEuY3VycmVudC51diksXG4gIH0pO1xuXG4gIHVwZGF0ZVdlYXRoZXJEYXRhUG9pbnQoe1xuICAgIGRhdGFQb2ludDogJ3dpbmQnLFxuICAgIHRleHQ6IGAke3dpbmREYXRhfSAke3NwZWVkVW5pdH0gJHtkYXRhLmN1cnJlbnQud2luZF9kaXJ9YCxcbiAgICBub3RlczogYEd1c3RzIG9mIHdpbmQgdXAgdG8gJHtndXN0RGF0YX0gJHtzcGVlZFVuaXR9IHRvZGF5LmAsXG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGZldGNoV2VhdGhlckRhdGEsIHsgREFZUyB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlci1kYXRhJztcbmltcG9ydCBnZW5lcmF0ZURhaWx5Rm9yZWNhc3RMaXN0IGZyb20gJy4vZ2VuZXJhdGUtZGFpbHktZm9yZWNhc3QtbGlzdCc7XG5pbXBvcnQgZ2VuZXJhdGVIb3VybHlGb3JlY2FzdExpc3QgZnJvbSAnLi9nZW5lcmF0ZS1ob3VybHktZm9yZWNhc3QtbGlzdCc7XG5pbXBvcnQgZ2VuZXJhdGVXZWF0aGVyTGlzdCBmcm9tICcuL2dlbmVyYXRlLXdlYXRoZXItbGlzdCc7XG5pbXBvcnQgZ2V0TGFzdExvY2F0aW9uIGZyb20gJy4vZ2V0LWxhc3QtbG9jYXRpb24nO1xuaW1wb3J0IHNldHVwU2Nyb2xsQnV0dG9ucyBmcm9tICcuL3Njcm9sbC1idXR0b25zJztcbmltcG9ydCBzY3JvbGxUb0N1cnJlbnRIb3VyIGZyb20gJy4vc2Nyb2xsLXRvLWN1cnJlbnQtaG91cic7XG5pbXBvcnQgdXBkYXRlRGFpbHlGb3JlY2FzdERhdGEgZnJvbSAnLi91cGRhdGUtZGFpbHktZm9yZWNhc3QtZGF0YSc7XG5pbXBvcnQgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhIGZyb20gJy4vdXBkYXRlLWhvdXJseS1mb3JlY2FzdC1kYXRhJztcbmltcG9ydCB1cGRhdGVXZWF0aGVyRGF0YSBmcm9tICcuL3VwZGF0ZS13ZWF0aGVyLWRhdGEnO1xuXG5pbXBvcnQgJy4vbG9jYXRpb24tYnRuJztcbmltcG9ydCAnLi9zYXZlLXNldHRpbmdzJztcbmltcG9ydCAnLi9zY3JvbGwtdG8tYmVnaW5uaW5nJztcbmltcG9ydCAnLi9zY3JvbGwtdG8tZW5kJztcbmltcG9ydCAnLi9zZWFyY2gtZm9ybSc7XG5pbXBvcnQgJy4vc2VhcmNoLWtleWJvYXJkLXNob3J0Y3V0cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXInKTtcbiAgY29uc3Qgd2VhdGhlckxpc3QgPSBnZW5lcmF0ZVdlYXRoZXJMaXN0KCk7XG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckxpc3QpO1xuXG4gIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5LWZvcmVjYXN0Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgREFZUzsgaSsrKSB7XG4gICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gZ2VuZXJhdGVEYWlseUZvcmVjYXN0TGlzdChpKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdExpc3QpO1xuICB9XG5cbiAgY29uc3QgaG91cmx5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseS1mb3JlY2FzdCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBjb25zdCBob3VybHlMaXN0ID0gZ2VuZXJhdGVIb3VybHlGb3JlY2FzdExpc3QoaSk7XG4gICAgaG91cmx5Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUxpc3QpO1xuICB9XG5cbiAgY29uc3QgbGFzdExvY2F0aW9uID0gZ2V0TGFzdExvY2F0aW9uKCk7XG4gIGZldGNoV2VhdGhlckRhdGEobGFzdExvY2F0aW9uKS50aGVuKChkYXRhKSA9PiB7XG4gICAgdXBkYXRlV2VhdGhlckRhdGEoZGF0YSk7XG4gICAgdXBkYXRlRGFpbHlGb3JlY2FzdERhdGEoZGF0YSk7XG4gICAgdXBkYXRlSG91cmx5Rm9yZWNhc3REYXRhKGRhdGEpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBzY3JvbGxUb0N1cnJlbnRIb3VyKGRhdGEpLCA1MDApO1xuICB9KTtcbiAgc2V0dXBTY3JvbGxCdXR0b25zKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9