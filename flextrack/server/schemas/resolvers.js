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
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "A user with this email address does not exist!"
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
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
      { workoutId, workout_name, sets, reps, weight },
      context
    ) => {
      const updatedWorkout = Workout.findByIdAndUpdate(
        workoutId,
        {
          $addToSet: {
            excercise: {
              workout_name,
              sets,
              reps,
              weight,
            },
          },
        },
        { new: true }
      );
      return updatedWorkout;
    },
  },
};

module.exports = resolvers;
