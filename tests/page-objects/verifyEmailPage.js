import {
  Selector
} from 'testcafe';

export default class VerifyEmailPage {
  constructor() {
    this.urlPath = '/verify-email';
    this.text = {
      verifyEmail: 'Please verify your email'
    };
    this.element = {
      pageTitle: Selector('h1.page-title')
    };
  }
}
