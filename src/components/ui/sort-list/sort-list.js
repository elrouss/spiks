(function (window) {
  if (!window.app) {
    window.app = {};
  }

  class SortList {
    constructor() {
      this.root = document.querySelector('.sort-list');

      this.btn = this.root.querySelector('.sort-list__btn');
      this.list = this.root.querySelector('.sort-list__list-wrapper');

      this.btn?.addEventListener('click', this.toggleList);
    }

    toggleList = () => {
      const visible = '_visible';

      if (!this.list) return;

      this.list.classList[
        this.list.classList.contains(visible) ? 'remove' : 'add'
      ](visible);
    };
  }

  window.app.sortList = new SortList();
})(window);
