import React from "react";
import MyProfile from "../components/MyProfile";
import DashboardWorkout from "../components/DashboardWorkout";
import History from "../components/History";

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
      <h3 className="footer">Your #1 Gym companion</h3>
    </header>
  );
};

export default Dashboard;
