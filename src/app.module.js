//angular = require('angular');
//require('angular-ui-router');
//require('angulartics');
//require('angulartics-google-analytics');
require('lodash');
require('./app.route');
require('./common/analytics.service');
require('./main/step-1.controller');
require('./main/step-2.controller');
require('./main/step-3.controller');

export default require('angular').module('app', ['angular-ui-router', 'angulartics', 'angulartics-google-analytics']).name;

window.alert('test');