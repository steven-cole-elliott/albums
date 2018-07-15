/*
  Show a header in the device with some text
*/

// Import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    display: 'flex',
    justifyContents: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}

// Make the component availabe to other parts of the app
export default Header;