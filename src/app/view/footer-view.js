import ElementCreator from '../util/element-creator';

const CssClasses = {
  FOOTER: 'footer'
};

const TEXT = 'footer text';

export default class FooterView {
  constructor() {
    this.elementCreator = this.createView();
  }

  /**
   * @returns {HTMLElement}
   */
  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  /**
   * @returns {ElementCreator}
   */
  createView() {
    const params = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
      textContent: TEXT,
      callback: null
    }
    const elementCreator = new ElementCreator(params);
    return elementCreator;
  }
}