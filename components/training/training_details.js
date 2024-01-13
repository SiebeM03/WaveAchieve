import TodoScreen from '../todo_screen'
import { useRecoilState } from 'recoil'
import { trainingState, trainingUpdateModeState } from '../../store'
import { useEffect, useState } from 'react'
import { Button, View, Text } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_TRAINING } from '../../gql/queries'
import Error from '../_reusable/messages/error'
import Fetching from '../_reusable/messages/fetching'

export default function TrainingDetails({ route, navigation }) {
  const { id } = route.params
  const [updateMode, setUpdateMode] = useRecoilState(trainingUpdateModeState)
  const { data, loading, error } = useQuery(GET_TRAINING, { variables: { id }, skip: id === 0 })
  const [trainingState, setTrainingState] = useState({ id: 0, date: '', duration: '', exercises: [], stats: [] })

  useEffect(() => {
    setUpdateMode(id === 0)
  }, [id])
  useEffect(() => {
    if (data) {
      setTrainingState(data.training)
    }
  }, [data])

  useEffect(() => {
    // TODO make date formatter
    let title = `${ updateMode ? 'Updating' : 'Details' } ${ (new Date(trainingState.date)) }`
    if (id === 0) title = 'New Training test'
    navigation.setOptions({
      title: title,
    });
  }, [trainingState, navigation, updateMode]);

  if (loading) return <Fetching/>
  if (error) return <Error error={ error }/>

  if (updateMode) {
    return (
        <TodoScreen>Training input form</TodoScreen>
    )
  } else {
    return (
        <View className="flex-1">
          <TodoScreen>Training details</TodoScreen>
          <Text>{ trainingState.date }</Text>
          <Button title={ "Edit training" } onPress={ () => setUpdateMode(true) }/>
        </View>
    )
  }
}