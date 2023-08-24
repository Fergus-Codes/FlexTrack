import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";

const PastWorkoutsPage = () => {
  const [savedWorkouts, setSavedWorkouts] = useState([
    {
      id: 1,
      name: "Upper Body Workout",
      date: "2023-08-20",
      exercises: [
        { name: "Bench Press", weight: 135, reps: 10 },
        { name: "Pull-Ups", weight: 135, reps: 10 },
        { name: "Shoulder Press", weight: 135, reps: 10 },
      ],
    },
    {
      id: 2,
      name: "Leg Day",
      date: "2023-08-22",
      exercises: [
        { name: "Squats", weight: 135, reps: 10 },
        { name: "Deadlifts", weight: 135, reps: 10 },
        { name: "Leg Press", weight: 135, reps: 10 },
      ],
    },
  ]);

  const handleDelete = (id) => {
    const updatedWorkouts = savedWorkouts.filter(
      (workout) => workout.id !== id
    );
    setSavedWorkouts(updatedWorkouts);
  };

  return (
    <div>
      <div className="page-container">
        <h1 className="page-header">Your workout history</h1>
        <h3>{/* Your text here */}</h3>
        <div className="cards-wrap">
          {savedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              id={workout.id}
              name={workout.name}
              date={workout.date}
              exercises={workout.exercises}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <div className="footer2">
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default PastWorkoutsPage;
