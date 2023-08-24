import React from "react";
import Button from "./Button";

const Legs = ({ addExercise }) => {
  return (
    <div className="card-inner">
      <h2>Legs </h2>
      <p>
        Squats
        <Button addExercise={addExercise} />
      </p>
      <p>
        Lunges
        <Button addExercise={addExercise} />
      </p>
      <p>
        Deadlifts
        <Button addExercise={addExercise} />
      </p>
      <p>
        Leg Press
        <Button addExercise={addExercise} />
      </p>
      <p>
        Calf Raises
        <Button addExercise={addExercise} />
      </p>
    </div>
  );
};

export default Legs;
