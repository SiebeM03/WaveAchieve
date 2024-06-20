import { Text, View, TouchableOpacity } from 'react-native'
import Card from '../_reusable/card'
import ScreenRoot from '../_reusable/screen_root'

function GetDateElement() {
  const elements = []
  const trainingClasses = "border-4 border-secondary bg-background"
  const currentClasses = "bg-secondary text-black"
  const normalClasses = "bg-background"

  for (let i = 0; i < 14; i += 7) {
    const row = []
    const currentDate = 21

    for (let j = 0; j < 7; j++) {
      const loopDate = 11 + i + j
      let element

      if (loopDate < currentDate) {
        // Random int between 0 and 5, if 0, 1 -> training day
        if (Math.floor(Math.random() * 6) >= 2) {
          element = <Text key={ loopDate }
                          className={ `rounded-full h-8 w-8 text-center leading-7.5 ${ normalClasses }` }>{ loopDate }</Text>
        } else {
          element = <Text key={ loopDate }
                          className={ `rounded-full h-8 w-8 text-center leading-7.5 ${ trainingClasses }` }>{ loopDate }</Text>
        }
      } else if (loopDate === currentDate) {
        element = <Text key={ loopDate }
                        className={ `rounded-full h-8 w-8 text-center leading-7.5 ${ currentClasses }` }>{ loopDate }</Text>
      } else {
        element = <Text key={ loopDate } className="h-8 w-8"></Text>
      }

      row.push(element)
    }

    elements.push(
        <View key={ "week_" + i } className="flex flex-row justify-between my-0.5">
          { row }
        </View>
    )
  }
  return elements
}

export default function HomeScreen({ navigation }) {

  return (
      <ScreenRoot>
        {/* Calendar card */ }
        <Card>
          <View>
            <View className="flex flex-row justify-between">
              <Text className="w-8 text-center">S</Text>
              <Text className="w-8 text-center">M</Text>
              <Text className="w-8 text-center">T</Text>
              <Text className="w-8 text-center">W</Text>
              <Text className="w-8 text-center">T</Text>
              <Text className="w-8 text-center">F</Text>
              <Text className="w-8 text-center">S</Text>
            </View>
            <View className="space">
              <GetDateElement/>
            </View>
          </View>

          <TouchableOpacity className="bg-primary mt-4 p-2 rounded-md"
                            onPress={ () => navigation.navigate('NewTraining', { id: 0 }) }>
            <Text className="text-main text-center">Create Training</Text>
          </TouchableOpacity>
        </Card>

      </ScreenRoot>
  )
}