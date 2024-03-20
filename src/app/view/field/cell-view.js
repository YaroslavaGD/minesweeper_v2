import View from "../view";

const CssClasses = {
  CELL: 'cell',
}
export default class CellView extends View {
  constructor() {
    /**
     * @type {import('../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'button',
      classNames: [CssClasses.FIELD],
      textContent: '',
      callback: null
    }
    super(params);
  }
}