import { AngularBootcampPage } from './app.po';

describe('angular-bootcamp App', () => {
  let page: AngularBootcampPage;

  beforeEach(() => {
    page = new AngularBootcampPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
