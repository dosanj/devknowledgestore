import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './landing-page-template.html';

@customElement('app-landing-page')
export class LandingPageComponent extends BaseComponent {
  template = htmlTemplate;
  loginClicked = (event: CustomEventInit) => {
    this.setLoggedInUser();
  };

  setLoggedInUser = () => {
    this.dispatchCustomEvent('setLoggedInUser', {
      loggedInUser: { email: 'javeddosani2011@gmail.com', name: 'Javed Dosani' },
    });
  };
  async connectedCallback() {
    super.connectedCallback();
    //this.setLoggedInUser();
  }
}
