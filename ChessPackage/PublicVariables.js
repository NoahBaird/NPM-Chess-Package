var Global = {
    // Holds a char representing whose turn it is
    turn: 'w',
    // Contains indication of which pieces have used their castling abilty
    castling: "KQkq",
    // Indicates whether any square can be used in an en passant move this turn
    enPassant: "-",
    // The number of moves that the white player has used
    whiteTurnCount: 1,
    // The number of moves that the black player has used
    blackTurnCount: 1,
    // The number of half moves that the white player has used for use in compling with the 50 move draw rule
    whiteHalfMoveCount: 0,
    // The number of half moves that the black player has used for use in compling with the 50 move draw rule
    blackHalfMoveCount: 0,
    // Returns the number of half moves used by the player whose turn it is currently
    getHalfMovesCount: function () {
        if (Global.turn == 'w') {
            return Global.whiteHalfMoveCount;
        }
        return Global.blackHalfMoveCount;
    },
    // Returns the number of turns used by the player whose turn it is currently
    getTurnCount: function () {
        if (Global.turn == 'w') {
            return Global.whiteTurnCount;
        }
        return Global.blackTurnCount;
    }
};