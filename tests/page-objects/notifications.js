import {
  Selector
} from 'testcafe';

export default class Notifications {
  constructor() {
    this.text = {
      problemWarning: 'There is a problem',
      invalidEmailPass: 'Invalid email or password',
      verifyEmail: 'You have to verify your email before you can log in.',
      removeUser: `You've successfully deleted user`,
      settingsSaved: 'Settings saved',
      removedComment: 'Comment has been removed',
      confirmationCommentRemoved: 'This comment has been removed.'
    };
    this.messageType = {
      commentRemoved: Selector('.comment__body > i'),
      warning: Selector('.form-errors-summary__heading'),
      textDanger: Selector('.error-block.text-danger'),
      globalNotificationAlert: Selector('.global-notifications__notification > .container'),
      successAlert: Selector('.alert.alert-success.my-4 > p '),
      globalNotificationAlertNotice: Selector('.global-notifications__notification.is-notice > .container')
    };
  }
}
