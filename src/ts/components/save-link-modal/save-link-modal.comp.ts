import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './save-link-modal-template.html';
@customElement('app-save-link-modal')
export class SaveLinkModalComponent extends BaseComponent {
  template = htmlTemplate;
}
