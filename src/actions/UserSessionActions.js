/**
 * Created by basin on 12/17/2016.
 */
var Reflux = require('reflux');

var UserSessionActions = Reflux.createActions([
    'login',
    'logout',
    'signup',
    'fetchCurrentUser'
]);

module.exports = UserSessionActions;