import { React, useState } from "react";

const Button = ({ addExercise }) => {
  return (
    <button onClick={addExercise} className="btn">
      ✔️
    </button>
  );
};

export default Button;
