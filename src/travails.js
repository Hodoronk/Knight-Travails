const createBoard = () => {
    const board = []
    let x = 0;
    for(let i = 0; i < 8; i++) {
        for(let x = 0; x< 8; x++) {

            board.push([i, x])
        }

    }
    return board
}
const board = createBoard()
console.log(board)


