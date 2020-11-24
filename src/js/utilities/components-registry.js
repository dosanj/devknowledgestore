import { ContainerComponent } from '../components/container/container.comp.js';
import { NavbarComponent } from '../components/navbar/navbar.comp.js';

const registery = {
  navbar: NavbarComponent,
  'app-container': ContainerComponent,
};

export function registerComponent(type, component) {
  if (!type || !component) {
    return;
  }
  if (typeof type === 'string' && typeof component === 'function') {
    registery[type] = component;
  }
  return;
}
export function createComponentInstanceFromType(type) {
  // check if component is already registered
  if (type && registery[type]) {
    return new registery[type]();
  }
}
