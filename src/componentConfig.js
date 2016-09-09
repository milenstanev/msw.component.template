/**************************************************
 *** @namespace general component settings
 **************************************************/
/**
 * @desc Name space of this component
 * @example app.feature, app will be the component {angular.Module} which will use as dependency this component.
 * @type {string}
 */
export const NAMESPACE = 'prefix'
/**
 * @desc Component name
 * @type {string}
 */
export const COMPONENT_NAME = `component`
/**
 * @desc Component name caps
 * @type {string}
 */
export const COMPONENT_NAME_CAPS = 'Component'
/**
 * @desc
 * @type {string}
 */
export const DIRECTIVE_NAME = `${NAMESPACE}-${COMPONENT_NAME}`

export const DIRECTIVE_NAME_CAPS = `${NAMESPACE}${COMPONENT_NAME_CAPS}`

export const SERVICE_NAME = `${COMPONENT_NAME}Svc`

export const CONTROLLER_NAME = `${COMPONENT_NAME_CAPS}Ctrl`

export const COMPONENT_CONFIG_NAME = `${COMPONENT_NAME}Settings`

export const COMPONENT_TEMPLATE_NAME = `${COMPONENT_NAME}Html`