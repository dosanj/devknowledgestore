import { BaseComponent } from '../base.comp.js';

export class NavbarComponent extends BaseComponent {
  templatePath = 'js/components/navbar/navbar.template.html';
  constructor() {
    super();
  }
  postRender() {
    this.setupLogin();
  }
  setupLogin() {
    const loginButton = this.element.querySelector('#signup-button');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        loginButton.style.background = 'red';
      });
    }
  }
}
