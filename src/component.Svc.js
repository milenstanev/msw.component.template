import DataProvider from './components/DataProvider.js'
import ComponentDataModel from './component.DataModel.js'
/**
 * ComponentSvc reference
 * @type {undefined|ComponentSvc}
 */
let svc

/**
 * ComponentSvc
 * @desc ComponentSvc description
 */
class ComponentSvc {
  constructor () {
    svc = this

    /**
     * @desc viewData have to contain view data
     * @type {DataProvider}
     */
    this.viewData = new DataProvider()

    this.init()
  }

  /**
   * @desc
   *  - Instantiate the service
   *  - Doing new instance of {ComponentDataModel} and put it in {this.viewData}
   */
  init () {
    this.viewData.onPush = (data) => {
      console.log(data)

      if (!data) {
        svc.viewData.removeString()
      }
    }

    /* this.viewData.push(new ComponentDataModel())
    this.viewData.push(new ComponentDataModel())
    this.viewData.push(new ComponentDataModel()) */

    /* this.viewData.push('1')
    this.viewData.push('2')
    this.viewData.push('3') */

    this.viewData.push({asd: 'asd1', qwe: 'qwe'})
    this.viewData.push({asd: 'asd2', qwe: 'qwe'})
    this.viewData.push({asd: 'asd3', qwe: 'qwe'})
  }
}

ComponentSvc.$inject = []

export default ComponentSvc
