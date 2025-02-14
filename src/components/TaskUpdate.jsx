function TaskUpdate(state, action) {
  switch (action.type) {
    case "input":
        console.log("state.input" + JSON.stringify(state));
      return { ...state, initialInput: action.payload };
    case "add":
      console.log("add");
      console.log("state.initialInput" + JSON.stringify(state));
      return {
        ...state,
        tasks: [...state.tasks, { text: state.initialInput, isChecked: false,isEditClicked:true }],
        initialInput: "",
      };
    case "edit":
      console.log("edit");

      return {
        ...state,
        tasks: state.tasks.map((editTask,index) => {
            if(index ===action.payload){
                return{...editTask,isEditClicked:!editTask.isEditClicked}
            }
            else
            { return editTask}
        })

      }
    case "delete":
      console.log("delete");
      return state;
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
            if(index === action.payload){
                return{...task,isChecked: !task.isChecked};
            }
            else {
                return task;
            }
        }
                 
        ),
      };
    default:
      return state;
  }
}

export default TaskUpdate;
