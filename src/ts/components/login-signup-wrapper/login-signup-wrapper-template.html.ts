import { html } from 'lit-html';
export default ({ loginClicked, signInWithGoogle }) => html` <div class="login-form">
  <button class="btn btn--primary flex w-100" @click=${signInWithGoogle}>
    <i class="google-login-icon"></i>
    <span class="ml-3">Continue with Google</span>
  </button>
  <div class="login-divider">
    <span class="divider-line"></span>
    <span class="divider-text">or</span>
    <span class="divider-line"></span>
  </div>

  <fieldset class="mt-3 flex flex-column">
    <label for="loginMail" class="login-form-label"> E-Mail: </label>
    <input id="loginMail" class="login-form-textbox" type="email" name="mail" placeholder="E-Mail" data-empty="true" />
  </fieldset>

  <fieldset class="mt-3 flex flex-column">
    <label for="loginPassword" class="login-form-label"> Password: </label>
    <input
      id="loginPassword"
      class="login-form-textbox"
      type="password"
      name="password"
      placeholder="Password"
      data-empty="true"
    />
  </fieldset>

  <fieldset class="mt-3">
    <button class="btn btn--primary" @click=${loginClicked}>Log In</button>
  </fieldset>

  <div class="mt-3">
    New to Link Store?
    <a class="BottomLink" href="javascript:;">Sign up</a>
  </div>
</div>`;
