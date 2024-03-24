import View from "./view";

const CssClasses = {
  ITEM: 'nav-item',
  ITEM_SELECTED: 'nav-item_selected',
}

export default class LinkView extends View {
  /**
   * @param {string} text 
   */
  constructor(text) {
    /**
     * @type {import('../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'a',
      classNames: [CssClasses.ITEM],
      textContent: text,
      callback: null
    };
    super(params);
  }

  setSelectedStatus() {}

  setNotSelectedStatus() {}
}