const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const exerciseSchema = new Schema({
  workout_name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  weight: {
    type: Number,
  },
});

const workoutSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  exercise: [exerciseSchema],
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
