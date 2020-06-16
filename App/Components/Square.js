import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import SvgUri from 'react-native-svg-uri';


export default function Square(props) {
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
                <SvgUri
                    width="48"
                    height="48"
                    source={{ uri: 'https://image.flaticon.com/icons/svg/888/888704.svg' }}
                />
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