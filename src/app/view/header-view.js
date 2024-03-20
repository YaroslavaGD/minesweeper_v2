import ElementCreator from '../util/element-creator';
import View from '../view/view';
import LinkView from './link-view';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav'
}

const TEXT = 'header text';
const NameButtons = {
  RESTART: 'Restart',
  AUDIO: 'Audio',
  LIGHT_MODE: 'Light Mode'
}

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
    this.configureView();
  }

  configureView() {
    const paramsNav = {
      tag: 'nav',
      classNames: [CssClasses.NAV],
      textContent: '',
      callback: null
    };
    const creatorNav = new ElementCreator(paramsNav);

    this.elementCreator.addInnerElement(creatorNav);
    
    const buttons = [
      {
        name: NameButtons.RESTART,
        callback: () => {},
      },
      {
        name: NameButtons.AUDIO,
        callback: () => {},
      },
      {
        name: NameButtons.LIGHT_MODE,
        callback: () => {},
      }
    ];

    buttons.forEach((item) => {
      const linkElement = new LinkView(item.name);
      creatorNav.addInnerElement(linkElement.getHtmlElement());
      
    });
  }
}