export default class Piece {
    constructor(player, iconName, iconColour) {
        this.player = player;
        this.style = {
            name: iconName,
            colour: iconColour,
        }
    }
}