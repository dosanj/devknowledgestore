import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './root-template.html';

@customElement('app-root')
export class RootComponent extends BaseComponent {
  template = htmlTemplate;
  showLoginDialog($event) {
    this.render();
  }
}
