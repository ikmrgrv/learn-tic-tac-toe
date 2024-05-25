const boardContainer = document.getElementById('board-container')

const getStartState = function () {
  return [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]
}

const createUIElement = function (elementType = 'div', attributes = {}, children = []) {
  const element = document.createElement(elementType)

  Object.entries(attributes).forEach(attr => {
    element.setAttribute(attr[0], attr[1])
  })

  children.forEach(child => element.appendChild(child))

  return element
}

const boardState = getStartState()

const renderBoard = function (gameState, boardContainerRef) {
  
  const boardChildren = []
  gameState.reduce((children, row) => {
    children.push(createBoardRow(row))
    return children
  }, boardChildren)

  const board = createUIElement('div', {
    class: 'board'
  }, boardChildren)

  
  boardContainerRef.innerHTML = null
  boardContainerRef.appendChild(board)


  return board
}

const createBoardRow = function (boardRow) {
  const rowChildren = []
  boardRow.reduce((row, piece) => {
    row.push(createBoardPiece(piece))
    return row
  }, rowChildren)

  const row = createUIElement('div', {
    class: 'boardRow'
  }, rowChildren)


  return row

}

const createBoardPiece = function (boardPiece) {
  // piece.innerText = boardPiece
  const piece = createUIElement('div', {
    class: 'boardPiece flex justify-center items-center w-20 h-20'
  }, [document.createTextNode(boardPiece)])

  return piece
}

renderBoard(boardState, boardContainer)
