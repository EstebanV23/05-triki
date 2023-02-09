import Triki from './Triki'

class Person {
  defaultValue = 'X'
  /**
   * @param {Triki} triki
   */
  constructor (triki) {
    this.triki = triki
  }

  generateMakeMove (positionX, positionY) {
    const move = this.triki.insertValueCell(positionX, positionY, this.defaultValue)
    return move
  }
}

export default Person
