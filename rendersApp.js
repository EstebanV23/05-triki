/**
   * @param {String[]} cells
  */
function createLayout (cells) {
  return cells.map(cell => '<div class="space-game"></div>')
}

export { createLayout }
