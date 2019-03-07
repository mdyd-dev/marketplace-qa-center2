import {
  Selector,
  t
} from 'testcafe';

export default class LoginPage {
  constructor() {
    this.urlPath = '/log-in';
    this.validation = {
      invalidEmail: Selector('.error-block'),
    };
    this.input = {
      emailLogin: Selector('#form-email'),
      password: Selector('#form-password')
    };
    this.button = {
      submit: Selector('.btn.btn-primary')
    };
  }

  async login(username, password) {
    await t
      .typeText(this.input.emailLogin, username)
      .typeText(this.input.password, password)
      .click(this.button.submit);
  }
}
