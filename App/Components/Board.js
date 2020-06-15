import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square'


export default class Board extends Component {

    render() {
        return (
            <View style={styles.container} >
                <Text> First page</Text>
                <Square shade = "rgba(187,190,100, 0.8)"/>
                <Square shade = "rgba(234,240,206, 0.8)"/>
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
});


// rgba(234,240,206, 0.8)  rgba(187,190,100, 0.8)