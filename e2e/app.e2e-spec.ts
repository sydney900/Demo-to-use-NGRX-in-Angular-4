import { AppPage } from './app.po';
import { async } from 'q';

describe('mytestngrx App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Test NGRX');
  });

  it('should display correct header text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Test NGRX');
  });

  it('should display correct initial count value', () => {
    page.navigateTo().then(() => {
      expect(page.getCountValue()).toBe(0);
    });
  });

  it('Increament button should work', () => {
    page.navigateTo().then(() => {
      page.clickIncButton();
      expect(page.getCountValue()).toBe(1);
      page.clickIncButton();
      expect(page.getCountValue()).toBe(2);
    });
  });

  it('Decreament button should work', () => {
    page.navigateTo().then(() => {
      page.clickDecButton();
      expect(page.getCountValue()).toBe(-1);
      page.clickDecButton();
      expect(page.getCountValue()).toBe(-2);
    });
  });

});
