import { registerComponent } from '../../utilities/components-registry.js';
import { BaseComponent } from '../base.comp.js';

export class NavbarComponent extends BaseComponent {
  templatePath = 'js/components/navbar/navbar.template.html';
  constructor() {
    super();
  }
  postRender() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
    this.setupLogin();
  }
  setupLogin() {
    const loginButton = document.querySelector('#signup-button');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        loginButton.style.background = 'red';
      });
    }
  }
}
