import { BaseComponent } from '../base.comp';
import htmlTemplate from './root-template.html';

export class RootComponent extends BaseComponent {
  template = htmlTemplate;
  props = {
    login: this.loginHandler.bind(this),
    userLoggedIn: false,
  };
  loginHandler($event) {
    this.props.userLoggedIn = true;
    this.render();
  }
}
