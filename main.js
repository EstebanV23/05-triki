import Bot from './models/Bot'
import Triki from './models/Triki'
import { createLayout } from './rendersApp'
import './style.css'

const gridDefault = 3
let turnActive = 1
const _ = className => document.querySelectorAll(className)
const $ = id => document.getElementById(id)

const startGame = () => {
  const triki = new Triki(gridDefault)
  const bot = new Bot(gridDefault)
  return { triki, bot }
}

const 

const prepateLayout = () => {
  const { triki, bot } = startGame()
  const layout = triki.gameSpace.map(cell => createLayout(cell)).flat().join('')
  $('app').innerHTML = layout
}

$('startGame').addEventListener('click', prepateLayout)
