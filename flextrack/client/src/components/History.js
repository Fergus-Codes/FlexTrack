import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="card-inner-dashboard">
      <Link className="link" to="/pastworkouts">
        View workout history
      </Link>
    </div>
  );
};

export default History;
