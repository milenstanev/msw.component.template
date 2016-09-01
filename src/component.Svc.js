import ComponentDataModel from './component.DataModel.js'

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
