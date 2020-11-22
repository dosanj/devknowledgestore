import './utilities/components-registry.js';
import { RootComponent } from './components/root.comp.js';

async function startup() {
  const root = document.getElementById('root');
  root.replaceWith(await new RootComponent().render());
}
document.addEventListener('DOMContentLoaded', startup);
