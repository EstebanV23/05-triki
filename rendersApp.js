/**
   * @param {String[]} cells
  */
function createLayout (cells, numberGrid) {
  let i = 0
  let j = 0
  return cells.map(_ => {
    const div = `<div class="space-game" data-position-grid="${i}, ${j}"></div>`
    j++
    if (j > numberGrid - 1) {
      i++
      j = 0
    }
    return div
  })
}

function renderPick (x, y, value) {
  document.querySelectorAll('.space-game').forEach(item => {
    if (item.dataset.positionGrid === `${x}, ${y}`) item.innerHTML = value
  })
}

function renderWinner (gameEnd) {
  if (gameEnd) {
    const winner = document.getElementById('winner')
    winner.innerHTML = gameEnd
    winner.classList.add('view')
  }
}

export { createLayout, renderPick, renderWinner }
