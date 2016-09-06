import componentHtml from './component.html!text'
import ComponentCtrl from './component.Ctrl.js'

/**
 * Directive description
 */
class ComponentDirective {
  /**
   * Constructor description | directive settings
   * @param {angular.$scope} scope Description
   */
  constructor (scope) {
    /**
     * Description
     * @type {angular.$scope}
     */
    this.scope = scope || true
    /**
     * Controller prefix in the template
     * @type {string}
     */
    this.controllerAs = 'ctrl'
    /**
     * Directive template
     * @type {html}
     */
    this.template = componentHtml
    /**
     * Directive controller
     * @type {angular.Module#controller}
     */
    this.controller = ComponentCtrl
  }
}

export default ComponentDirective

