import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  ec = protractor.ExpectedConditions;
  
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  async getCountValue() {    
    let txt=await this.getCountElement().getText()        
    return parseInt(txt);
  }
  
  private countElement;
  getCountElement() {
    if (!this.countElement)
      this.countElement = element(by.id('mycount'));
    return this.countElement;
  }

  clickIncButton() {
    this.getIncButton();
    this.incBtn.click();
  }

  clickDecButton() {
    this.getDecButton();
    this.devBtn.click();
  }

  private incBtn;
  getIncButton() {
    if (!this.incBtn)
      this.incBtn = element(by.id('myInc'));

    return this.incBtn;
  }

  private devBtn;
  getDecButton() {
    if (!this.devBtn) {
      this.devBtn = element(by.id('myDec'));
    }
    return this.devBtn;
  }

}
