import React, { useState } from 'react'

const Todos = props => {
    const {tasks,setTasks} = props
    const [taskDone,setTaskDone] = useState({
        task:"",
        completed: false,
        idx: "",
        line: ""
    });
    const [boolList, setBoolList] = useState([])
    const removerow = (idx) => {

        const copyTasks = tasks.filter( (task,i) => i != idx)
        setTasks(copyTasks)
    }
    
    const handleChange = (event,i) => {
        tasks[i].completed = !tasks[i].completed // alternates boolean. !variable returns false (i think)
        if (tasks[i].completed) {
            tasks[i].line = "line-through"
        } else {
            tasks[i].line = ""
        }
        setTasks([...tasks])
    }


    return(
        <div style={{width:"40%",margin:"auto"}}>
            {tasks.map( (dict,idx) =>
                <div style={{display:"flex",justifyContent:"space-Between"}} key={idx}>
                    <div style={{textDecoration:`${dict.line}`}}>{dict.task}</div>
                    <div>
                        <input type="checkbox" checked={ dict.completed } onChange={ (event) => handleChange(event,idx)} name="comp"/>
                        <button onClick={ () => removerow(idx)} key={idx}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Todos