import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'

export default function Square(props) {
    var piece;
    if (props.style) {
        piece = (
            <Icon
                name={props.style.name}
                type='font-awesome-5'
                color={props.style.colour} />
        )
    }
    return (
        <View>
            <TouchableOpacity
                onClick={props.onClick}
                style={{
                    backgroundColor: props.shade,
                    fontSize: 24,
                    fontWeight: 'bold',
                    lineHeight: 34,
                    height: 48,
                    marginRight: -1,
                    marginTop: -1,
                    textAlign: 'left',
                    width: 48,
                }}
            >
                {piece}

            </TouchableOpacity>


        </View>
    );
}
/*
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderWidth: 1,
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 34,
        height: 48,
        marginRight: -1,
        marginTop: -1,
        padding: '0',
        textAlign: 'left',
        width: 48
*/