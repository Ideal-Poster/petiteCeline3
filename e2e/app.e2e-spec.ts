import { PetiteCeline3Page } from './app.po';

describe('petite-celine3 App', () => {
  let page: PetiteCeline3Page;

  beforeEach(() => {
    page = new PetiteCeline3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
