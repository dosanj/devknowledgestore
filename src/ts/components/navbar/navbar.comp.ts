import { IUser } from '../../models/user';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './navbar-template.html';
@customElement('app-navbar')
export class NavbarComponent extends BaseComponent {
  template = htmlTemplate;
  _loggedInUser: IUser = null;
  set loggedInUser(user: IUser) {
    this._loggedInUser = user;
    this.render();
  }
  get loggedInUser() {
    return this._loggedInUser;
  }
}
