import { ContainerComponent } from '../components/container/container.comp';
import { NavbarComponent } from '../components/navbar/navbar.comp';
import { RootComponent } from '../components/root/root.comp';

const registery = {
  'app-navbar': NavbarComponent,
  'app-container': ContainerComponent,
  'app-root': RootComponent,
};

for (const key in registery) {
  if (key) {
    customElements.define(key, registery[key]);
  }
}
export function createComponentInstanceFromType(type) {
  // check if component is already registered
  if (type && registery[type]) {
    return new registery[type]();
  }
}
