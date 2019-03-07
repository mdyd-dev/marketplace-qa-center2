import {Selector} from 'testcafe';

export default class CommentAdminPage {
  constructor() {
    this.urlPath = '/dashboard/comments';
    this.element = {
      comment: Selector('tr:nth-of-type(3) > td > p'),
      deletedStatus: Selector('tr:nth-of-type(2) > td:nth-of-type(4)').withText(
        'Yes'
      ),
    };
    this.link = {
      commentsAdmin: Selector('a').withText('Comments'),
      deleteComment: Selector('input[type="submit"].btn.btn-link'),
    };
  }
}
