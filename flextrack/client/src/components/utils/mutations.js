import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addWorkout($exercise: [Exercises]!) {
    addWorkout(exercise: $exercise) {
      createdAt
      workoutId
      workout_name
      sets
      reps1
      weight1
      reps2
      weight2
      reps3
      weight3
      reps4
      weight4
      reps5
      weight5
    }
  }
`;
