import { gql } from "@apollo/client";


export const GET_TRAINING_BANNER = gql`
query GetTrainings {
  trainings (order_by: {date:desc}) {
    id
    date
    duration
    distance: exercises_aggregate {
      aggregate {
            sum {
              distance
            }
          }
    }
    stats {
      time_100
    }
  }
}
`
export const GET_TRAINING = gql`
query GetTraining($id: Int!) {
  training: trainings_by_pk(id: $id) {
    id
    date
    duration
    exercises {
      id
      strokes {
        id
        name
      }
      exercise_addons {
        add_ons_id
      }
      distance
    }
  }
}
`
/*query GetTraining($id: Int!) {
  training: trainings_by_pk(id: $id) {
    id
    date
    duration
    exercises {
      id
      strokes {
        id
        name
      }
      distance
      add_ons: exercise_addons {
        add_on {
          id
          name
        }
      }
    }
    stats {
      id
      kcal
      min_heartrate
      max_heartrate
      avg_heartrate
      time_100
    }
  }
}*/