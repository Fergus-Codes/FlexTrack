import React from "react";

const WorkoutCard = ({ name, date, exercises, weight, reps }) => {
  return (
    <div className="workout-card">
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            Exercise: {exercise.name} | Weight: {exercise.weight} | Reps:{" "}
            {exercise.reps}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutCard;
