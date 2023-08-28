import React, { useState } from "react";
import { useWorkoutContext } from "../WorkoutContext";
import { ADD_WORKOUT } from "./utils/mutations";
import { useMutation } from "@apollo/client";

const WorkoutBuilder = () => {
  const { saveWorkout } = useWorkoutContext();
  const [numSets, setNumSets] = useState(1);
  const [reps, setReps] = useState([]);
  const [weights, setWeights] = useState([]);
  const [workout, { error }] = useMutation(ADD_WORKOUT);

  const handleNumSetsChange = (event) => {
    const newNumSets = parseInt(event.target.value);
    setNumSets(newNumSets);
    setReps(Array(newNumSets).fill(0));
    setWeights(Array(newNumSets).fill(0));
  };

  const handleRepsChange = (index, value) => {
    const newReps = [...reps];
    newReps[index] = value;
    setReps(newReps);
  };

  const handleWeightChange = (index, value) => {
    const newWeights = [...weights];
    newWeights[index] = value;
    setWeights(newWeights);
  };

  const handleSaveClick = async () => {
    if (numSets > 1) {
      reps.push(document.getElementById("reps1").value || 0);
      console.log(reps);
      weights.push(document.getElementById("weight1").value || 0);
      console.log(weights);

      reps.push(document.getElementById("reps2").value || 0);
      console.log(reps);
      weights.push(document.getElementById("weight2").value || 0);
      console.log(weights);

      reps.push(document.getElementById("reps3").value || 0);
      console.log(reps);
      weights.push(document.getElementById("weight3").value || 0);
      console.log(weights);

      reps.push(document.getElementById("reps4").value || 0);
      console.log(reps);
      weights.push(document.getElementById("weight4").value || 0);
      console.log(weights);

      reps.push(document.getElementById("reps5").value || 0);
      console.log(reps);
      weights.push(document.getElementById("weight5").value || 0);
      console.log(weights);
    }

    workout({
      variables: {
        workout_name: "",
        sets: numSets,
        reps1: reps[0],
        weight1: weights[0],
        reps2: reps[1],
        weight2: weights[1],
        reps3: reps[2],
        weight3: weights[2],
        reps4: reps[3],
        weight4: weights[3],
        reps5: reps[4],
        weight5: weights[4],
      },
    });

    // const workoutData = {};
    // workoutData.sets = numSets;
    // workoutData.reps = reps;
    // workoutData.weights = weights;

    // try {
    //   const response = await fetch("/api/saveWorkout", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(workoutData),
    //   });

    //   if (response.ok) {
    //     const savedWorkout = await response.json();

    //     // Call a function to update the context with the new workout
    //     saveWorkout(savedWorkout);

    //     // Handle successful response, e.g., show a success message
    //   } else {
    //     // Handle error response
    //     const errorData = await response.json();
    //     console.error("Error:", errorData.message);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div>
      <label className="workout-builder-input-label" htmlFor="numSets">
        Number of Sets:
      </label>
      <select
        className="workout-builder-select"
        id="numSets"
        value={numSets}
        onChange={handleNumSetsChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <div>
        {Array.from({ length: numSets }).map((_, index) => (
          <div key={index}>
            <label
              className="workout-builder-input-label"
              htmlFor={`reps${index}`}
            >
              Reps:
            </label>
            <input
              className="workout-builder-input"
              type="number"
              id={`reps${index}`}
              value={reps[index]}
              onChange={(e) =>
                handleRepsChange(index, parseInt(e.target.value))
              }
            />

            <label
              className="workout-builder-input-label"
              htmlFor={`weight${index}`}
            >
              Weight (kg):
            </label>
            <input
              className="workout-builder-input"
              type="number"
              id={`weight${index}`}
              value={weights[index]}
              onChange={(e) =>
                handleWeightChange(index, parseFloat(e.target.value))
              }
            />
          </div>
        ))}
      </div>

      <div>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default WorkoutBuilder;
