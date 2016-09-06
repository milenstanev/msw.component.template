/**
 * ComponentCtrl Referance
 * @type {undefined|ComponentCtrl}
 */
let ctrl

/**
 * @desc Component controller constructor
 */
class ComponentCtrl {
  /**
   * @desc Constructor
   * @param {angular.Module#service} componentSvc - Contain {DataProvider} instance which wrapp view data
   * @param {angular.$scope} $scope
   */
  constructor (componentSvc, $scope) {
    ctrl = this

    /**
     * @desc viewData
     *  - Contain
     * @property {DataProvider} Name - Description of the {DataProvider}
     * @type {DataProvider}
     */
    this.viewData = componentSvc.viewData
  }
  /**
   * @desc This method will remove all records from {{ctrl.viewData}}
   */
  removeData () {
    // this.viewData.removeAll()
    ctrl.viewData.removeObjectByRef(ctrl.viewData[1])
    // this.viewData.removeString('1')
    // this.viewData.removeByObjectInObject({asd: 'asd2'})
  }
}

ComponentCtrl.$inject = ['componentSvc', '$scope']

export default ComponentCtrl

