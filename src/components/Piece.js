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
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }

    step(from, to, board){

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