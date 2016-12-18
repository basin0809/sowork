/**
 * Created by basin on 12/17/2016.
 */
var Reflux = require('reflux');

var UserNotificationsActions = Reflux.createActions([
    'fetchNotifications',
    'clearNotifications'
]);

module.exports = UserNotificationsActions;
