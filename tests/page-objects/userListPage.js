import {Selector} from 'testcafe';

export default class UserListPage {
  constructor() {
    this.button = {
      delete: Selector(
        'tr:nth-of-type(4) > td > .simple_form.form .btn.btn-link'
      ),
    };
  }
}
