import HomeScreen from './home_screen'
import CircleButton from '../_reusable/buttons/circle_button'
import TrainingDetails from '../training/training_details'
import { Text } from 'react-native'
import HomeNext from './home_next'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../../tailwind.config'
import { useEffect } from 'react'
import { StackActions } from '@react-navigation/native'
import { handleStackReset } from '../../utils'

const HomeStack = createNativeStackNavigator()


export default function HomeStackElement({ navigation }) {
  handleStackReset(navigation, 'HomeScreen')

  return (
      <HomeStack.Navigator screenOptions={ { contentStyle: { backgroundColor: colors.background } } }>
        <HomeStack.Screen name="HomeScreen"
                          component={ HomeScreen }
            /*options={ {
              headerRight: () => (
                  <CircleButton size={ 40 }
                                onPress={ () => {
                                  navigation.navigate('NewTraining')
                                } }>
                    <Text>P</Text>
                  </CircleButton>
              )
            } }*/
        />
        <HomeStack.Screen name="HomeNext"
                          component={ HomeNext }/>
        <HomeStack.Screen name="NewTraining"
                          component={ TrainingDetails }
                          initialParams={ { id: 0 } }/>
      </HomeStack.Navigator>
  )
}
