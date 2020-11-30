import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './landing-page-template.html';

@customElement('app-landing-page')
export class LandingPageComponent extends BaseComponent {
  template = htmlTemplate;

  setLoggedInUser = (loggedInUser) => {
    this.dispatchCustomEvent('setLoggedInUser', {
      loggedInUser,
    });
  };
  async connectedCallback() {
    firebase.auth().onAuthStateChanged((user) => {
      //Login Listener
      if (user) {
        this.setLoggedInUser(user);
        // User is signed in.
      } else {
        super.connectedCallback();
        // No user is signed in.
      }
    });
  }
}
