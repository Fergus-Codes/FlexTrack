import React from "react";
import { useState } from "react";

const Workouts = ({ workoutArray, setWorkout }) => {
  const [value, setValue] = useState(0);
  const makeButtonFunction = (i) => {
    return () => {
      console.log(i);
      workoutArray.splice(i, 1);
      console.log(workoutArray);
      setWorkout(workoutArray);
      setValue((value) => value + 1);
    };
  };

  return (
    <div className="card-inner">
      <h2>Your workout</h2>
      {workoutArray.map((workout, i) => (
        <div>
          <p>
            {workout}
            <button onClick={makeButtonFunction(i)} className="btn">
              ❌
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
