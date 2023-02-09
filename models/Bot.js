import Triki from './Triki'

class Bot {
  defaultValue = 'O'

  /**
   * @param {Number} numMaxCells
   * @param {Triki} triki
  */
  constructor (numMaxCells, triki) {
    this.max = numMaxCells - 1
    this.min = 0
    this.triki = triki
  }

  /**
   * @param {Triki} triki
   * @param {Number} positionX
   * @param {Number} positionY
   * @returns {boolean || string}
  */
  generateMakeMove (positionX, positionY) {
    const move = this.triki.insertValueCell(positionX, positionY, this.defaultValue)
    return move
  }

  /**
   * @returns {Object}
  */
  generatePositions () {
    const positionX = Math.round(Math.random() * (this.max - this.min) + this.min)
    const positionY = Math.round(Math.random() * (this.max - this.min) + this.min)
    return { positionX, positionY }
  }

  generateTurn (gameEnd) {
    if (gameEnd) return
    let makeMove
    do {
      const { positionX, positionY } = this.generatePositions()
      makeMove = this.generateMakeMove(positionX, positionY, this.triki)
    } while (!makeMove)

    return makeMove
  }
}

export default Bot
