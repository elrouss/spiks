(function (window) {
  if (!window.app) {
    window.app = {};
  }

  class FiltersAccordion {
    constructor(root) {
      this.root = root;

      this.root.addEventListener('click', this.toggleTab);
      this.root.addEventListener('keydown', this.toggleTab);
    }

    toggleTab = (e) => {
      const heading = e.target.closest('.filters-accordion__heading-wrapper');
      if (!heading || (e instanceof KeyboardEvent && e.code !== 'Enter'))
        return;

      const group = e.target.closest('.filters-accordion__group');
      group.classList[
        group.classList.contains('filters-accordion__group_active')
          ? 'remove'
          : 'add'
      ]('filters-accordion__group_active');
    };

    destroy = () => {
      this.root.removeEventListener('click', this.toggleTab);
      this.root.removeEventListener('keydown', this.toggleTab);
    };
  }

  window.app.filtersAccordion = {
    init: () => {
      document.querySelectorAll('.filters-accordion').forEach((accordion) => {
        new FiltersAccordion(accordion);
      });
    },
  };

  window.app.filtersAccordion.init();
})(window);
