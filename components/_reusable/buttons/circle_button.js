import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default class CircleButton extends React.Component {
  render() {
    let localStyles = styles(this.props)
    // TODO make tailwind
    return (
        <View style={ localStyles.container }>
          <TouchableOpacity style={ localStyles.button }
                            onPress={ this.props.onPress }>
            { this.props.children }
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = (props) => StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 0,
  },
  button: {
    backgroundColor: props.buttonColor ?? 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: (props.size / 2) ?? 20,
    width: props.size ?? 40,
    height: props.size ?? 40,
  },
})