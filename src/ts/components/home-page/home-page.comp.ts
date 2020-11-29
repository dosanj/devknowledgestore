import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
  links: { link: string; email: string; uid: string }[] = [];
  linkSaved = async ({ detail }: CustomEventInit) => {
    const { link } = detail;
    const saveLink = firebase.functions().httpsCallable('saveLink');
    const { data } = await saveLink({ link });
    this.links.unshift(data);
    this.render();
  };
  openSaveLinkDialog = () => {
    window.location.hash = 'save-link';
  };
  async connectedCallback() {
    super.connectedCallback();
    const { data } = await firebase.functions().httpsCallable('getAllLinks')();
    this.links = data;
    this.render();
  }
}
