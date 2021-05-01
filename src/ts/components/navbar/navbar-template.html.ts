import { html } from 'lit-html';

export default ({ loggedInUser, logOut }) => html`<nav
  class="h-16 bg-transparent flex items-stretch px-4 justify-between shadow-md"
  role="navigation"
  aria-label="main navigation"
>
  <div class="flex items-center">
    <a class="no-underline text-gray-100 text-3xl self-center" href="/"> Link Store </a>
  </div>
  <div class="flex items-center">
    ${loggedInUser
      ? html`<button
          class="bg-gray-300 text-black text-center border-opacity-10 px-4 shadow-sm hover:filter-none filter brightness-110 rounded h-10"
          @click=${logOut}
        >
          Log Out
        </button>`
      : ''}
  </div>
</nav>`;
