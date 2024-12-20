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
    step(board, from, to, color) {
        console.log(`this works for pawn`)
        if(color == "white"){
            // only go up and when the block is empty
            if(from.col == to.col && from.row - 1 == to.row && board[to.row][to.col] == null){
                board[to.row][to.col] = this
                board[from.row][from.col] = null
                console.log(`Piece moved`)
                return true;
            }
        }
        else{
            // only go down
            if(from.col == to.col && from.row + 1 == to.row && board[to.row][to.col] == null){
                board[to.row][to.col] = this
                board[from.row][from.col] = null
                console.log(`Piece moved`)
                return true;
            }
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
    step(board, from, to, color){
        console.log(`Works for Rook`);
        // if moving to the same square
        if(from == to){
            console.error(`Invalid Move`)
            return false;
        }
        // only move in verticle or a straight line
        if(from.row == to.row || from.col == to.col){
            if(from.row == to.row){
                let flag = true;
                for(let i=from.col+1;i<=to.col;i++){
                    if(board[from.row][i] != null){
                        flag = false;
                        break;
                    }
                }
                // there is some piece in between -> not go
                if(!flag){
                    console.error(`Invalid Move`);
                    return false;
                }
                // no piece in between -> go
                else{
                    board[to.row][to.col] = this
                    board[from.row][from.col] = null
                    console.log(`Piece moved`)
                    return true;
                }
            }
            else if(from.col == to.col){
                let flag = true;
                for(let i=from.row+1;i<=to.row;i++){
                    if(board[i][from.col] != null){
                        flag = false;
                        break;
                    }
                }
                // there is some piece in between -> not go
                if(!flag){
                    console.error(`Invalid Move`);
                    return false;
                }
                // no piece in between -> go
                else{
                    board[to.row][to.col] = this
                    board[from.row][from.col] = null
                    console.log(`Piece moved`)
                    return true;
                }
            }
        }
        console.error(`Invalid Move`);
        return false;
    }
}

class Bishop extends Piece{
    constructor(color, id){
        super("bishop", color)
        this.id = id
        let name = this.type[0] + this.color[0] + this.id
        this.name = name
    }
    step(board, from, to, color){
        const { row: fromRow, col: fromCol } = from;
        const { row: toRow, col: toCol } = to;

        // Check if the move is diagonal
        if (Math.abs(fromRow - toRow) !== Math.abs(fromCol - toCol)) {
        console.error("Invalid move: Bishop can only move diagonally.");
        return false;
        }

        // direction of movement
        const rowStep = toRow > fromRow ? 1 : -1; // Move up or down
        const colStep = toCol > fromCol ? 1 : -1; // Move left or right

        // Check if obstacles
        let currentRow = fromRow + rowStep;
        let currentCol = fromCol + colStep;

        while (currentRow !== toRow && currentCol !== toCol) {
        if (board[currentRow][currentCol] !== null) {
            console.error(
            `Invalid move: Path is blocked at (${currentRow}, ${currentCol}).`
            );
            return false; 
        }
        currentRow += rowStep;
        currentCol += colStep;
        }
        const targetPiece = board[toRow][toCol];
        if (targetPiece && targetPiece.color === this.color) {
        console.error("Invalid move: Cannot capture your own piece.");
        return false;
        }
        // Move the bishop
        board[toRow][toCol] = this;
        board[fromRow][fromCol] = null; 

        console.log(`Bishop moved from (${fromRow}, ${fromCol}) to (${toRow}, ${toCol})`);
        return true;
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