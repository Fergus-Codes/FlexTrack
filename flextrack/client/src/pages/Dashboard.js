import React from "react";
import MyProfile from "../components/MyProfile";
import DashboardWorkout from "../components/DashboardWorkout";
import History from "../components/History";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <header>
      <h1 className="header peak">🏋 Welcome to FlexTrack 💪</h1>
      <div className="cards-wrap">
        <div className="card">
          <DashboardWorkout />
        </div>

        <div className="card">
          <History />
        </div>
      </div>
      <div className="footer2">
        <h3 className="footer2">Your #1 Gym companion</h3>
        <Link to="/login">
          <h3>Logout</h3>
        </Link>
      </div>
    </header>
  );
};

export default Dashboard;
