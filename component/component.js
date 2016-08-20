import * as config from './config.js';
import './component.css!';
import componentHtml from './component.html!text';
import componentConfig from './component.config.js';
import ComponentSvc from './component.Svc.js';
import ComponentCtrl from './component.Ctrl.js';
import componentDirective from './component.directive.js';

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

export { component as default };

