import { BaseComponent } from '../base.comp';
import htmlTemplate from './navbar.template.html.js';


export class NavbarComponent extends BaseComponent {
  props = {
    appName: 'Test'
  }
  constructor() {
    super();
    this.litTemplate = htmlTemplate;
  }
  async postRender() {
  }
}
