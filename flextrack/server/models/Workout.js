const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const exerciseSchema = new Schema({
  workout_name: {
    type: String,
    required: true,
  },
  reps1: {
    type: Number,
  },
  weight1: {
    type: Number,
  },
  reps2: {
    type: Number,
  },
  weight2: {
    type: Number,
  },
  reps3: {
    type: Number,
  },
  weight3: {
    type: Number,
  },
  reps4: {
    type: Number,
  },
  weight4: {
    type: Number,
  },
  reps5: {
    type: Number,
  },
  weight5: {
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
