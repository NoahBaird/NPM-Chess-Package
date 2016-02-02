/**
 * Creates a new square to be used on the board
 *  @class Represents a board square. 
 * @constructor
 */
function Square() {
    this.piece = {};
}

/**
 * Creates a new Piece.
 * @class Represents a piece. 
 * @constructor
 */
function Piece() {
    this.color = "";
    this.symbol = "";
    this.id = "";
    this.movement = null;
    this.moves = 0;
    this.xCoor = 0;
    this.yCoor = 0;
}

/**
 *  Creates a new Pawn.
 *  @class Represents a pawn piece. 
 * @constructor
 */
function Pawn(color, id, xCoor, yCoor) {
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.color = color;
    this.symbol = "P";
    this.id = id;
    this.movement = function (orgPos, endPos) {

    };
}

Pawn.prototype = new Piece();

/**
 * Creates a new Rook.
 * @class Represents a rook piece. 
 * @constructor
 */
function Rook(color, id, xCoor, yCoor) {
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.color = color;
    this.symbol = "R";
    this.id = id;
    this.movement = function (orgPos, endPos) {

    };
}

Rook.prototype = new Piece();

/**
 * Creates a new Bishop.
 * @class Represents a bishop piece.
 * @constructor 
 */
function Bishop(color, id, xCoor, yCoor) {
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.color = color;
    this.symbol = "B";
    this.id = id;
    this.movement = function (orgPos, endPos) {

    };
}

Bishop.prototype = new Piece();

/**
 * Creates a new Knight.
 * @class Represents a knight piece. 
 * @constructor
 */
function Knight(color, id, xCoor, yCoor) {
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.color = color;
    this.symbol = "N";
    this.id = id;
    this.movement = function (orgPos, endPos) {

    };
}

Knight.prototype = new Piece();

/**
 * Creates a new Queen.
 * @class Represents a queen piece. 
 * @constructor
 */
function Queen(color, id, xCoor, yCoor) {
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.color = color;
    this.symbol = "Q";
    this.id = id;
    this.movement = function (orgPos, endPos) {

    };
}

Queen.prototype = new Piece();

/**
 * Creates a new King.
 * @class Represents a king piece. 
 * @constructor
 */
function King(color, id, xCoor, yCoor) {
    this.xCoor = xCoor;
    this.yCoor = yCoor;
    this.color = color;
    this.symbol = "K";
    this.id = id;
    this.movement = function (orgPos, endPos) {

    };
}

King.prototype = new Piece();
