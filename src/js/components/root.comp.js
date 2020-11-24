import { BaseComponent } from './base.comp.js';

export class RootComponent extends BaseComponent {
  template = `<div class="root-wrapper">
    <div data-component="navbar" id="navbar-1"></div>
    <div data-component="app-container" id="container-root"></div>
  </div>`;
}
