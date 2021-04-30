import { html } from 'lit-html';
export default ({ loginClicked, signInWithGoogle }) => html` <div class="login-form">
  <button
    class="bg-primary text-secondary text-center border-opacity-10 px-4 shadow-sm hover:filter-none filter brightness-110 rounded h-10 flex w-full items-center"
    @click=${signInWithGoogle}
  >
    <i class="google-login-icon"></i>
    <span class="ml-3">Continue with Google</span>
  </button>
</div>`;
