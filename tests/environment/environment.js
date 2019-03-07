export const MP_URL =
  process.env.MP_URL || 'https://dcu.qa2-pos.apps.near-me.com/';
export const ADMIN_USER = process.env.ADMIN_USER_GUI || 'jacek+qa@near-me.com';
export const ADMIN_PASS = process.env.ADMIN_PASS_GUI || 'norbert123';
export const USERDATA = process.env.DATA_GUI || {
  NAME: 'test_user',
  LASTNAME: 'qa',
  USER_EMAIL: `test+${+new Date()}@example.com`,
  PASSWORD: 'password',
};
