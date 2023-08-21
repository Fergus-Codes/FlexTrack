import React from "react";
import Button from "./Button";

const Back = ({ addExercise }) => {
  return (
    <div className="card-inner">
      <h2>Cardio</h2>
      <p>
        Treadmill
        <Button addExercise={addExercise} />
      </p>
      <p>
        Elliptical
        <Button addExercise={addExercise} />
      </p>
      <p>
        Stairmaster
        <Button addExercise={addExercise} />
      </p>
      <p>
        Rowing Machine
        <Button addExercise={addExercise} />
      </p>
      <p>
        Stationary Bike
        <Button addExercise={addExercise} />
      </p>
    </div>
  );
};

export default Back;
