import { html } from 'lit-html';
export default (props) => {
  return html` <div class="root-wrapper flex flex-column">
    <app-navbar></app-navbar>
    <app-container class="flex-1"></app-container>
  </div>`;
};
