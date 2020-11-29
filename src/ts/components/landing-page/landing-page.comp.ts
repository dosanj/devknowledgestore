import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './landing-page-template.html';

@customElement('app-landing-page')
export class LandingPageComponent extends BaseComponent {
  template = htmlTemplate;
  userLoggedIn = ({ detail }: CustomEventInit) => {
    this.setLoggedInUser(detail.user);
  };

  setLoggedInUser = (loggedInUser) => {
    this.dispatchCustomEvent('setLoggedInUser', {
      loggedInUser,
    });
  };
  async connectedCallback() {
    super.connectedCallback();
    //this.setLoggedInUser();
  }
}
