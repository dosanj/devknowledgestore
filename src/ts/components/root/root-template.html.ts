import { html } from 'lit-html';

export default ({ setLoggedInUser, loggedInUser, resetOrLogOut }) => {
  return html` <div
    class="h-screen overflow-y-auto bg-gradient-to-b from-blue-400 to-green-500 text-gray-100 flex flex-col"
  >
    <app-navbar .loggedInUser=${loggedInUser}></app-navbar>
    ${loggedInUser
      ? html`<app-home-page .loggedInUser=${loggedInUser}></app-home-page>`
      : html`<app-landing-page
          class="h-full"
          @setLoggedInUser=${setLoggedInUser}
          @resetOrLogOut=${resetOrLogOut}
        ></app-landing-page>`}
  </div>`;
};
