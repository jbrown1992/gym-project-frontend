import React, { useState } from 'react'
import ExerciseSelection from "./components/ExerciseSelection";
import SetSelection from "./components/SetSelection";

export default function App() {
  const [exerciseName, setExerciseName] = useState();

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <ExerciseSelection onChange={(value) => setExerciseName(value)}/>
          <SetSelection/>
        </div>
      </div>
    </div>
  )
};