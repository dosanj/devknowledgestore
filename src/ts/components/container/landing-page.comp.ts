import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './landing-page-template.html';

@customElement('app-landing-page')
export class ContainerComponent extends BaseComponent {
  template = htmlTemplate;
}
