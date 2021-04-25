import { ISavedLink, IUser } from '../../../models';
import { LinksApiService } from '../../services/links-api.service';
import { hideLoader, showLoader } from '../../services/loader.service';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
import * as fuzzy from 'fuzzy';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
  links: ISavedLink[] = [];
  orignal: ISavedLink[] = [];
  _loggedInUser: IUser = null;
  set loggedInUser(user: IUser) {
    this._loggedInUser = user;
    this.render();
  }
  get loggedInUser() {
    return this._loggedInUser;
  }
  linksApiService = LinksApiService.getInstance();
  linkSaved = ({ detail }: CustomEventInit) => {
    const { url } = detail;
    const timestamp = Date.now();
    this.links.unshift({
      url,
      timestamp,
    });
    this.renderLinks(this.links);
    this.saveLink({ link: url, timestamp });
  };
  openSaveLinkDialog = () => {
    window.location.hash = 'save-link';
  };
  searchInput = ({ target }) => {
    const query = target.value;
    this.filterLinks(query);
  };

  filterLinks = (query: string) => {
    if (query) {
      const result = fuzzy.filter(query, this.links, {
        extract: (item: ISavedLink) => JSON.stringify(item),
      });
      this.renderLinks(
        result.map((r) => r.original),
        false
      );
    } else {
      this.renderLinks();
    }
  };

  async connectedCallback() {
    super.connectedCallback();
    showLoader();
    const data = await this.linksApiService.getAllLinks(this.loggedInUser.email);
    hideLoader();
    this.renderLinks(data);
  }
  saveLink = async ({ link, timestamp }) => {
    const data: ISavedLink = await this.linksApiService.saveLink({
      link,
      timestamp,
      email: this.loggedInUser.email,
    });
    this.renderLinks(
      this.links.map((l) => {
        if (l.url === link) {
          return data;
        }
        return l;
      })
    );
  };

  renderLinks(links = this.orignal, replaceOriginal = true) {
    this.links = links;
    if (replaceOriginal) {
      this.orignal = [...this.links];
    }
    this.render();
  }

  deleteLinkItem = async ({ detail }: CustomEventInit) => {
    const link = detail?.link;
    this.renderLinks(this.links.filter((l) => l.link !== link));
    await this.linksApiService.deleteLink(link, this.loggedInUser.email);
  };
}
