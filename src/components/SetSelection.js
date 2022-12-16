import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SetSelection() {

    const [setCounter, setSetCounter] = useState([1]);
    const [rowCount, setRowCount] = useState(1)

    const handleAddSubmit = event => {
        event.preventDefault();
        setSetCounter(setCounter => [...setCounter, setCounter.length + 1])
        setRowCount(rowCount + 1);
    }

    const handleRemoveSubmit = event => {
        event.preventDefault();
        setCounter.splice(setCounter.length-1, 1)
        setSetCounter([...setCounter])
    }
    
    return (
        <div>
            <div>Select Reps and Weight:</div>
            <form>
                <label>
                    <div>
                        {setCounter.map((value) => (
                            <div>
                                {console.log('setCounter = ' + setCounter)}
                                {console.log('value = ' + value)}

                                <input type="text" name="reps" placeholder='Enter Reps' />
                                <input type="text" name="weight" placeholder='Enter Weight' />
                                {value == setCounter.length &&
                                    <button onClick={(e) => handleAddSubmit(e)}>Add</button>
                                }
                                {(value > 1 && value == setCounter.length) &&
                                    <button onClick={(e) => handleRemoveSubmit(e)}>Remove</button>
                                }
                            </div>
                        ))}
                    </div>
                </label>
            </form>
        </div>
    )
}
