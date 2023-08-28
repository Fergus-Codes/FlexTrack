import React from "react";
import { GET_PREVIOUS_WORKOUTS } from "./graphql/queries";

import { useWorkoutContext } from "./WorkoutContext";

const PastWorkouts = () => {
  const { workouts } = useWorkoutContext();

  return (
    // <div>
    //   <h1>Past Workouts</h1>
    //   {workouts.map((workout, index) => (
    //     <div key={index}>
    //       <p>Date and Time: {workout.date}</p>
    //       <p>sets: {workout.sets}</p>
    //       <p>Reps: {workout.reps.join(", ")}</p>
    //       <p>Weights: {workout.weights.join(", ")}</p>
    //     </div>
    //   ))}
    // </div>

    <div>
      <div className="card-inner">
        <h1>12/06/2022</h1>
        <h2>Bench Press</h2>
        <p className="totalSets">Sets: 3</p>
        <p>Reps: 10</p>
        <p>Weight: 135</p>
        <p>Reps: 10</p>
        <p>Weight: 145</p>
        <p>Reps: 10</p>
        <p>Weight: 155</p>

        <h2>Chest Fly</h2>
        <p className="totalSets">Sets: 3</p>
        <p>Reps: 10</p>
        <p>Weight: 35</p>
        <p>Reps: 10</p>
        <p>Weight: 45</p>
        <p>Reps: 10</p>
        <p>Weight: 55</p>

        <h2>Push-Ups</h2>
        <p className="totalSets">Sets: 3</p>
        <p>Reps: 10</p>
        <p>Weight: body-weight</p>
        <p>Reps: 10</p>
        <p>Weight: body-weight</p>
        <p>Reps: 10</p>
        <p>Weight: body-weight</p>

        <h2>Incline Press</h2>
        <p className="totalSets">Sets: 3</p>
        <p>Reps: 10</p>
        <p>Weight: 45</p>
        <p>Reps: 10</p>
        <p>Weight: 50</p>
        <p>Reps: 10</p>
        <p>Weight: 50</p>

        <h2>Decline Press</h2>
        <p className="totalSets">Sets: 3</p>
        <p>Reps: 10</p>
        <p>Weight: 100</p>
        <p>Reps: 10</p>
        <p>Weight: 115</p>
        <p>Reps: 10</p>
        <p>Weight: 125</p>
      </div>
    </div>
  );
};

export default PastWorkouts;
