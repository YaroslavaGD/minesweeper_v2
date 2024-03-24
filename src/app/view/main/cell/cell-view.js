import './cell.scss';
import View from '../../view';

const CssClasses = {
  CELL: 'cell',
  CELL_BOMB: 'cell--bomb',
  CELL_BOMB2: 'cell--bomb2',
  CELL_BOMB3: 'cell--bomb3',
  CELL_WOOD: 'cell--wood'
}
export default class CellView extends View {
  constructor() {
    /**
     * @type {import('../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'button',
      classNames: [CssClasses.CELL, CssClasses.CELL_WOOD],
      textContent: '',
      callback: null
    }
    super(params);
  }
}