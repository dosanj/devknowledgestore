import { IUser } from '../../models/user';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './login-signup-wrapper-template.html';

@customElement('app-login-signup-wrapper')
export class LoginSignUpWrapper extends BaseComponent {
  template = htmlTemplate;
  user: IUser = null;
  loginClicked = ($event) => {};
  signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (result: any) => {
        this.user = firebase.auth().currentUser;
        this.dispatchCustomEvent('userLoggedIn', { user: this.user });
      })
      .catch(console.log);
  };
}
