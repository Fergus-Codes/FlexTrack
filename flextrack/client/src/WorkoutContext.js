import React, { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};

export const WorkoutProvider = ({ children }) => {
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const saveWorkout = (workout) => {
    setSavedWorkouts([...savedWorkouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ savedWorkouts, saveWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContext;
