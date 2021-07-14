import React, { useState } from 'react'
import './App.css';

import Forms from './Components/Forms'
import Todos from './Components/Todos'


function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <Forms tasks={tasks} setTasks={setTasks} />
      <h3>Tasks</h3>
      <Todos tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
