import { ISavedLink } from '../../../models';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
  links: ISavedLink[] = [];
  linkSaved = ({ detail }: CustomEventInit) => {
    const { link } = detail;
    this.links.unshift({
      link,
    });
    this.render();
    this.saveLink(link);
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
  saveLink = async (link) => {
    const saveLink = firebase.functions().httpsCallable('saveLink');
    const { data }: { data: ISavedLink } = await saveLink({ link });
    this.links = [
      ...this.links.map((l) => {
        if (l.link === link) {
          return data;
        }
        return l;
      }),
    ];
    this.render();
  };
}
