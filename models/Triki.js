class Triki {
  valuesCorrects = ['O', 'X']

  constructor (matrixNum) {
    this.gameSpace = []
    for (let i = 0; i < matrixNum; i++) {
      this.gameSpace[i] = new Array(matrixNum).fill('')
    }
  }

  isEmpty (positionX, positionY) {
    const cell = this.gameSpace[positionX][positionY]
    if (cell === undefined) throw new Error('The cell selected not found')
    return cell === ''
  }

  findWinner () {
    const objCellsLines = {
      rowsCells: [],
      columnsCells: [],
      diagonalCells: []
    }
    const endGameSpace = this.gameSpace.length - 1
    for (let i = 0; i <= endGameSpace; i++) {
      const columnTemp = []
      const diagonalTemp = []
      objCellsLines.rowsCells.push(this.gameSpace[i])
      for (let j = 0; j <= endGameSpace; j++) {
        columnTemp.push(this.gameSpace[j][i])
        objCellsLines.diagonalCells.length === 0
          ? diagonalTemp.push(this.gameSpace[j][j])
          : diagonalTemp.push(this.gameSpace[j][endGameSpace - j])
      }
      objCellsLines.diagonalCells.push(diagonalTemp)
      objCellsLines.columnsCells.push(columnTemp)
    }
    const results = Object.values(objCellsLines)
      .flat(1)
      .map(lineCell => this.winnerInline(lineCell))
    if (results.every(result => result === 0) && this.endGame()) return 'Draw'
    if (results.some(result => result === 1)) return 'You'
    if (results.some(result => result === -1)) return 'Bot'
    return 'Continue'
  }

  winnerInline (lineCells) {
    let valueCellSelect = ''
    let inLineValues = 1
    for (const cell of lineCells) {
      if (cell === '') continue

      valueCellSelect === cell
        ? inLineValues++
        : valueCellSelect = cell
    }
    if (inLineValues < 3) return 0
    if (valueCellSelect === 'X') return 1
    return -1
  }

  endGame () {
    for (const cells of this.gameSpace) {
      const cellEmpty = cells.some(cell => cell === '')
      if (cellEmpty) return false
    }
    return true
  }

  verifyCorrectValue (value) {
    return this.valuesCorrects.includes(value)
  }

  insertValueCell (positionX, positionY, value) {
    const emptyCell = this.isEmpty(positionX, positionY)
    if (!emptyCell) return false
    if (!this.verifyCorrectValue(value)) throw new Error('The value is not correct')
    this.gameSpace[positionX][positionY] = value
    const isWinnerOne = this.findWinner()
    return isWinnerOne
  }
}

export default Triki
