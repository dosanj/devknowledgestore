import { html } from 'lit-html';

export default (props) => html`<div class="root-wrapper flex flex-column">
  <app-navbar @login=${props.login}></app-navbar>
  ${!props.userLoggedIn ? html`<app-container class="flex-1"></app-container>` : html`<h1>User Logged In</h1> `}
</div>`;
