class Piece{
    constructor(type, color){
        this.type = type
        this.color = color
    }

    step(from, to, board){
        true;
    }
}

class Pawn extends Piece{
    constructor(color, id){
        super("pawn", color)
        this.id = id
    }
}

class Rook extends Piece{
    constructor(color, id){
        super("rook", color)
        this.id = id
    }
}

class Bishop extends Piece{
    constructor(color, id){
        super("bishop", color)
        this.id = id
    }
}

class Knight extends Piece{
    constructor(color, id){
        super("knight", color)
        this.id = id
    }
}

class Queen extends Piece{
    constructor(color){
        super("queen", color)
    }
}

class King extends Piece{
    constructor(color){
        super("king", color)
    }
}

export { Piece, King, Pawn, Rook, Bishop, Knight, Queen};