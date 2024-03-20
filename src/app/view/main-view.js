import FieldView from "./field/field-view";
import View from "./view";

const CssClasses = {
  MAIN: 'main',
}

const TEXT = 'main text';

export default class MainView extends View {
  constructor() {
    /**
     * @type {import('../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'main',
      classNames: [CssClasses.MAIN],
      textContent: TEXT,
      callback: null
    }
    super(params);
    this.configureView();
  }

  configureView() {
    const field = new FieldView();
    this.elementCreator.addInnerElement(field.getHtmlElement());
  }
}