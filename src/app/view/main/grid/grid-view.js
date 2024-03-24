import './grid.scss';
import View from '../../view';
import CellView from '../cell/cell-view';

const CssClasses = {
  GRID: 'grid',
  GRID_ROW: 'row',
}

export default class GridView extends View {
  #cells = 100;
  constructor() {
    /**
     * @type {import('../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'div',
      classNames: [CssClasses.GRID],
      textContent: '',
      callback: null
    }
    super(params);
    this.configureView();
  }

  configureView() {
    for (let i = 0; i < this.#cells; i++) {
      const cell = this.createCell();
      this.elementCreator.addInnerElement(cell);
    }
  }

  /**
   * @returns {HTMLElement}
   */
  createCell() {
    const cell = new CellView();
    return cell.getHtmlElement();
  }
}