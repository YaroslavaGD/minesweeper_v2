import ElementCreator from '../util/element-creator';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav'
}

const TEXT = 'header text'

export default class HeaderView {
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
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: TEXT,
      callback: null
    }
    const elementCreator = new ElementCreator(params);
    return elementCreator;
  }
}