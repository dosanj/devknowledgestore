import { BaseComponent } from '../base.comp';
import htmlTemplate from './navbar.template.html';


export class NavbarComponent extends BaseComponent {
  template = htmlTemplate;
  constructor() {
    super();
  }
  async postRender() {
  }
}
