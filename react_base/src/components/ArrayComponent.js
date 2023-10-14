import { useState } from "react";
import useArray from "../hooks/07_UseArray_01";

export default function ArrayComponent() {
    const {array: tasks, isEmpty, push, filter, update, remove, clear } = useArray([])
    
    const [newTask, setNewTask] = useState("")

    // "Add" button clicked
    //prevent Refresh, push a new task to tasks
    const handleSubmit = (e) => {
        console.log("Handling sublit");
        
        // console.log(newTask);
        e.preventDefault();
        push(newTask);
        
        setNewTask("");
        console.log(tasks);
    }

    const handleInputChange = (e) => setNewTask(e.target.value);

    return (
      <>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTask} onChange={handleInputChange} />
          <button>Add</button>
        </form>
        {tasks.length === 0 ? (
          <p>No tasks to display</p>
        ) : (
            <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => remove(index)}
                  checked={false}
                />
                {task}
              </li>
            ))}
          </ul>
        )}
      </>
    );
}

            // <>
            //   {tasks.map(function (data) {
            //     return <div>Applicant name: {data}</div>;
            //   })}
            // </>;

{/* {tasks.map((task, index) => {
                        <>
                        <p>{task}</p>
                        <li key={index}>
                            <input 
                                type="checkbox"
                                onClick={() => remove(index)}
                                checked={false}
                            />
                        </li>
                        </>
                    })} */}