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
  }
}