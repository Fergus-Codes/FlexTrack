import React, { useState } from "react";
import { useWorkoutContext } from "../WorkoutContext";

const WorkoutBuilder = () => {
  const { saveWorkout } = useWorkoutContext();
  const [numSets, setNumSets] = useState(1);
  const [reps, setReps] = useState([]);
  const [weights, setWeights] = useState([]);

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
    </div>
  );
};

export default WorkoutBuilder;
