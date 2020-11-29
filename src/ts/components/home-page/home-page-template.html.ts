import { html } from 'lit-html';

export default ({ linkSaved, links }) => html`
  <div class="home-page-wrapper">
    <div class="add-item-wrapper position-absolute">
      <a class="btn btn-floating bg-primary" href="#save-link"> <i class="fa fa-plus m-auto text-default"></i> </a>
    </div>
    <div class="links-wrapper">
      ${links.map((link) => {
        return html`<div class="link-item flex m-3"><div>${link}</div></div>`;
      })}
    </div>
  </div>
  <app-save-link-modal @savedLink=${linkSaved}></app-save-link-modal>
`;
