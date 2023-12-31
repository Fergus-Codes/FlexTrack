import React, { useState } from "react";
import Workouts from "./components/Workouts";
import BuildWorkout from "./pages/BuildWorkout";
import Dashboard from "./pages/Dashboard";
import TodaysWorkout from "./pages/TodaysWorkout";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PastWorkoutsPage from "./pages/PastWorkoutsPage";

import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/builder" element={<BuildWorkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todaysworkout" element={<TodaysWorkout />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pastworkouts" element={<PastWorkoutsPage />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
