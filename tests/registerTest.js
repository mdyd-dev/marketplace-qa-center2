import 'testcafe';
import {
  MP_URL,
  ADMIN_USER,
  ADMIN_PASS,
  USERDATA,
} from './environment/environment';
import BasePage from './page-objects/basePage';
import HomePage from './page-objects/homePage';
import RegistrationPage from './page-objects/registrationPage';
import LoginPage from './page-objects/loginPage';
import UserListPage from './page-objects/userListPage';
import Notifications from './page-objects/notifications';
import VerifyEmailPage from './page-objects/verifyEmailPage';

const homePage = new HomePage();
const basePage = new BasePage();
const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const userListPage = new UserListPage();
const notifications = new Notifications();
const verifyEmailPage = new VerifyEmailPage();

const firstName = USERDATA.NAME;
const lastName = USERDATA.LASTNAME;
const userEmail = USERDATA.USER_EMAIL;
const userPass = USERDATA.PASSWORD;
const userName = `qa${+new Date()}`;

const admin_user = ADMIN_USER;
const admin_pass = ADMIN_PASS;

fixture`Register`.page(MP_URL);

test('Should no liquid errors on the page', async () => {
  await basePage.checkLiquidErrors();
});

test('Should let you register with valid credentials', async t => {
  await basePage.openPage(registrationPage.urlPath);
  await t
    .typeText(registrationPage.input.firstname, firstName)
    .typeText(registrationPage.input.lastname, lastName)
    .typeText(registrationPage.input.username, userName)
    .typeText(registrationPage.input.email, userEmail)
    .typeText(registrationPage.input.emailConfirmation, userEmail)
    .typeText(registrationPage.input.password, userPass)
    .click(registrationPage.checkbox.agree)
    .click(loginPage.button.submit);
  await t
    .expect(verifyEmailPage.element.pageTitle.innerText)
    .eql(verifyEmailPage.text.verifyEmail);
});

test('Should have to verify your email before you can log in', async t => {
  await basePage.openPage(loginPage.urlPath);
  await loginPage.login(userEmail, userPass);
  await t
    .expect(notifications.messageType.globalNotificationAlert.innerText)
    .eql(notifications.text.verifyEmail);
});
