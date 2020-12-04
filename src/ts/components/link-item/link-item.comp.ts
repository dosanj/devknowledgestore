import { ISavedLink } from '../../../models';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './link-item-template.html';

@customElement('app-link-item')
export class LinkItemComponent extends BaseComponent {
  template = htmlTemplate;
  showActionsPopup = false;
  private _linkItem: ISavedLink = null;
  set linkItem(value: ISavedLink) {
    this._linkItem = value;
    this.render();
  }
  get linkItem() {
    return this._linkItem;
  }

  toggleActionsPopup = () => {
    this.showActionsPopup = !this.showActionsPopup;
    this.render();
  };
  deleteLinkItem = () => {
    this.dispatchCustomEvent('deleteLinkItem', { link: this.linkItem.link });
    this.toggleActionsPopup();
  };
}
