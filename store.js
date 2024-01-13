import { atom } from 'recoil'

export const trainingUpdateModeState = atom({
  key: 'trainingUpdateModeState',
  default: false
})

export const trainingState = atom({
  key: 'trainingState',
  default: { id: 0, date: '', duration: '', exercises: [], stats: [] }
})