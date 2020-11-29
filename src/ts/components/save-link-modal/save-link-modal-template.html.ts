import { html } from 'lit-html';
import { live } from 'lit-html/directives/live';

export default ({ linkInput, saveLink, link, closeDialog, disableSaveButton, displayError }) => html`
  <div id="save-link" class="modal-dialog">
    <div class="modal-content">
      <a href="#" title="Close" class="modal-close">x</a>
      <input placeholder=" Save a URL https://..." class="save-link-input" @input=${linkInput} .value=${live(link)} />
      ${displayError ? html`<p class="mt-3 text-complimentry">${displayError}</p>` : html``}
      <div class="mt-3 flex flex-justify-end">
        <button class="btn" @click=${closeDialog}>Close</button>
        <button class="btn btn--primary ml-3" @click=${saveLink} .disabled=${disableSaveButton}>Save</button>
      </div>
    </div>
  </div>
`;
