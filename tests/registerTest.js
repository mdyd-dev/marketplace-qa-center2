import 'testcafe';
import {MP_URL, USERDATA} from './environment/environment';
import BasePage from './page-objects/basePage';
import RegistrationPage from './page-objects/registrationPage';
import Notifications from './page-objects/notifications';

const basePage = new BasePage ();
const registrationPage = new RegistrationPage ();
const notifications = new Notifications ();

const firstName = 'Jacek';
const lastName = 'QA';
const userEmail = USERDATA.USER_EMAIL;
const userPass = 'password';

fixture`Register`.page (MP_URL);

// test ('Should no liquid errors on the page', async () => {
//   await basePage.checkLiquidErrors ();
// });

test.only ('Should let you create user account on UiPathGo', async t => {
  await basePage.openPage (registrationPage.urlPath);
  await t
    .typeText (registrationPage.input.firstname, firstName)
    .typeText (registrationPage.input.lastname, lastName)
    .typeText (registrationPage.input.email, userEmail)
    .typeText (registrationPage.input.password, userPass)
    .click (registrationPage.button.signup);
  await t.expect (notifications.messageType.allertSuccess).ok ();
  console.log (userEmail);
});

test ('Should let you create user account on UiPath Community', async t => {
  await basePage.openPage (registrationPage.urlCommunity);
  await t
    .typeText (registrationPage.input.firstname, firstName)
    .typeText (registrationPage.input.lastname, lastName)
    .typeText (registrationPage.input.email, userEmail)
    .typeText (registrationPage.input.password, userPass)
    .click (registrationPage.button.signup);
  await t.expect (notifications.messageType.allertSuccess).ok ();
});
