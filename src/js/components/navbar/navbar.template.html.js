import { html } from 'lit-html';

export default (props) => {
  return html`
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <a class="navbar-app-name" href="/"> ${props.appName} </a>
      </div>

      <div class="navbar-end">
        <button class="btn btn--primary">Login</button>
      </div>
    </nav>
  `;
};
