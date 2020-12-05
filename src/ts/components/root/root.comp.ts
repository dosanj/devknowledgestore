import { IUser } from '../../../models';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './root-template.html';

@customElement('app-root')
export class RootComponent extends BaseComponent {
  template = htmlTemplate;
  loggedInUser: IUser = null;
  toggleLoggedInUser = (user) => {
    this.loggedInUser = user;
    this.render();
  };
  async connectedCallback() {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        // Listen to User authentication
        //Login Listener
        if (user) {
          this.toggleLoggedInUser(user);
          // User is signed in.
        } else {
          this.toggleLoggedInUser(null);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
