import Piece from './Piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player, "chess-knight", (player === 1 ? "white" : "black"));
    }

    isMovePossible(src, dest) {
        return (src - 17 === dest ||
            src - 10 === dest ||
            src + 6 === dest ||
            src + 15 === dest ||
            src - 15 === dest ||
            src - 6 === dest ||
            src + 10 === dest ||
            src + 17 === dest);
    }

    /**
     * always returns empty array because of jumping
     * @return {[]}
     */
    getSrcToDestPath() {
        return [];
    }
}