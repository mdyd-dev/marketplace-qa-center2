import {Selector} from 'testcafe';

export default class PostPage {
  constructor() {
    this.text = {
      title: 'Lorem ipsum',
      content: 'Test',
      comment: 'Test comment',
    };
    this.element = {
      title: Selector('h1.hero__title'),
      content: Selector('.post__content'),
      author: Selector('h4.author__name').withText('Test User'),
      postTitle: Selector('a').withText('Lorem ipsum'),
      comment: Selector('#form-properties-attributes-content'),
      commentContent: Selector('.comment__body > p'),
      isDown: Selector('.rate-post__option.is-down'),
      isUp: Selector('.rate-post__option.is-up'),
      counterDown: Selector(
        '.rate-post__option.is-down .rate-post__option__counter'
      ),
      counterUp: Selector(
        '.rate-post__option.is-up .rate-post__option__counter'
      ),
    };
    this.button = {
      removeComment: Selector('button[type="submit"].btn.btn-text'),
      removeCommentConfirm: Selector('.btn.btn-sm'),
    };
  }
}
