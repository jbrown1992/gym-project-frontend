import React from "react";
import ExerciseList from "./components/ExerciseList";
import ExerciseSelection from "./components/ExerciseSelection";

export default function App() {
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <ExerciseSelection/>
        </div>
      </div>
    </div>
  )
};