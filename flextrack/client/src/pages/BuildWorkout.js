import { React, useState } from "react";
import Chest from "../components/Chest";
import Back from "../components/Back";
import Legs from "../components/Legs";
import Arms from "../components/Arms";
import Core from "../components/Core";
import Cardio from "../components/Cardio";
import Workouts from "../components/Workouts";
import { Link } from "react-router-dom";

const BuildWorkout = (props) => {
  const [currentWorkouts, setWorkout] = useState([]);
  const addExercise = (e) => {
    console.log(e.target.previousSibling.textContent);
    let clickedExercise = e.target.previousSibling.textContent;

    setWorkout([...currentWorkouts, clickedExercise]);

    const tempWorkout = currentWorkouts;
    tempWorkout.push(clickedExercise);
    localStorage.setItem("workouts", JSON.stringify(tempWorkout));
  };

  return (
    <header>
      <h1 className="header">Create your workout</h1>
      <h2 className="createworkout-h2">⬇️ Select your exercises ⬇️</h2>

      <div className="cards-wrap">
        <div className="card">
          <Back addExercise={addExercise} />
        </div>
        <div className="card">
          <Legs addExercise={addExercise} />
        </div>
        <div className="card">
          <Arms addExercise={addExercise} />
        </div>
        <div className="card">
          <Core addExercise={addExercise} />
        </div>
        <div className="card">
          <Chest addExercise={addExercise} />
        </div>
        <div className="card">
          <Cardio addExercise={addExercise} />
        </div>
        <div className="currentworkout">
          <Workouts workoutArray={currentWorkouts} setWorkout={setWorkout} />
        </div>
      </div>

      <div className="footer2">
        <Link to="/dashboard">Back to dashboard</Link>
        <Link to="/todaysworkout">Start your workout</Link>
        <Link to="/login">Logout</Link>
      </div>
    </header>
  );
};

export default BuildWorkout;
