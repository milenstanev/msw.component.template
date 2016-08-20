import angular from 'angular';
import 'angular-ui/ui-router';

import componentConfig from './config/componentConfig.js';
import componentHtml from './views/component.html!text';
import ComponentCtrl from './controllers/ComponentCtrl.js';
import componentDirective from './directives/componentDirective.js';

const component = angular.module('prefix.component', [
  'ui.router'
]);

component.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put('componentHtml', componentHtml);
  }
]);

//If it's necessary
component.config(componentConfig);

component.controller('componentCtrl', ComponentCtrl);

component.directive('componentName', componentDirective);

export { component };

