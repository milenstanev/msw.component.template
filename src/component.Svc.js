import angular from 'angular'
import ComponentDataModel from './component.DataModel.js'

/**
 * @desc
 *  - Find item number for object in object
 *  - Use public method {@link DataProvider.findItemNumberForObjectInObject}
 *  - It's designed to be used with borrowing scope!
 */
function findItemNumberForObjectInObject (obj) {
  let len = this.length

  while (len--) {
    if (typeof this[len] === 'object') {
      let objKey
      let itemsBuffer = this[len]

      for (let key in itemsBuffer) {
        objKey = Object.keys(obj)[0]

        if (objKey === key && obj[objKey] === itemsBuffer[key]) {
          return len
        }
      }
    }
  }

  return undefined
}

/**
 * @desc
 *  - Data Provider
 *  - Extends regular array in order to provide augmented methods and properties
 * @typedef {DataProvider} DataProvider
 */
class DataProvider extends Array {
  /**
   * @desc Remove all items from collection
   */
  removeAll () {
    while (this.length) {
      this.shift()
    }
    return this
  }

  /**
   * @desc Remove string
   */
  removeString (arg) {
    let isAnyItem = this.indexOf(arg)

    if (isAnyItem !== -1) {
      return this.splice(isAnyItem, 1)
    } else {
      return undefined
    }
  }

  /**
   * @desc Remove object by reference or deep copy
   * @param {Object} obj {}
   */
  removeObjectByRef (obj) {
    let len = this.length

    while (len--) {
      if (angular.equals(this[len], obj)) return this.splice(len, 1)
    }

    return undefined
  }

  /**
   * @desc Remove object by object in object
   * @param {object} obj
   * @example {prop: 'value'} from [{prop: 'value', other: 'value'}, {prop: 'value2', other: 'value2'}]
   */
  removeByObjectInObject (obj) {
    let itemNumber = this.findItemNumberForObjectInObject(obj)

    if (itemNumber) {
      return this.splice(itemNumber, 1)
    } else {
      return undefined
    }
  }

  /**
   * Find item number for object in object
   * @param {object} obj
   * @example {prop: 'value'} from [{prop: 'value', other: 'value'}, {prop: 'value2', other: 'value2'}]
   * @returns {number}
   */
  findItemNumberForObjectInObject (obj) {
    let itemNumber = findItemNumberForObjectInObject.call(this, obj)

    if (itemNumber) return itemNumber
  }

  /**
   * It's defined to be overwrite if it's necessary
   * @abstract
   */
  onPush (data) {}

  /**
   * @desc It's defined for abstract method {onPush}
   * @param data
   */
  push (data) {
    super.push(data)
    this.onPush(data)
  }
}

/**
 * @desc ComponentSvc description
 */
class ComponentSvc {
  constructor () {
    /**
     * @desc dataProvider have to contain view data
     * @type {DataProvider}
     */
    this.dataProvider = new DataProvider()

    this.init()
  }

  /**
   * @desc
   *  - Instantiate the service
   *  - Doing new instance of {ComponentDataModel} and put it in {dataProvider}
   */
  init () {
    this.dataProvider.onPush = (data) => {
      console.log(data)
    }

    /* this.dataProvider.push(new ComponentDataModel())
    this.dataProvider.push(new ComponentDataModel())
    this.dataProvider.push(new ComponentDataModel()) */

    /* this.dataProvider.push('1')
    this.dataProvider.push('2')
    this.dataProvider.push('3') */

    this.dataProvider.push({asd: 'asd1', qwe: 'qwe'})
    this.dataProvider.push({asd: 'asd2', qwe: 'qwe'})
    this.dataProvider.push({asd: 'asd3', qwe: 'qwe'})
  }
}

ComponentSvc.$inject = []

export default ComponentSvc
