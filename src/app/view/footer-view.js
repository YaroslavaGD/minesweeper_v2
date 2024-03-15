const CssClasses = {
  FOOTER: 'footer'
};

const TEXT = 'footer text';

export default class FooterView {
  constructor() {}

  createView() {
    const element = document.createElement('footer');
    element.textContent = TEXT;
    element.classList.add(CssClasses.FOOTER);
    return element;
  }
}