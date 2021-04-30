import { html } from 'lit-html';
import { ISavedLink } from '../../../models';

export default ({ linkItem, toggleActionsPopup, showActionsPopup, deleteLinkItem }) => html`
  <div
    class="flex flex-col relative p-3 w-auto sm:w-60 h-80 justify-between bg-gray-200 items-center text-gray-900 rounded"
  >
    <div class="top-0 right-0 cursor-pointer absolute">
      <i class="fa fa-ellipsis-v pt-3 pr-3 pb-2 clickable" @click=${toggleActionsPopup}></i>
      ${showActionsPopup
        ? html` <div class="flex rounder right-0 bg-white shadow-md p-4 absolute">
            <span class="flex flex-items-center clickable" @click=${deleteLinkItem}>
              <i class="fa fa-trash mr-3"> </i> Delete
            </span>
          </div>`
        : null}
    </div>
    <a
      aria-label="${linkItem?.title}"
      href="${linkItem?.url}"
      target="_blank"
      class="h-36 w-36 bg-green-700 no-underline"
    >
      ${linkItem.image ? html`<img src="${linkItem.image}" class="h-full w-full" />` : null}
    </a>
    <div class="link-details flex flex-col mt-1">
      <a
        aria-label="${linkItem?.title}"
        href="${linkItem?.url}"
        target="_blank"
        class="overflow-hidden line-clamp-2 text-primary mb-2 no-underline"
      >
        ${linkItem?.title ? linkItem.title : linkItem?.url}
      </a>
      <a href="${linkItem?.url}" target="_blank" class="mb-2 no-underline">
        <cite class="text-primary opacity-50">${linkItem?.siteName}</cite>
      </a>
      <div class="overflow-hidden line-clamp-2 mb-2">${linkItem?.description}</div>
      <div class="text-xs flex items-center justify-center">
        <i class="fa fa-calendar mr-3"></i>
        ${new Date(linkItem?.timestamp).toDateString()}
      </div>
    </div>
  </div>
`;
