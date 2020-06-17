import Piece from './Piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, "chess-bishop", (player === 1 ? "white" : "black"));
    }

    isMovePossible(src, dest) {
        return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
    }

    /**
     * get path between src and dest (src and dest exclusive)
     * @param  {num} src  
     * @param  {num} dest 
     * @return {[array]}      
     */
    getSrcToDestPath(src, dest) {
        let path = [], pathStart, pathEnd, incrementBy;
        if (src > dest) {
            pathStart = dest;
            pathEnd = src;
        }
        else {
            pathStart = src;
            pathEnd = dest;
        }
        if (Math.abs(src - dest) % 9 === 0) {
            incrementBy = 9;
            pathStart += 9;
        }
        else {
            incrementBy = 7;
            pathStart += 7;
        }

        for (let i = pathStart; i < pathEnd; i += incrementBy) {
            path.push(i);
        }
        return path;
    }
}