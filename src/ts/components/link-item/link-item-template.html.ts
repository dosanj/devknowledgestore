import { html } from 'lit-html';
import { ISavedLink } from '../../../models';

export default ({ linkItem, toggleActionsPopup, showActionsPopup, deleteLinkItem }) => html`
  <div class="item flex mb-3 flex-column position-relative">
    <div class="item-actions position-absolute">
      <i class="fa fa-ellipsis-v pt-3 pr-3 pb-2 clickable" @click=${toggleActionsPopup}></i>
      ${showActionsPopup
        ? html` <div class="item-actions-popup position-absolute">
            <span class="flex flex-items-center clickable" @click=${deleteLinkItem}>
              <i class="fa fa-trash mr-3"> </i> Delete
            </span>
          </div>`
        : null}
    </div>
    <a aria-label="${linkItem?.title}" href="${linkItem?.url}" target="_blank">
      <img src="${linkItem?.image}" height="150" width="150"
    /></a>
    <div class="link-details flex flex-column">
      <a aria-label="${linkItem?.title}" href="${linkItem?.url}" target="_blank" class="link-site-title mb-2">
        ${linkItem?.title ? linkItem.title : linkItem?.url}
      </a>
      <a href="${linkItem?.url}" target="_blank" class="mb-2">
        <cite class="link-site">${linkItem?.siteName}</cite>
      </a>
      <div class="link-site-description">${linkItem?.description}</div>
    </div>
  </div>
`;
