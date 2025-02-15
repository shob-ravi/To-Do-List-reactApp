import { useReducer, useState } from "react";
import TaskUpdate from "./components/TaskUpdate";
import CheckBoxFn from "./components/CheckBoxFn";
import "./App.css";

function App() {
  const initialState = { initialInput: "", tasks: [] };
  const [state, dispatch] = useReducer(TaskUpdate, initialState);

  function handleChange(e) {
    dispatch({ type: "input", payload: e.target.value });
  }

  function handleCheckbox(index) {
    dispatch({ type: "toggle-task", payload: index });
  }

  function handleEditTask(index, e) {
    dispatch({
      type: "edit-task",
      payload: { value: e.target.value, index: index },
    });
  }
  return (
    <>
      <h1>To-Do-List</h1>
      <input type="text" value={state.initialInput} onChange={handleChange} />

      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        Add Task
      </button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              name="txbTask"
              value={task.text}
              disabled={task.isEditClicked}
              onChange={(e) => handleEditTask(index, e)}
            />
            <button onClick={() => dispatch({ type: "edit", payload: index })}>
              {task.buttonText}
            </button>
            <button
              onClick={() => dispatch({ type: "delete", payload: index })}
              disabled={!task.isChecked}
            >
              Delete
            </button>
            <input
              type="checkbox"
              name={index}
              checked={task.isChecked}
              onChange={() => handleCheckbox(index)}
            ></input>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
