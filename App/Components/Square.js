import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Square(props) {
    return (
        <View>
            <Button
                onClick={props.onClick}
                style={styles.square}
                title="wtf">
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
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
    }
});