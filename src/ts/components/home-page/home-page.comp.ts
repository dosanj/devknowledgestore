import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './home-page-template.html';
@customElement('app-home-page')
export class HomePageComponent extends BaseComponent {
  template = htmlTemplate;
}
