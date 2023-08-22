import React from "react";
import PastWorkouts from "../components/PastWorkouts";
import { Link } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";

const savedWorkouts = [
  {
    name: "Upper Body Workout",
    date: "2023-08-20",
    exercises: [
      { name: "Bench Press", weight: 135, reps: 10 },
      { name: "Pull-Ups", weight: 135, reps: 10 },
      { name: "Shoulder Press", weight: 135, reps: 10 },
    ],
  },
  {
    name: "Leg Day",
    date: "2023-08-22",
    exercises: [
      { name: "Squats", weight: 135, reps: 10 },
      { name: "Deadlifts", weight: 135, reps: 10 },
      { name: "Leg Press", weight: 135, reps: 10 },
    ],
  },
  // Add more saved workouts here
];

const PastWorkoutsPage = () => {
  return (
    <div>
      <div className="page-container">
        <h1 className="page-header">Your workout history</h1>
        <h3>
          **** On this page i need to display the saved workouts that the user
          recorded on the 'build workout page' I also need to get the date
          automatically from the date the user saved the workout. I need to
          display the name of the workout, the date, and the exercises that were
          saved. ****
        </h3>
        <div className="cards-wrap">
          {savedWorkouts.map((workout, index) => (
            <WorkoutCard
              key={index}
              name={workout.name}
              date={workout.date}
              exercises={workout.exercises}
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
