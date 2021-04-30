import { hideLoader, showLoader } from '../../services/loader.service';
import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './landing-page-template.html';

@customElement('app-landing-page')
export class LandingPageComponent extends BaseComponent {
  template = htmlTemplate;
}
