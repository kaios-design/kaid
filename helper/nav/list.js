class ListNav {
  constructor(selector, container) {
    this.selector = selector;
    this.container = container;

    this.container.addEventListener('keydown', this.onKeyDown);
    this.container.addEventListener('focus', this.onFocus);

    this.index = -1;
    this.currentItem = null;
    this.updateItems();
  }

  destroy() {
    this.container.removeEventListener('keydown', this.onKeyDown);
    this.container.removeEventListener('focus', this.onFocus);
  }

  updateItems = () => {
    const { container, selector } = this;
    this.items = Array.from(container.querySelectorAll(selector));
  }

  onKeyDown = (e) => {
    let next = null;
    switch (e.key) {
      case 'ArrowDown':
        next = this.find(1);
        break;

      case 'ArrowUp':
        next = this.find(-1);
        break;

      default:
        break;
    }
    this.setFocus(next);
  }

  onFocus = () => {
    if (this.currentItem) {
      // Set focus to current item if focused to list container
      // for example, back to list view from another panel
      if (document.activeElement === this.container) {
        this.setFocus(this.currentItem);
      }
    } else {
      // no current item, normally focus to 1st item.
      const next = this.find(1);
      this.setFocus(next);
    }
  }

  find = (step, el = document.activeElement) => {
    const { items } = this;
    if (!items.length) {
      return null;
    }

    let next = 0;
    items.some((dom, index) => {
      if (dom === el) {
        next = (items.length + index + step) % items.length;
        return true;
      }
      return false;
    });

    return items[next];
  }

  setFocus(el) {
    if (el) {
      this.currentItem = el;
      el.scrollIntoView(false);
      el.focus();
    }
  }

  getElementIndex = (el) => {
    const { items } = this;
    if (!items.length || !el) {
      return -1;
    }

    for (let i = 0; i < items.length; i++) {
      if (dom === element) {
        return i;
      }
    }
    return -1;
  }
}

export default ListNav;
