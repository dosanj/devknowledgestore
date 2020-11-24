export class BaseComponent extends HTMLElement {
  template = ``;
  element = null;
  rendered = false;
  setProps() {}
  async postRender() {}
  async render() {
    this.innerHTML = await this.template;
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
