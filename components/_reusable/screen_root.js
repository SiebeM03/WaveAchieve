import React from 'react';
import { View } from 'react-native'

export default class ScreenRoot extends React.Component {
  render() {
    return (
        <View className="flex-1 m-4">
          { this.props.children }
        </View>
    )
  }
}