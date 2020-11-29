import { html } from 'lit-html';

export default ({ loggedInUser }) => html`<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-start">
    <a class="navbar-app-name" href="/"> Link Store </a>
  </div>
  <div class="navbar-end">${loggedInUser ? html`Hello, ${loggedInUser.displayName}` : ''}</div>
</nav>`;
