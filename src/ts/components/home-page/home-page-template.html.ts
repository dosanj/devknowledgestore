import { html } from 'lit-html';

export default ({ linkSaved, links, openSaveLinkDialog }) => html`
  <div class="home-page-wrapper flex flex-column m-3">
    <div class="items-searcher-wrapper mb-3">
      <div class="item-searcher position-relative ">
        <input placeholder="Search Links..." class="w-100" />
        <i class="fa fa-search position-absolute"></i>
      </div>
      <div class="add-item-wrapper">
        <button class="btn btn--primary add-button" @click=${openSaveLinkDialog}>
          <i class="fa fa-plus m-auto text-default"></i><span> Add </span>
        </button>
      </div>
    </div>
    <div class="items-wrapper">
      ${links.map(({ link }) => {
        return html`<div class="item flex mb-3"><div>${link}</div></div>`;
      })}
    </div>
  </div>
  <app-save-link-modal @savedLink=${linkSaved}></app-save-link-modal>
`;
