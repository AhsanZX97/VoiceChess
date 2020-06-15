import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Square from './Square.js';

export default class Board extends React.Component {

    renderSquare(i, squareShade) {
        return <Square
            piece={this.props.squares[i]}
            style={this.props.squares[i] ? this.props.squares[i].style : null}
            shade={squareShade}
            onClick={() => this.props.onClick(i)}
        />
    }

    render() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            const squareRows = [];
            for (let j = 0; j < 8; j++) {
                const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "rgba(234,240,206, 0.8)" : "rgba(187,190,100, 0.8)";
                squareRows.push(this.renderSquare((i * 8) + j, squareShade));
            }
            board.push(<View style={{
                flexDirection: 'row'
            }}>{squareRows}</View>)
        }

        return (
            <View>
                {board}
            </View>
        );
    }
}

function isEven(num) {
    return num % 2 == 0
}

/*import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square'


export default class Board extends Component {

    render() {
        return (
            <View style={styles.container} >
                <Text> First page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});*/


// rgba(234,240,206, 0.8)  rgba(187,190,100, 0.8)