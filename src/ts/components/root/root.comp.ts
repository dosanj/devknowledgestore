import { IUser } from '../../models/user';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './root-template.html';

@customElement('app-root')
export class RootComponent extends BaseComponent {
  template = htmlTemplate;
  loggedInUser: IUser = null;
  setLoggedInUser = ($event: CustomEventInit) => {
    this.loggedInUser = $event.detail.loggedInUser;
    console.log(this.loggedInUser);
    this.render();
  };
}
