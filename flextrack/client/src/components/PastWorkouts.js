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
      <h1>Past Workouts</h1>
      
    </div>
  );
};

export default PastWorkouts;
