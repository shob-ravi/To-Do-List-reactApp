import { useReducer } from "react";
import TaskUpdate from "./components/TaskUpdate";
import CheckBoxFn from "./components/CheckBoxFn";
import "./App.css";

function App() {  

  const initialState = { initialInput: "", tasks: []};
  const [state, dispatch] = useReducer(TaskUpdate, initialState);
  // const [state2,dispatch2] = useReducer(EditTask,"false");

  function handleChange(e) {
    dispatch({ type: "input", payload: e.target.value });
  }

  function handleCheckbox(index) {
    console.log("Index:"+index);
    
    //state.tasks[index].isChecked = !state.tasks[index].isChecked;
    
    // console.log('state.tasks[e.target.name].isChecked'+state.isChecked);
    dispatch({type: "toggle-task", payload:index});
    //state.isChecked
  }

  function handleEditTask(e){
    console.log('e.target.value:'+e.target.value)
    dispatch({type:"edit-task"})
  }
  return (
    <>
      <h1>To-Do-List</h1>
      <input type="text" value={state.initialInput} onChange={handleChange} />
      
      <button
        onClick={() => {
          dispatch({ type: "add"});
        }}
      >
        Add Task
      </button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
                    <input type="text" name = "txbTask" value={task.text} disabled={task.isEditClicked} onChange={handleEditTask} />
                    <button onClick={() => dispatch({type: "edit",payload:index})}>Edit</button>
                    <button onClick={() => dispatch({type: "delete"})} disabled={!task.isChecked}>Delete</button>
                    <input type = "checkbox" name ={index}  onChange={() => handleCheckbox(index)}></input>
          </li>

        ))}
              
      </ul>
    </>
  );
}
export default App;
