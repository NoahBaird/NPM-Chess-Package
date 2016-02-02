/**
 * Contains all of the information and methods involved with maintaining and
 * operating the chess board
 */
function Board() {
    this.currentBoard = newBoard();

    /**
     * Creates a new chess board with all the pieces in the starting position for a new game
     *
     * @return Double array of square objects that represents the starting position of the chess board
     */
    function newBoard() {
        var boardArray = new Array(8);
        for (var i = 0; i < 8; i++) {
            boardArray[i] = new Array(8);
        }
        for (var j = 0; j < 8; j++) {
            for (var k = 0; k < 8; k++) {
                boardArray[j][k] = new Square();
            }
        }
        for (var l = 0; l < 8; l++) {
            boardArray[l][1].piece = new Pawn("black", "bP" + (l + 1), l, 1);
            boardArray[l][6].piece = new Pawn("white", "wP" + (l + 1), l, 6);
        }
        boardArray[0][0].piece = new Rook("black", "bR1", 0, 0);
        boardArray[7][0].piece = new Rook("black", "bR2", 7, 0);
        boardArray[0][7].piece = new Rook("white", "wR1", 0, 7);
        boardArray[7][7].piece = new Rook("white", "wR2", 7, 7);
        boardArray[1][0].piece = new Knight("black", "bN1", 1, 0);
        boardArray[6][0].piece = new Knight("black", "bN2", 6, 0);
        boardArray[1][7].piece = new Knight("white", "wN1", 1, 7);
        boardArray[6][7].piece = new Knight("white", "wN2", 6, 7);
        boardArray[2][0].piece = new Bishop("black", "bB1", 2, 0);
        boardArray[5][0].piece = new Bishop("black", "bB2", 5, 0);
        boardArray[2][7].piece = new Bishop("white", "wB1", 2, 7);
        boardArray[5][7].piece = new Bishop("white", "wB2", 5, 7);
        boardArray[3][0].piece = new Queen("black", "bQ1", 3, 0);
        boardArray[3][7].piece = new Queen("white", "wQ1", 3, 7);
        boardArray[4][0].piece = new King("black", "bK1", 4, 0);
        boardArray[4][7].piece = new King("white", "wK1", 4, 7);

        return boardArray;
    }

    /**
     * This method generates a URL of an image representing the current layout of the board.
     * It does this by determining the current steate of the board using Forsyth-Edwards Notation (FEN)
     * https://chessprogramming.wikispaces.com/Forsyth-Edwards+Notation
     *
     * @param Double array of square objects that represents the current state of the board
     * @return A URL of an image that displays the current state of the board
     */
    function printBoard(board) {
        var FENCode = "";

        for (var i = 0; i < 8; i++) {
            var blankSquareCount = 0;
            for (var j = 0; j < 8; j++) {
                var piece = board[i][j];
                if (piece.id) {
                    var symbol = piece.symbol;

                    if (blankSquareCount !== 0) {
                        FENCode += blankSquareCount;
                    }

                    if (piece.color == "black") {
                        symbol = symbol.toLowerCase;
                    }
                    FENCode += symbol;
                } else {
                    blankSquareCount++;

                    if (j == 7) {
                        FENCode += blankSquareCount;
                    }
                }
            }
            FENCode += '/';
        }

        FENCode += "%20" + Global.turn + "%20" + Global.castling + "%20" + Global.enPassant + "%20" + Global.getHalfMovesCount() + "%20" + Global.getTurnCount();

        return "http://webchess.freehostia.com/diag/chessdiag.php?fen=" + FENCode + "&size=huge&coord=yes&cap=no&stm=yes&fb=no&theme=smart&color1=BFBCB6&color2=615F5E&color3=000000";
    }

    this.move = function (input) {
        var movementObject = {
            startPos: {
                piece: {}
            },
            endPos: {
                piece: {}
            }
        }
        Movement.parseMoveInput(input, movementObject);
        Movement.validateMovement(movementObject);
    }
}