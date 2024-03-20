import View from '../view';
import CellView from './cell-view';

const CssClasses = {
  FIELD: 'field',
}

export default class FieldView extends View {
  constructor() {
    /**
     * @type {import('../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'div',
      classNames: [CssClasses.FIELD],
      textContent: '',
      callback: null
    }
    super(params);
    this.configureView();
  }

  configureView() {
    const numCells = 10;
    for(let i = 0; i < numCells; i++) {
      const cell = new CellView();
      this.elementCreator.addInnerElement(cell.getHtmlElement());
    }
  }
}