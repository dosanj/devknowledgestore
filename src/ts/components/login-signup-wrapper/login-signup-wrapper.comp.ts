import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './login-signup-wrapper-template.html';

@customElement('app-login-signup-wrapper')
export class LoginSignUpWrapper extends BaseComponent {
  template = htmlTemplate;
  loginClicked = ($event) => {
    this.dispatchCustomEvent('loginClicked', { random: 'test' });
  };
}
