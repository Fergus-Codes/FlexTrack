import React from "react";

const WorkoutCard = ({ id, name, date, exercises, onDelete }) => {
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
      <button className="delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default WorkoutCard;
