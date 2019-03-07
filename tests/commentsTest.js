import 'testcafe';
import {MP_URL, ADMIN_USER, ADMIN_PASS} from './environment/environment';
import BasePage from './page-objects/basePage';
import LoginPage from './page-objects/loginPage';
import Notifications from './page-objects/notifications';
import HomePage from './page-objects/homePage';
import PostAdminPage from './page-objects/postsAdminPage';
import PostPage from './page-objects/postPage';
import CommentAdminPage from './page-objects/commentAdminPage';

const loginPage = new LoginPage();
const basePage = new BasePage();
const notifications = new Notifications();
const homePage = new HomePage();
const postAdminPage = new PostAdminPage();
const postPage = new PostPage();
const commentAdminPage = new CommentAdminPage();

const admin_user = ADMIN_USER;
const admin_pass = ADMIN_PASS;
const commentText = `${+new Date()} Comment Text`;

fixture`Comments`.page(MP_URL).beforeEach(async t => {
  await basePage.openPage(loginPage.urlPath);
  await loginPage.login(admin_user, admin_pass);
});

test('Should let you add new comment', async t => {
  await t
    .click(homePage.navigation.menu)
    .click(homePage.navigation.dashboard)
    .click(postAdminPage.link.blogPage)
    .click(postAdminPage.link.newPost);
  await t
    .typeText(postAdminPage.form.title, 'Lorem ipsum')
    .typeText(postAdminPage.form.publishDate, '1979-02-12')
    .setFilesToUpload(postAdminPage.form.heroImage, ['./uploads/hero.png'])
    .typeText(postAdminPage.form.content, 'Test')
    .typeText(postAdminPage.form.excerpt, 'Lorem ipsum')
    .setFilesToUpload(postAdminPage.form.avatar, ['./uploads/hero.png'])
    .typeText(postAdminPage.form.author, 'Test User')
    .click(postAdminPage.button.savePost);
  await t.expect(postAdminPage.link.blogPost).ok();
  await t.click(postAdminPage.link.blogPage).click(postAdminPage.link.blogPost);
  await t
    .typeText(postPage.element.comment, commentText)
    .click(loginPage.button.submit);
  await t.expect(postPage.element.commentContent.innerText).eql(commentText);
  await t
    .click(postPage.button.removeComment)
    .click(postPage.button.removeCommentConfirm);
  await t
    .expect(notifications.messageType.globalNotificationAlertNotice.innerText)
    .eql(notifications.text.removedComment)
    .expect(notifications.messageType.commentRemoved.innerText)
    .eql(notifications.text.confirmationCommentRemoved);
});

test('Should be visible status of comment that was deleted', async t => {
  await t
    .click(homePage.navigation.menu)
    .click(homePage.navigation.dashboard)
    .click(postAdminPage.link.blogPage)
    .click(commentAdminPage.link.commentsAdmin);
  await t
    .expect(commentAdminPage.element.comment.innerText)
    .eql(commentText)
    .expect(commentAdminPage.element.deletedStatus)
    .ok();
});

test('Should let you remove post', async t => {
  await postAdminPage.removePost();
});

test('Should let you remove of comment from admin panel', async t => {
  await t
    .click(homePage.navigation.menu)
    .click(homePage.navigation.dashboard)
    .click(postAdminPage.link.blogPage)
    .click(postAdminPage.link.newPost);
  await t
    .typeText(postAdminPage.form.title, 'Lorem ipsum')
    .typeText(postAdminPage.form.publishDate, '1979-02-12')
    .setFilesToUpload(postAdminPage.form.heroImage, ['./uploads/hero.png'])
    .typeText(postAdminPage.form.content, 'Test')
    .typeText(postAdminPage.form.excerpt, 'Lorem ipsum')
    .setFilesToUpload(postAdminPage.form.avatar, ['./uploads/hero.png'])
    .typeText(postAdminPage.form.author, 'Test User')
    .click(postAdminPage.button.savePost);
  await t.expect(postAdminPage.link.blogPost).ok();
  await t.click(postAdminPage.link.blogPage).click(postAdminPage.link.blogPost);
  await t
    .click(postPage.element.isDown)
    .expect(postPage.element.counterDown.count)
    .eql(1)
    .click(postPage.element.isUp)
    .expect(postPage.element.counterUp.count)
    .eql(1);
  await t
    .typeText(postPage.element.comment, commentText)
    .click(loginPage.button.submit);
  await t.expect(postPage.element.commentContent.innerText).eql(commentText);
  await t.navigateTo(commentAdminPage.urlPath);
  await t
    .setNativeDialogHandler(() => true)
    .click(commentAdminPage.link.deleteComment);
  await t
    .expect(notifications.messageType.successAlert.innerText)
    .eql(notifications.text.removedComment);
});

test('Should let you remove post', async t => {
  await postAdminPage.removePost();
});
