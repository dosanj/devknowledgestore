import { createComponentInstanceFromType } from '../../utilities/components-registry.js';

export class BaseComponent {
  template = ``;
  setProps() {}
  render() {
    const renderingStageElement = document.createElement('div');
    renderingStageElement.innerHTML = this.template;
    const components = renderingStageElement.querySelectorAll('[data-component]');
    Array.from(components).forEach((comp) => {
      const component = createComponentInstanceFromType(comp.dataset.component);
      if (component) {
        // make sure component is valid
        component.setProps(comp.dataset);
        comp.replaceWith(component.render());
      }
    });
    return renderingStageElement;
  }
}
