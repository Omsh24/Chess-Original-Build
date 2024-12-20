class Piece{
    constructor(type, color){
        this.type = type
        this.color = color
    }

    step(val){
        if(val){
            console.log(`Can Travel`)
            return true;
        }
        else{
            console.log(`Cannot Travel`)
            return false
        }
    }
}

class Pawn extends Piece{
    constructor(color, id){
        super("pawn", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
    step(board, from, to) {
        console.log(`this works for pawn`)
        if(from.row - 1 == to.row){
            board[to.row][to.col] = this;
            board[from.row][from.col] = null
            console.log(`Piece moved`)
            return true;
        }
    
        console.error("Invalid move!");
        return false;
    }
}

class Rook extends Piece{
    constructor(color, id){
        super("rook", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
}

class Bishop extends Piece{
    constructor(color, id){
        super("bishop", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
}

class Knight extends Piece{
    constructor(color, id){
        super("knight", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
}

class Queen extends Piece{
    constructor(color, id){
        super("queen", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
}

class King extends Piece{
    constructor(color, id){
        super("king", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
}

export { Piece, King, Pawn, Rook, Bishop, Knight, Queen};