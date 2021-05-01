import { html } from 'lit-html';
import { live } from 'lit-html/directives/live';

export default ({ linkInput, saveLink, link, closeDialog, disableSaveButton, displayError }) => html`
  <div id="save-link" class="modal-dialog">
    <div class="modal-content">
      <a
        href="#"
        title="Close"
        class="absolute -right-2 -top-2 h-6 w-6 bg-gray-400 rounded-full flex items-center hover:filter-none filter brightness-110"
        ><span class="m-auto">x</span></a
      >
      <input
        placeholder=" Save a URL https://..."
        class="w-full items-center rounded border border-solid border-gray-400 h-10 px-4 outline-none bg-gray-100"
        @input=${linkInput}
        .value=${live(link)}
      />
      ${displayError ? html`<p class="mt-3 text-complimentry">${displayError}</p>` : html``}
      <div class="mt-3 flex flex-justify-end">
        <button
          class="bg-gray-400 text-black text-center border-opacity-10 px-4 shadow-sm hover:filter-none filter brightness-110 rounded h-10"
          @click=${closeDialog}
        >
          Close
        </button>
        <button
          class="bg-primary text-secondary text-center border-opacity-10 px-4 shadow-sm hover:filter-none filter brightness-110 rounded ml-3"
          @click=${saveLink}
          .disabled=${disableSaveButton}
        >
          Save
        </button>
      </div>
    </div>
  </div>
`;
