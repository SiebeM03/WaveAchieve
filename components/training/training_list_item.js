import { Pressable, Text, View } from 'react-native'
import { formatInterval } from '../../utils'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../tailwind.config'

export default function TrainingListItem({ training, onPress }) {
  const date = new Date(training.date)

  const distance = training.distance.aggregate.sum.distance
  const time100 = formatInterval(training.stats[0].time_100)
  const duration = formatInterval(training.duration)
  return (
      <Pressable className="flex-1 flex-row bg-primary px-4 py-2 mb-2 rounded-lg justify-between items-center"
                 onPress={ () => onPress(training) }>
        <View>
          {/*TODO make date formatter*/ }
          <Text className="text-main text-lg font-bold">{ date ? `${ training.date }` : '/' }</Text>
          <Text className="text-main">{ distance ? `${ distance }m` : '/' }</Text>
        </View>
        <View>
          <Text className="text-main">{ duration ? `${ duration }` : '/' }</Text>
          <Text className="text-main">{ time100 ? `${ time100 }/100m` : '/' }</Text>
        </View>
        <View>
          <MaterialIcons name="navigate-next" size={ 24 } color={ colors.main }/>
        </View>
      </Pressable>
  );
};
