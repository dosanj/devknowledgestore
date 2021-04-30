import { html } from 'lit-html';

export default ({ linkSaved, links, openSaveLinkDialog, deleteLinkItem, searchInput }) => html`
  <div class="flex flex-col my-4 mx-auto w-4/5 sm:w-auto items-center">
    <div class="flex items-center justify-between mb-3 w-full sm:w-auto">
      <div class="w-full sm:w-96 relative ">
        <input
          placeholder="Search Links..."
          class="w-full items-center rounded border-transparent h-10 px-4 outline-none bg-gray-100"
          @input=${searchInput}
        />
        <i class="fa fa-search absolute right-4 top-3 text-gray-500"></i>
      </div>
      <div class="bottom-12 right-12 fixed z-10 sm:ml-4 sm:static">
        <button
          class="bg-primary px-4 text-secondary text-center border-opacity-10 shadow-sm hover:filter-none filter brightness-110 sm:rounded sm:w-auto sm:h-10 rounded-full w-12 h-12"
          @click=${openSaveLinkDialog}
        >
          <i class="fa fa-plus m-auto text-default"></i><span class="hidden sm:inline"> Add </span>
        </button>
      </div>
    </div>
    <div class="flex flex-wrap flex-col sm:flex-row gap-4 justify-center">
      ${links.map((linkItem) => {
        return html`<app-link-item .linkItem=${linkItem} @deleteLinkItem=${deleteLinkItem}></app-link-item>`;
      })}
    </div>
  </div>
  <app-save-link-modal @savedLink=${linkSaved}></app-save-link-modal>
`;
