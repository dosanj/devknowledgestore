import { createComponentInstanceFromType } from '../utilities/components-registry.js';
import { BaseComponent } from './base/base.comp.js';

export class RootComponent extends BaseComponent {
  template = `<div data-component="navbar"></div>
                    <h1>Hello from Main</h1>`;
}
