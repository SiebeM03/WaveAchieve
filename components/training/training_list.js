import TodoScreen from '../todo_screen'
import { Button, FlatList, Text, View } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_TRAINING, GET_TRAINING_BANNER } from '../../gql/queries'
import Fetching from '../_reusable/messages/fetching'
import Error from '../_reusable/messages/error'
import { trainingState } from '../../store'
import TrainingListItem from './training_list_item'
import { useEffect } from 'react'
import ScreenRoot from '../_reusable/screen_root'

export default function TrainingList({ navigation }) {
  const { data, loading, error } = useQuery(GET_TRAINING_BANNER)

  function handleDetails(training) {
    navigation.navigate('TrainingDetails', { id: training.id })
  }

  if (loading) return <Fetching/>
  if (error) return <Error error={ error }/>

  return (
      <ScreenRoot>
        <FlatList data={ data.trainings }
                  renderItem={ ({ item }) => <TrainingListItem training={ item } onPress={ handleDetails }/> }
                  keyExtractor={ (item, index) => index }/>
      </ScreenRoot>
  )
}