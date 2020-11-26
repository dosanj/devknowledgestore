import { BaseComponent } from '../base.comp';
import htmlTemplate from './navbar-template.html';
export class NavbarComponent extends BaseComponent {
  template = htmlTemplate;
  props = {
    //props is available to lit-html string
    appName: 'Test',
    login: this.login.bind(this),
  };
  login($event) {
    console.log(this.props, $event);
    this.dispatchCustomEvent('login');
  }
  async connectedCallback() {
    super.connectedCallback();
  }
  async disconnectedCallback() {
    super.disconnectedCallback();
    console.log(this);
  }
}
