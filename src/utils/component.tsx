import { h, create, diff, patch, VNode } from 'virtual-dom';

class Component {
  el: HTMLElement;
  state: any;
  currentState: any;
  render: () => VNode;
  $rendered: VNode;
  constructor($el: HTMLElement, state: any) {
    this.el = $el;
    this.state = state;
    this.$rendered = this.render();
  }
  public setState(newState) {
    const newRendered = this.render();
    this.state = { ...this.state, newState };

    const newTree = diff(this.$rendered, newRendered);
    patch(this.el, newTree);
    this.$rendered = newRendered;
  }
}
