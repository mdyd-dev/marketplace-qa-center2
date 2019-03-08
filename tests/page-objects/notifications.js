import {Selector} from 'testcafe';

export default class Notifications {
  constructor () {
    this.text = {
      createAccount: 'You have signed up successfully.',
    };
    this.messageType = {
      allertSuccess: Selector ('.alert.alert-success'),
    };
  }
}
