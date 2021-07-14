import React, { useState } from 'react'

const Forms = props => {

    const {tasks, setTasks} = props

    const [formState,setFormState] = useState({
            task:"PlaceHolder Task",
            completed: false,
            idx: "",
            line: ""
        });


    const handleChange = event => {
        setFormState({
                ...formState,
                [event.target.name]:event.target.value
            });
        console.log(formState);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setTasks([...tasks,formState])
        console.log(tasks)
    };



    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label>New Task</label>
                <input onChange={ handleChange } type="text" name="task"/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default Forms