import { renderPick } from '../rendersApp'
import Bot from './Bot'
import Person from './Person'
import Triki from './Triki'

class Game {
  turn = 1
  gameEnd = ''

  /**
   *
   * @param {Number} grid
   */
  constructor (grid) {
    this.triki = new Triki(grid)
    this.bot = new Bot(grid, this.triki)
    this.person = new Person(this.triki)
  }

  generateMoveTurn (positionX, positionY) {
    if (this.gameEnd) return
    const resultPerson = this.person.generateMakeMove(positionX, positionY)
    if (!resultPerson) return
    renderPick(positionX, positionY, this.person.defaultValue)
    this.gameFinished(resultPerson)
    const resultBot = this.bot.generateTurn(this.gameEnd)
    if (!this.gameEnd) this.gameFinished(resultBot)
  }

  gameFinished (condition) {
    if (condition !== 'Continue') {
      this.gameEnd = condition
    }
  }
}

export default Game
