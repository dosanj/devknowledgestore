import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
  links: string[] = ['github.com/dosanj', 'github.com/dosanj'];
  linkSaved = async ({ detail }: CustomEventInit) => {
    const { link } = detail;
    this.links.unshift(link);
    this.render();
  };
}
