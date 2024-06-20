import { Pressable, Text, View } from 'react-native'
import { formatInterval } from '../../utils'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../tailwind.config'
import AddOnSvg from '../_reusable/add_on_svg'

export default function ExerciseListItem({ exercise }) {
  let addOns = exercise.exercise_addons

  function getSvgs() {
    return addOns.map(addOn => <AddOnSvg addOnId={ addOn.add_ons_id } scale={ 0.35 } key={ addOn.id }/>)
  }

  return (
      <View className="flex-1 flex-row items-center px-4">
        <Text className="w-12">{ exercise.distance }m</Text>
        <Text className="">{ exercise.strokes.name }</Text>
        <View className="ml-auto flex-row">
          { getSvgs() }
        </View>
      </View>
  );
};
