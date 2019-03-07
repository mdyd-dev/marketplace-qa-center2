import 'testcafe';
import {MP_URL, ADMIN_USER, ADMIN_PASS} from './environment/environment';
import BasePage from './page-objects/basePage';
import LoginPage from './page-objects/loginPage';
import Notifications from './page-objects/notifications';
import HomePage from './page-objects/homePage';
import PostAdminPage from './page-objects/postsAdminPage';
import SettingsPage from './page-objects/settingsPage';
import PostPage from './page-objects/postPage';

const loginPage = new LoginPage();
const basePage = new BasePage();
const notifications = new Notifications();
const homePage = new HomePage();
const postAdminPage = new PostAdminPage();
const settingsPage = new SettingsPage();
const postPage = new PostPage();

const admin_user = ADMIN_USER;
const admin_pass = ADMIN_PASS;

fixture`Posts`.page(MP_URL);

test('Should let you change name of blog', async t => {
  await basePage.openPage(loginPage.urlPath);
  await loginPage.login(admin_user, admin_pass);
  await t
    .click(homePage.navigation.menu)
    .click(homePage.navigation.dashboard)
    .click(postAdminPage.link.blogPage)
    .click(settingsPage.link.settings)
    .selectText(postAdminPage.form.title)
    .pressKey('delete')
    .typeText(postAdminPage.form.title, 'QA Blog')
    .click(postAdminPage.button.savePost);
  await t
    .expect(notifications.messageType.successAlert.innerText)
    .eql(notifications.text.settingsSaved);
  await t
    .click(postAdminPage.link.home)
    .expect(postPage.element.title.innerText)
    .eql('QA Blog');
  await t
    .click(homePage.navigation.menu)
    .click(homePage.navigation.dashboard)
    .click(postAdminPage.link.blogPage)
    .click(settingsPage.link.settings)
    .selectText(postAdminPage.form.title)
    .pressKey('delete')
    .typeText(
      postAdminPage.form.title,
      'A place for DCU members and consumers to share ideas, questions and provide opinion on topics of common interest'
    )
    .click(postAdminPage.button.savePost);
  await t
    .expect(notifications.messageType.successAlert.innerText)
    .eql(notifications.text.settingsSaved);
});
