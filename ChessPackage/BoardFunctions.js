function Movement() {
    this.parseMoveInput = function(input, movementObject) {

    }
    this.validateMovement = function(movementObject) {
        var xStartPos = movementObject.startPos.piece.xCoor;
        var yStartPos = movementObject.startPos.piece.xCoor;
        var xEndPos = movementObject.endPos.piece.xCoor;
        var yEndPos = movementObject.endPos.piece.yCoor;
        var startPiece = movementObject.startPos.piece;

        switch (startPiece.type) {
            case 'P':
                if (startPiece.color === 'B') {
                    if (yEndPos > (yStartPos + 1)) {
                        if (startPiece.moves > 0) {
                            throw new UserException("Invalid move", "Pawns cannot move more than one square forward");
                        } else if (yEndPos > (yStartPos + 2)) {
                            throw new UserException("Invalid move", "A pawn cannot move more than two squares forward on the first move");
                        }
                    }
                }
                break;
            case 'R':
                code block
                break;
            case 'N':
                code block
                break;
            case 'B':
                code block
                break;
            case 'Q':
                code block
                break;
            case 'K':
                code block
                break;
            default:
            default code block
        }
    }
    return true;
}