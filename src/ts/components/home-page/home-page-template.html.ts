import { html } from 'lit-html';

export default ({}) => html`
  <div class="home-page-wrapper">
    <div class="add-item-wrapper position-absolute">
      <a class="btn-floating bg-primary" href="#save-link"> <i class="fa fa-plus m-auto text-default"></i> </a>
    </div>
  </div>
  <app-save-link-modal></app-save-link-modal>
`;
