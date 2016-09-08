import angular from 'angular'
import 'angular-ui/ui-router'

import * as componentConfig from './componentConfig.js'
import './component.css!'
import componentHtml from './component.html!text'
import componentRoutes from './component.config.js'
import ComponentSvc from './component.Svc.js'
import ComponentCtrl from './component.Ctrl.js'
import ComponentDirective from './component.Directive.js'

/**
 * @desc Angular module name: prefix.component, description: desc
 * @type {angular.Module} AngularModule
 *
 * @param {string} [name] - Module name
 * @param {Array} [dependencies] - Module decencies
 *
 * @example usage with directive: <div prefix-component></div>
 * @example usage with controller/template: <div ng-controller="ComponentCtrl as ctrl" ng-include="'componentHtml'"></div>
 *
 * @property {angular.Module#constant} componentSettings - Module settings
 * @property {angular.Module#run}  - Put module template in $templateCache .etc
 * @property {angular.Module#config} - Doing routes, resolve services .etc
 * @property {angular.Module#controller} componentCtrl - Define module controller
 * @property {angular.Module#service} componentSvc - Define module services
 * @property {angular.Module#directive} prefix-component - Define directive which can present the module view
 * @info TODO: change it somehow
 *  - The {cost} to which is assigned module instance is not good practice according good practices from @url https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules,
 *    but otherwise we will lose documentation
 */
const component = angular.module(`${componentConfig.NAMESPACE}.${componentConfig.COMPONENT_NAME}`, [
  'ui.router'
])

// TODO: overwrite via parent component componentConfig, in order to make chain configuration.
//debugger
component.constant(`${componentConfig.COMPONENT_NAME}Settings`, componentConfig)

component.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put(`${componentConfig.COMPONENT_NAME}Html`, componentHtml)
  }
])

component.config(componentRoutes)

component.controller(`${componentConfig.COMPONENT_NAME_CAPS}Ctrl`, ComponentCtrl)

component.service(`${componentConfig.COMPONENT_NAME}Svc`, ComponentSvc)

component.directive(`${componentConfig.NAMESPACE}${componentConfig.COMPONENT_NAME_CAPS}`, () => {
  return new ComponentDirective()
})

export default component

