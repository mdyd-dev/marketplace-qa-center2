import 'testcafe';
import {MP_URL, ADMIN_USER, ADMIN_PASS} from './environment/environment';
import BasePage from './page-objects/basePage';
import LoginPage from './page-objects/loginPage';
import Notifications from './page-objects/notifications';
import HomePage from './page-objects/homePage';

const loginPage = new LoginPage();
const basePage = new BasePage();
const notifications = new Notifications();
const homePage = new HomePage();

const admin_user = ADMIN_USER;
const admin_pass = ADMIN_PASS;

fixture`Log in`.page(MP_URL).beforeEach(async t => {
  await basePage.openPage(loginPage.urlPath);
});

test('Should no liquid errors on the page', async () => {
  await basePage.checkLiquidErrors();
});

test('Should error on a invalid password', async t => {
  await loginPage.login('test@test.com', 'pass');
  await t
    .expect(notifications.messageType.textDanger.innerText)
    .eql(notifications.text.invalidEmailPass);
  await t
    .selectText(loginPage.input.emailLogin)
    .pressKey('delete')
    .selectText(loginPage.input.password)
    .pressKey('delete')
    .click(loginPage.button.submit);
  await t
    .expect(notifications.messageType.warning.innerText)
    .eql(notifications.text.problemWarning)
    .expect(notifications.messageType.textDanger.count)
    .eql(2);
});

test('Should let you log in with valid credentials', async t => {
  await loginPage.login(admin_user, admin_pass);
  await t.expect(homePage.navigation.menu).ok();
});

test('Should let you log out from Dashboard', async t => {
  await loginPage.login(admin_user, admin_pass);
  await t.click(homePage.navigation.menu).click(homePage.button.submit);
  await t.expect(homePage.navigation.login).ok();
});
