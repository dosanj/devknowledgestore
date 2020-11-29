import { html } from 'lit-html';

export default ({}) => html`
  <div id="save-link" class="modal-dialog">
    <div class="modal-content">
      <a href="#" title="Close" class="modal-close">x</a>
      <input placeholder=" Save a URL https://..." value="" class="save-link-input" />
      <div class="mt-3 flex flex-justify-end">
        <a href="#" class="text-decoration-none text-default"><button class="btn">Close</button></a>
        <button class="btn btn--primary ml-3">Save</button>
      </div>
    </div>
  </div>
`;
