import { html } from 'lit-html';

export default ({ userLoggedIn }) => {
  return html`<div class="container-wrapper h-100">
    <div class="home-page-icon-wrapper">
      <div class="quote">Save links from anywhere</div>
      <i class="home-page-icon"></i>
    </div>
    <div class="login-signup-wrapper flex flex-column flex-justify-center flex-items-center m-3">
      <app-login-signup-wrapper @userLoggedIn=${userLoggedIn}></app-login-signup-wrapper>
    </div>
  </div>`;
};
