import {Selector} from 'testcafe';

export default class RegistrationPage {
  constructor () {
    this.urlPath = '/sign-up';
    this.urlCommunity =
      'https://uipath-community-qa.staging-oregon.near-me.com/sign-up';
    this.input = {
      email: Selector ('input[type="email"]'),
      password: Selector ('input[type="password"]'),
      firstname: Selector ('input[name="form[first_name]"]'),
      lastname: Selector ('input[name="form[last_name]"]'),
    };
    this.button = {
      signup: Selector ('#sign-up-submit'),
    };
  }
}
