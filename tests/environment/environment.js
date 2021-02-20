export const MP_URL =
  process.env.MP_URL || 'https://uipath-go-qa.staging-oregon.near-me.com/';
// export const COMMUNITY_URL =
//   process.env.COMMUNITY_URL ||
//   'https://uipath-community-qa.staging-oregon.near-me.com/';
export const USERDATA = process.env.DATA_GUI || {
  NAME: 'test_user',
  LASTNAME: 'qa',
  USER_EMAIL: `test+${+new Date ()}@example.com`,
  PASSWORD: 'password',
};
