import { ISavedLink } from '../../../models';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './link-item-template.html';

@customElement('app-link-item')
export class LinkItemComponent extends BaseComponent {
  template = htmlTemplate;
  private _linkItem: ISavedLink = null;
  set linkItem(value: ISavedLink) {
    this._linkItem = value;
    console.log(value);
    this.render();
  }
  get linkItem() {
    return this._linkItem;
  }
}
