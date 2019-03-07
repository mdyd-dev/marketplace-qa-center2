import 'testcafe';
import {MP_URL} from './environment/environment';
import LayoutPage from './page-objects/basePage';
import HomePage from './page-objects/homePage';

const homePage = new HomePage();
const basePage = new LayoutPage();

fixture`Home Page`.page(MP_URL);

test('Should no liquid errors on the page', async () => {
  await basePage.checkLiquidErrors();
});

test('Should information about lack of content', async t => {
  await t
    .expect(homePage.element.noPosts.innerText)
    .eql(homePage.text.noPostsToDisplay);
});

test('Should see title on the page', async t => {
  await t.expect(homePage.element.heroTitle).ok();
});

test('Should footer on the page', async t => {
  await t.expect(homePage.element.footer).ok();
});
