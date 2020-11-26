import { html } from 'lit-html';

export default (props) => {
  return html`<div class="container-wrapper h-100">
    <div class="home-page-icon-wrapper">
      <i class="home-page-icon"></i>
    </div>
    <div class="login-signup-wrapper flex flex-column flex-justify-center flex-items-center">
      <div class="quote mb-3">Save links from anywhere</div>
      <div class="login-signup-button-group">
        <button class="btn google-signup-button">
          <img
            alt="Google Logo"
            width="32"
            height="32"
            src="https://assets.getpocket.com/web/main/images/shared/google-color-logo.fed1e730c922a21a5fad47fd142a9d5a.svg"
          />
          <span>Sign up with Google</span>
        </button>
        <button class="btn" id="email-signup">
          <span>Sign up with Email</span>
        </button>
        <p class="login-check-text">
          Already have an account?
          <a href="/"> Log In </a>
        </p>
      </div>
    </div>
  </div>`;
};
