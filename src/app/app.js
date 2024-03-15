import FooterView from './view/footer-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const footerView = new FooterView();

    document.body.append(footerView.getHtmlElement());
  }
}