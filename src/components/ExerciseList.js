import React, { useState } from 'react'
import { useEffect } from 'react'


export default function ExerciseList() {

    const [exerciseList, setExerciseList] = useState();
    const [selectedExercise, setSelectedExercise] = useState();
    useEffect(() => {
        fetch('https://localhost:7190/Exercise')
            .then((response) => response.json())
            .then((data) => {
                setExerciseList(data)
            });
    }, [])

    return (
        <div>
            <div>Select an Exercise:</div>
            <select onChange={(e) => { setSelectedExercise(e.target.value) }}>
                {exerciseList
                    ? exerciseList.map((exercise) => {
                        return (
                            <option key={exercise.id} value={exercise.name}>
                                {exercise.name}
                            </option>
                        )
                    })
                    : null}
            </select>
        </div>
    )
}
