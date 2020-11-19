import './utilities/components-registry.js';
import { RootComponent } from './components/root.comp.js';

function startup() {
  const root = document.getElementById('root');
  root.replaceWith(new RootComponent().render());
}
document.addEventListener('DOMContentLoaded', startup);
