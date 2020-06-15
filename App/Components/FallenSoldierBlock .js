import React from 'react';
import Square from './Square.js';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class FallenSoldierBlock extends React.Component {

    renderSquare(square, i, squareShade) {
        return <Square
            piece={square}
            style={square.style}
        />
    }

    render() {
        return (
            <View>
                <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
                    this.renderSquare(ws, index)
                )}</div>
                <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
                    this.renderSquare(bs, index)
                )}</div>
            </View>
        );
    }
}