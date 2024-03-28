(function (window) {
  if (!window.app) {
    window.app = {};
  }

  class RangeBar {
    constructor(root) {
      this.root = root;

      this.bar = this.root.querySelector('.range-bar__content');
      this.scales = this.bar.querySelectorAll('.range-bar__label');

      this.bar.addEventListener('change', this.handleScales);
    }

    handleScales = (e) => {
      const item = e.target.closest('.range-bar__content-item');
      if (!item) return;

      const activeIndex = item.querySelector('.range-bar__input').value;

      this.scales.forEach((scale, i) => {
        const mask = scale.querySelector('.range-bar__off-mask');

        mask.classList[i <= +activeIndex ? 'remove' : 'add'](
          'range-bar__off-mask_hidden'
        );
      });
    };

    destroy = () => {
      this.bar.removeEventListener('change', this.handleScales);
    };
  }

  window.app.rangeBar = {
    init: () => {
      document.querySelectorAll('.range-bar').forEach((bar) => {
        new RangeBar(bar);
      });
    },
  };

  window.app.rangeBar.init();
})(window);
