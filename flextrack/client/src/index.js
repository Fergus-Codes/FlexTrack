import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WorkoutProvider } from "./WorkoutContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
