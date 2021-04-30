import { html } from 'lit-html';

export default ({ setLoggedInUser, loggedInUser, resetOrLogOut }) => html`<div class="root-wrapper flex flex-col">
  <app-navbar .loggedInUser=${loggedInUser}></app-navbar>
  ${loggedInUser
    ? html`<app-home-page .loggedInUser=${loggedInUser}></app-home-page>`
    : html`<app-landing-page
        class="flex-1"
        @setLoggedInUser=${setLoggedInUser}
        @resetOrLogOut=${resetOrLogOut}
      ></app-landing-page>`}
</div>`;
