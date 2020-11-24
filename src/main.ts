import './js/utilities/components-registry';

async function startup() {
  const root = document.getElementById('root');
  root.replaceWith(document.createElement('app-root'));
}
document.addEventListener('DOMContentLoaded', startup);
