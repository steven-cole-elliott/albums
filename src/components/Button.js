import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        // stretch to fill the limits of the container
        // telling it to align itself using flex property of 'stretch'
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5, borderWidth: 1, 
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;