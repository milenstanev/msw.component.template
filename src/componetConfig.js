/**************************************************
 *** @namespace general component settings
 **************************************************/
/**
 * @desc Name space of this component
 * @example app.feature, app will be the object/component from type {angular.Module} which will use as dependency this component
 * @type {string}
 */
export const NAMESPACE = 'prefix'
/**
 * @desc Component name
 * @type {string}
 */
export const COMPONENT_NAME = 'component'
/**
 * @desc Component name caps
 * @type {string}
 */
export const COMPONENT_NAME_CAPS = 'Component'


/**************************************************
 *** @namespace component specifics and settings
 **************************************************/
/**
 * @desc Define which presentation framework will be used.
 * @example Currently the settings will be:
 *  - Angular Material : angular/material
 *  - Angular Strap    : mgcrea/angular-strap
 * @TODO create make file or something
 */
export const UI_FRAMEWORK = 'angular/material' // github: mgcrea/angular-strap, github: angular/material

