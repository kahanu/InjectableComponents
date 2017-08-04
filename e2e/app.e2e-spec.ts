import { InjectableComponentsPage } from './app.po';

describe('injectable-components App', () => {
  let page: InjectableComponentsPage;

  beforeEach(() => {
    page = new InjectableComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
