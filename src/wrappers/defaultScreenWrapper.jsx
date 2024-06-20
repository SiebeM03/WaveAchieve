import { View } from 'react-native'

const DefaultScreenWrapper = ({ children }) => {
  return (
      <View className="p-2">
        { children }
      </View>
  );
}

export default DefaultScreenWrapper;