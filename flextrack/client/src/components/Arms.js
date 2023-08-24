import React from "react";
import Button from "./Button";

const Arms = ({ addExercise }) => {
  return (
    <div className="card-inner">
      <h2>Arms </h2>
      <p>
        Bicep Curls
        <Button addExercise={addExercise} />
      </p>
      <p>
        Tricep Dips
        <Button addExercise={addExercise} />
      </p>
      <p>
        Tricep Extensions
        <Button addExercise={addExercise} />
      </p>
      <p>
        Hammer Curls
        <Button addExercise={addExercise} />
      </p>
      <p>
        Skull Crushers
        <Button addExercise={addExercise} />
      </p>
    </div>
  );
};

export default Arms;
