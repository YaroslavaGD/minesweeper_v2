import HeaderView from './view/header-view';
import FooterView from './view/footer-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const headerView = new HeaderView();
    const footerView = new FooterView();

    document.body.append(headerView.getHtmlElement());
    document.body.append(footerView.getHtmlElement());
  }
}