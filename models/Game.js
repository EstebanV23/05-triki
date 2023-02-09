import Bot from './Bot'
import Person from './Person'
import Triki from './Triki'

class Game {
  turn = 1
  gameEnd = false

  /**
   *
   * @param {Triki} triki
   * @param {Bot} bot
   * @param {Person} person
   */
  constructor (grid) {
    this.triki = new Triki(grid)
    this.bot = new Bot(this.triki, grid)
    this.person = new Person(this.triki)
  }

  generateMoveTurn (positionX, positionY) {
    if (this.gameEnd) return
    const resultPerson = this.person.generateMakeMove(positionX, positionY)
    if (!resultPerson) return
    this.gameFinished(resultPerson)
    const resultBot = this.bot.generateTurn(this.gameEnd)
    this.gameFinished(resultBot)
  }

  gameFinished (condition) {
    if (condition !== 'Continue') {
      this.gameEnd = true
      return true
    }

    return false
  }
}

export default Game
