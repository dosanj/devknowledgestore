import { html } from 'lit-html';

export default ({}) => {
  return html`<div class="flex flex-col sm:flex-wrap sm:flex-row h-full items-center sm:space-around">
    <div class="flex flex-col justify-center items-center flex-1">
      <div class="quote m-4 text-2xl p-3 rounded text-center">Save links from anywhere</div>
      <i class="h-64 w-64 scale-75 sm:scale-100 home-page-icon"></i>
    </div>
    <div class="login-signup-wrapper flex flex-col flex-justify-center items-center m-3">
      <app-login-signup-wrapper></app-login-signup-wrapper>
    </div>
  </div>`;
};
