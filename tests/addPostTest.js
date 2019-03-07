import 'testcafe';
import {MP_URL, ADMIN_USER, ADMIN_PASS} from './environment/environment';
import BasePage from './page-objects/basePage';
import LoginPage from './page-objects/loginPage';
import Notifications from './page-objects/notifications';
import HomePage from './page-objects/homePage';
import PostAdminPage from './page-objects/postsAdminPage';
import PostPage from './page-objects/postPage';

const loginPage = new LoginPage();
const basePage = new BasePage();
const notifications = new Notifications();
const homePage = new HomePage();
const postAdminPage = new PostAdminPage();
const postPage = new PostPage();

const admin_user = ADMIN_USER;
const admin_pass = ADMIN_PASS;

fixture`Posts`.page(MP_URL).beforeEach(async t => {
  await basePage.openPage(loginPage.urlPath);
  await loginPage.login(admin_user, admin_pass);
});

test('Should let you add new post', async t => {
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
});

test('Post should exist on the home page', async t => {
  await t
    .click(homePage.navigation.menu)
    .click(homePage.navigation.dashboard)
    .click(postAdminPage.link.blogPage)
    .click(postAdminPage.link.blogPost);
  await t
    .expect(postPage.element.title.innerText)
    .eql('Lorem ipsum')
    .expect(postPage.element.content.innerText)
    .eql(postPage.text.content)
    .expect(postPage.element.author)
    .ok();
});

test('Should let you remove post', async t => {
  await postAdminPage.removePost();
});
