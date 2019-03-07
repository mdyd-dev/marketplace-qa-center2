import {
  Selector
} from 'testcafe';

export default class RegistrationPage {
  constructor() {
    this.urlPath = '/sign-up';
    this.input = {
      firstname: Selector('#form-first-name'),
      lastname: Selector('#form-last-name'),
      username: Selector('#form-profiles-attributes-modules-signup-default-attributes-properties-attributes-username'),
      email: Selector('#form-email'),
      emailConfirmation: Selector('#form-email-confirmation'),
      password: Selector('#form-password'),
    };
    this.checkbox = {
      agree: Selector('input[type=checkbox]')
    };
  }
}
