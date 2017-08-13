import { DengueVisualizationPage } from './app.po';

describe('dengue-visualization App', function() {
  let page: DengueVisualizationPage;

  beforeEach(() => {
    page = new DengueVisualizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
