const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]!
  }

  type Workout {
    _id: ID
    createdAt: String
    workout_name: String
    sets: Int
    reps1: Int
    weight1: Int
    reps2: Int
    weight2: Int
    reps3: Int
    weight3: Int
    reps4: Int
    weight4: Int
    reps5: Int
    weight5: Int
  }

  type Exercise {
    _id: ID
    workout_name: String
    muscles_worked: String
    equipments: String
    description: String
    sets: Int
    reps: Int
    weight: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    workouts(username: String): [Workout]
    workout(workoutId: ID!): Workout
    previousWorkouts: [Workout]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(
      workout_name: String!
      sets: Int!
      reps1: Int!
      weight1: Int!
      reps2: Int!
      weight2: Int!
      reps3: Int!
      weight3: Int!
      reps4: Int!
      weight4: Int!
      reps5: Int!
      weight5: Int!
    ): Workout
    removeWorkout(workoutId: ID!): Workout
    updateWorkout(
      workoutId: ID!
      workout_name: String!
      sets: Int
      reps: Int
      weight: Int
    ): Workout
  }
`;

module.exports = typeDefs;
