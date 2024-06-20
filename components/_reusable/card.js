import React from 'react';
import { View } from 'react-native'

export default class Card extends React.Component {
  render() {
    return (
        <View className="bg-main rounded-2xl py-6 px-6">
          { this.props.children }
        </View>
    )
  }
}