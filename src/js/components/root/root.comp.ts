import { BaseComponent } from '../base.comp';
import htmlTemplate from './root.template.html';


export class RootComponent extends BaseComponent {
  template = htmlTemplate;  
  async postRender() {
    this.addEventListener('sidebar-clicked', console.log);
  }
}
