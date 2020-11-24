import { createComponentInstanceFromType } from '../utilities/components-registry.js';

export class BaseComponent {
  template = ``;
  templatePath = null;
  element = null;
  setProps() {}
  async postRender() {}
  async setTemplate() {
    if (this.templatePath) {
      this.template = await fetch(this.templatePath).then((response) => response.text());
    }
  }
  async render(componentName = 'custom-component', id) {
    const renderingStageElement = document.createElement(componentName);
    renderingStageElement.id = id || componentName;
    renderingStageElement.innerHTML = this.template;
    const components = renderingStageElement.querySelectorAll('[data-component]');
    Array.from(components).forEach(async (comp) => {
      const component = createComponentInstanceFromType(comp.dataset.component);
      if (component) {
        // make sure component is valid
        component.setProps(comp.dataset);
        await component.setTemplate();
        comp.replaceWith(await component.render(comp.dataset.component, comp.id));
      }
    });
    this.element = renderingStageElement;
    this.postRender();
    return renderingStageElement;
  }
}
