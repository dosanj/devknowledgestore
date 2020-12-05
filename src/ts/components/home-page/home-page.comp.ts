import { ISavedLink } from '../../../models';
import { LinksApiService } from '../../services/links-api.service';
import { hideLoader, showLoader } from '../../services/loader.service';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
  links: ISavedLink[] = [];
  linksApiService = LinksApiService.getInstance();
  linkSaved = ({ detail }: CustomEventInit) => {
    const { url } = detail;
    const timestamp = Date.now();
    this.links.unshift({
      url,
      timestamp,
    });
    this.render();
    this.saveLink({ link: url, timestamp });
  };
  openSaveLinkDialog = () => {
    window.location.hash = 'save-link';
  };
  async connectedCallback() {
    super.connectedCallback();
    showLoader();
    const { data } = await this.linksApiService.getAllLinks();
    this.links = data;
    hideLoader();
    this.render();
  }
  saveLink = async ({ link, timestamp }) => {
    const { data }: { data: ISavedLink } = await this.linksApiService.saveLink({ link, timestamp });
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
    await this.linksApiService.deleteLink(link);
  };
}
