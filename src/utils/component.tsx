import { h, create, diff, patch, VNode } from 'virtual-dom';

class Component<S> {
  el: HTMLElement | Element;
  state: S;
  _state: S;
  currentState: any;
  $rendered: VNode;
  constructor($el: HTMLElement) {

    this.el = $el;
    this.el.id = $el.id;
    setTimeout(() => {
      this.$rendered = this.render();
      this.el = create(this.$rendered);
      this._state = this.state;
      $el.parentNode.replaceChild(this.el, $el);
    }, 0);
  }
  setState(newState: S) {
    this._state = Object.assign(this._state, newState);

    const newRendered = this.render();

    const newTree = diff(this.$rendered, newRendered);
    patch(this.el, newTree);
    this.$rendered = newRendered;
  }

  render(): VNode | null {
    return null;
  }

}

export default Component;
