import { html } from 'lit-html';

export default ({ setLoggedInUser, loggedInUser, resetOrLogOut }) => html`<div class="root-wrapper flex flex-column">
  <app-navbar .loggedInUser=${loggedInUser}></app-navbar>
  ${loggedInUser
    ? html`<app-home-page></app-home-page>`
    : html`<app-landing-page
        class="flex-1"
        @setLoggedInUser=${setLoggedInUser}
        @resetOrLogOut=${resetOrLogOut}
      ></app-landing-page>`}
</div>`;
