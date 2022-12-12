import CreatableSelect from 'react-select/creatable';
import React, { useState } from 'react'
import { useEffect } from 'react'


export default function ExerciseSelection() {

    const [exerciseList, setExerciseList] = useState();
    const [selectedExercise, setSelectedExercise] = useState();
    useEffect(() => {
        fetch('https://localhost:7190/Exercise')
            .then((response) => response.json())
            .then((data) => {

                var exerciseNames = [];
                data.forEach(element => {
                    exerciseNames.push({ label: element.name, value: element.name })
                });
                setExerciseList(exerciseNames)
            });
    }, [])

    return (
        <div>
            <div>Select an Exercise:</div>
            {exerciseList ?
                <CreatableSelect isClearable options={exerciseList} onChange={(e) => { setSelectedExercise(e.value)}}/>
                : null
            }
            {/* <select onChange={(e) => { setSelectedExercise(e.target.value) }}>
                {exerciseList
                    ? exerciseList.map((exercise) => {
                        return (
                            <option key={exercise.id} value={exercise.name}>
                                {exercise.name}
                            </option>
                        )
                    })
                    : null}
            </select> */}
        </div>
    )
}