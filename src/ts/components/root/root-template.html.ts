import { html } from 'lit-html';

export default (props) => html`<div class="root-wrapper flex flex-column">
  <app-navbar @login=${props.login}></app-navbar>
  ${!props.userLoggedIn ? html`<app-landing-page class="flex-1"></app-landing-page>` : html`<h1>User Logged In</h1> `}
</div>`;
