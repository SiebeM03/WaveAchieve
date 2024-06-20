import TrainingList from './training_list'
import TrainingDetails from './training_details'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../../tailwind.config'
import { handleStackReset } from '../../utils'

const TrainingStack = createNativeStackNavigator()

export default function TrainingStackElement({ route, navigation }) {
  handleStackReset(navigation, 'TrainingList')

  return (
      <TrainingStack.Navigator screenOptions={ {
        contentStyle: {
          backgroundColor: colors.background
        }
      } }>
        <TrainingStack.Screen name="TrainingList"
                              component={ TrainingList }
                              options={ { title: "Training History" } }/>
        <TrainingStack.Screen name="TrainingDetails"
                              component={ TrainingDetails }/>
      </TrainingStack.Navigator>
  )
}