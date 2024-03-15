import ElementCreator from '../util/element-creator';
import View from '../view/view';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav'
}

const TEXT = 'header text'

export default class HeaderView extends View{
  constructor() {
    /**
     * @type {import('../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: TEXT,
      callback: null
    }
    super(params);
  }

}