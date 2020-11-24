import { BaseComponent } from '../base.comp';
import htmlTemplate from './navbar.template.html';


export class NavbarComponent extends BaseComponent {
  template = htmlTemplate;
  constructor() {
    super();
  }
  async postRender() {
    this.setupLogin();
    this.setupToggleBar();
  }
  setupLogin() {
    const loginButton: HTMLElement = this.querySelector('#signup-button');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        loginButton.style.background = 'red';
      });
    }
  }
  setupToggleBar() {
    const toggleSidebar: HTMLElement = this.querySelector('#toggle-sidebar-btn');
    if (toggleSidebar) {
      toggleSidebar.addEventListener('click', function () {
        toggleSidebar.style.background = 'blue';
        this.dispatchEvent(
          new CustomEvent('sidebar-clicked', {
            bubbles: true,
          })
        );
      });
    }
  }
  toggleSidebar() {}
}
