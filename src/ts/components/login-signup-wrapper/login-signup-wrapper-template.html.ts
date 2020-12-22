import { html } from 'lit-html';
export default ({ loginClicked, signInWithGoogle }) => html` <div class="login-form">
  <button class="btn btn--primary flex w-100" @click=${signInWithGoogle}>
    <i class="google-login-icon"></i>
    <span class="ml-3">Continue with Google</span>
  </button>
</div>`;
