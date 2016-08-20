import * as config from './config/config.js';
import angular from 'angular';
import 'angular-ui/ui-router';

import './assets/component.css!';
import componentConfig from './config/componentConfig.js';
import componentHtml from './views/component.html!text';
import ComponentSvc from './services/ComponentSvc.js';
import ComponentCtrl from './controllers/ComponentCtrl.js';
import componentDirective from './directives/componentDirective.js';
///console.log(config)

/**
 * Module Desc .etc
 * @type {angular.Module | prefix.component}
 */
const component = angular.module(`${config.NAMESPACE}.${config.COMPONENT_NAME}`, [
  'ui.router'
]);

/**
 * Component config
 */
component.constant(`${config.COMPONENT_NAME}Config`, config);

/**
 * Component run
 */
component.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put(`${config.COMPONENT_NAME}Html`, componentHtml);
  }
]);

/**
 * routes If it's necessary
 */
component.config(componentConfig);

/**
 * Component main ctrl
 */
component.controller(`${config.COMPONENT_NAME}Ctrl`, ComponentCtrl);

/**
 * Component main service
 */
component.controller(`${config.COMPONENT_NAME}Svc`, ComponentSvc);

/**
 * Component main directive
 */
component.directive(`${config.NAMESPACE}${config.COMPONENT_NAME_caps}`, componentDirective);

export { component };

