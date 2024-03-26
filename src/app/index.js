// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js

// =require ../components/blocks/filters-accordion/filters-accordion.js

// =require ../components/ui/range-slider/range-slider.js
// =require ../components/ui/sort-list/sort-list.js

window.app.rangeSlider.init([
  { handlesNum: 1, start: 65, valueSymbol: '\u0025', hasInputs: true },
  {
    handlesNum: 2,
    start: 234,
    end: 9999,
    range: { min: 234, max: 9999 },
    valueSymbol: '\u0024',
    hasInputs: true,
  },
]);
