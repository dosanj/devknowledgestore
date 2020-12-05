let counter = 0;
const loaderElement: HTMLElement = document.createElement('div');
loaderElement.classList.add('loader');
export const showLoader = () => {
  if (counter == 0) {
    // showLoader
    document.body.appendChild(loaderElement);
  }
  counter++;
};
export const hideLoader = () => {
  counter--;
  if (counter == 0) {
    // Hide Loader
    document.body.removeChild(loaderElement);
  }
  if (counter < 0) {
    counter = 0;
  }
};
