import { Text, View } from 'react-native';

export default function TodoScreen({ children }) {
  return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold">TODO</Text>
        { children && (
            <Text> { children }</Text>
        ) }
      </View>
  )
}