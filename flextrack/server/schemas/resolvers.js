const { AuthenticationError } = require("apollo-server-express");
const { User, Workout } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("workouts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("workouts");
    },
    workouts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Workout.find(params).sort({ createdAt: -1 });
    },
    workout: async (parent, { workoutId }) => {
      return Workout.findOne({ _id: workoutId });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      console.log(email, password);
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect username or password");
      }

      const token = signToken(user);

      return { token, user };
    },

    addWorkout: async (parent, args, context) => {
      try {
        const newWorkout = await Workout.create({});
        return newWorkout;
      } catch (error) {
        console.log(error);
      }
    },

    removeWorkout: async (parent, { workoutId }) => {
      return Workout.findOneAndDelete({ _id: workoutId });
    },

    // UPDATE WORKOUT NOT WORKING

    updateWorkout: async (
      parent,
      {
        workoutId,
        workout_name,
        sets,
        reps1,
        weight1,
        reps2,
        weight2,
        reps3,
        weight3,
        reps4,
        weight4,
        reps5,
        weight5,
      },
      context
    ) => {
      const createdWorkout = Workout.create(
        workoutId,
        {
          $addToSet: {
            excercise: {
              workout_name,
              sets,
              reps1,
              weight1,
              reps2,
              weight2,
              reps3,
              weight3,
              reps4,
              weight4,
              reps5,
              weight5,
            },
          },
        },
        { new: true }
      );
      return createdWorkout;
    },
  },
};

module.exports = resolvers;
