import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TrainingDetails from './training_details'
import TrainingList from './training_list'

const Stack = createNativeStackNavigator()
export default function TrainingStack({ navigation }) {

  return (
      <Stack.Navigator>
        <Stack.Screen name="TrainingList"
                      component={ TrainingList }/>
        <Stack.Screen name="TrainingDetails"
                      component={ TrainingDetails }/>
      </Stack.Navigator>
  )
}