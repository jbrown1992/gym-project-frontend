import CreatableSelect from 'react-select/creatable';
import React, { useState } from 'react'
import { useEffect } from 'react'

const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
    createOption('One'),
    createOption('Two'),
    createOption('Three'),
];



export default function ExerciseSelection() {

    const [exerciseList, setExerciseList] = useState();
    const [selectedExercise, setSelectedExercise] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState();
    const [value, setValue] = useState();



    useEffect(() => {
        fetch('https://localhost:7190/Exercise')
            .then((response) => response.json())
            .then((data) => {
                var exerciseNames = [];
                data.forEach(element => {
                    exerciseNames.push({ label: element.name, value: element.name })
                });
                setOptions(exerciseNames)
            });
    }, [])

    const handleCreate = (inputValue) => {

        var data = { "name" : inputValue}
        
        fetch('https://localhost:7190/Exercise', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setIsLoading(true);
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setIsLoading(false);
            setOptions((prev) => [...prev, newOption]);
            setValue(newOption);
        }, 1000);
    };

    return (
        <div>
            <div>Select an Exercise:</div>
            <CreatableSelect
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={(newValue) => setValue(newValue)}
                onCreateOption={handleCreate}
                options={options}
                value={value}
            />
        </div>
    );
};

    // return (
    //     <div>
    //         <div>Select an Exercise:</div>
    //         {exerciseList ?
    //             <CreatableSelect isClearable options={exerciseList} onChange={(e) => { setSelectedExercise(e.value)}}/>
    //             : null
    //         }
    //         {/* <select onChange={(e) => { setSelectedExercise(e.target.value) }}>
    //             {exerciseList
    //                 ? exerciseList.map((exercise) => {
    //                     return (
    //                         <option key={exercise.id} value={exercise.name}>
    //                             {exercise.name}
    //                         </option>
    //                     )
    //                 })
    //                 : null}
    //         </select> */}
    //     </div>
    // )
