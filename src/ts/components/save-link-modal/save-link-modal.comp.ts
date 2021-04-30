import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './save-link-modal-template.html';
@customElement('app-save-link-modal')
export class SaveLinkModalComponent extends BaseComponent {
  template = htmlTemplate;
  link: string = null;
  disableSaveButton = true;
  displayError: string = null;
  linkInput = ({ target }) => {
    this.link = target.value;
    this.checkSaveButtonStatus();
  };
  saveLink = () => {
    const isValid = this.validateUrl(this.link);
    if (this.link && isValid) {
      this.dispatchCustomEvent('savedLink', { url: this.link });
      this.closeDialog();
    } else {
      this.displayError = 'Please Enter Valid Url';
      this.render();
    }
  };
  closeDialog = () => {
    this.link = '';
    this.disableSaveButton = true;
    this.displayError = null;
    this.render();
    window.location.hash = '';
  };
  checkSaveButtonStatus = () => {
    if (this.link && this.disableSaveButton) {
      this.disableSaveButton = false;
      this.render();
    } else if (!this.link && !this.disableSaveButton) {
      this.disableSaveButton = true;
      this.render();
    }
  };
  validateUrl = (str) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  };
}
