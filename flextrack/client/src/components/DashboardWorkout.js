import React from "react";
import { Link } from "react-router-dom";

const DashboardWorkout = () => {
  return (
    <div className="card-inner-dashboard">
      <Link className="link" to="/builder">
        Create a workout
      </Link>
    </div>
  );
};

export default DashboardWorkout;
