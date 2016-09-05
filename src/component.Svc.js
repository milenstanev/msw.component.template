import ComponentDataModel from './component.DataModel.js'
/**
 * Description
 */
class ComponentSvc {
  constructor () {
    this.dataProvider = []

    this.init()
  }

  init () {
    this.dataProvider.push(new ComponentDataModel())
  }
}

ComponentSvc.$inject = []

export default ComponentSvc
