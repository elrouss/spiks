(function (window) {
  if (!window.app) {
    window.app = {};
  }

  class Products {
    constructor(root) {
      this.root = root;

      this.filtersAccordion = this.root?.querySelector(
        '.products__filters-accordion'
      );
      this.badgesContainer = this.root?.querySelector(
        '.products__badges-container'
      );
      this.badgeTemplate = this.root?.querySelector(
        '.products__template-badge'
      );

      this.filtersAccordion?.addEventListener('change', this.getFilterValue);
      this.badgesContainer?.addEventListener('click', this.removeBadge);

      this.init();
    }

    init = () => {
      this.filtersAccordion
        ?.querySelectorAll('.checkbox')
        .forEach((checkbox) => {
          const input = checkbox.querySelector('.checkbox__input');

          if (input.checked) {
            this.addBadge(
              input.id,
              checkbox.querySelector('.checkbox__text').textContent
            );
          }
        });
    };

    getFilterValue = (e) => {
      const filter = e.target.closest('.checkbox');
      if (!filter) return;

      const input = filter.querySelector('.checkbox__input');
      const id = input.id;
      const name = filter.querySelector('.checkbox__text').textContent;

      input.checked ? this.addBadge(id, name) : this.removeBadge(e, id);
    };

    addBadge = (id, name) => {
      const badge = this.badgeTemplate.content.cloneNode(true);

      badge.querySelector('.products__badges-item').setAttribute('data-id', id);
      badge.querySelector('.badge__text').textContent = name;

      this.badgesContainer.append(badge);
    };

    removeBadge = (e, id) => {
      let badge = e.target.closest('.products__badges-item');

      if (!badge) {
        badge = this.badgesContainer.querySelector(`[data-id="${id}"]`);
      }

      if (!badge) return;

      document.getElementById(badge.dataset.id).checked = false;
      badge.remove();
    };

    destroy = () => {
      this.filtersAccordion?.removeEventListener('change', this.getFilterValue);
      this.badgesContainer?.removeEventListener('click', this.removeBadge);
    };
  }

  window.app.products = new Products(document.querySelector('.products'));
})(window);
