import { MeanFrontendPage } from './app.po';

describe('mean-frontend App', () => {
  let page: MeanFrontendPage;

  beforeEach(() => {
    page = new MeanFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
