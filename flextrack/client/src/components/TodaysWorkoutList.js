import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./utils/auth";
import WorkoutBuilder from "./WorkoutBuilder";

import { ADD_WORKOUT } from "../components/utils/mutations";
import { useMutation } from "@apollo/client";

const TodaysWorkoutList = () => {
  var storedworkouts = JSON.parse(localStorage.getItem("workouts"));
  const [exercises, setExercises] = useState(storedworkouts);

  const [workout, { error }] = useMutation(ADD_WORKOUT);

  const storeWorkout = async (e) => {
    const inputExercises = [];
    const currentDate = new Date();

    for (let i = 0; i < storedworkouts.length; i++) {
      let tempInput = {
        workout_name: "n/a",
        muscles_worked: "n/a",
        description: "n/a",
        sets: 0,
        reps: 0,
        weight: 0,
      };

      inputExercises.push(tempInput);
    }

    e.preventDefault();

    try {
      await workout({
        exercise: inputExercises,
        date: currentDate.toISOString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="card-inner-today">
        {exercises.map((exercise, i) => (
          <>
            <div className="sleeve">
              <h2 className="your-workout-title">{exercise}</h2>{" "}
              <WorkoutBuilder
                numSets={exercise.numberOfSets}
                exerciseIndex={i}
                exercises={exercises}
                setExercises={setExercises}
              />
            </div>
          </>
        ))}
      </div>
      <div className="footer2">
        <Link to="/builder">Back</Link>
        <Link to="/dashboard" onClick={storeWorkout}>
          Save
        </Link>{" "}
        {/* Attach onClick event */}
      </div>
    </div>
  );
};

export default TodaysWorkoutList;
