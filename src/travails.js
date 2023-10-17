


class Tree{
    constructor(array){
        // this.root = this.buildTree(array)
    }

    createBoard() {
        const board = []
        let x = 0;
        for(let i = 0; i < 8; i++) {
            for(let x = 0; x< 8; x++) {
                board.push([i, x])
            }
        }
        return board
    }
    knightCoords(coords, array){
        console.log(array)
        for(let i = 0; i < array.length; i++) {
            if(array[i][0] === coords[0] && array[i][1] === coords[1]) {
                return i;
            }
        }
       return -1
    }
    // buildTree(array){
    //     this.knightCoords()
    // }
}

const myTree = new Tree()
const index = myTree.knightCoords([0,5] , myTree.createBoard())
console.log(index)

















class Node{
    constructor(){

    }
}

