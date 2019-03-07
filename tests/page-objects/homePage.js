import {
  Selector
} from 'testcafe';
import BasePage from './basePage';

const basePage = new BasePage();

export default class HomePage {
  constructor() {
    this.text = {
      noPostsToDisplay: 'There are no posts to display',
    };
    this.element = {
      logo: basePage.Content.find('img[src*="images"]'),
      tagline: Selector('hero'),
      noPosts: Selector('#content > h4'),
      heroTitle: Selector('hero__title'),
      footer: Selector('footer'),
    };
    this.navigation = {
      menu: Selector('#user-nav-toggler'),
      dashboard: Selector('a').withText('Dashboard'),
      login: Selector('a').withText('Log In'),
    };
    this.button = {
      submit: Selector('button[type="submit"]'),
    };
  }
}
