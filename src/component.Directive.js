import componentHtml from './component.html!text'
import ComponentCtrl from './component.Ctrl.js'
/**
 * Description Directive
 */
class ComponentDirective {
  /**
   * Description constructor directive settings
   */
  constructor () {
    /**
     * scope/context ...
     * @type {boolean}
     */
    this.scope = true
    /**
     * Controller prefix in the template
     * @type {string}
     */
    this.controllerAs = 'ctrl'
    /**
     * Directive template
     * @type {string}
     */
    this.template = componentHtml
    /**
     * Directive controller
     * @type {ComponentCtrl}
     */
    this.controller = ComponentCtrl
  }
}

export default ComponentDirective

