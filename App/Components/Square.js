import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Square extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            piece: undefined
        }
        if (this.props.style) {
            this.setState({
                piece: (
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginBottom: 2
                    }}>
                        <Icon
                            name={props.style.name}
                            type='font-awesome-5'
                            color={props.style.colour}
                            size={30} />
                    </View>
                )
            })
        }
    }


    render() {

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
                    {this.state.piece}
                </TouchableOpacity>


            </View>
        );
    }
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