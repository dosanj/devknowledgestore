import { render, TemplateResult } from "lit-html";

export class BaseComponent extends HTMLElement {
  template = ``;
  element = null;
  props = {};
  rendered = false;
  litTemplate: (...args) => TemplateResult;
  async postRender() {}
  async render() {
    if(this.litTemplate) {
      render(this.litTemplate(this.props), this);
    }
    else {
      this.innerHTML = await this.template;
    }
    this.postRender();
  }
  async connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}
