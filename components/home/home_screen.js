import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native'


function GetDateElement() {
  const elements = []

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
                          className="rounded-full bg-gray-300 h-8 w-8 text-center leading-7.5">{ loopDate }</Text>
        } else {
          element = <Text key={ loopDate }
                          className="rounded-full bg-primary text-main h-8 w-8 text-center leading-7.5">{ loopDate }</Text>
        }
      } else if (loopDate === currentDate) {
        element = <Text key={ loopDate }
                        className="rounded-full border-4 border-accent h-8 w-8 text-center leading-7.5">{ loopDate }</Text>
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
      <View className="my-4">
        {/* Calendar */ }
        <View className="w-10/12 mx-auto">
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


        {/*<View style={ styles.buttonContainer }>
          <TouchableOpacity onPress={ () => navigation.navigate('TrainingDetails') }
                            style={ styles.buttonContainer }>
            <View style={ styles.button }>
              <Text style={ styles.buttonText }>Create Training</Text>
            </View>
          </TouchableOpacity>
        </View>*/ }
      </View>
  )
}