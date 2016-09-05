/**
 * Description
 */
class ComponentCtrl {
  /**
   * Constructor
   * @param {Angular Service} componentSvc description.
   */
  //
  constructor (componentSvc) {
    /**
     * Data buffer
     * @type {array}
     */
    this.dataProvider = componentSvc.dataProvider
  }
}

ComponentCtrl.$inject = ['componentSvc']

export default ComponentCtrl

