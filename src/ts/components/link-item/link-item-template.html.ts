import { html } from 'lit-html';
import { ISavedLink } from '../../../models';

export default ({ linkItem }: { linkItem: ISavedLink }) => html`
  <a aria-label="${linkItem?.title}" href="${linkItem?.url}" target="_blank">
    <img src="${linkItem?.image}" height="150" width="150"
  /></a>
  <div class="link-details flex flex-column">
    <a aria-label="${linkItem?.title}" href="${linkItem?.url}" target="_blank">
      <div class="link-site-title mb-3" style="font-size: 20px; line-height: 1.2em; max-height: 3.6em;">
        ${linkItem?.title ? linkItem.title : linkItem?.url}
      </div>
    </a>
    <cite class="link-site mb-3"
      ><a href="${linkItem?.url}" target="_blank" style="cursor: pointer;">${linkItem?.siteName}</a></cite
    >
    <div class="css-1bersj8">${linkItem?.description}</div>
  </div>
`;
