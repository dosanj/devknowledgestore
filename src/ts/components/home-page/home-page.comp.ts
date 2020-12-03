import { deleteLink } from '../../../../functions/src';
import { ISavedLink } from '../../../models';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
  links: ISavedLink[] = [];
  linkSaved = ({ detail }: CustomEventInit) => {
    const { url } = detail;
    this.links.unshift({
      url,
    });
    this.render();
    this.saveLink(url);
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
        if (l.url === link) {
          return data;
        }
        return l;
      }),
    ];
    this.render();
  };

  deleteLinkItem = async ({ detail }: CustomEventInit) => {
    const link = detail?.link;
    this.links = this.links.filter((l) => l.link !== link);
    this.render();
    const deleteLink = firebase.functions().httpsCallable('deleteLink');
    await deleteLink({ link });
  };
}
