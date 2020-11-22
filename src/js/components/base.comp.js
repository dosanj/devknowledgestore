import { createComponentInstanceFromType } from '../utilities/components-registry.js';

export class BaseComponent {
  template = ``;
  templatePath = null;
  setProps() {}
  async postRender() {}
  async setTemplate() {
    if (this.templatePath) {
      this.template = await fetch(this.templatePath).then((response) => response.text());
    }
  }
  async render() {
    const renderingStageElement = document.createElement('div');
    renderingStageElement.innerHTML = this.template;
    const components = renderingStageElement.querySelectorAll('[data-component]');
    Array.from(components).forEach(async (comp) => {
      const component = createComponentInstanceFromType(comp.dataset.component);
      if (component) {
        // make sure component is valid
        component.setProps(comp.dataset);
        await component.setTemplate();
        comp.replaceWith(await component.render());
        await component.postRender();
      }
    });
    return renderingStageElement;
  }
}
