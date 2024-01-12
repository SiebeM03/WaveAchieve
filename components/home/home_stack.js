import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import HomeNext from './home_next'
import HomeScreen from './home_screen'
import CircleButton from '../_reusable/buttons/circle_button'

const Stack = createNativeStackNavigator()

export default function HomeStack({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen"
                      component={ HomeScreen }
                      options={ {
                        headerRight: () =>
                            <CircleButton size={ 40 }
                                          onPress={ () => navigation.navigate('TrainingDetails') }>
                              <Text>P</Text>
                            </CircleButton>
                      } }
        />
        <Stack.Screen name="HomeNext"
                      component={ HomeNext }/>
      </Stack.Navigator>
  )
}