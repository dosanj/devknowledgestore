import { render, TemplateResult, html } from 'lit-html';

export class BaseComponent extends HTMLElement {
  template: (...args) => TemplateResult;
  rendered = false;
  async render() {
    if (this.template) {
      render(this.template(this), this);
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

  dispatchCustomEvent(eventName, eventObject = null) {
    this.dispatchEvent(new CustomEvent(eventName, { detail: eventObject }));
  }
}
