import { html } from 'lit-html';

export default (props) => html`<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-start">
    <a class="navbar-app-name" href="/"> Link Store </a>
  </div>

  <div class="navbar-end">
    <button class="btn btn--primary" @click="${props.login}">Login</button>
  </div>
</nav>`;
