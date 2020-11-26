import { render, TemplateResult, html } from 'lit-html';

export class BaseComponent extends HTMLElement {
  template: (...args) => TemplateResult;
  props = {};
  rendered = false;
  async render() {
    if (this.template) {
      render(this.template(this.props), this);
    }
  }
  async connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  async disconnectedCallback() {
    console.log('test');
  }

  dispatchCustomEvent(eventName) {
    this.dispatchEvent(new CustomEvent(eventName));
  }
}
