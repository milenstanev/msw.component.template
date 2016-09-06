/**
 * @desc Component controller constructor
 */
class ComponentCtrl {
  /**
   * @desc Constructor
   * @param {angular.Module#service} componentSvc
   * @param {angular.$scope} $scope
   */
  constructor (componentSvc, $scope) {
    /**
     * @desc dataProvider have to contain view data
     * @type {angular.Module#service|DataProvider}
     */
    this.dataProvider = componentSvc.dataProvider
  }
  /**
   * @desc This method will remove all records from {dataProvider}
   */
  removeData () {
    // this.dataProvider.removeAll()
    this.dataProvider.removeObjectByRef(this.dataProvider[1])
    // this.dataProvider.removeString('1')
    // this.dataProvider.removeByObjectInObject({asd: 'asd2'})
  }
}

ComponentCtrl.$inject = ['componentSvc', '$scope']

export default ComponentCtrl

