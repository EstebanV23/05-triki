import Game from './public/models/Game'
import { createLayout, renderWinner } from './rendersApp'
import './style.css'

const gridDefault = 3
const turnActive = 1

const _ = className => document.querySelectorAll(className)
const $ = id => document.querySelector(id)
const winnerDOM = $('#winner')

const startGame = () => {
  const game = new Game(gridDefault)
  const triki = game.triki.gameSpace
  return { triki, game }
}

const prepateLayout = () => {
  const { triki, game } = startGame()
  const trikiCells = triki.flat()
  const layout = createLayout(trikiCells, gridDefault).join('')
  $('#app').innerHTML = layout
  addEventToLayout(game)
}

/**
   * @param {Game} game
  */
const addEventToLayout = (game) => {
  _('.space-game').forEach((divGame) => {
    divGame.addEventListener('click', () => {
      const [x, y] = divGame.dataset.positionGrid.split(', ')
      game.generateMoveTurn(x, y)
      renderWinner(game.gameEnd)
    })
  })
}

$('#restartGame').addEventListener('click', () => {
  $('#winner').classList.remove('view')
  prepateLayout()
})

prepateLayout()
